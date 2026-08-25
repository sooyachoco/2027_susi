import type { Admission, StudentProfile } from "@/lib/admission/types";
import { clamp, gradeScore, mockScore, type ConversionAdapter, type ConversionResult } from "./base";

/**
 * 2027 어디가에서 확인된 전형 구조를 반영하는 Adapter.
 * 주의: 대학 공식 환산식의 모든 세부 산식이 확보된 경우에만 '공식 산식 적용'으로 승격한다.
 */
const konkukRegional: ConversionAdapter = {
  supports: (a) => a.universityId === "konkuk" && a.name.includes("KU 지역균형"),
  convert: (s, a) => {
    const quantitative = gradeScore(s.gradeAverage);
    const qualitative = (s.studentRecordLink / 5) * 100;
    const score = quantitative * 0.7 + qualitative * 0.3;
    return { admissionId: a.id, academicYear: a.academicYear, score: Math.round(clamp(score)), label: "프로토타입 환산", notes: ["2027 KU 지역균형: 교과정량 70% + 교과정성 30%", "수능최저 없음", "교과정성은 교과학습발달상황 중심 평가"] };
  },
};

const genericHolistic: ConversionAdapter = {
  supports: (a) => a.type === "학종",
  convert: (s, a) => {
    const record = (s.studentRecordLink / 5) * 100;
    const grade = gradeScore(s.gradeAverage);
    const mock = mockScore(s.mockAverage);
    let score = record * 0.55 + grade * 0.3 + mock * 0.15;
    if (a.interview) score += s.studentRecordLink >= 4 ? 2 : -2;
    if (a.csatMinimum?.enabled) score += s.csatMinimumChance >= 4 ? 3 : -8;
    return { admissionId: a.id, academicYear: a.academicYear, score: Math.round(clamp(score, 45, 98)), label: "프로토타입 환산", notes: ["학종은 정량 합격점수가 아닌 전략 적합도", a.interview ? "면접 있음" : "면접 없음", a.csatMinimum?.enabled ? "수능최저 적용" : "수능최저 없음"] };
  },
};

const genericSubject: ConversionAdapter = {
  supports: (a) => a.type === "교과",
  convert: (s, a) => {
    const quantitative = gradeScore(s.gradeAverage);
    const qualitative = (s.studentRecordLink / 5) * 100;
    const score = quantitative * 0.7 + qualitative * 0.3;
    return { admissionId: a.id, academicYear: a.academicYear, score: Math.round(clamp(score, 45, 98)), label: "프로토타입 환산", notes: ["세부 대학별 교과 환산식 미확정", a.csatMinimum?.enabled ? "수능최저 적용" : "수능최저 없음"] };
  },
};

export const conversionAdapters: ConversionAdapter[] = [konkukRegional, genericHolistic, genericSubject];

export function convertAdmission(student: StudentProfile, admission: Admission): ConversionResult {
  const adapter = conversionAdapters.find((item) => item.supports(admission));
  if (!adapter) {
    return { admissionId: admission.id, academicYear: admission.academicYear, score: Math.round(gradeScore(student.gradeAverage)), label: "프로토타입 환산", notes: ["전형별 환산 Adapter 없음"] };
  }
  return adapter.convert(student, admission);
}

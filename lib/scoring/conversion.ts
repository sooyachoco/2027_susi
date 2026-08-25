import type { Admission, StudentProfile } from "@/lib/types";

export type ConversionResult = {
  score: number;
  basis: string;
  confidence: number;
};

/**
 * 대학 공식 산출식을 대체하는 계산기가 아니다.
 * 공식 대학별 환산식이 구조화된 경우에만 높은 신뢰도로 취급한다.
 */
export function convertStudentToAdmissionScore(student: StudentProfile, admission: Admission): ConversionResult {
  const grade = clamp(100 - ((student.gradeAverage ?? 9) - 1) * 10.5, 45, 98);
  const record = clamp(((student.studentRecordLink ?? 0) / 5) * 100, 40, 100);
  const csat = clamp(100 - ((student.mockAverage ?? 9) - 1) * 9, 45, 98);
  const sourceConfidence = admission.source?.confidence ?? 0.25;

  if (admission.type === "교과") {
    const weight = admission.studentRecordWeight ?? 0;
    const score = admission.studentRecordWeight != null
      ? grade * (1 - weight / 100) + record * (weight / 100)
      : grade;
    return {
      score: round(score),
      basis: admission.studentRecordWeight != null
        ? `교과 정량 ${100 - weight}% + 학생부 정성 ${weight}%의 전략 시뮬레이션`
        : "내신 평균등급 기반 전략 시뮬레이션",
      confidence: Math.min(0.8, sourceConfidence),
    };
  }

  if (admission.type === "학종") {
    let score = grade * 0.45 + record * 0.55;
    if (admission.interview) score = score * 0.7 + record * 0.3;
    return {
      score: round(score),
      basis: admission.interview
        ? "학생부 경쟁력 + 면접 변수를 반영한 전략 시뮬레이션"
        : "학생부 교과/전공연계 기반 전략 시뮬레이션",
      confidence: Math.min(0.75, sourceConfidence * 0.9),
    };
  }

  return {
    score: round(grade * 0.35 + record * 0.4 + csat * 0.25),
    basis: "교과·학생부·모의고사를 조합한 전략 시뮬레이션",
    confidence: Math.min(0.5, sourceConfidence * 0.6),
  };
}

export function csatFit(student: StudentProfile, admission: Admission): number {
  if (!admission.csatMinimum?.enabled) return 100;
  return round(clamp(((student.csatMinimumChance ?? 0) / 5) * 100, 0, 100));
}

function clamp(value: number, min: number, max: number) { return Math.max(min, Math.min(max, value)); }
function round(value: number) { return Math.round(value * 10) / 10; }

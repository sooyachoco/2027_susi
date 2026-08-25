import type { Admission, StudentProfile } from "@/lib/types";

export type ConversionResult = {
  score: number;
  basis: string;
  confidence: number;
};

/** v0.1 strategy simulation, not an official university calculator. */
export function convertStudentToAdmissionScore(student: StudentProfile, admission: Admission): ConversionResult {
  const grade = clamp(100 - ((student.gradeAverage ?? 9) - 1) * 10.5, 45, 98);
  const record = clamp(((student.studentRecordLink ?? 0) / 5) * 100, 40, 100);
  const csat = clamp(100 - ((student.mockAverage ?? 9) - 1) * 9, 45, 98);

  if (admission.type === "교과") {
    const weight = admission.studentRecordWeight ?? 0;
    const score = admission.studentRecordWeight != null ? grade * (1 - weight / 100) + record * (weight / 100) : grade;
    return {
      score: round(score),
      basis: admission.studentRecordWeight != null ? `교과 정량 ${100 - weight}% + 교과 정성 ${weight}%의 프로토타입 환산` : "내신 평균등급 기반 프로토타입 환산",
      confidence: admission.source ? 0.65 : 0.35,
    };
  }

  if (admission.type === "학종") {
    let score = grade * 0.45 + record * 0.55;
    if (admission.interview) score = score * 0.7 + record * 0.3;
    return {
      score: round(score),
      basis: admission.interview ? "학생부 경쟁력 + 면접 변수를 반영한 프로토타입 환산" : "학생부 교과/전공연계 기반 프로토타입 환산",
      confidence: admission.source ? 0.6 : 0.3,
    };
  }

  return { score: round(grade * 0.35 + record * 0.4 + csat * 0.25), basis: "교과·학생부·모의고사를 조합한 프로토타입 환산", confidence: 0.25 };
}

export function csatFit(student: StudentProfile, admission: Admission): number {
  if (!admission.csatMinimum?.enabled) return 100;
  return round(clamp(((student.csatMinimumChance ?? 0) / 5) * 100, 0, 100));
}

function clamp(value: number, min: number, max: number) { return Math.max(min, Math.min(max, value)); }
function round(value: number) { return Math.round(value * 10) / 10; }

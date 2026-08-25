import type { Admission, Recommendation, StudentProfile } from "@/lib/types";
import { convertStudentToAdmissionScore, csatFit } from "./conversion";

/** 2027 전형 속성을 반영하는 전략 적합도 엔진. 합격확률이 아니다. */
export function recommendSix(student: StudentProfile, admissions: Admission[], offset = 0): Recommendation[] {
  const scored = admissions.map((admission) => {
    const converted = convertStudentToAdmissionScore(student, admission);
    const minimumFit = csatFit(student, admission);
    let score = converted.score;

    if (admission.csatMinimum?.enabled) score = score * 0.85 + minimumFit * 0.15;
    if (admission.isMock === false) score += 2;
    score += strategicAdjustment(student, admission);

    return { admission, score: Math.round(clamp(score + offset)) };
  }).sort((a, b) => b.score - a.score);

  const tiers = ["상향", "상향", "적정", "적정", "적정", "안정"] as const;
  return scored.slice(0, 6).map((item, index) => ({
    tier: tiers[index],
    admissionId: item.admission.id,
    score: item.score,
    reason: buildReason(item.admission, item.score),
  }));
}

function strategicAdjustment(student: StudentProfile, admission: Admission) {
  let adjustment = 0;
  if (admission.type === "학종") adjustment += student.studentRecordLink >= 4 ? 4 : -2;
  if (admission.type === "교과") adjustment += student.gradeAverage <= 2.5 ? 4 : -3;
  if (admission.interview) adjustment += student.studentRecordLink >= 4 ? 2 : -2;
  if (admission.csatMinimum?.enabled) adjustment += student.csatMinimumChance >= 4 ? 2 : -5;
  return adjustment;
}

function buildReason(admission: Admission, score: number) {
  const parts = [admission.type === "학종" ? "학생부 중심" : "교과 중심"];
  if (admission.interview) parts.push("면접 변수 있음");
  if (admission.csatMinimum?.enabled) parts.push("수능최저 반영");
  if (admission.source?.type === "adiga" || admission.isMock === false) parts.push("2027 확인 데이터");
  return `${parts.join(" · ")} · 전략 적합도 ${score}`;
}

function clamp(value: number) { return Math.max(45, Math.min(98, value)); }

export function nextShuffleOffset(offset: number): number {
  if (offset === 0) return 3;
  if (offset === 3) return -2;
  return 0;
}

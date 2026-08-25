import type { Admission, Recommendation, StudentProfile } from "@/lib/types";

/** 데이터 기반 6장 전략 엔진 1차 버전. 점수는 합격확률이 아닌 전략 적합도다. */
export function recommendSixByData(student: StudentProfile, admissions: Admission[], offset = 0): Recommendation[] {
  const scored = admissions.map((admission) => {
    const gradeScore = clamp(100 - (student.gradeAverage - 1) * 10.5);
    const recordScore = (student.studentRecordLink / 5) * 100;
    const mockScore = clamp(100 - (student.mockAverage - 1) * 9);
    let score = gradeScore * 0.35 + recordScore * 0.35 + mockScore * 0.30;

    if (admission.type === "학종") score += student.studentRecordLink >= 4 ? 5 : -2;
    if (admission.type === "교과") score += student.gradeAverage <= 2.5 ? 5 : -3;
    if (admission.interview) score += student.studentRecordLink >= 4 ? 2 : -2;
    if (admission.csatMinimum?.enabled) score += student.csatMinimumChance >= 4 ? 4 : -7;
    if (admission.isMock === false) score += 2;

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

function buildReason(admission: Admission, score: number) {
  const parts: string[] = [];
  parts.push(admission.type === "학종" ? "학생부 경쟁력을 중심으로 평가하는 전형" : "교과 성적을 주요 기반으로 보는 전형");
  if (admission.interview) parts.push("면접 변수 있음");
  if (admission.csatMinimum?.enabled) parts.push("수능최저 확인 필요");
  if (admission.isMock === false) parts.push("2027 확인 데이터");
  return `${parts.join(" · ")} · 전략 적합도 ${score}`;
}

function clamp(value: number) { return Math.max(45, Math.min(98, value)); }

export function nextDataShuffleOffset(offset: number): number {
  if (offset === 0) return 3;
  if (offset === 3) return -2;
  return 0;
}

import type { Admission, Recommendation, StudentProfile } from "@/lib/types";
import { MOCK_RECOMMENDATION_SEEDS } from "@/lib/data/mock";

export function recommendSix(student: StudentProfile, admissions: Admission[], offset = 0): Recommendation[] {
  const byId = new Map(admissions.map((a) => [a.id, a]));
  const seeds = MOCK_RECOMMENDATION_SEEDS.map((seed) => ({ ...seed }));

  if (byId.has("a-kku-self-verified")) {
    seeds[1] = { admissionId: "a-kku-self-verified", tier: "상향", baseScore: 80, reason: "2027 KU 자기추천: 서류평가 후 면접이 있는 학종입니다. 학생부 전공연계가 강할수록 유리한 전략 카드입니다." };
  }
  if (byId.has("a-kku-region-verified")) {
    seeds[2] = { admissionId: "a-kku-region-verified", tier: "적정", baseScore: 85, reason: "2027 KU 지역균형: 학생부교과 중심 전형입니다. 내신 경쟁력을 바탕으로 적정 카드로 검토합니다." };
  }

  return seeds.filter((seed) => byId.has(seed.admissionId)).map((seed, i) => {
    const admission = byId.get(seed.admissionId)!;
    let score = seed.baseScore;
    if (admission.type === "학종") {
      score += Math.round((student.studentRecordLink - 3) * 2);
      if (admission.interview) score += 1;
    }
    if (admission.type === "교과") score += Math.round((3 - student.gradeAverage) * 3);
    if (admission.csatMinimum?.enabled) score += Math.round((student.csatMinimumChance - 3) * 1.5);
    score = Math.max(60, Math.min(96, score + offset + (i % 2 ? 1 : 0)));
    return { tier: seed.tier, admissionId: seed.admissionId, score, reason: seed.reason };
  });
}

export function nextShuffleOffset(offset: number): number {
  if (offset === 0) return 3;
  if (offset === 3) return -2;
  return 0;
}

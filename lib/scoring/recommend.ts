import type { Admission, Recommendation, StudentProfile } from "@/lib/types";
import { MOCK_RECOMMENDATION_SEEDS } from "@/lib/data/mock";

/**
 * 추천 6장 로직. 현재는 프로토타입 mock 시드(상향 2 / 적정 3 / 안정 1)를 기반으로 한다.
 * 실제 합격률/합격 예측을 만들지 않는다. score 는 데모용 상대 지표다.
 * 향후 규칙 기반 전략 엔진이 이 함수를 대체한다.
 *
 * @param offset 프로토타입의 "조합 다시 짜기" 동작을 재현하기 위한 값
 */
export function recommendSix(
  student: StudentProfile,
  admissions: Admission[],
  offset = 0,
): Recommendation[] {
  const byId = new Map(admissions.map((a) => [a.id, a]));

  return MOCK_RECOMMENDATION_SEEDS.filter((seed) => byId.has(seed.admissionId)).map(
    (seed, i) => {
      const score = Math.max(60, Math.min(96, seed.baseScore + offset + (i % 2 ? 1 : 0)));
      return {
        tier: seed.tier,
        admissionId: seed.admissionId,
        score,
        reason: seed.reason,
      };
    },
  );
}

/** 프로토타입 shuffle 과 동일한 offset 순환: 0 → 3 → -2 → 0 */
export function nextShuffleOffset(offset: number): number {
  if (offset === 0) return 3;
  if (offset === 3) return -2;
  return 0;
}

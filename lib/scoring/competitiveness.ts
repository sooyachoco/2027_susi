import type { Competitiveness, StudentProfile } from "@/lib/types";

/**
 * 프로토타입(susi6_v0_1.html)의 계산식을 그대로 유지한다.
 * 이 점수는 UX 프로토타입용 상대 지표이며, 실제 합격 예측 점수가 아니다.
 */

const MIN = 45;
const MAX = 98;

export function clamp(value: number, min = MIN, max = MAX): number {
  return Math.max(min, Math.min(max, value));
}

/** 내신 등급(1~9 등) → 교과 점수 */
export function gradeToScore(gradeAverage: number): number {
  return clamp(100 - (gradeAverage - 1) * 10.5);
}

/** 모의고사 등급 → 수능(모의) 점수 */
export function mockToScore(mockAverage: number): number {
  return clamp(100 - (mockAverage - 1) * 9);
}

/** 5단계 선택값(2~5) → 0~100 스케일 */
function levelToScore(level: number): number {
  return (level / 5) * 100;
}

export function calcCompetitiveness(student: StudentProfile): Competitiveness {
  const gradeScore = gradeToScore(student.gradeAverage);
  const mockScore = mockToScore(student.mockAverage);

  const studentRecordLinkScore = levelToScore(student.studentRecordLink);
  const csatMinimumChanceScore = levelToScore(student.csatMinimumChance);

  const subject = Math.round(gradeScore);
  const holistic = Math.round(gradeScore * 0.45 + studentRecordLinkScore * 0.55);
  const csatMinimum = Math.round(mockScore * 0.7 + csatMinimumChanceScore * 0.3);
  const total = Math.round(subject * 0.3 + holistic * 0.45 + csatMinimum * 0.25);

  return { subject, holistic, csatMinimum, total };
}

import type { Competitiveness, StudentProfile } from "@/lib/types";

/**
 * 포트폴리오/전략 코멘트 문구 로직. 프로토타입의 표현을 유지한다.
 * AI 서술 문구는 계산 결과를 "설명"할 뿐 숫자를 만들지 않으며, 합격을 보장하지 않는다.
 */

export function calcBalance(total: number): number {
  return Math.max(60, Math.min(94, total + 6));
}

export function aiSummaryText(c: Competitiveness, desiredMajor: string): string {
  if (c.holistic >= 85) {
    return `학생부가 강점이에요. ${desiredMajor || "희망 전공"} 학종에서 한 단계 높은 대학을 노려볼 수 있습니다.`;
  }
  return "교과와 학생부를 균형 있게 보는 전략이 좋아요.";
}

export function strategyCommentText(c: Competitiveness): string {
  if (c.holistic > c.subject) {
    return "학생부 경쟁력이 내신보다 높습니다. 학종에서 상향 카드를 확보하고 교과전형으로 안전장치를 두는 전략이 좋습니다.";
  }
  return "교과 경쟁력이 비교적 좋습니다. 교과 중심으로 적정·안정 카드를 확보하고 학종에서 상향을 노려보세요.";
}

export function balanceAlertText(): string {
  return "💡 안정 카드가 하나 있어 전체 리스크를 낮춰주고 있어요.";
}

export type StudentDerived = {
  competitiveness: Competitiveness;
  balance: number;
  aiSummary: string;
  strategyComment: string;
};

import type { RecommendationTier } from "@/lib/types";

const TIER_CLASS: Record<RecommendationTier, string> = {
  상향: "up",
  적정: "fit",
  안정: "safe",
};

type Props = {
  tier: RecommendationTier;
  universityName: string;
  departmentName: string;
  score: number;
  reason: string;
  onShowReason: () => void;
  onCompare: () => void;
};

export function UniversityCard({
  tier,
  universityName,
  departmentName,
  score,
  reason,
  onShowReason,
  onCompare,
}: Props) {
  return (
    <div className="panel uni">
      <span className={`tag ${TIER_CLASS[tier]}`}>{tier}</span>
      <h3>{universityName}</h3>
      <div className="major">{departmentName}</div>
      <div className="recommend">
        <div className="miniScore">{score}</div>
        <div className="reason">{reason}</div>
      </div>
      <div className="actions">
        <button onClick={onShowReason}>추천 이유 보기</button>
        <button onClick={onCompare}>비교</button>
      </div>
    </div>
  );
}

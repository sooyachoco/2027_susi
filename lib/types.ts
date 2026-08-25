export type {
  AdmissionType,
  StrategyTier,
  AdmissionRegion,
  SourceType,
  DataSource,
  University,
  Department,
  CsatMinimum,
  Admission,
  Recommendation,
  AdmissionQuery,
  AdmissionRepository,
} from "./admission/types";

export type Track = "자연계" | "인문계" | "예체능";

/** User-entered fields remain nullable until the student actually provides them. */
export type StudentProfile = {
  gradeAverage: number | null;
  track: Track | null;
  desiredMajor: string;
  mockAverage: number | null;
  studentRecordLink: number | null;
  csatMinimumChance: number | null;
};

export type Competitiveness = {
  subject: number;
  holistic: number;
  csatMinimum: number;
  total: number;
};

export type RecommendationTier = "상향" | "적정" | "안정";

export type Recommendation = import("./admission/types").Recommendation;

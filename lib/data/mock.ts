import type { StudentProfile } from "@/lib/types";
import { VERIFIED_ADMISSIONS, VERIFIED_DEPARTMENTS, VERIFIED_UNIVERSITIES } from "./verified2027";

/**
 * Backward-compatible exports used by the current UI/repository layer.
 * These are source-verified 2027 admission metadata, not synthetic mock results.
 */
export const MOCK_UNIVERSITIES = VERIFIED_UNIVERSITIES;
export const MOCK_DEPARTMENTS = VERIFIED_DEPARTMENTS;
export const MOCK_ADMISSIONS = VERIFIED_ADMISSIONS;

export type MockRecommendationSeed = {
  admissionId: string;
  tier: "상향" | "적정" | "안정";
  baseScore: number;
  reason: string;
};

/** Historical-cut recommendations remain disabled until 2026 result values are verified. */
export const MOCK_RECOMMENDATION_SEEDS: MockRecommendationSeed[] = [];

/** First-run template: no user-entered values are prefilled. */
export const DEFAULT_STUDENT_PROFILE: StudentProfile = {
  gradeAverage: null,
  track: null,
  desiredMajor: "",
  mockAverage: null,
  studentRecordLink: null,
  csatMinimumChance: null,
};

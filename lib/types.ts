export type University = {
  id: string;
  name: string;
  region?: string;
};

export type Department = {
  id: string;
  universityId: string;
  name: string;
  category?: string;
};

export type AdmissionType = "교과" | "학종" | "논술" | "기타";

export type AdmissionSource = {
  type: "university" | "adiga" | "kcue" | "other";
  url?: string;
  document?: string;
  page?: number;
  collectedAt?: string;
  verifiedAt?: string;
  confidence?: number;
};

export type Admission = {
  id: string;
  universityId: string;
  departmentId: string;
  academicYear: number;
  name: string;
  type: AdmissionType;
  모집인원?: number;
  studentRecordWeight?: number;
  interview?: boolean;
  csatMinimum?: { enabled: boolean; description?: string };
  source?: AdmissionSource;
};

export type Track = "자연계" | "인문계" | "예체능";

export type StudentProfile = {
  gradeAverage: number;
  track: Track;
  desiredMajor: string;
  mockAverage: number;
  /** 학생부 전공연계 (2~5) */
  studentRecordLink: number;
  /** 수능최저 충족 가능성 (2~5) */
  csatMinimumChance: number;
};

export type Competitiveness = {
  /** 교과 경쟁력 */
  subject: number;
  /** 학종 경쟁력 */
  holistic: number;
  /** 수능최저 가능성 */
  csatMinimum: number;
  /** 종합 경쟁력 */
  total: number;
};

export type RecommendationTier = "상향" | "적정" | "안정";

export type Recommendation = {
  tier: RecommendationTier;
  admissionId: string;
  score: number;
  reason: string;
};

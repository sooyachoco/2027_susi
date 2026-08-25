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

/** User-entered fields are nullable until the student actually provides them. */
export type StudentProfile = {
  gradeAverage: number | null;
  track: Track | null;
  desiredMajor: string;
  mockAverage: number | null;
  /** 학생부 전공연계 (2~5), null = 미입력 */
  studentRecordLink: number | null;
  /** 수능최저 충족 가능성 (2~5), null = 미입력 */
  csatMinimumChance: number | null;
};

export type Competitiveness = {
  subject: number;
  holistic: number;
  csatMinimum: number;
  total: number;
};

export type RecommendationTier = "상향" | "적정" | "안정";

export type Recommendation = {
  tier: RecommendationTier;
  admissionId: string;
  score: number;
  reason: string;
};

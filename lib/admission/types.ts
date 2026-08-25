export type AdmissionType = "교과" | "학종" | "논술" | "기타";
export type StrategyTier = "상향" | "적정" | "안정";
export type AdmissionRegion = "서울" | "경기" | "인천";

export type SourceType = "university" | "adiga" | "kcue" | "other";

export type DataSource = {
  type: SourceType;
  url?: string;
  document?: string;
  page?: number;
  academicYear: number;
  collectedAt?: string;
  verifiedAt?: string;
  confidence?: number;
};

export type University = {
  id: string;
  name: string;
  region: AdmissionRegion;
};

export type Department = {
  id: string;
  universityId: string;
  name: string;
  category?: string;
};

export type CsatMinimum = {
  enabled: boolean;
  description?: string;
  requiredSubjects?: number;
  gradeSum?: number;
};

export type Admission = {
  id: string;
  universityId: string;
  departmentId: string;
  academicYear: number;
  name: string;
  type: AdmissionType;
  recruitmentCount?: number;
  studentRecordWeight?: number;
  interview?: boolean;
  documentWeight?: number;
  csatMinimum?: CsatMinimum;
  source?: DataSource;
  isMock?: boolean;
};

export type StudentProfile = {
  gradeAverage: number;
  track: string;
  desiredMajor: string;
  mockAverage: number;
  studentRecordLink: number;
  csatMinimumChance: number;
};

export type Recommendation = {
  tier: StrategyTier;
  admissionId: string;
  score: number;
  reason: string;
};

export type AdmissionQuery = {
  academicYear?: number;
  region?: AdmissionRegion;
  universityId?: string;
  departmentId?: string;
  type?: AdmissionType;
};

export interface AdmissionRepository {
  getUniversities(region?: AdmissionRegion): Promise<University[]>;
  getDepartments(universityId?: string): Promise<Department[]>;
  getAdmissions(query?: AdmissionQuery): Promise<Admission[]>;
}

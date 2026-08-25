import type { Admission, Department, RecommendationTier, StudentProfile, University } from "@/lib/types";

/** UX prototype data only. Never use as real admission results. */
export const MOCK_UNIVERSITIES: University[] = [
  { id: "u-cau", name: "중앙대학교", region: "서울" },
  { id: "u-uos", name: "서울시립대학교", region: "서울" },
  { id: "u-kku", name: "건국대학교", region: "서울" },
  { id: "u-dgu", name: "동국대학교", region: "서울" },
  { id: "u-ssu", name: "숭실대학교", region: "서울" },
  { id: "u-kw", name: "광운대학교", region: "서울" },
];

export const MOCK_DEPARTMENTS: Department[] = [
  { id: "d-cau-sw", universityId: "u-cau", name: "소프트웨어학부", category: "자연계" },
  { id: "d-uos-cs", universityId: "u-uos", name: "컴퓨터과학부", category: "자연계" },
  { id: "d-kku-ce", universityId: "u-kku", name: "컴퓨터공학부", category: "자연계" },
  { id: "d-dgu-ai", universityId: "u-dgu", name: "AI융합학부", category: "자연계" },
  { id: "d-ssu-sw", universityId: "u-ssu", name: "소프트웨어학부", category: "자연계" },
  { id: "d-kw-cie", universityId: "u-kw", name: "컴퓨터정보공학부", category: "자연계" },
];

const MOCK_SOURCE = {
  type: "other" as const,
  document: "mock",
  academicYear: 2027,
  collectedAt: "2026-08-25",
  confidence: 0,
};

export const MOCK_ADMISSIONS: Admission[] = [
  { id: "a-cau-sw", universityId: "u-cau", departmentId: "d-cau-sw", academicYear: 2027, name: "학생부종합(다빈치형인재)", type: "학종", interview: false, csatMinimum: { enabled: true, description: "mock" }, source: MOCK_SOURCE },
  { id: "a-uos-cs", universityId: "u-uos", departmentId: "d-uos-cs", academicYear: 2027, name: "학생부종합", type: "학종", interview: true, csatMinimum: { enabled: false }, source: MOCK_SOURCE },
  { id: "a-kku-ce", universityId: "u-kku", departmentId: "d-kku-ce", academicYear: 2027, name: "학생부교과", type: "교과", csatMinimum: { enabled: true, description: "mock" }, source: MOCK_SOURCE },
  { id: "a-dgu-ai", universityId: "u-dgu", departmentId: "d-dgu-ai", academicYear: 2027, name: "학생부종합(Do Dream)", type: "학종", interview: true, csatMinimum: { enabled: false }, source: MOCK_SOURCE },
  { id: "a-ssu-sw", universityId: "u-ssu", departmentId: "d-ssu-sw", academicYear: 2027, name: "학생부교과", type: "교과", csatMinimum: { enabled: true, description: "mock" }, source: MOCK_SOURCE },
  { id: "a-kw-cie", universityId: "u-kw", departmentId: "d-kw-cie", academicYear: 2027, name: "학생부교과(지역균형)", type: "교과", csatMinimum: { enabled: false }, source: MOCK_SOURCE },
];

export type MockRecommendationSeed = { admissionId: string; tier: RecommendationTier; baseScore: number; reason: string };
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

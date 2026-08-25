import type {
  Admission,
  Department,
  RecommendationTier,
  StudentProfile,
  University,
} from "@/lib/types";

/**
 * 아래 데이터는 전부 UX 프로토타입용 mock 이다.
 * 실제 대학 입시 데이터/합격결과가 아니며, 실제 지원 판단에 사용해선 안 된다.
 * 실제 데이터는 향후 AdmissionRepository 구현체(공식 모집요강 등)로 대체한다.
 */

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
  document: "mock (프로토타입용 가상 데이터)",
  collectedAt: "2026-08-25",
  confidence: 0,
};

export const MOCK_ADMISSIONS: Admission[] = [
  {
    id: "a-cau-sw",
    universityId: "u-cau",
    departmentId: "d-cau-sw",
    academicYear: 2027,
    name: "학생부종합(다빈치형인재)",
    type: "학종",
    interview: false,
    csatMinimum: { enabled: true, description: "수능최저 있음 (mock)" },
    source: MOCK_SOURCE,
  },
  {
    id: "a-uos-cs",
    universityId: "u-uos",
    departmentId: "d-uos-cs",
    academicYear: 2027,
    name: "학생부종합",
    type: "학종",
    interview: true,
    csatMinimum: { enabled: false },
    source: MOCK_SOURCE,
  },
  {
    id: "a-kku-ce",
    universityId: "u-kku",
    departmentId: "d-kku-ce",
    academicYear: 2027,
    name: "학생부교과",
    type: "교과",
    csatMinimum: { enabled: true, description: "수능최저 있음 (mock)" },
    source: MOCK_SOURCE,
  },
  {
    id: "a-dgu-ai",
    universityId: "u-dgu",
    departmentId: "d-dgu-ai",
    academicYear: 2027,
    name: "학생부종합(Do Dream)",
    type: "학종",
    interview: true,
    csatMinimum: { enabled: false },
    source: MOCK_SOURCE,
  },
  {
    id: "a-ssu-sw",
    universityId: "u-ssu",
    departmentId: "d-ssu-sw",
    academicYear: 2027,
    name: "학생부교과(SSU미래인재)",
    type: "교과",
    csatMinimum: { enabled: true, description: "수능최저 있음 (mock)" },
    source: MOCK_SOURCE,
  },
  {
    id: "a-kw-cie",
    universityId: "u-kw",
    departmentId: "d-kw-cie",
    academicYear: 2027,
    name: "학생부교과(지역균형)",
    type: "교과",
    csatMinimum: { enabled: false },
    source: MOCK_SOURCE,
  },
];

/**
 * 추천 6장 프로토타입 시드.
 * 프로토타입 HTML의 상향 2 / 적정 3 / 안정 1 구성과 문구를 그대로 유지한 mock 이다.
 * baseScore 는 실제 합격 예측이 아니라 UX 데모용 상대 지표다.
 */
export type MockRecommendationSeed = {
  admissionId: string;
  tier: RecommendationTier;
  baseScore: number;
  reason: string;
};

export const MOCK_RECOMMENDATION_SEEDS: MockRecommendationSeed[] = [
  {
    admissionId: "a-cau-sw",
    tier: "상향",
    baseScore: 82,
    reason: "학생부 전공연계가 강점. 수능최저가 핵심 변수입니다.",
  },
  {
    admissionId: "a-uos-cs",
    tier: "상향",
    baseScore: 78,
    reason: "학종에서 도전 카드. 교과보다 학생부 서사가 중요합니다.",
  },
  {
    admissionId: "a-kku-ce",
    tier: "적정",
    baseScore: 86,
    reason: "내신과 학생부의 균형이 좋은 후보입니다.",
  },
  {
    admissionId: "a-dgu-ai",
    tier: "적정",
    baseScore: 84,
    reason: "전공 연계성이 높다면 적정권에서 경쟁력이 있습니다.",
  },
  {
    admissionId: "a-ssu-sw",
    tier: "적정",
    baseScore: 88,
    reason: "전공 적합성과 수능최저를 함께 확인할 카드입니다.",
  },
  {
    admissionId: "a-kw-cie",
    tier: "안정",
    baseScore: 91,
    reason: "안정 카드 역할. 실제 환산점수 확인을 권장합니다.",
  },
];

export const DEFAULT_STUDENT_PROFILE: StudentProfile = {
  gradeAverage: 2.73,
  track: "자연계",
  desiredMajor: "컴퓨터공학",
  mockAverage: 2.7,
  studentRecordLink: 4,
  csatMinimumChance: 5,
};

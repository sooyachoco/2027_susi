import type { Admission, Department, University } from "./types";

const adiga = (url: string) => ({
  type: "adiga" as const,
  url,
  academicYear: 2027,
  collectedAt: "2026-08-25",
  verifiedAt: "2026-08-25",
  confidence: 0.98,
});

/**
 * 2027학년도 수도권 확장 데이터.
 * 대학 전체 모집단위에 공통 적용되는 전형 정보만 수록하며,
 * 모집단위별 입결이 확인되지 않은 상태에서는 학과별 컷을 추정하지 않는다.
 */
export const EXPANDED_METRO_UNIVERSITIES: University[] = [
  { id: "u-kwangwoon", name: "광운대학교", region: "서울" },
  { id: "u-sejong", name: "세종대학교", region: "서울" },
  { id: "u-konkuk", name: "건국대학교", region: "서울" },
];

export const EXPANDED_METRO_DEPARTMENTS: Department[] = [
  { id: "d-kwangwoon-all", universityId: "u-kwangwoon", name: "전 모집단위", category: "전체" },
  { id: "d-sejong-all", universityId: "u-sejong", name: "전 모집단위", category: "전체" },
  { id: "d-konkuk-all", universityId: "u-konkuk", name: "전 모집단위", category: "전체" },
];

const kwangwoon = adiga("https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2027&unvCd=0000074");
const sejong = adiga("https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2027&unvCd=0000138");
const konkuk = adiga("https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2027&unvCd=0000052");

export const EXPANDED_METRO_ADMISSIONS: Admission[] = [
  {
    id: "a-kwangwoon-future-interview",
    universityId: "u-kwangwoon",
    departmentId: "d-kwangwoon-all",
    academicYear: 2027,
    name: "광운참빛인재전형Ⅰ-면접형",
    type: "학종",
    recruitmentCount: 250,
    documentWeight: 60,
    interview: true,
    csatMinimum: { enabled: false },
    source: kwangwoon,
    isMock: false,
  },
  {
    id: "a-kwangwoon-future-document",
    universityId: "u-kwangwoon",
    departmentId: "d-kwangwoon-all",
    academicYear: 2027,
    name: "광운참빛인재전형Ⅱ-서류형",
    type: "학종",
    recruitmentCount: 221,
    documentWeight: 100,
    interview: false,
    csatMinimum: { enabled: false },
    source: kwangwoon,
    isMock: false,
  },
  {
    id: "a-kwangwoon-sw",
    universityId: "u-kwangwoon",
    departmentId: "d-kwangwoon-all",
    academicYear: 2027,
    name: "소프트웨어우수인재전형",
    type: "학종",
    recruitmentCount: 72,
    documentWeight: 60,
    interview: true,
    csatMinimum: { enabled: false },
    source: kwangwoon,
    isMock: false,
  },
  {
    id: "a-sejong-talent-interview",
    universityId: "u-sejong",
    departmentId: "d-sejong-all",
    academicYear: 2027,
    name: "세종인재전형(면접형)",
    type: "학종",
    interview: true,
    documentWeight: 60,
    csatMinimum: { enabled: false },
    source: sejong,
    isMock: false,
  },
  {
    id: "a-sejong-talent-document",
    universityId: "u-sejong",
    departmentId: "d-sejong-all",
    academicYear: 2027,
    name: "세종인재전형(서류형)",
    type: "학종",
    interview: false,
    documentWeight: 100,
    csatMinimum: { enabled: false },
    source: sejong,
    isMock: false,
  },
  {
    id: "a-konkuk-ku-region",
    universityId: "u-konkuk",
    departmentId: "d-konkuk-all",
    academicYear: 2027,
    name: "학생부교과(KU 지역균형)",
    type: "교과",
    recruitmentCount: 345,
    studentRecordWeight: 70,
    interview: false,
    csatMinimum: { enabled: false },
    source: konkuk,
    isMock: false,
  },
];

import type { Admission, Department, University } from "./types";

const adiga = (url: string) => ({
  type: "adiga" as const,
  url,
  academicYear: 2027,
  collectedAt: "2026-08-25",
  verifiedAt: "2026-08-25",
  confidence: 0.98,
});

export const GYEONGGI_INCHEON_UNIVERSITIES: University[] = [
  { id: "u-kyonggi", name: "경기대학교", region: "경기" },
  { id: "u-ajou", name: "아주대학교", region: "경기" },
  { id: "u-inha", name: "인하대학교", region: "인천" },
];

export const GYEONGGI_INCHEON_DEPARTMENTS: Department[] = [
  { id: "d-kyonggi-general", universityId: "u-kyonggi", name: "전체 모집단위", category: "공통" },
  { id: "d-ajou-general", universityId: "u-ajou", name: "전체 모집단위", category: "공통" },
  { id: "d-inha-general", universityId: "u-inha", name: "전체 모집단위", category: "공통" },
];

const kyonggi = adiga("https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2027&unvCd=0000058");
const ajou = adiga("https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2027&unvCd=0000146");
const inha = adiga("https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2027&unvCd=0000169");

export const GYEONGGI_INCHEON_ADMISSIONS: Admission[] = [
  {
    id: "a-kyonggi-highschool-recommend",
    universityId: "u-kyonggi",
    departmentId: "d-kyonggi-general",
    academicYear: 2027,
    name: "고교추천전형",
    type: "교과",
    interview: false,
    csatMinimum: { enabled: true, description: "2027 전형평가기준의 고교추천전형 수능최저 기준 적용" },
    source: kyonggi,
    isMock: false,
  },
  {
    id: "a-ajou-ace",
    universityId: "u-ajou",
    departmentId: "d-ajou-general",
    academicYear: 2027,
    name: "ACE전형",
    type: "학종",
    interview: true,
    documentWeight: 100,
    csatMinimum: { enabled: false, description: "의학과·약학과 제외 수능최저 미적용" },
    source: ajou,
    isMock: false,
  },
  {
    id: "a-ajou-recommend",
    universityId: "u-ajou",
    departmentId: "d-ajou-general",
    academicYear: 2027,
    name: "고교추천전형",
    type: "교과",
    interview: false,
    csatMinimum: { enabled: true, gradeSum: 5, description: "의학과 제외 국어·수학·영어·탐구 중 2개 영역 합 5 이내" },
    source: ajou,
    isMock: false,
  },
  {
    id: "a-inha-future-interview",
    universityId: "u-inha",
    departmentId: "d-inha-general",
    academicYear: 2027,
    name: "인하미래인재(면접형)",
    type: "학종",
    interview: true,
    documentWeight: 100,
    csatMinimum: { enabled: false },
    source: inha,
    isMock: false,
  },
  {
    id: "a-inha-future-document",
    universityId: "u-inha",
    departmentId: "d-inha-general",
    academicYear: 2027,
    name: "인하미래인재(서류형)",
    type: "학종",
    interview: false,
    documentWeight: 100,
    csatMinimum: { enabled: false },
    source: inha,
    isMock: false,
  },
  {
    id: "a-inha-region-balance",
    universityId: "u-inha",
    departmentId: "d-inha-general",
    academicYear: 2027,
    name: "지역균형",
    type: "교과",
    interview: false,
    studentRecordWeight: 100,
    csatMinimum: { enabled: true, description: "학교장추천 필요. 진로선택 상위 3과목 반영" },
    source: inha,
    isMock: false,
  },
];

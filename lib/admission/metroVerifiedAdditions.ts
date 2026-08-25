import type { Admission, Department, University } from "./types";

const adiga = (url: string) => ({
  type: "adiga" as const,
  url,
  academicYear: 2027,
  collectedAt: "2026-08-25",
  verifiedAt: "2026-08-25",
  confidence: 0.98,
});

export const VERIFIED_METRO_UNIVERSITIES: University[] = [
  { id: "u-hufs", name: "한국외국어대학교", region: "서울" },
  { id: "u-ssu", name: "숭실대학교", region: "서울" },
  { id: "u-incheon", name: "인천대학교", region: "인천" },
];

export const VERIFIED_METRO_DEPARTMENTS: Department[] = [
  { id: "d-hufs-cs", universityId: "u-hufs", name: "컴퓨터공학부", category: "자연계" },
  { id: "d-ssu-cs", universityId: "u-ssu", name: "컴퓨터학부", category: "자연계" },
  { id: "d-ssu-ai", universityId: "u-ssu", name: "AI소프트웨어학부", category: "자연계" },
  { id: "d-incheon-cs", universityId: "u-incheon", name: "컴퓨터공학부", category: "자연계" },
];

const hufs = adiga("https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2027&unvCd=0000192");
const ssu = adiga("https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2027&unvCd=0000143");
const incheon = adiga("https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2027&unvCd=0002660");

export const VERIFIED_METRO_ADMISSIONS: Admission[] = [
  {
    id: "a-hufs-school-recommendation",
    universityId: "u-hufs",
    departmentId: "d-hufs-cs",
    academicYear: 2027,
    name: "학교장추천전형",
    type: "교과",
    recruitmentCount: 370,
    studentRecordWeight: 100,
    interview: false,
    csatMinimum: { enabled: true, description: "계열·모집단위별 수능최저 적용 여부는 모집요강에서 확인" },
    source: hufs,
    isMock: false,
  },
  {
    id: "a-ssu-future-interview",
    universityId: "u-ssu",
    departmentId: "d-ssu-cs",
    academicYear: 2027,
    name: "SSU 미래인재전형(면접형)",
    type: "학종",
    recruitmentCount: 522,
    documentWeight: 50,
    interview: true,
    csatMinimum: { enabled: false },
    source: ssu,
    isMock: false,
  },
  {
    id: "a-ssu-future-document",
    universityId: "u-ssu",
    departmentId: "d-ssu-cs",
    academicYear: 2027,
    name: "SSU 미래인재전형(서류형)",
    type: "학종",
    recruitmentCount: 163,
    documentWeight: 100,
    interview: false,
    csatMinimum: { enabled: false },
    source: ssu,
    isMock: false,
  },
  {
    id: "a-ssu-sw",
    universityId: "u-ssu",
    departmentId: "d-ssu-ai",
    academicYear: 2027,
    name: "SW 우수자전형",
    type: "학종",
    recruitmentCount: 17,
    documentWeight: 50,
    interview: true,
    csatMinimum: { enabled: false },
    source: ssu,
    isMock: false,
  },
  {
    id: "a-incheon-self",
    universityId: "u-incheon",
    departmentId: "d-incheon-cs",
    academicYear: 2027,
    name: "학생부종합(자기추천)",
    type: "학종",
    interview: true,
    csatMinimum: { enabled: false },
    source: incheon,
    isMock: false,
  },
];

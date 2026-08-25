import type { Admission, Department, University } from "./types";

/**
 * 2027 수도권(서울·경기·인천) 전형 카탈로그.
 * 숫자형 입결/모집인원은 원문 검증 전까지 넣지 않는다.
 * 전형 특성만 확인된 항목은 source.confidence로 구분한다.
 */
const adiga = (url: string) => ({
  type: "adiga" as const,
  url,
  academicYear: 2027,
  collectedAt: "2026-08-25",
  verifiedAt: "2026-08-25",
  confidence: 0.95,
});

export const METRO_UNIVERSITIES: University[] = [
  { id: "u-uos", name: "서울시립대학교", region: "서울" },
  { id: "u-kku", name: "건국대학교", region: "서울" },
  { id: "u-kmu", name: "국민대학교", region: "서울" },
  { id: "u-ewha", name: "이화여자대학교", region: "서울" },
  { id: "u-seoultech", name: "서울과학기술대학교", region: "서울" },
  { id: "u-kyonggi", name: "경기대학교", region: "경기" },
  { id: "u-ajou", name: "아주대학교", region: "경기" },
  { id: "u-gachon", name: "가천대학교", region: "경기" },
  { id: "u-inha", name: "인하대학교", region: "인천" },
];

export const METRO_DEPARTMENTS: Department[] = [
  { id: "d-uos-cs", universityId: "u-uos", name: "컴퓨터과학부", category: "자연계" },
  { id: "d-kku-ce", universityId: "u-kku", name: "컴퓨터공학부", category: "자연계" },
  { id: "d-kmu-sw", universityId: "u-kmu", name: "소프트웨어학부", category: "자연계" },
  { id: "d-ewha-ai", universityId: "u-ewha", name: "인공지능전공", category: "자연계" },
  { id: "d-seoultech-cse", universityId: "u-seoultech", name: "컴퓨터공학과", category: "자연계" },
  { id: "d-kyonggi-cs", universityId: "u-kyonggi", name: "컴퓨터공학부", category: "자연계" },
  { id: "d-ajou-sw", universityId: "u-ajou", name: "소프트웨어학과", category: "자연계" },
  { id: "d-gachon-sw", universityId: "u-gachon", name: "소프트웨어학부", category: "자연계" },
  { id: "d-inha-cse", universityId: "u-inha", name: "컴퓨터공학과", category: "자연계" },
];

const sources = {
  uos: adiga("https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2027&unvCd=0000040"),
  konkuk: adiga("https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2027&unvCd=0000052"),
  kookmin: adiga("https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2027&unvCd=0000078"),
  ewha: adiga("https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2027&unvCd=0000163"),
  seoultech: adiga("https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2027&unvCd=0000036"),
  kyonggi: adiga("https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2027&unvCd=0000056"),
  ajou: adiga("https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2027&unvCd=0000146"),
  gachon: adiga("https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2027&unvCd=0000063"),
  inha: adiga("https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2027&unvCd=0000169"),
};

export const METRO_ADMISSIONS: Admission[] = [
  { id: "a-uos-holistic", universityId: "u-uos", departmentId: "d-uos-cs", academicYear: 2027, name: "학생부종합", type: "학종", interview: true, csatMinimum: { enabled: false }, source: sources.uos, isMock: false },
  { id: "a-kku-self", universityId: "u-kku", departmentId: "d-kku-ce", academicYear: 2027, name: "KU 자기추천", type: "학종", documentWeight: 70, interview: true, csatMinimum: { enabled: false }, source: sources.konkuk, isMock: false },
  { id: "a-kku-region", universityId: "u-kku", departmentId: "d-kku-ce", academicYear: 2027, name: "KU 지역균형", type: "교과", studentRecordWeight: 70, csatMinimum: { enabled: false }, source: sources.konkuk, isMock: false },
  { id: "a-kmu-frontier", universityId: "u-kmu", departmentId: "d-kmu-sw", academicYear: 2027, name: "국민프런티어전형", type: "학종", interview: true, csatMinimum: { enabled: false }, source: sources.kookmin, isMock: false },
  { id: "a-ewha-future-doc", universityId: "u-ewha", departmentId: "d-ewha-ai", academicYear: 2027, name: "미래인재전형-서류형", type: "학종", csatMinimum: { enabled: true, description: "계열·모집단위별 수능최저 적용. 상세 조건은 원문 확인 필요." }, source: sources.ewha, isMock: false },
  { id: "a-seoultech-school", universityId: "u-seoultech", departmentId: "d-seoultech-cse", academicYear: 2027, name: "학생부종합(학교생활우수자)", type: "학종", interview: true, csatMinimum: { enabled: false }, source: sources.seoultech, isMock: false },
  { id: "a-kyonggi-holistic", universityId: "u-kyonggi", departmentId: "d-kyonggi-cs", academicYear: 2027, name: "학생부종합", type: "학종", csatMinimum: { enabled: false }, source: sources.kyonggi, isMock: false },
  { id: "a-ajou-ace", universityId: "u-ajou", departmentId: "d-ajou-sw", academicYear: 2027, name: "학생부종합(ACE 전형)", type: "학종", documentWeight: 70, interview: true, csatMinimum: { enabled: false }, source: sources.ajou, isMock: false },
  { id: "a-gachon-holistic", universityId: "u-gachon", departmentId: "d-gachon-sw", academicYear: 2027, name: "학생부종합", type: "학종", interview: true, csatMinimum: { enabled: false }, source: sources.gachon, isMock: false },
  { id: "a-inha-holistic", universityId: "u-inha", departmentId: "d-inha-cse", academicYear: 2027, name: "학생부종합", type: "학종", csatMinimum: { enabled: false }, source: sources.inha, isMock: false },
];

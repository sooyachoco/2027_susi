import type { Admission, Department, University } from "./types";

export const verified2027Universities: University[] = [
  { id: "skku", name: "성균관대학교", region: "서울/경기" },
  { id: "uos", name: "서울시립대학교", region: "서울" },
  { id: "konkuk", name: "건국대학교", region: "서울" },
  { id: "ewha", name: "이화여자대학교", region: "서울" },
  { id: "chungang", name: "중앙대학교", region: "서울" },
];

export const verified2027Departments: Department[] = [
  { id: "skku-sw", universityId: "skku", name: "소프트웨어학과", category: "자연계" },
  { id: "uos-cs", universityId: "uos", name: "컴퓨터과학부", category: "자연계" },
  { id: "konkuk-cs", universityId: "konkuk", name: "컴퓨터공학부", category: "자연계" },
  { id: "ewha-cs", universityId: "ewha", name: "컴퓨터공학과", category: "자연계" },
  { id: "chungang-sw", universityId: "chungang", name: "소프트웨어학부", category: "자연계" },
];

// 숫자 모집인원/입결은 공식 원문에서 전형·모집단위 단위로 검증한 뒤 추가한다.
// 현재는 어디가 2027 전형평가기준에서 확인 가능한 전형방법/최저 정보만 보수적으로 구조화한다.
export const verified2027Admissions: Admission[] = [
  {
    id: "skku-school-recommendation-2027",
    universityId: "skku",
    departmentId: "skku-sw",
    academicYear: 2027,
    name: "학교장추천",
    type: "교과",
    source: { type: "adiga", url: "https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2027&unvCd=0000133", academicYear: 2027, confidence: 0.85 },
    isMock: false,
  },
  {
    id: "skku-holistic-2027",
    universityId: "skku",
    departmentId: "skku-sw",
    academicYear: 2027,
    name: "학생부종합",
    type: "학종",
    source: { type: "adiga", url: "https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2027&unvCd=0000133", academicYear: 2027, confidence: 0.8 },
    isMock: false,
  },
  {
    id: "uos-holistic-2027",
    universityId: "uos",
    departmentId: "uos-cs",
    academicYear: 2027,
    name: "학생부종합전형",
    type: "학종",
    source: { type: "adiga", url: "https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2027&unvCd=0000040", academicYear: 2027, confidence: 0.8 },
    isMock: false,
  },
  {
    id: "konkuk-ku-recommend-2027",
    universityId: "konkuk",
    departmentId: "konkuk-cs",
    academicYear: 2027,
    name: "KU지역균형",
    type: "교과",
    studentRecordWeight: 70,
    source: { type: "adiga", url: "https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2027&unvCd=0000052", academicYear: 2027, confidence: 0.85 },
    isMock: false,
  },
  {
    id: "konkuk-ku-self-2027",
    universityId: "konkuk",
    departmentId: "konkuk-cs",
    academicYear: 2027,
    name: "KU자기추천",
    type: "학종",
    studentRecordWeight: 70,
    interview: true,
    source: { type: "adiga", url: "https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2027&unvCd=0000052", academicYear: 2027, confidence: 0.9 },
    isMock: false,
  },
  {
    id: "ewha-future-document-2027",
    universityId: "ewha",
    departmentId: "ewha-cs",
    academicYear: 2027,
    name: "미래인재전형-서류형",
    type: "학종",
    csatMinimum: { enabled: true, description: "인문/자연/의예/약학 등 모집단위별 수능최저 적용. 세부 기준은 모집단위별 공식 자료 확인 필요." },
    source: { type: "adiga", url: "https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2027&unvCd=0000163", academicYear: 2027, confidence: 0.9 },
    isMock: false,
  },
  {
    id: "chungang-holistic-2027",
    universityId: "chungang",
    departmentId: "chungang-sw",
    academicYear: 2027,
    name: "학생부종합",
    type: "학종",
    source: { type: "adiga", url: "https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2027", academicYear: 2027, confidence: 0.7 },
    isMock: false,
  },
];

import type { Admission, Department, University } from "./types";

export const universities: University[] = [
  { id: "cau", name: "중앙대학교", region: "서울" },
  { id: "uos", name: "서울시립대학교", region: "서울" },
  { id: "konkuk", name: "건국대학교", region: "서울" },
  { id: "dongguk", name: "동국대학교", region: "서울" },
  { id: "ssu", name: "숭실대학교", region: "서울" },
  { id: "kw", name: "광운대학교", region: "서울" },
];

export const departments: Department[] = [
  { id: "cau-sw", universityId: "cau", name: "소프트웨어학부", category: "자연계" },
  { id: "uos-cs", universityId: "uos", name: "컴퓨터과학부", category: "자연계" },
  { id: "konkuk-cs", universityId: "konkuk", name: "컴퓨터공학부", category: "자연계" },
  { id: "dongguk-ai", universityId: "dongguk", name: "AI융합학부", category: "자연계" },
  { id: "ssu-sw", universityId: "ssu", name: "소프트웨어학부", category: "자연계" },
  { id: "kw-cs", universityId: "kw", name: "컴퓨터정보공학부", category: "자연계" },
];

export const admissions: Admission[] = [
  { id: "cau-sw-2027-hakjong", universityId: "cau", departmentId: "cau-sw", academicYear: 2027, name: "다빈치형인재", type: "학종", recruitmentCount: 20, documentWeight: 100, interview: false, csatMinimum: { enabled: true, description: "모집요강 확인 필요" }, isMock: true },
  { id: "uos-cs-2027-hakjong", universityId: "uos", departmentId: "uos-cs", academicYear: 2027, name: "학생부종합전형", type: "학종", recruitmentCount: 18, documentWeight: 100, interview: true, csatMinimum: { enabled: false }, isMock: true },
  { id: "konkuk-cs-2027-hakjong", universityId: "konkuk", departmentId: "konkuk-cs", academicYear: 2027, name: "KU자기추천", type: "학종", recruitmentCount: 30, documentWeight: 70, interview: true, csatMinimum: { enabled: false }, isMock: true },
  { id: "dongguk-ai-2027-hakjong", universityId: "dongguk", departmentId: "dongguk-ai", academicYear: 2027, name: "Do Dream", type: "학종", recruitmentCount: 25, documentWeight: 100, interview: true, csatMinimum: { enabled: false }, isMock: true },
  { id: "ssu-sw-2027-gyogwa", universityId: "ssu", departmentId: "ssu-sw", academicYear: 2027, name: "학생부교과", type: "교과", recruitmentCount: 15, studentRecordWeight: 100, csatMinimum: { enabled: true, description: "모집요강 확인 필요" }, isMock: true },
  { id: "kw-cs-2027-gyogwa", universityId: "kw", departmentId: "kw-cs", academicYear: 2027, name: "지역균형", type: "교과", recruitmentCount: 20, studentRecordWeight: 100, csatMinimum: { enabled: false }, isMock: true },
];

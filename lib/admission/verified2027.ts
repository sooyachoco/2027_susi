import type { Admission } from "./types";
import { admissionSources } from "./sources";

/** 공개된 2027학년도 자료에서 확인한 최소 단위의 검증 데이터. */
export const verified2027Admissions: Admission[] = [
  {
    id: "a-kku-self-verified",
    universityId: "u-kku",
    departmentId: "d-kku-ce",
    academicYear: 2027,
    name: "KU 자기추천",
    type: "학종",
    documentWeight: 70,
    interview: true,
    csatMinimum: { enabled: false },
    source: admissionSources.konkuk2027,
    isMock: false,
  },
  {
    id: "a-kku-region-verified",
    universityId: "u-kku",
    departmentId: "d-kku-ce",
    academicYear: 2027,
    name: "KU 지역균형",
    type: "교과",
    studentRecordWeight: 70,
    csatMinimum: { enabled: false },
    source: admissionSources.konkuk2027,
    isMock: false,
  },
];

export const verified2027Sources = [admissionSources.uos2027];

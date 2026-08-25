import { departments as mockDepartments, universities as mockUniversities } from "./mockData";
import { verified2027Admissions as baseVerifiedAdmissions } from "./verified2027";
import { verified2027Universities, verified2027Departments, verified2027Admissions as realAdmissions } from "./real2027";
import { metro2027Universities, metro2027Departments, metro2027Admissions } from "./metro2027Verified";
import { VERIFIED_METRO_UNIVERSITIES, VERIFIED_METRO_DEPARTMENTS, VERIFIED_METRO_ADMISSIONS } from "./metroVerifiedAdditions";
import type { AdmissionQuery, AdmissionRepository } from "./types";

const universities = dedupeById([
  ...verified2027Universities,
  ...metro2027Universities,
  ...VERIFIED_METRO_UNIVERSITIES,
  ...mockUniversities,
]);

const departments = dedupeById([
  ...verified2027Departments,
  ...metro2027Departments,
  ...VERIFIED_METRO_DEPARTMENTS,
  ...mockDepartments,
]);

const verifiedAdmissions = dedupeById([
  ...baseVerifiedAdmissions,
  ...realAdmissions,
  ...metro2027Admissions,
  ...VERIFIED_METRO_ADMISSIONS,
]);

/** 실전 추천에는 검증된 2027 데이터만 사용한다. mock 데이터는 추천에서 제외한다. */
export class HybridAdmissionRepository implements AdmissionRepository {
  async getUniversities(region?: AdmissionQuery["region"]) {
    return region ? universities.filter((u) => u.region === region) : universities;
  }

  async getDepartments(universityId?: string) {
    return universityId ? departments.filter((d) => d.universityId === universityId) : departments;
  }

  async getAdmissions(query: AdmissionQuery = {}) {
    return verifiedAdmissions.filter((a) =>
      (!query.academicYear || a.academicYear === query.academicYear) &&
      (!query.universityId || a.universityId === query.universityId) &&
      (!query.departmentId || a.departmentId === query.departmentId) &&
      (!query.type || a.type === query.type) &&
      (!query.region || universities.some((u) => u.id === a.universityId && u.region === query.region))
    );
  }
}

export const verifiedAdmissionRepository = new HybridAdmissionRepository();

function dedupeById<T extends { id: string }>(items: T[]): T[] {
  const map = new Map<string, T>();
  for (const item of items) map.set(item.id, item);
  return [...map.values()];
}

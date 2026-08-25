import { admissions, departments, universities } from "./mockData";
import type { AdmissionQuery, AdmissionRegion, AdmissionRepository } from "./types";

const TARGET_REGIONS: AdmissionRegion[] = ["서울", "경기", "인천"];

export class MockAdmissionRepository implements AdmissionRepository {
  async getUniversities(region?: AdmissionRegion) {
    const scope = region ? [region] : TARGET_REGIONS;
    return universities.filter((u) => scope.includes(u.region));
  }

  async getDepartments(universityId?: string) {
    return universityId ? departments.filter((d) => d.universityId === universityId) : departments;
  }

  async getAdmissions(query: AdmissionQuery = {}) {
    const scope = query.region ? [query.region] : TARGET_REGIONS;
    const allowedUniversityIds = new Set(
      universities.filter((u) => scope.includes(u.region)).map((u) => u.id)
    );

    return admissions.filter((a) =>
      (!query.academicYear || a.academicYear === query.academicYear) &&
      allowedUniversityIds.has(a.universityId) &&
      (!query.universityId || a.universityId === query.universityId) &&
      (!query.departmentId || a.departmentId === query.departmentId) &&
      (!query.type || a.type === query.type)
    );
  }
}

export const admissionRepository = new MockAdmissionRepository();

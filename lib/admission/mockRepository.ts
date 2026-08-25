import { admissions, departments, universities } from "./mockData";
import type { AdmissionQuery, AdmissionRepository } from "./types";

export class MockAdmissionRepository implements AdmissionRepository {
  async getUniversities(region?: string) {
    return region ? universities.filter((u) => u.region === region) : universities;
  }

  async getDepartments(universityId?: string) {
    return universityId ? departments.filter((d) => d.universityId === universityId) : departments;
  }

  async getAdmissions(query: AdmissionQuery = {}) {
    const allowedUniversityIds = query.region
      ? new Set(universities.filter((u) => u.region === query.region).map((u) => u.id))
      : undefined;

    return admissions.filter((a) =>
      (!query.academicYear || a.academicYear === query.academicYear) &&
      (!query.region || allowedUniversityIds?.has(a.universityId)) &&
      (!query.universityId || a.universityId === query.universityId) &&
      (!query.departmentId || a.departmentId === query.departmentId) &&
      (!query.type || a.type === query.type)
    );
  }
}

export const admissionRepository = new MockAdmissionRepository();

import { admissions, departments, universities } from "./mockData";
import type { AdmissionQuery, AdmissionRepository } from "./types";

export class MockAdmissionRepository implements AdmissionRepository {
  async getUniversities() {
    return universities;
  }

  async getDepartments(universityId?: string) {
    return universityId ? departments.filter((d) => d.universityId === universityId) : departments;
  }

  async getAdmissions(query: AdmissionQuery = {}) {
    return admissions.filter((a) =>
      (!query.academicYear || a.academicYear === query.academicYear) &&
      (!query.universityId || a.universityId === query.universityId) &&
      (!query.departmentId || a.departmentId === query.departmentId) &&
      (!query.type || a.type === query.type)
    );
  }
}

export const admissionRepository = new MockAdmissionRepository();

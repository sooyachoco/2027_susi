import type { AdmissionRepository, AdmissionQuery, Department, University, Admission } from "./types";
import { verified2027Universities, verified2027Departments, verified2027Admissions } from "./real2027";

export class Verified2027Repository implements AdmissionRepository {
  async getUniversities(): Promise<University[]> { return verified2027Universities; }
  async getDepartments(universityId?: string): Promise<Department[]> {
    return universityId ? verified2027Departments.filter((d) => d.universityId === universityId) : verified2027Departments;
  }
  async getAdmissions(query: AdmissionQuery = {}): Promise<Admission[]> {
    return verified2027Admissions.filter((a) =>
      (!query.academicYear || a.academicYear === query.academicYear) &&
      (!query.universityId || a.universityId === query.universityId) &&
      (!query.departmentId || a.departmentId === query.departmentId) &&
      (!query.type || a.type === query.type)
    );
  }
}

export const verified2027Repository = new Verified2027Repository();

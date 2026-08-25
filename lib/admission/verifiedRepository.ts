import type { AdmissionRepository, AdmissionQuery, Department, University, Admission } from "./types";
import { verified2027Universities, verified2027Departments, verified2027Admissions } from "./real2027";
import { metro2027Universities, metro2027Departments, metro2027Admissions } from "./metro2027Verified";

const universities = [...verified2027Universities, ...metro2027Universities.filter((u) => !verified2027Universities.some((v) => v.id === u.id))];
const departments = [...verified2027Departments, ...metro2027Departments];
const admissions = [...verified2027Admissions, ...metro2027Admissions];

export class Verified2027Repository implements AdmissionRepository {
  async getUniversities(region?: University["region"]): Promise<University[]> {
    return region ? universities.filter((u) => u.region === region) : universities;
  }
  async getDepartments(universityId?: string): Promise<Department[]> {
    return universityId ? departments.filter((d) => d.universityId === universityId) : departments;
  }
  async getAdmissions(query: AdmissionQuery = {}): Promise<Admission[]> {
    return admissions.filter((a) =>
      (!query.academicYear || a.academicYear === query.academicYear) &&
      (!query.universityId || a.universityId === query.universityId) &&
      (!query.departmentId || a.departmentId === query.departmentId) &&
      (!query.type || a.type === query.type)
    );
  }
}

export const verified2027Repository = new Verified2027Repository();

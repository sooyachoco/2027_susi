import { departments, universities } from "./mockData";
import { verified2027Admissions } from "./verified2027";
import type { AdmissionQuery, AdmissionRepository } from "./types";

/**
 * 실제 확인 데이터가 있는 경우 우선 사용하고, 아직 확인하지 못한 영역은 mock으로 유지한다.
 * 실제 데이터와 mock 데이터가 섞여도 UI에서 isMock으로 구분할 수 있다.
 */
export class HybridAdmissionRepository implements AdmissionRepository {
  async getUniversities() {
    return universities;
  }

  async getDepartments(universityId?: string) {
    return universityId
      ? departments.filter((d) => d.universityId === universityId)
      : departments;
  }

  async getAdmissions(query: AdmissionQuery = {}) {
    return verified2027Admissions.filter((a) =>
      (!query.academicYear || a.academicYear === query.academicYear) &&
      (!query.universityId || a.universityId === query.universityId) &&
      (!query.departmentId || a.departmentId === query.departmentId) &&
      (!query.type || a.type === query.type)
    );
  }
}

export const verifiedAdmissionRepository = new HybridAdmissionRepository();

import type { StudentProfile, Track } from "@/lib/types";

type Props = {
  profile: StudentProfile;
  onChange: (patch: Partial<StudentProfile>) => void;
};

export function StudentProfileForm({ profile, onChange }: Props) {
  return (
    <div className="panel form">
      <div className="field">
        <label htmlFor="grade">내신 평균등급</label>
        <input
          id="grade"
          type="number"
          step=".01"
          value={profile.gradeAverage ?? ""}
          onChange={(e) => onChange({ gradeAverage: e.target.value === "" ? null : Number(e.target.value) })}
        />
      </div>

      <div className="field">
        <label htmlFor="track">희망 계열</label>
        <select
          id="track"
          value={profile.track ?? ""}
          onChange={(e) => onChange({ track: e.target.value ? (e.target.value as Track) : null })}
        >
          <option value="">선택하세요</option>
          <option value="자연계">자연계</option>
          <option value="인문계">인문계</option>
          <option value="예체능">예체능</option>
        </select>
      </div>

      <div className="field">
        <label htmlFor="major">희망 전공</label>
        <input
          id="major"
          value={profile.desiredMajor}
          onChange={(e) => onChange({ desiredMajor: e.target.value })}
        />
      </div>

      <div className="field">
        <label htmlFor="mock">모의고사 평균등급</label>
        <input
          id="mock"
          type="number"
          step=".1"
          value={profile.mockAverage ?? ""}
          onChange={(e) => onChange({ mockAverage: e.target.value === "" ? null : Number(e.target.value) })}
        />
      </div>

      <div className="field">
        <label htmlFor="record">학생부 전공연계</label>
        <select
          id="record"
          value={profile.studentRecordLink ?? ""}
          onChange={(e) => onChange({ studentRecordLink: e.target.value === "" ? null : Number(e.target.value) })}
        >
          <option value="">선택하세요</option>
          <option value={5}>매우 높음</option>
          <option value={4}>높음</option>
          <option value={3}>보통</option>
          <option value={2}>낮음</option>
        </select>
      </div>

      <div className="field">
        <label htmlFor="cut">수능최저 충족 가능성</label>
        <select
          id="cut"
          value={profile.csatMinimumChance ?? ""}
          onChange={(e) => onChange({ csatMinimumChance: e.target.value === "" ? null : Number(e.target.value) })}
        >
          <option value="">선택하세요</option>
          <option value={5}>높음</option>
          <option value={4}>꽤 높음</option>
          <option value={3}>보통</option>
          <option value={2}>낮음</option>
        </select>
      </div>
    </div>
  );
}

// Keep this form intentionally tolerant of the initial null state used by the app template.

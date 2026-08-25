"use client";

import { useEffect, useMemo, useState } from "react";
import type {
  Admission,
  Department,
  StudentProfile,
  University,
} from "@/lib/types";
import { admissionRepository } from "@/lib/repository/MockAdmissionRepository";
import { DEFAULT_STUDENT_PROFILE } from "@/lib/data/mock";
import { calcCompetitiveness } from "@/lib/scoring/competitiveness";
import { nextShuffleOffset, recommendSix } from "@/lib/scoring/recommend";
import {
  aiSummaryText,
  balanceAlertText,
  calcBalance,
  strategyCommentText,
} from "@/lib/scoring/portfolio";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ScorePanel } from "@/components/ScorePanel";
import { StudentProfileForm } from "@/components/StudentProfileForm";
import { CompetitivenessCard } from "@/components/CompetitivenessCard";
import { UniversityCard } from "@/components/UniversityCard";
import { PortfolioSummary } from "@/components/PortfolioSummary";
import { StrategyComment } from "@/components/StrategyComment";

export default function Page() {
  const [profile, setProfile] = useState<StudentProfile>(DEFAULT_STUDENT_PROFILE);
  const [universities, setUniversities] = useState<University[]>([]);
  const [departments, setDepartments] = useState<Department[]>([]);
  const [admissions, setAdmissions] = useState<Admission[]>([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let alive = true;
    (async () => {
      const [u, d, a] = await Promise.all([
        admissionRepository.getUniversities(),
        admissionRepository.getDepartments(),
        admissionRepository.getAdmissions({ academicYear: 2027 }),
      ]);
      if (!alive) return;
      setUniversities(u);
      setDepartments(d);
      setAdmissions(a);
    })();
    return () => {
      alive = false;
    };
  }, []);

  const competitiveness = useMemo(() => calcCompetitiveness(profile), [profile]);

  const recommendations = useMemo(
    () => recommendSix(profile, admissions, offset),
    [profile, admissions, offset],
  );

  const uniById = useMemo(
    () => new Map(universities.map((u) => [u.id, u])),
    [universities],
  );
  const deptById = useMemo(
    () => new Map(departments.map((d) => [d.id, d])),
    [departments],
  );
  const admissionById = useMemo(
    () => new Map(admissions.map((a) => [a.id, a])),
    [admissions],
  );

  const balance = calcBalance(competitiveness.total);
  const aiSummary = aiSummaryText(competitiveness, profile.desiredMajor);
  const strategyComment = strategyCommentText(competitiveness);

  function handleChange(patch: Partial<StudentProfile>) {
    setProfile((prev) => ({ ...prev, ...patch }));
  }

  function resolveNames(admissionId: string) {
    const admission = admissionById.get(admissionId);
    const university = admission ? uniById.get(admission.universityId) : undefined;
    const department = admission ? deptById.get(admission.departmentId) : undefined;
    return {
      universityName: university?.name ?? "대학",
      departmentName: department?.name ?? "학과",
    };
  }

  return (
    <div className="app">
      <Header />
      <main>
        <section className="hero">
          <Hero
            onStart={() =>
              document
                .getElementById("profile")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          />
          <ScorePanel total={competitiveness.total} aiSummary={aiSummary} />
        </section>

        <section className="section" id="profile">
          <div className="sectionHead">
            <div>
              <h2>나의 경쟁력</h2>
              <div className="muted">
                간단한 성적을 입력하면 실시간으로 다시 계산됩니다.
              </div>
            </div>
          </div>
          <StudentProfileForm profile={profile} onChange={handleChange} />
        </section>

        <section className="section">
          <div className="grid">
            <CompetitivenessCard label="교과 경쟁력" value={competitiveness.subject} />
            <CompetitivenessCard label="학종 경쟁력" value={competitiveness.holistic} />
            <CompetitivenessCard
              label="수능최저 가능성"
              value={competitiveness.csatMinimum}
            />
          </div>
        </section>

        <section className="section">
          <div className="sectionHead">
            <div>
              <h2>🎯 나의 수시 6장</h2>
              <div className="muted">상향 2 · 적정 3 · 안정 1 샘플</div>
            </div>
            <button
              className="secondary"
              onClick={() => setOffset((o) => nextShuffleOffset(o))}
            >
              조합 다시 짜기
            </button>
          </div>
          <div className="six">
            {recommendations.map((rec) => {
              const { universityName, departmentName } = resolveNames(rec.admissionId);
              return (
                <UniversityCard
                  key={rec.admissionId}
                  tier={rec.tier}
                  universityName={universityName}
                  departmentName={departmentName}
                  score={rec.score}
                  reason={rec.reason}
                  onShowReason={() =>
                    alert(`${universityName} ${departmentName}\n\n${rec.reason}`)
                  }
                  onCompare={() => alert("비교 기능 준비중")}
                />
              );
            })}
          </div>
        </section>

        <section className="section">
          <div className="sectionHead">
            <div>
              <h2>포트폴리오 안정성</h2>
              <div className="muted">현재 입력값을 종합한 샘플 지표</div>
            </div>
          </div>
          <div className="portfolio">
            <PortfolioSummary balance={balance} alert={balanceAlertText()} />
            <StrategyComment comment={strategyComment} />
          </div>
        </section>

        <div className="footer">
          수시6 v0.1 · 전략 시뮬레이션 프로토타입 · 실제 합격을 보장하지 않습니다.
        </div>
      </main>
    </div>
  );
}

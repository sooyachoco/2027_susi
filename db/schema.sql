-- Cloudflare D1 schema for 2027_susi
-- Numeric admission results remain nullable until verified against the source document.

PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS universities (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  region TEXT NOT NULL CHECK (region IN ('서울', '경기', '인천')),
  source_url TEXT,
  academic_year INTEGER NOT NULL DEFAULT 2027,
  verified_at TEXT
);

CREATE TABLE IF NOT EXISTS departments (
  id TEXT PRIMARY KEY,
  university_id TEXT NOT NULL REFERENCES universities(id),
  name TEXT NOT NULL,
  category TEXT
);

CREATE TABLE IF NOT EXISTS admissions (
  id TEXT PRIMARY KEY,
  university_id TEXT NOT NULL REFERENCES universities(id),
  department_id TEXT NOT NULL REFERENCES departments(id),
  academic_year INTEGER NOT NULL,
  name TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('교과', '학종', '논술', '기타')),
  recruitment_count INTEGER,
  student_record_weight REAL,
  document_weight REAL,
  interview INTEGER NOT NULL DEFAULT 0,
  csat_minimum_enabled INTEGER NOT NULL DEFAULT 0,
  csat_minimum_description TEXT,
  source_url TEXT,
  source_type TEXT NOT NULL DEFAULT 'adiga',
  confidence REAL NOT NULL DEFAULT 0,
  is_mock INTEGER NOT NULL DEFAULT 0,
  verified_at TEXT
);

CREATE TABLE IF NOT EXISTS admission_results (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  admission_id TEXT NOT NULL REFERENCES admissions(id),
  academic_year INTEGER NOT NULL,
  applicant_count INTEGER,
  competition_rate REAL,
  waitlist_rate REAL,
  final_cut REAL,
  average_cut REAL,
  source_url TEXT,
  verified_at TEXT
);

CREATE INDEX IF NOT EXISTS idx_universities_region ON universities(region);
CREATE INDEX IF NOT EXISTS idx_admissions_year_region ON admissions(academic_year, university_id);
CREATE INDEX IF NOT EXISTS idx_results_admission_year ON admission_results(admission_id, academic_year);

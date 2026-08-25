export function ScorePanel({ total, aiSummary, ready }: { total: number; aiSummary: string; ready: boolean }) {
  return <div className="panel scorePanel">
    <div className="scoreTop"><div><div className="muted">현재 수시 경쟁력</div><div className="score">{ready ? total : "—"}{ready && <small>/100</small>}</div></div>
      <div className="ring" style={{ background: ready ? `conic-gradient(var(--blue) 0 ${total}%, #edf0f5 ${total}%)` : "#edf0f5" }}><b>{ready ? total : "?"}</b></div>
    </div>
    <div><div className="muted">AI 한줄 분석</div><p style={{fontWeight:800,lineHeight:1.6}}>{aiSummary}</p></div>
  </div>;
}

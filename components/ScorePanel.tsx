export function ScorePanel({
  total,
  aiSummary,
}: {
  total: number;
  aiSummary: string;
}) {
  return (
    <div className="panel scorePanel">
      <div className="scoreTop">
        <div>
          <div className="muted">현재 수시 경쟁력</div>
          <div className="score">
            {total}
            <small>/100</small>
          </div>
        </div>
        <div
          className="ring"
          style={{
            background: `conic-gradient(var(--blue) 0 ${total}%, #edf0f5 ${total}%)`,
          }}
        >
          <b>{total}</b>
        </div>
      </div>
      <div>
        <div className="muted">AI 한줄 분석</div>
        <p style={{ fontWeight: 800, lineHeight: 1.6 }}>{aiSummary}</p>
      </div>
    </div>
  );
}

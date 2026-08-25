export function Hero({ onStart }: { onStart: () => void }) {
  return (
    <div className="panel heroCopy">
      <div className="eyebrow">MY ADMISSION STRATEGY</div>
      <h1>
        그래서,
        <br />
        <span style={{ color: "var(--blue)" }}>어디에 써야 할까?</span>
      </h1>
      <p>
        내신·모의고사·학생부를 바탕으로
        <br />
        수시 6장을 전략적으로 설계해보세요.
      </p>
      <button className="primary" onClick={onStart}>
        내 수시 전략 시작하기 →
      </button>
    </div>
  );
}

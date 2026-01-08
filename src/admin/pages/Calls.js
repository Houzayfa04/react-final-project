import { load, save } from "../utils/storage";

export default function Calls() {
  const calls = load("admin_calls_count", 0);

  const resetCalls = () => {
    save("admin_calls_count", 0);
    window.location.reload(); // simple refresh for now
  };

  return (
    <div>
      <h2>Calls</h2>
      <p>Every time you press the Call button, the counter increases.</p>

      <div className="admin_cards">
        <div className="admin_card">
          <h4>Total Calls</h4>
          <div className="admin_value">{calls}</div>
        </div>
      </div>

      <div className="admin_actions" style={{ marginTop: 18 }}>
        <button onClick={resetCalls}>Reset</button>
      </div>
    </div>
  );
}

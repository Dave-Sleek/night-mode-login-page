import { useState } from 'react';
import { notifyOwnerOfRequest } from '../services/notifications';

const RequestFlow = () => {
  const [startDate, setStartDate] = useState('2026-04-29');
  const [endDate, setEndDate] = useState('2026-05-01');
  const [message, setMessage] = useState('I can pick up at 6 PM and return cleaned.');
  const [submitted, setSubmitted] = useState(false);

  const submitRequest = async () => {
    await notifyOwnerOfRequest('owner@example.com', 'Jordan Lee', 'Cordless Drill Set');
    setSubmitted(true);
  };

  return (
    <section className="card">
      <h2 className="section-title">5) Borrow Request Flow</h2>
      <p className="mt-2 text-sm text-ink/80">Borrower selects dates, adds note, owner receives approval request.</p>
      <div className="mt-3 grid gap-3 sm:grid-cols-3">
        <input
          type="date"
          value={startDate}
          onChange={(event) => setStartDate(event.target.value)}
          className="rounded-xl border border-ink/20 px-3 py-2"
        />
        <input
          type="date"
          value={endDate}
          onChange={(event) => setEndDate(event.target.value)}
          className="rounded-xl border border-ink/20 px-3 py-2"
        />
        <button onClick={submitRequest} className="rounded-xl bg-pin px-4 py-2 font-semibold text-white">
          Send Request
        </button>
      </div>
      <textarea
        className="mt-3 w-full rounded-xl border border-ink/20 px-3 py-2"
        rows={2}
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
      {submitted ? <p className="mt-2 text-sm text-accent">Request sent to owner for approval ✅</p> : null}
    </section>
  );
};

export default RequestFlow;

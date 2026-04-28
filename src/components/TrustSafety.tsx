import type { Review } from '../types';

type Props = {
  reviews: Review[];
};

const TrustSafety = ({ reviews }: Props) => {
  return (
    <section className="grid gap-4 md:grid-cols-2">
      <div className="card">
        <h2 className="section-title">6) Trust System</h2>
        <p className="mt-2 text-sm text-ink/80">Both users leave 1–5 star ratings after each transaction.</p>
        <div className="mt-4 space-y-3">
          {reviews.map((review) => (
            <article key={review.id} className="rounded-xl border border-ink/10 p-3">
              <p className="font-semibold">{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</p>
              <p className="text-sm text-ink/85">{review.note}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="card">
        <h2 className="section-title">Safety Controls</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-ink/85">
          <li>Verified address required to list or request anything.</li>
          <li>Profile completeness score nudges users to add photo, bio, and phone confirmation.</li>
          <li>One-tap issue reporting for no-shows, unsafe behavior, or damaged items.</li>
          <li>Flagged users are temporarily hidden from feed pending review.</li>
        </ul>
      </div>
    </section>
  );
};

export default TrustSafety;

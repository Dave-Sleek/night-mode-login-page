import type { InventoryItem, SkillOffer } from '../types';

type Props = {
  items: InventoryItem[];
  skills: SkillOffer[];
};

type FeedEntry = {
  id: string;
  type: 'Item' | 'Skill';
  title: string;
  details: string;
  distanceMiles: number;
};

const MarketplaceFeed = ({ items, skills }: Props) => {
  const entries: FeedEntry[] = [
    ...items.map((item) => ({
      id: item.id,
      type: 'Item' as const,
      title: item.title,
      details: item.description,
      distanceMiles: item.distanceMiles,
    })),
    ...skills.map((skill) => ({
      id: skill.id,
      type: 'Skill' as const,
      title: skill.title,
      details: skill.summary,
      distanceMiles: skill.distanceMiles,
    })),
  ].sort((a, b) => a.distanceMiles - b.distanceMiles);

  return (
    <section className="card">
      <h2 className="section-title">4) Nearby Browse Feed (distance sorted)</h2>
      <div className="mt-3 space-y-2">
        {entries.map((entry) => (
          <div key={entry.id} className="flex items-center justify-between rounded-xl border border-ink/10 p-3">
            <div>
              <p className="font-semibold">{entry.title}</p>
              <p className="text-xs text-ink/80">
                {entry.type} · {entry.details}
              </p>
            </div>
            <span className="pill">{entry.distanceMiles.toFixed(1)} mi</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MarketplaceFeed;

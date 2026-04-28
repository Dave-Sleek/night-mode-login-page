import type { InventoryItem, SkillOffer } from '../types';

type Props = {
  items: InventoryItem[];
  skills: SkillOffer[];
};

const InventoryAndSkills = ({ items, skills }: Props) => {
  return (
    <section className="grid gap-4 lg:grid-cols-2">
      <div className="card">
        <h2 className="section-title">2) My Inventory</h2>
        <p className="mt-2 text-sm text-ink/80">List photos, condition, description, and availability calendar.</p>
        <div className="mt-4 space-y-4">
          {items.map((item) => (
            <article key={item.id} className="rounded-xl border border-ink/10 p-3">
              <img src={item.photoUrl} alt={item.title} className="h-32 w-full rounded-lg object-cover" />
              <div className="mt-2 flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-xs text-ink/80">{item.description}</p>
                  <p className="mt-1 text-xs">Condition: {item.condition}</p>
                </div>
                <span className="pill">{item.distanceMiles.toFixed(1)} mi</span>
              </div>
              <p className="mt-2 text-xs">Available: {item.availability.join(', ')}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="card">
        <h2 className="section-title">3) My Skills (30-minute favors)</h2>
        <p className="mt-2 text-sm text-ink/80">
          Offer dog walking, plant watering, moving help, and tech support.
        </p>
        <div className="mt-4 space-y-3">
          {skills.map((skill) => (
            <article key={skill.id} className="rounded-xl border border-ink/10 p-3">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-semibold">{skill.title}</h3>
                  <p className="text-xs text-ink/80">{skill.summary}</p>
                  <p className="mt-1 text-xs">Category: {skill.category}</p>
                </div>
                <span className="pill">{skill.distanceMiles.toFixed(1)} mi</span>
              </div>
              <p className="mt-2 text-xs">Open slots: {skill.slots.join(' · ')}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InventoryAndSkills;

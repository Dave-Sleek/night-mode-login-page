import type { UserProfile } from '../types';

type HeaderProps = {
  user: UserProfile;
};

const Header = ({ user }: HeaderProps) => {
  return (
    <header className="card border-accent/30 bg-board">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="pill mb-2 inline-block">NeighborGood · Within 1 mile</p>
          <h1 className="font-display text-3xl text-ink">Share more. Buy less. Know your neighbors.</h1>
          <p className="mt-2 text-sm text-ink/80">
            Verified homes, transparent profiles, and trusted borrowing between nearby households.
          </p>
        </div>
        <div className="rounded-2xl border border-pin/30 bg-white p-4 text-sm">
          <p className="font-semibold">{user.name}</p>
          <p>{user.address}</p>
          <p className="mt-1 text-accent">
            {user.verifiedAddress ? 'Address verified ✅' : 'Address unverified ⚠️'}
          </p>
          <p>Profile completeness: {user.profileCompleteness}%</p>
          <p>
            {user.rating.toFixed(1)}★ ({user.reviewCount} reviews)
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;

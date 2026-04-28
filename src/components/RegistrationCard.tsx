import { useMemo, useState } from 'react';
import { geocodeAddress, inServiceArea } from '../services/maps';

const RegistrationCard = () => {
  const [address, setAddress] = useState('410 Maple St, Springfield');
  const [status, setStatus] = useState<'idle' | 'verifying' | 'valid' | 'invalid'>('idle');

  const statusText = useMemo(() => {
    if (status === 'verifying') {
      return 'Verifying address via geocode…';
    }
    if (status === 'valid') {
      return 'Address is inside the 1-mile service area.';
    }
    if (status === 'invalid') {
      return 'Outside service area. NeighborGood currently supports homes within 1 mile of center point.';
    }
    return 'Enter your home address to unlock local lending.';
  }, [status]);

  const verifyAddress = async () => {
    setStatus('verifying');
    const coords = await geocodeAddress(address);
    setStatus(inServiceArea(coords) ? 'valid' : 'invalid');
  };

  return (
    <section className="card">
      <h2 className="section-title">1) Registration + Address Verification</h2>
      <p className="mt-2 text-sm text-ink/80">Safety first: only verified nearby addresses can participate.</p>
      <div className="mt-3 flex flex-col gap-3 sm:flex-row">
        <input
          value={address}
          onChange={(event) => setAddress(event.target.value)}
          className="w-full rounded-xl border border-ink/20 px-3 py-2"
          placeholder="Street address"
        />
        <button
          onClick={verifyAddress}
          className="rounded-xl bg-accent px-4 py-2 font-semibold text-white transition hover:brightness-95"
        >
          Verify
        </button>
      </div>
      <p className="mt-3 text-sm">{statusText}</p>
    </section>
  );
};

export default RegistrationCard;

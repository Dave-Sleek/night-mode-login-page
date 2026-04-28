import type { Coordinates } from '../types';

const SERVICE_CENTER: Coordinates = { lat: 37.7749, lng: -122.4194 };
const SERVICE_RADIUS_MILES = 1;

export const geocodeAddress = async (address: string): Promise<Coordinates> => {
  // TODO: replace with Google Maps Geocoding API call.
  // Placeholder returns a point nearby for demo flow.
  const hash = address.length % 10;
  return {
    lat: SERVICE_CENTER.lat + hash * 0.001,
    lng: SERVICE_CENTER.lng + hash * 0.001,
  };
};

export const calculateDistanceMiles = (a: Coordinates, b: Coordinates): number => {
  const toRadians = (deg: number): number => (deg * Math.PI) / 180;
  const r = 3958.8;
  const dLat = toRadians(b.lat - a.lat);
  const dLng = toRadians(b.lng - a.lng);
  const lat1 = toRadians(a.lat);
  const lat2 = toRadians(b.lat);

  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.sin(dLng / 2) ** 2 * Math.cos(lat1) * Math.cos(lat2);

  return 2 * r * Math.asin(Math.sqrt(h));
};

export const inServiceArea = (coords: Coordinates): boolean => {
  return calculateDistanceMiles(SERVICE_CENTER, coords) <= SERVICE_RADIUS_MILES;
};

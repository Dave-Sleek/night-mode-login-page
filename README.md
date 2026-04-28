# NeighborGood

NeighborGood is a hyperlocal sharing economy web app prototype where neighbors can lend/borrow items and exchange 30-minute favors within a 1-mile radius.

## Stack
- React + TypeScript + Vite
- Tailwind CSS
- Firebase (Auth, Firestore)
- Google Maps geocode + distance checks (service stubs included)
- Cloudinary upload hook (stubbed helper)
- SendGrid notifications (stubbed helper)

## Core Product Areas Implemented
- Registration flow with geocode-based service-area validation
- Inventory and skills listing sections
- Distance-sorted browse feed
- Borrow request form with owner notification call
- Trust & safety panel (ratings, profile completeness, reporting)
- In-app messaging preview
- Borrow history with reminder scheduling hook
- Community ISO board

## Local Setup
```bash
npm install
npm run dev
```

## Environment Variables
Create `.env` with Firebase credentials:

```bash
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
```

## Notes
- `src/services/maps.ts` contains geocode and distance helpers; replace placeholder geocode with Google Maps API requests.
- `src/services/notifications.ts` is ready for SendGrid-backed Cloud Functions.
- `src/services/media.ts` is ready for signed Cloudinary uploads.

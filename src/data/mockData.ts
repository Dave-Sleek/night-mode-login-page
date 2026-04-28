import type {
  BorrowHistoryEntry,
  BorrowRequest,
  CommunityPost,
  InventoryItem,
  MessageThread,
  Review,
  SkillOffer,
  UserProfile,
} from '../types';

export const currentUser: UserProfile = {
  id: 'u1',
  name: 'Jordan Lee',
  avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
  address: '410 Maple St, Springfield',
  coordinates: { lat: 37.7749, lng: -122.4194 },
  verifiedAddress: true,
  profileCompleteness: 92,
  rating: 4.9,
  reviewCount: 38,
};

export const inventory: InventoryItem[] = [
  {
    id: 'i1',
    ownerId: 'u2',
    title: 'Cordless Drill Set',
    description: 'Includes two batteries and a bit set.',
    condition: 'Good',
    distanceMiles: 0.4,
    photoUrl: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=900',
    availability: ['Apr 28', 'Apr 30', 'May 1'],
  },
  {
    id: 'i2',
    ownerId: 'u3',
    title: 'Party Cooler (50qt)',
    description: 'Perfect for block parties. Wheels and handle included.',
    condition: 'Like New',
    distanceMiles: 0.9,
    photoUrl: 'https://images.unsplash.com/photo-1532634726-8b9fb99825e7?w=900',
    availability: ['Apr 28', 'Apr 29', 'May 3'],
  },
];

export const skillOffers: SkillOffer[] = [
  {
    id: 's1',
    ownerId: 'u4',
    title: 'Dog walk around Oak Loop',
    category: 'Dog Walking',
    distanceMiles: 0.6,
    summary: '30-minute dog walks after 5 PM weekdays.',
    slots: ['Tue 5:30 PM', 'Wed 6:00 PM'],
  },
  {
    id: 's2',
    ownerId: 'u5',
    title: 'Quick laptop tune-up',
    category: 'Tech Help',
    distanceMiles: 0.8,
    summary: 'Virus scan, startup cleanup, and speed tips.',
    slots: ['Mon 7:00 PM', 'Thu 7:30 PM'],
  },
];

export const requests: BorrowRequest[] = [
  {
    id: 'r1',
    itemId: 'i1',
    borrowerId: 'u1',
    ownerId: 'u2',
    startDate: '2026-04-29',
    endDate: '2026-05-01',
    message: 'Need it to mount shelves in my hallway.',
    status: 'Pending',
  },
];

export const borrowHistory: BorrowHistoryEntry[] = [
  {
    id: 'h1',
    itemTitle: 'Ladder 8ft',
    ownerName: 'Sam R.',
    dueDate: '2026-04-28T17:00:00Z',
    reminderScheduled: true,
  },
  {
    id: 'h2',
    itemTitle: 'Pressure Washer',
    ownerName: 'Nina K.',
    dueDate: '2026-05-03T19:00:00Z',
    reminderScheduled: true,
  },
];

export const reviews: Review[] = [
  {
    id: 'rev1',
    transactionId: 'txn1',
    fromUserId: 'u2',
    toUserId: 'u1',
    rating: 5,
    note: 'Returned right on time and cleaned the drill bits too.',
  },
];

export const communityPosts: CommunityPost[] = [
  {
    id: 'c1',
    authorId: 'u6',
    title: 'ISO folding tables for school fundraiser',
    details: 'Need 3 tables for Saturday 9 AM - 1 PM near Pine Park.',
    createdAt: '2026-04-26T15:05:00Z',
  },
];

export const threads: MessageThread[] = [
  {
    id: 't1',
    participants: ['u1', 'u2'],
    lastMessage: 'I can leave the drill on my porch after 6.',
    lastSentAt: '2026-04-27T10:12:00Z',
    unreadCount: 1,
  },
];

export type Coordinates = {
  lat: number;
  lng: number;
};

export type UserProfile = {
  id: string;
  name: string;
  avatarUrl: string;
  address: string;
  coordinates: Coordinates;
  verifiedAddress: boolean;
  profileCompleteness: number;
  rating: number;
  reviewCount: number;
};

export type InventoryItem = {
  id: string;
  ownerId: string;
  title: string;
  description: string;
  condition: 'Like New' | 'Good' | 'Fair';
  distanceMiles: number;
  photoUrl: string;
  availability: string[];
};

export type SkillOffer = {
  id: string;
  ownerId: string;
  title: string;
  category: 'Dog Walking' | 'Plant Watering' | 'Furniture Help' | 'Tech Help';
  distanceMiles: number;
  summary: string;
  slots: string[];
};

export type BorrowRequest = {
  id: string;
  itemId: string;
  borrowerId: string;
  ownerId: string;
  startDate: string;
  endDate: string;
  message: string;
  status: 'Pending' | 'Approved' | 'Declined';
};

export type Review = {
  id: string;
  transactionId: string;
  fromUserId: string;
  toUserId: string;
  rating: 1 | 2 | 3 | 4 | 5;
  note: string;
};

export type CommunityPost = {
  id: string;
  authorId: string;
  title: string;
  details: string;
  createdAt: string;
};

export type BorrowHistoryEntry = {
  id: string;
  itemTitle: string;
  ownerName: string;
  dueDate: string;
  reminderScheduled: boolean;
};

export type MessageThread = {
  id: string;
  participants: string[];
  lastMessage: string;
  lastSentAt: string;
  unreadCount: number;
};

import Header from './components/Header';
import InventoryAndSkills from './components/InventoryAndSkills';
import MarketplaceFeed from './components/MarketplaceFeed';
import MessagingHistoryBoard from './components/MessagingHistoryBoard';
import RegistrationCard from './components/RegistrationCard';
import RequestFlow from './components/RequestFlow';
import TrustSafety from './components/TrustSafety';
import {
  borrowHistory,
  communityPosts,
  currentUser,
  inventory,
  reviews,
  skillOffers,
  threads,
} from './data/mockData';

const App = () => {
  return (
    <main className="mx-auto flex max-w-7xl flex-col gap-5 p-4 pb-10 text-ink md:p-8">
      <Header user={currentUser} />
      <RegistrationCard />
      <InventoryAndSkills items={inventory} skills={skillOffers} />
      <MarketplaceFeed items={inventory} skills={skillOffers} />
      <RequestFlow />
      <TrustSafety reviews={reviews} />
      <MessagingHistoryBoard history={borrowHistory} posts={communityPosts} threads={threads} />
    </main>
  );
};

export default App;

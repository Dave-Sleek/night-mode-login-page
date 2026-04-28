import { useEffect } from 'react';
import { scheduleReturnReminder } from '../services/notifications';
import type { BorrowHistoryEntry, CommunityPost, MessageThread } from '../types';

type Props = {
  history: BorrowHistoryEntry[];
  posts: CommunityPost[];
  threads: MessageThread[];
};

const MessagingHistoryBoard = ({ history, posts, threads }: Props) => {
  useEffect(() => {
    history.forEach((entry) => {
      if (entry.reminderScheduled) {
        void scheduleReturnReminder('jordan@example.com', entry.itemTitle, entry.dueDate);
      }
    });
  }, [history]);

  return (
    <section className="grid gap-4 xl:grid-cols-3">
      <div className="card">
        <h2 className="section-title">7) In-app Messaging</h2>
        <div className="mt-3 space-y-2">
          {threads.map((thread) => (
            <article key={thread.id} className="rounded-xl border border-ink/10 p-3 text-sm">
              <p className="font-semibold">Thread #{thread.id.toUpperCase()}</p>
              <p className="text-ink/80">{thread.lastMessage}</p>
              <p className="text-xs">Unread: {thread.unreadCount}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="card">
        <h2 className="section-title">8) Borrowing History + Reminders</h2>
        <div className="mt-3 space-y-2">
          {history.map((entry) => (
            <article key={entry.id} className="rounded-xl border border-ink/10 p-3 text-sm">
              <p className="font-semibold">{entry.itemTitle}</p>
              <p>Owner: {entry.ownerName}</p>
              <p>Due: {new Date(entry.dueDate).toLocaleString()}</p>
              <p className="text-accent">24-hour reminder: {entry.reminderScheduled ? 'Scheduled' : 'Not set'}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="card">
        <h2 className="section-title">9) Community ISO Board</h2>
        <div className="mt-3 space-y-2">
          {posts.map((post) => (
            <article key={post.id} className="rounded-xl border border-ink/10 p-3 text-sm">
              <p className="font-semibold">{post.title}</p>
              <p className="text-ink/80">{post.details}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MessagingHistoryBoard;

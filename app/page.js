import FeedPostCard from '@/components/cards/FeedPostCard';

const posts = [
  {
    id: 1,
    userName: 'Ashraf Idrishi',
    timestamp: '1s',
    content: 'Today challenge workout completed - feeling stronger already',
    image:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&auto=format&fit=crop&q=80',
    likes: 18,
    comments: 10,
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
  },
  {
    id: 2,
    userName: 'Russell Brunson',
    timestamp: '3 hrs ago',
    content:
      'This 9-day fitness challenge is designed to help you build consistency, boost energy, and feel stronger one day at a time.',
    image:
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200&auto=format&fit=crop&q=80',
    likes: 42,
    comments: 14,
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
  },
  {
    id: 3,
    userName: 'Nina Patel',
    timestamp: '12 mins ago',
    content:
      'Small win for today: I did not skip. The session was shorter than planned, but showing up still counts.',
    image:
      'https://images.unsplash.com/photo-1549570652-97324981a6fd?w=1200&auto=format&fit=crop&q=80',
    likes: 27,
    comments: 6,
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
  },
  {
    id: 4,
    userName: 'Marcus Lee',
    timestamp: '28 mins ago',
    content:
      'Finished my morning reps before work. Starting was the hardest part, but I felt great once I got into rhythm.',
    image:
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=1200&auto=format&fit=crop&q=80',
    likes: 35,
    comments: 9,
    avatar:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop',
  },
  {
    id: 5,
    userName: 'Sofia Ramirez',
    timestamp: '46 mins ago',
    content:
      'Focused on cleaner form today instead of speed. Slower session, but my core felt much more engaged.',
    image:
      'https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=1200&auto=format&fit=crop&q=80',
    likes: 51,
    comments: 12,
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
  },
];

export default function Home() {
  return (
    <main className="h-full flex-1 overflow-y-auto px-3 py-5 sm:px-4 sm:py-6 lg:px-6 lg:py-8">
      {posts.map((post, index) => (
        <FeedPostCard
          key={post.id}
          post={post}
          isSubmission={index === 0}
        />
      ))}
    </main>
  );
}

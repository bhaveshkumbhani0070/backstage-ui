import { Heart, MessageCircle, MoreHorizontal, Play } from 'lucide-react';

export default function FeedPostCard({ isSubmission = false, post }) {
  const data = post ?? {
    userName: 'Ashraf Idrishi',
    timestamp: '1s',
    content: 'Today challenge workout completed - feeling stronger already',
    image:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&auto=format&fit=crop&q=80',
    likes: 18,
    comments: 10,
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
  };

  return (
    <div className="theme-card mx-auto mb-5 w-full max-w-[640px] overflow-hidden rounded-[24px] border border-gray-100 bg-white shadow-sm sm:mb-6 sm:rounded-3xl">
      {isSubmission && (
        <div className="relative flex h-14 items-center justify-center overflow-hidden bg-[#F0FDF4] sm:h-16">
          <img
            src="/your-submission-banner.svg"
            alt="Your Submission"
            className="h-full w-full object-cover"
          />
        </div>
      )}

      <div className="p-4 sm:p-5">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex min-w-0 items-center gap-2.5">
            <img
              src={data.avatar}
              className="h-11 w-11 rounded-full object-cover sm:h-12 sm:w-12"
              alt={data.userName}
            />
            <div className="min-w-0">
              <h4 className="truncate font-bold leading-tight text-gray-900">{data.userName}</h4>
              <p className="text-xs text-gray-400">{data.timestamp}</p>
            </div>
          </div>
          <button className="text-gray-400">
            <MoreHorizontal className="h-5 w-5" />
          </button>
        </div>

        <p className="mb-4 text-sm leading-relaxed text-gray-700 sm:text-base">{data.content}</p>

        <div className="group relative aspect-video overflow-hidden rounded-2xl bg-gray-100">
          <img src={data.image} className="h-full w-full object-cover" alt={data.content} />
          <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-all group-hover:bg-black/20">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-xl sm:h-14 sm:w-14">
              <Play className="ml-1 h-5 w-5 fill-current text-gray-900 sm:h-6 sm:w-6" />
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-3 sm:mt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-2 rounded-full border border-gray-100 bg-gray-50 px-3 py-2 sm:px-4">
              <span className="flex items-center gap-1">
                🙏 😍 <b className="ml-1 text-gray-700">{data.likes}</b>
              </span>
            </div>
            <button className="rounded-full p-2 text-gray-400 hover:bg-gray-50">
              <Heart className="h-5 w-5" />
            </button>
            <button className="rounded-full p-2 text-gray-400 hover:bg-gray-50">
              <MessageCircle className="h-5 w-5" />
            </button>
          </div>
          <button className="self-start text-sm font-bold text-gray-500 transition-colors hover:text-gray-800 sm:self-auto">
            {data.comments} Comments
          </button>
        </div>
      </div>
    </div>
  );
}

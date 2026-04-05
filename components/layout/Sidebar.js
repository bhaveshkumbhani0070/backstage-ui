import { sidebarDays } from '@/data/sidebarDays';

export default function Sidebar({ selectedDay = 1, onSelectDay }) {
  return (
    <aside className="theme-sidebar hide-scrollbar shrink-0 overflow-x-auto border-b border-gray-200 bg-white/30 p-3 backdrop-blur-md lg:h-full lg:w-64 lg:overflow-hidden lg:border-b-0 lg:border-r lg:p-4">
      <div className="flex gap-1.5 lg:block lg:space-y-3 lg:gap-0">
        {sidebarDays.map((day) => {
          const isSelected = day.id === selectedDay;
          const isCompleted = day.id <= selectedDay;

          return (
            <button
              key={day.id}
              type="button"
              onClick={() => onSelectDay?.(day.id)}
              className={`flex min-w-[82px] items-center justify-center rounded-lg px-2 py-1.5 text-center transition-all lg:w-full lg:min-w-0 lg:justify-between lg:rounded-xl lg:p-3 lg:text-left ${
                isSelected
                  ? 'bg-white shadow-sm ring-1 ring-gray-200'
                  : 'hover:bg-white/40'
              }`}
            >
              <div className="lg:block">
                <p className="text-xs font-medium text-gray-800 lg:text-sm">{day.label}</p>
              </div>

              <span className="hidden lg:inline-flex">
              {isCompleted ? (
                <svg className="text-green-500" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 1.875C8.39303 1.875 6.82214 2.35152 5.486 3.24431C4.14985 4.1371 3.10844 5.40605 2.49348 6.8907C1.87852 8.37535 1.71762 10.009 2.03112 11.5851C2.34463 13.1612 3.11846 14.6089 4.25476 15.7452C5.39106 16.8815 6.8388 17.6554 8.4149 17.9689C9.99099 18.2824 11.6247 18.1215 13.1093 17.5065C14.594 16.8916 15.8629 15.8502 16.7557 14.514C17.6485 13.1779 18.125 11.607 18.125 10C18.1227 7.84581 17.266 5.78051 15.7427 4.25727C14.2195 2.73403 12.1542 1.87727 10 1.875ZM13.5672 8.56719L9.19219 12.9422C9.13415 13.0003 9.06522 13.0464 8.98934 13.0779C8.91347 13.1093 8.83214 13.1255 8.75 13.1255C8.66787 13.1255 8.58654 13.1093 8.51067 13.0779C8.43479 13.0464 8.36586 13.0003 8.30782 12.9422L6.43282 11.0672C6.31554 10.9499 6.24966 10.7909 6.24966 10.625C6.24966 10.4591 6.31554 10.3001 6.43282 10.1828C6.55009 10.0655 6.70915 9.99965 6.875 9.99965C7.04086 9.99965 7.19992 10.0655 7.31719 10.1828L8.75 11.6164L12.6828 7.68281C12.7409 7.62474 12.8098 7.57868 12.8857 7.54725C12.9616 7.51583 13.0429 7.49965 13.125 7.49965C13.2071 7.49965 13.2884 7.51583 13.3643 7.54725C13.4402 7.57868 13.5091 7.62474 13.5672 7.68281C13.6253 7.74088 13.6713 7.80982 13.7027 7.88569C13.7342 7.96156 13.7504 8.04288 13.7504 8.125C13.7504 8.20712 13.7342 8.28844 13.7027 8.36431C13.6713 8.44018 13.6253 8.50912 13.5672 8.56719Z" fill="currentColor"/>
</svg>

              ) : (
                <svg className="text-gray-400" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.25 6.25H13.75V4.375C13.75 3.38044 13.3549 2.42661 12.6517 1.72335C11.9484 1.02009 10.9946 0.625 10 0.625C9.00544 0.625 8.05161 1.02009 7.34835 1.72335C6.64509 2.42661 6.25 3.38044 6.25 4.375V6.25H3.75C3.41848 6.25 3.10054 6.3817 2.86612 6.61612C2.6317 6.85054 2.5 7.16848 2.5 7.5V16.25C2.5 16.5815 2.6317 16.8995 2.86612 17.1339C3.10054 17.3683 3.41848 17.5 3.75 17.5H16.25C16.5815 17.5 16.8995 17.3683 17.1339 17.1339C17.3683 16.8995 17.5 16.5815 17.5 16.25V7.5C17.5 7.16848 17.3683 6.85054 17.1339 6.61612C16.8995 6.3817 16.5815 6.25 16.25 6.25ZM7.5 4.375C7.5 3.71196 7.76339 3.07607 8.23223 2.60723C8.70107 2.13839 9.33696 1.875 10 1.875C10.663 1.875 11.2989 2.13839 11.7678 2.60723C12.2366 3.07607 12.5 3.71196 12.5 4.375V6.25H7.5V4.375Z" fill="currentColor" fillOpacity="0.85"/>
</svg>

              )}
              </span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}

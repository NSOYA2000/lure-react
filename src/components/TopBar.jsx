/**
 * 顶部导航栏组件
 * 通用的页面顶部导航栏
 */
const TopBar = ({
  title = '路亚圈',
  showBack = false,
  onBack,
  showMenu = true,
  showSearch = true,
  showNotification = true,
  rightAction
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-md">
      <div className="flex justify-between items-center w-full px-6 py-4">
        {/* 左侧区域 */}
        <div className="flex items-center gap-4">
          {showBack && (
            <span
              className="material-symbols-outlined text-emerald-900 dark:text-emerald-500 cursor-pointer"
              onClick={onBack}
            >
              arrow_back
            </span>
          )}
          {showMenu && (
            <span className="material-symbols-outlined text-emerald-900 dark:text-emerald-500 cursor-pointer">
              menu
            </span>
          )}
          {title && (
            <h1 className="text-xl font-bold tracking-tight text-emerald-900 dark:text-emerald-100 font-headline">
              {title}
            </h1>
          )}
        </div>

        {/* 右侧区域 */}
        <div className="flex items-center gap-4">
          {showSearch && (
            <span className="material-symbols-outlined text-emerald-900 dark:text-emerald-500 cursor-pointer">
              search
            </span>
          )}
          {showNotification && (
            <span className="material-symbols-outlined text-emerald-900 dark:text-emerald-500 cursor-pointer">
              notifications
            </span>
          )}
          {rightAction}
        </div>
      </div>
    </header>
  );
};

export default TopBar;

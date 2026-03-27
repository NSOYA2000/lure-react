import { Link, useLocation } from 'react-router-dom';

/**
 * 底部导航组件
 * 在所有主要页面中共享使用
 */
const BottomNav = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { path: '/', icon: 'home', label: '首页' },
    { path: '/encyclopedia', icon: 'menu_book', label: '百科' },
    { path: '/messages', icon: 'chat_bubble', label: '消息' },
    { path: '/profile', icon: 'person', label: '我的' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 rounded-t-3xl bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl shadow-[0_-4px_20px_rgba(0,0,0,0.05)] border-t border-slate-100/10">
      <div className="flex justify-around items-center px-4 pb-6 pt-3">
        {navItems.map((item, index) => {
          // 中间 FAB 按钮特殊处理
          if (index === 2) {
            return (
              <div key={item.path} className="relative">
                <Link
                  to="/add-record"
                  className="absolute -top-12 left-1/2 -translate-x-1/2 w-14 h-14 bg-gradient-to-br from-tertiary to-tertiary-container text-white rounded-2xl shadow-[0_12px_32px_rgba(130,69,8,0.3)] flex items-center justify-center z-40 active:scale-95 transition-all"
                >
                  <span className="material-symbols-outlined text-3xl">add</span>
                </Link>
                <div className="invisible">
                  <span className="material-symbols-outlined">explore</span>
                </div>
              </div>
            );
          }

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center px-4 py-1.5 transition-all duration-200 ${
                isActive(item.path)
                  ? 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-900 dark:text-emerald-100 rounded-2xl scale-90'
                  : 'text-slate-400 dark:text-slate-500 hover:text-emerald-700 dark:hover:text-emerald-300'
              }`}
            >
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: isActive(item.path) ? "'FILL' 1" : undefined }}
              >
                {item.icon}
              </span>
              <span className="text-[10px] font-semibold font-inter uppercase tracking-wider mt-1">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;

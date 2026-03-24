import { Routes, Route, Link, useLocation } from 'react-router-dom';
import HomePage from './components/HomePage';
import FishDetailPage from './components/FishDetailPage';
import ProfilePage from './components/ProfilePage';
import EncyclopediaPage from './components/EncyclopediaPage';
import AddFishingRecordPage from './components/AddFishingRecordPage';
import './App.css';

// 创建一个共享的导航栏组件
const BottomNavigation = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-3 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl z-50 rounded-t-3xl shadow-[0_-4px_20px_rgba(0,0,0,0.05)] border-t border-slate-100/10">
      <Link
        to="/"
        className={`flex flex-col items-center justify-center px-4 py-1.5 transition-colors ${
          isActive('/')
            ? 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-900 dark:text-emerald-100 rounded-2xl scale-90'
            : 'text-slate-400 dark:text-slate-500 hover:text-emerald-700 dark:hover:text-emerald-300'
        }`}
      >
        <span className="material-symbols-outlined" style={{ fontVariationSettings: isActive('/') ? "'FILL' 1" : undefined }}>home</span>
        <span className="text-[10px] font-semibold font-inter uppercase tracking-wider mt-1">首页</span>
      </Link>

      <Link
        to="/encyclopedia"
        className={`flex flex-col items-center justify-center px-4 py-1.5 transition-colors ${
          isActive('/encyclopedia')
            ? 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-900 dark:text-emerald-100 rounded-2xl scale-90'
            : 'text-slate-400 dark:text-slate-500 hover:text-emerald-700 dark:hover:text-emerald-300'
        }`}
      >
        <span className="material-symbols-outlined" style={{ fontVariationSettings: isActive('/encyclopedia') ? "'FILL' 1" : undefined }}>menu_book</span>
        <span className="text-[10px] font-semibold font-inter uppercase tracking-wider mt-1">百科</span>
      </Link>

      <div className="relative">
        <Link
          to="/add-record"
          className="absolute -top-12 left-1/2 -translate-x-1/2 w-14 h-14 bg-gradient-to-br from-tertiary to-tertiary-container text-white rounded-2xl shadow-[0_12px_32px_rgba(130,69,8,0.3)] flex items-center justify-center z-40 active:scale-95 transition-all"
        >
          <span className="material-symbols-outlined text-3xl">add</span>
        </Link>
        <div className="invisible">
          {/* 占位符，保持导航项对称 */}
          <span className="material-symbols-outlined">explore</span>
        </div>
      </div>

      <Link
        to="/messages"
        className={`flex flex-col items-center justify-center px-4 py-1.5 transition-colors ${
          isActive('/messages')
            ? 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-900 dark:text-emerald-100 rounded-2xl scale-90'
            : 'text-slate-400 dark:text-slate-500 hover:text-emerald-700 dark:hover:text-emerald-300'
        }`}
      >
        <span className="material-symbols-outlined" style={{ fontVariationSettings: isActive('/messages') ? "'FILL' 1" : undefined }}>chat_bubble</span>
        <span className="text-[10px] font-semibold font-inter uppercase tracking-wider mt-1">消息</span>
      </Link>

      <Link
        to="/profile"
        className={`flex flex-col items-center justify-center px-4 py-1.5 transition-colors ${
          isActive('/profile')
            ? 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-900 dark:text-emerald-100 rounded-2xl scale-90'
            : 'text-slate-400 dark:text-slate-500 hover:text-emerald-700 dark:hover:text-emerald-300'
        }`}
      >
        <span className="material-symbols-outlined" style={{ fontVariationSettings: isActive('/profile') ? "'FILL' 1" : undefined }}>person</span>
        <span className="text-[10px] font-semibold font-inter uppercase tracking-wider mt-1">我的</span>
      </Link>
    </nav>
  );
};

// 条件渲染底部导航的组件
const ConditionalBottomNavigation = () => {
  const location = useLocation();

  // 不在添加记录页面显示底部导航
  if (location.pathname === '/add-record') {
    return null;
  }

  return <BottomNavigation />;
};

function App() {
  return (
    <div className="min-h-screen bg-surface">
      {/* 添加Material Icons字体链接 */}
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/encyclopedia" element={<EncyclopediaPage />} />
        <Route path="/fish/:id" element={<FishDetailPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/add-record" element={<AddFishingRecordPage />} />
        <Route path="/messages" element={
          <div className="pt-20 px-6 text-center">
            <h1 className="text-2xl font-bold font-headline text-primary mb-4">消息</h1>
            <p className="text-on-surface-variant">消息功能开发中...</p>
          </div>
        } />

        {/* 默认重定向到首页 */}
        <Route path="*" element={<HomePage />} />
      </Routes>

      {/* 条件渲染底部导航 */}
      <ConditionalBottomNavigation />
    </div>
  );
}

export default App;
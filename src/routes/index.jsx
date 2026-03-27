import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// 页面组件懒加载
const HomePage = lazy(() => import('../pages/HomePage'));
const FishDetailPage = lazy(() => import('../pages/FishDetailPage'));
const ProfilePage = lazy(() => import('../pages/ProfilePage'));
const EncyclopediaPage = lazy(() => import('../pages/EncyclopediaPage'));
const AddFishingRecordPage = lazy(() => import('../pages/AddFishingRecordPage'));
const TournamentPage = lazy(() => import('../pages/TournamentPage'));
const CommunityPage = lazy(() => import('../pages/CommunityPage'));

// 占位页面
const MessagesPlaceholder = () => (
  <div className="pt-20 px-6 text-center">
    <h1 className="text-2xl font-bold font-headline text-primary mb-4">消息</h1>
    <p className="text-on-surface-variant">消息功能开发中...</p>
  </div>
);

// 加载组件
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const AppRoutes = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* 主路由 */}
        <Route path="/" element={<HomePage />} />
        <Route path="/encyclopedia" element={<EncyclopediaPage />} />
        <Route path="/fish/:id" element={<FishDetailPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/add-record" element={<AddFishingRecordPage />} />
        <Route path="/tournament" element={<TournamentPage />} />
        <Route path="/messages" element={<MessagesPlaceholder />} />
        <Route path="/community" element={<CommunityPage />} />

        {/* 404 重定向到首页 */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;

import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const navigate = useNavigate();

  const handleAddRecord = () => {
    navigate('/add-record');
  };

  const handleViewAllBadges = () => {
    alert('勋章墙功能开发中');
  };

  const handleNavigateTo = (path) => {
    if (path === 'posts') {
      alert('我的帖子功能开发中');
    } else if (path === 'favorites') {
      alert('我的收藏功能开发中');
    } else if (path === 'settings') {
      alert('设置功能开发中');
    }
  };

  return (
    <div className="bg-surface font-body text-on-surface mb-24">
      {/* TopAppBar Shell */}
      <header className="fixed top-0 w-full z-50 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-md flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-4">
          <button className="hover:bg-slate-200/50 dark:hover:bg-slate-700/50 transition-colors p-2 rounded-full active:scale-95 duration-150 text-emerald-900 dark:text-emerald-500">
            <span className="material-symbols-outlined">menu</span>
          </button>
          <h1 className="text-xl font-bold tracking-tight text-emerald-900 dark:text-emerald-100 font-headline">LureCircle</h1>
        </div>
        <div className="flex items-center gap-2">
          <button className="hover:bg-slate-200/50 dark:hover:bg-slate-700/50 transition-colors p-2 rounded-full active:scale-95 duration-150 text-emerald-900 dark:text-emerald-500">
            <span className="material-symbols-outlined">search</span>
          </button>
        </div>
      </header>

      <main className="mt-20 px-6 max-w-2xl mx-auto space-y-8">
        {/* User Info Card */}
        <section className="relative bg-surface-container-lowest rounded-xl p-6 overflow-hidden">
          <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="flex items-center gap-6 relative z-10">
            <div className="relative">
              <div className="w-24 h-24 rounded-full border-4 border-primary-container p-1">
                <img
                  alt="用户头像"
                  className="w-full h-full rounded-full object-cover"
                  alt="Professional outdoor photographer portrait in gear"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgThlEQh6Qb5w9YDaPdA803w47eqR10gXJS8A2ewJ3trh_pR0a5eThBTOtJrHOhvVRK5p9u3oTOPZC24c0tKsuu6c5OrZo_efWoBPHTRYNHpUICqDJI2UfkP3fOcHvsssisGZxlkxM45xLwSXOr4PizWJprfB6UupXJ-yGPgEztKaIeUFPmrnEpxFJamL4s70Ai2qJ9S54tllxOBPB2G68MKwB6gjE3cJa1uMoKfJEgWV5A_PL8IVeH8KlDgARhWTEcKbNbdgwgYk"
                />
              </div>
              <div className="absolute bottom-0 right-0 bg-tertiary p-1.5 rounded-full border-2 border-surface-container-lowest">
                <span className="material-symbols-outlined text-[14px] text-white" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold font-headline text-on-surface">Angler_Jack</h2>
              <div className="flex flex-wrap gap-y-1 gap-x-3 mt-1">
                <span className="flex items-center text-sm text-on-surface-variant font-medium">
                  <span className="material-symbols-outlined text-sm mr-1">location_on</span>
                  Great Lakes, MI
                </span>
                <span className="flex items-center text-sm text-on-surface-variant font-medium">
                  <span className="material-symbols-outlined text-sm mr-1">history</span>
                  8年路亚经验
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Row */}
        <section className="grid grid-cols-3 gap-3">
          <div className="bg-surface-container-low rounded-xl p-4 text-center border-b-2 border-primary/10">
            <span className="block text-2xl font-bold font-headline text-primary">128</span>
            <span className="text-[10px] font-semibold text-on-surface-variant uppercase tracking-wider">渔获总数</span>
          </div>
          <div className="bg-surface-container-low rounded-xl p-4 text-center border-b-2 border-primary/10">
            <span className="block text-2xl font-bold font-headline text-primary">14</span>
            <span className="text-[10px] font-semibold text-on-surface-variant uppercase tracking-wider">解锁鱼种</span>
          </div>
          <div className="bg-surface-container-low rounded-xl p-4 text-center border-b-2 border-primary/10">
            <span className="block text-2xl font-bold font-headline text-primary">22</span>
            <span className="text-[10px] font-semibold text-on-surface-variant uppercase tracking-wider">勋章数</span>
          </div>
        </section>

        {/* Digital Creel */}
        <section>
          <div className="flex justify-between items-end mb-4">
            <div>
              <h3 className="text-lg font-bold font-headline text-on-surface">电子鱼护</h3>
              <p className="text-xs text-on-surface-variant">最近的渔获记录</p>
            </div>
            <button
              onClick={handleAddRecord}
              className="bg-tertiary-container hover:bg-tertiary text-white px-4 py-2 rounded-full text-xs font-bold transition-all active:scale-95 flex items-center gap-1.5 shadow-lg shadow-tertiary-container/20"
            >
              <span className="material-symbols-outlined text-sm">add_circle</span>
              添加记录
            </button>
          </div>
          <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2 -mx-2 px-2">
            {/* Catch Card 1 */}
            <div className="flex-shrink-0 w-44 bg-surface-container-lowest rounded-xl p-3 shadow-sm border-l-4 border-secondary">
              <div className="bg-surface-container-low rounded-lg h-24 mb-3 overflow-hidden">
                <img
                  alt="小口黑鲈"
                  className="w-full h-full object-cover"
                  alt="Closeup of a smallmouth bass in water"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZkar94pcyjC9fdu_4h_gSj6VlJI0kQUclj9XtAzUNSVN6swkx2R8uOfeeVhyRaQJAUvo3xAfBvzBH3TWCpUd5_UlQEmaJgs3R0vPPJJS7YwnmBD7peHQuA34hLYODWSzmuC7fQqkk1JysTTUfIUlwci2fZbsBUbFFvTDSHWb2QM6BHgulZUrcyEFsAYkq6Z8xiZW9x_a6TsZGRsQILzvwapSKXEpZPjdMEfWUq9-QQUiuZ6QFGVNMKpR6OG0GeXmmDCl3YoCgjjg"
                />
              </div>
              <span className="text-[10px] font-bold text-secondary uppercase">小口黑鲈</span>
              <p className="text-sm font-bold text-on-surface truncate">18.5 英寸</p>
              <div className="flex items-center mt-2 text-[10px] text-on-surface-variant">
                <span className="material-symbols-outlined text-xs mr-1">calendar_today</span>
                2天前
              </div>
            </div>

            {/* Catch Card 2 */}
            <div className="flex-shrink-0 w-44 bg-surface-container-lowest rounded-xl p-3 shadow-sm border-l-4 border-secondary">
              <div className="bg-surface-container-low rounded-lg h-24 mb-3 overflow-hidden">
                <img
                  alt="大眼狮鲈"
                  className="w-full h-full object-cover"
                  alt="Walleye fish being held by fisherman"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSBSnvzEzCfe78ZN-FUTrgLsyE-RGCp_MW2HiZOXl07A7HTJsDBPuRdZ5C6JPN8kuzcttvR_o5COs-Z23oCQk-PZjzsLQ1WYQc0LCxDPZ3zq8YRwIgPpP7Ubi8kUhvA3OKDAjQyXABsZGEyQu7FE5_-Z11RITiPNh_h0qS0vLd5N9CUfQkH3x10ImGcszrNNz6K48xdZtBlaGgCmw4cEkSgCNZEsfUXLsI7tx_wuJA5D2rx9XhPTSZxeqpuV8bX0TONikyq2Pit3Y"
                />
              </div>
              <span className="text-[10px] font-bold text-secondary uppercase">大眼狮鲈</span>
              <p className="text-sm font-bold text-on-surface truncate">24.2 英寸</p>
              <div className="flex items-center mt-2 text-[10px] text-on-surface-variant">
                <span className="material-symbols-outlined text-xs mr-1">calendar_today</span>
                5天前
              </div>
            </div>

            {/* Catch Card 3 */}
            <div className="flex-shrink-0 w-44 bg-surface-container-lowest rounded-xl p-3 shadow-sm border-l-4 border-secondary">
              <div className="bg-surface-container-low rounded-lg h-24 mb-3 overflow-hidden">
                <img
                  alt="虹鳟"
                  className="w-full h-full object-cover"
                  alt="Vibrant rainbow trout jumping from lake"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWnTOMJg8dJbDaoxeVVyemjTaAcvZE16i_s_JKTlqohjhHJZ7wnR1oYaHwyNhQNguCU73kxD3uQ3dVw_xbul7uBceqgeaZUUCnZQ7dfs-UjqN2Hyn9yxLF-Yvka5ZN03QkbOGzspSiSosWapj_mDW9NSvaOGAI98A6W6Cu5A3_pWd_YHiLqfKv-cMtsNYv0vkoZkHEKg8zQVf32wfdh8oQHkZS41IF9OYcXym2xXrF4K9ycEsLQA_54AFDALKoSqZLMZBZIoYS-QA"
                />
              </div>
              <span className="text-[10px] font-bold text-secondary uppercase">虹鳟</span>
              <p className="text-sm font-bold text-on-surface truncate">16.0 英寸</p>
              <div className="flex items-center mt-2 text-[10px] text-on-surface-variant">
                <span className="material-symbols-outlined text-xs mr-1">calendar_today</span>
                1周前
              </div>
            </div>
          </div>
        </section>

        {/* Badge Wall */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold font-headline text-on-surface">勋章墙</h3>
            <button
              onClick={handleViewAllBadges}
              className="text-xs font-bold text-primary hover:underline transition-all"
            >
              查看全部
            </button>
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-5 gap-4 bg-surface-container-low p-6 rounded-xl">
            {/* Earned Badges */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-secondary-container rounded-full flex items-center justify-center text-on-secondary-container shadow-inner">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>waves</span>
              </div>
              <span className="text-[8px] font-bold text-center uppercase tracking-tighter">湖泊之王</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-primary-container rounded-full flex items-center justify-center text-on-primary-container shadow-inner">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>set_meal</span>
              </div>
              <span className="text-[8px] font-bold text-center uppercase tracking-tighter">路亚大师</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-tertiary-container rounded-full flex items-center justify-center text-white shadow-inner">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
              </div>
              <span className="text-[8px] font-bold text-center uppercase tracking-tighter">精英一击</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white shadow-inner">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>rainy</span>
              </div>
              <span className="text-[8px] font-bold text-center uppercase tracking-tighter">风暴猎手</span>
            </div>

            {/* Locked Badges */}
            <div className="flex flex-col items-center gap-2 opacity-30 grayscale">
              <div className="w-12 h-12 bg-outline-variant rounded-full flex items-center justify-center text-on-surface-variant">
                <span className="material-symbols-outlined">lock</span>
              </div>
              <span className="text-[8px] font-bold text-center uppercase tracking-tighter">午夜挑战</span>
            </div>
            <div className="flex flex-col items-center gap-2 opacity-30 grayscale">
              <div className="w-12 h-12 bg-outline-variant rounded-full flex items-center justify-center text-on-surface-variant">
                <span className="material-symbols-outlined">lock</span>
              </div>
              <span className="text-[8px] font-bold text-center uppercase tracking-tighter">巨物猎手</span>
            </div>
            <div className="flex flex-col items-center gap-2 opacity-30 grayscale">
              <div className="w-12 h-12 bg-outline-variant rounded-full flex items-center justify-center text-on-surface-variant">
                <span className="material-symbols-outlined">lock</span>
              </div>
              <span className="text-[8px] font-bold text-center uppercase tracking-tighter">江河之狼</span>
            </div>
            <div className="flex flex-col items-center gap-2 opacity-30 grayscale">
              <div className="w-12 h-12 bg-outline-variant rounded-full flex items-center justify-center text-on-surface-variant">
                <span className="material-symbols-outlined">lock</span>
              </div>
              <span className="text-[8px] font-bold text-center uppercase tracking-tighter">冷锋达人</span>
            </div>
          </div>
        </section>

        {/* Other Options */}
        <section className="space-y-3">
          <button
            onClick={() => handleNavigateTo('posts')}
            className="w-full flex items-center justify-between p-4 bg-surface-container-low rounded-xl hover:bg-surface-container transition-colors group"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">photo_library</span>
              </div>
              <span className="font-bold text-on-surface">我的帖子</span>
            </div>
            <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
          </button>

          <button
            onClick={() => handleNavigateTo('favorites')}
            className="w-full flex items-center justify-between p-4 bg-surface-container-low rounded-xl hover:bg-surface-container transition-colors group"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">favorite</span>
              </div>
              <span className="font-bold text-on-surface">我的收藏</span>
            </div>
            <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
          </button>

          <button
            onClick={() => handleNavigateTo('settings')}
            className="w-full flex items-center justify-between p-4 bg-surface-container-low rounded-xl hover:bg-surface-container transition-colors group"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">settings</span>
              </div>
              <span className="font-bold text-on-surface">设置</span>
            </div>
            <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
          </button>
        </section>
      </main>

      {/* BottomNavBar Shell */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-3 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl z-50 rounded-t-3xl shadow-[0_-4px_20px_rgba(0,0,0,0.05)] border-t border-slate-100/10">
        <a className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 px-4 py-1.5 hover:text-emerald-700 transition-colors" href="#">
          <span className="material-symbols-outlined">home</span>
          <span className="text-[10px] font-semibold font-inter uppercase tracking-wider mt-1">首页</span>
        </a>
        <a className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 px-4 py-1.5 hover:text-emerald-700 transition-colors" href="#">
          <span className="material-symbols-outlined">menu_book</span>
          <span className="text-[10px] font-semibold font-inter uppercase tracking-wider mt-1">图书馆</span>
        </a>
        <a className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 px-4 py-1.5 hover:text-emerald-700 transition-colors" href="#">
          <span className="material-symbols-outlined">explore</span>
          <span className="text-[10px] font-semibold font-inter uppercase tracking-wider mt-1">发现</span>
        </a>
        <a className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 px-4 py-1.5 hover:text-emerald-700 transition-colors" href="#">
          <span className="material-symbols-outlined">chat_bubble</span>
          <span className="text-[10px] font-semibold font-inter uppercase tracking-wider mt-1">消息</span>
        </a>
        <a className="flex flex-col items-center justify-center bg-emerald-100 dark:bg-emerald-900/40 text-emerald-900 dark:text-emerald-100 rounded-2xl px-4 py-1.5 scale-90" href="#">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
          <span className="text-[10px] font-semibold font-inter uppercase tracking-wider mt-1">我的</span>
        </a>
      </nav>
    </div>
  );
};

export default ProfilePage;
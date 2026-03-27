import { useNavigate } from 'react-router-dom';
import TopBar from '../components/TopBar';
import BottomNav from '../components/BottomNav';

const ProfilePage = () => {
  const navigate = useNavigate();

  const handleAddRecord = () => navigate('/add-record');

  const stats = [
    { value: 128, label: '渔获总数' },
    { value: 14, label: '解锁鱼种' },
    { value: 22, label: '勋章数' }
  ];

  const recentCatches = [
    { id: 1, name: '小口黑鲈', size: '18.5 英寸', days: '2 天前', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZkar94pcyjC9fdu_4h_gSj6VlJI0kQUclj9XtAzUNSVN6swkx2R8uOfeeVhyRaQJAUvo3xAfBvzBH3TWCpUd5_UlQEmaJgs3R0vPPJJS7YwnmBD7peHQuA34hLYODWSzmuC7fQqkk1JysTTUfIUlwci2fZbsBUbFFvTDSHWb2QM6BHgulZUrcyEFsAYkq6Z8xiZW9x_a6TsZGRsQILzvwapSKXEpZPjdMEfWUq9-QQUiuZ6QFGVNMKpR6OG0GeXmmDCl3YoCgjjg' },
    { id: 2, name: '大眼狮鲈', size: '24.2 英寸', days: '5 天前', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSBSnvzEzCfe78ZN-FUTrgLsyE-RGCp_MW2HiZOXl07A7HTJsDBPuRdZ5C6JPN8kuzcttvR_o5COs-Z23oCQk-PZjzsLQ1WYQc0LCxDPZ3zq8YRwIgPpP7Ubi8kUhvA3OKDAjQyXABsZGEyQu7FE5_-Z11RITiPNh_h0qS0vLd5N9CUfQkH3x10ImGcszrNNz6K48xdZtBlaGgCmw4cEkSgCNZEsfUXLsI7tx_wuJA5D2rx9XhPTSZxeqpuV8bX0TONikyq2Pit3Y' },
    { id: 3, name: '虹鳟', size: '16.0 英寸', days: '1 周前', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWnTOMJg8dJbDaoxeVVyemjTaAcvZE16i_s_JKTlqohjhHJZ7wnR1oYaHwyNhQNguCU73kxD3uQ3dVw_xbul7uBceqgeaZUUCnZQ7dfs-UjqN2Hyn9yxLF-Yvka5ZN03QkbOGzspSiSosWapj_mDW9NSvaOGAI98A6W6Cu5A3_pWd_YHiLqfKv-cMtsNYv0vkoZkHEKg8zQVf32wfdh8oQHkZS41IF9OYcXym2xXrF4K9ycEsLQA_54AFDALKoSqZLMZBZIoYS-QA' }
  ];

  const badges = [
    { icon: 'waves', label: '湖泊之王', earned: true, color: 'bg-secondary-container text-on-secondary-container' },
    { icon: 'set_meal', label: '路亚大师', earned: true, color: 'bg-primary-container text-on-primary-container' },
    { icon: 'workspace_premium', label: '精英一击', earned: true, color: 'bg-tertiary-container text-white' },
    { icon: 'rainy', label: '风暴猎手', earned: true, color: 'bg-secondary text-white' },
    { icon: 'lock', label: '午夜挑战', earned: false },
    { icon: 'lock', label: '巨物猎手', earned: false },
    { icon: 'lock', label: '江河之狼', earned: false },
    { icon: 'lock', label: '冷锋达人', earned: false }
  ];

  const menuItems = [
    { icon: 'photo_library', label: '我的帖子', action: () => alert('我的帖子功能开发中') },
    { icon: 'favorite', label: '我的收藏', action: () => alert('我的收藏功能开发中') },
    { icon: 'settings', label: '设置', action: () => alert('设置功能开发中') }
  ];

  return (
    <div className="bg-surface font-body text-on-surface mb-24">
      <TopBar title="LureCircle" showMenu={false} />

      <main className="mt-20 px-6 max-w-2xl mx-auto space-y-8">
        {/* User Info Card */}
        <section className="relative bg-surface-container-lowest rounded-xl p-6 overflow-hidden">
          <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
          <div className="flex items-center gap-6 relative z-10">
            <div className="relative">
              <div className="w-24 h-24 rounded-full border-4 border-primary-container p-1">
                <img
                  alt="用户头像"
                  className="w-full h-full rounded-full object-cover"
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
                  8 年路亚经验
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Row */}
        <section className="grid grid-cols-3 gap-3">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-surface-container-low rounded-xl p-4 text-center border-b-2 border-primary/10">
              <span className="block text-2xl font-bold font-headline text-primary">{stat.value}</span>
              <span className="text-[10px] font-semibold text-on-surface-variant uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
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
            {recentCatches.map((catch_item) => (
              <div key={catch_item.id} className="flex-shrink-0 w-44 bg-surface-container-lowest rounded-xl p-3 shadow-sm border-l-4 border-secondary">
                <div className="bg-surface-container-low rounded-lg h-24 mb-3 overflow-hidden">
                  <img alt={catch_item.name} className="w-full h-full object-cover" src={catch_item.image} />
                </div>
                <span className="text-[10px] font-bold text-secondary uppercase">{catch_item.name}</span>
                <p className="text-sm font-bold text-on-surface truncate">{catch_item.size}</p>
                <div className="flex items-center mt-2 text-[10px] text-on-surface-variant">
                  <span className="material-symbols-outlined text-xs mr-1">calendar_today</span>
                  {catch_item.days}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Badge Wall */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold font-headline text-on-surface">勋章墙</h3>
            <button onClick={() => alert('查看全部功能开发中')} className="text-xs font-bold text-primary hover:underline transition-all">
              查看全部
            </button>
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-5 gap-4 bg-surface-container-low p-6 rounded-xl">
            {badges.map((badge, idx) => (
              <div key={idx} className={`flex flex-col items-center gap-2 ${!badge.earned ? 'opacity-30 grayscale' : ''}`}>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-inner ${badge.earned ? badge.color : 'bg-outline-variant text-on-surface-variant'}`}>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: badge.earned ? "'FILL' 1" : undefined }}>
                    {badge.icon}
                  </span>
                </div>
                <span className="text-[8px] font-bold text-center uppercase tracking-tighter">{badge.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Menu Items */}
        <section className="space-y-3">
          {menuItems.map((item, idx) => (
            <button
              key={idx}
              onClick={item.action}
              className="w-full flex items-center justify-between p-4 bg-surface-container-low rounded-xl hover:bg-surface-container transition-colors group"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <span className="font-bold text-on-surface">{item.label}</span>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
            </button>
          ))}
        </section>
      </main>

      <BottomNav />
    </div>
  );
};

export default ProfilePage;

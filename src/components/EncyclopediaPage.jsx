import React from 'react';
import { useNavigate } from 'react-router-dom';

const EncyclopediaPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleViewAll = () => {
    alert('查看全部鱼种功能开发中');
  };

  const handleFishDetail = (fishId) => {
    navigate(`/fish/${fishId}`);
  };

  const handleSearch = (query) => {
    alert(`搜索: ${query}`);
  };

  return (
    <div className="text-on-surface pb-32">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-slate-50/80 backdrop-blur-md">
        <div className="flex justify-between items-center w-full px-6 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={handleGoBack}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-200/50 transition-colors active:scale-95 duration-150"
            >
              <span className="material-symbols-outlined text-emerald-900">arrow_back</span>
            </button>
            <h1 className="text-xl font-bold tracking-tight text-emerald-900 font-headline">鱼种百科</h1>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-200/50 transition-colors active:scale-95 duration-150">
              <span className="material-symbols-outlined text-emerald-900">search</span>
            </button>
          </div>
        </div>
      </header>

      <main className="pt-20 px-6">
        {/* Search Bar */}
        <section className="mb-8">
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <span className="material-symbols-outlined text-on-surface-variant">search</span>
            </div>
            <input
              type="text"
              placeholder="搜索鱼种、饵料、钓法..."
              className="w-full bg-surface-container-low border-none rounded-2xl pl-12 pr-5 py-4 focus:ring-2 focus:ring-primary/20 font-body text-on-surface"
            />
          </div>
        </section>

        {/* Category Tags */}
        <section className="mb-8">
          <h2 className="text-lg font-bold font-headline text-on-surface mb-4">热门分类</h2>
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
            <button className="px-4 py-2 bg-primary-container text-on-primary-container rounded-full text-sm font-bold whitespace-nowrap">
              全部
            </button>
            <button className="px-4 py-2 bg-surface-container-highest text-on-surface-variant rounded-full text-sm font-medium whitespace-nowrap">
              淡水鲈鱼
            </button>
            <button className="px-4 py-2 bg-surface-container-highest text-on-surface-variant rounded-full text-sm font-medium whitespace-nowrap">
              鳟鱼
            </button>
            <button className="px-4 py-2 bg-surface-container-highest text-on-surface-variant rounded-full text-sm font-medium whitespace-nowrap">
              狗鱼
            </button>
            <button className="px-4 py-2 bg-surface-container-highest text-on-surface-variant rounded-full text-sm font-medium whitespace-nowrap">
              鲶鱼
            </button>
            <button className="px-4 py-2 bg-surface-container-highest text-on-surface-variant rounded-full text-sm font-medium whitespace-nowrap">
              海水鱼
            </button>
          </div>
        </section>

        {/* Featured Fish Cards */}
        <section className="mb-8">
          <div className="flex justify-between items-end mb-4">
            <h2 className="text-lg font-bold font-headline text-on-surface">热门鱼种</h2>
            <button
              onClick={handleViewAll}
              className="text-sm font-semibold text-primary flex items-center gap-1"
            >
              查看全部 <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>

          <div className="space-y-4">
            {/* Fish Card 1 */}
            <div
              onClick={() => handleFishDetail('bass')}
              className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm cursor-pointer hover:shadow-md transition-shadow"
            >
              <div className="flex">
                <div className="w-32 h-32 flex-shrink-0 overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    alt="大口黑鲈"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlLMNU7CU_ha70rADkzDK8_9XEt0Mk2x2sVR5onj7-YmdOmfoj4S7zV0Ho4LOMF2qtcdNw4UodbWtYEvXeR5jaGJjlHE8rYzrFeIIBk9FQ2oiIc-o69knLyixtJD3qv6fa9SbCJ2iepwXMXYaNMDDFURFPTyQT-PwRqd4LexLyKaV-qK59RId3y5-lnC00O6XkAKD1VUb_iIxjmEN_hRSLHdyLtCPCrQ4_oIatR_9bTnp2t016vPazNUnA9XMSfNEJeRxG6FBxvsE"
                  />
                </div>
                <div className="flex-1 p-5">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold font-headline text-on-surface mb-1">大口黑鲈</h3>
                      <p className="text-sm text-secondary mb-2">Micropterus salmoides</p>
                    </div>
                    <div className="bg-primary/10 text-primary px-2 py-1 rounded-lg text-xs font-bold">热门</div>
                  </div>
                  <p className="text-sm text-on-surface-variant line-clamp-2 mb-4">
                    北美最受欢迎的游钓鱼种，广泛分布于中国各大湖泊水系，喜栖息于重障碍区。
                  </p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-surface-container-highest text-on-surface-variant text-xs rounded-full">米诺</span>
                    <span className="px-3 py-1 bg-surface-container-highest text-on-surface-variant text-xs rounded-full">软虫</span>
                    <span className="px-3 py-1 bg-surface-container-highest text-on-surface-variant text-xs rounded-full">VIB</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Fish Card 2 */}
            <div
              onClick={() => handleFishDetail('trout')}
              className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm cursor-pointer hover:shadow-md transition-shadow"
            >
              <div className="flex">
                <div className="w-32 h-32 flex-shrink-0 overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    alt="虹鳟"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWnTOMJg8dJbDaoxeVVyemjTaAcvZE16i_s_JKTlqohjhHJZ7wnR1oYaHwyNhQNguCU73kxD3uQ3dVw_xbul7uBceqgeaZUUCnZQ7dfs-UjqN2Hyn9yxLF-Yvka5ZN03QkbOGzspSiSosWapj_mDW9NSvaOGAI98A6W6Cu5A3_pWd_YHiLqfKv-cMtsNYv0vkoZkHEKg8zQVf32wfdh8oQHkZS41IF9OYcXym2xXrF4K9ycEsLQA_54AFDALKoSqZLMZBZIoYS-QA"
                  />
                </div>
                <div className="flex-1 p-5">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold font-headline text-on-surface mb-1">虹鳟</h3>
                      <p className="text-sm text-secondary mb-2">Oncorhynchus mykiss</p>
                    </div>
                    <div className="bg-secondary/10 text-secondary px-2 py-1 rounded-lg text-xs font-bold">冷水</div>
                  </div>
                  <p className="text-sm text-on-surface-variant line-clamp-2 mb-4">
                    原产于北美的冷水性鱼类，以其鲜艳的彩虹色侧线和强大的跳跃能力著称。
                  </p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-surface-container-highest text-on-surface-variant text-xs rounded-full">亮片</span>
                    <span className="px-3 py-1 bg-surface-container-highest text-on-surface-variant text-xs rounded-full">米诺</span>
                    <span className="px-3 py-1 bg-surface-container-highest text-on-surface-variant text-xs rounded-full">飞蝇</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lure Techniques Section */}
        <section>
          <h2 className="text-lg font-bold font-headline text-on-surface mb-4">热门钓法</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-surface-container-low rounded-3xl p-5">
              <div className="w-12 h-12 mb-3 flex items-center justify-center bg-primary/10 rounded-2xl">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>phishing</span>
              </div>
              <h3 className="font-bold text-on-surface mb-2">倒吊钓组</h3>
              <p className="text-xs text-on-surface-variant">针对重障碍区鲈鱼的精细钓法，需要极高的灵敏度。</p>
            </div>
            <div className="bg-surface-container-low rounded-3xl p-5">
              <div className="w-12 h-12 mb-3 flex items-center justify-center bg-secondary/10 rounded-2xl">
                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>waves</span>
              </div>
              <h3 className="font-bold text-on-surface mb-2">水面系</h3>
              <p className="text-xs text-on-surface-variant">铅笔、波趴等水面系拟饵，观赏性极强的钓法。</p>
            </div>
            <div className="bg-surface-container-low rounded-3xl p-5">
              <div className="w-12 h-12 mb-3 flex items-center justify-center bg-tertiary/10 rounded-2xl">
                <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>precision_manufacturing</span>
              </div>
              <h3 className="font-bold text-on-surface mb-2">Jigging</h3>
              <p className="text-xs text-on-surface-variant">铅头钩搭配软饵的经典钓法，适合搜索水底结构。</p>
            </div>
            <div className="bg-surface-container-low rounded-3xl p-5">
              <div className="w-12 h-12 mb-3 flex items-center justify-center bg-primary-container/10 rounded-2xl">
                <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>speed</span>
              </div>
              <h3 className="font-bold text-on-surface mb-2">快速搜索</h3>
              <p className="text-xs text-on-surface-variant">复合亮片、VIB等高速搜索拟饵，覆盖大面积水域。</p>
            </div>
          </div>
        </section>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-3 bg-white/80 backdrop-blur-xl z-50 rounded-t-3xl shadow-[0_-4px_20px_rgba(0,0,0,0.05)] border-t border-slate-100/10">
        <a className="flex flex-col items-center justify-center text-slate-400 px-4 py-1.5 hover:text-emerald-700 transition-colors" href="#">
          <span className="material-symbols-outlined">home</span>
          <span className="text-[10px] font-semibold font-inter uppercase tracking-wider mt-1">首页</span>
        </a>
        <a className="flex flex-col items-center justify-center bg-emerald-100 text-emerald-900 rounded-2xl px-4 py-1.5 scale-90" href="#">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>menu_book</span>
          <span className="text-[10px] font-semibold font-inter uppercase tracking-wider mt-1">百科</span>
        </a>
        <a className="flex flex-col items-center justify-center text-slate-400 px-4 py-1.5 hover:text-emerald-700 transition-colors" href="#">
          <span className="material-symbols-outlined">explore</span>
          <span className="text-[10px] font-semibold font-inter uppercase tracking-wider mt-1">发现</span>
        </a>
        <a className="flex flex-col items-center justify-center text-slate-400 px-4 py-1.5 hover:text-emerald-700 transition-colors" href="#">
          <span className="material-symbols-outlined">chat_bubble</span>
          <span className="text-[10px] font-semibold font-inter uppercase tracking-wider mt-1">消息</span>
        </a>
        <a className="flex flex-col items-center justify-center text-slate-400 px-4 py-1.5 hover:text-emerald-700 transition-colors" href="#">
          <span className="material-symbols-outlined">person</span>
          <span className="text-[10px] font-semibold font-inter uppercase tracking-wider mt-1">我的</span>
        </a>
      </nav>
    </div>
  );
};

export default EncyclopediaPage;
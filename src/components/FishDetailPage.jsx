import React from 'react';
import { useNavigate } from 'react-router-dom';

const FishDetailPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // 返回上一页
  };

  const handleAddToCreel = () => {
    navigate('/add-record');
  };

  const handleViewHabits = () => {
    // 可以导航到习性详情页，暂时显示提示
    alert('习性详情功能开发中');
  };

  return (
    <div className="bg-surface font-body text-on-surface pb-32">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-md flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-4">
          <button
            onClick={handleGoBack}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-200/50 transition-colors active:scale-95 duration-150"
          >
            <span className="material-symbols-outlined text-emerald-900">arrow_back</span>
          </button>
          <span className="text-xl font-bold tracking-tight text-emerald-900 dark:text-emerald-100 font-headline">鱼种详情</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-200/50 transition-colors active:scale-95 duration-150">
            <span className="material-symbols-outlined text-emerald-900" data-icon="search">search</span>
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-200/50 transition-colors active:scale-95 duration-150">
            <span className="material-symbols-outlined text-emerald-900" data-icon="share">share</span>
          </button>
        </div>
      </nav>

      {/* Hero Image Carousel Section */}
      <div className="relative w-full h-[397px] overflow-hidden bg-surface-container">
        <div className="flex h-full overflow-x-auto snap-x snap-mandatory hide-scrollbar">
          <div className="flex-none w-full h-full snap-center relative">
            <img
              className="w-full h-full object-cover"
              alt="大口黑鲈在清澈的湖水生境中"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlLMNU7CU_ha70rADkzDK8_9XEt0Mk2x2sVR5onj7-YmdOmfoj4S7zV0Ho4LOMF2qtcdNw4UodbWtYEvXeR5jaGJjlHE8rYzrFeIIBk9FQ2oiIc-o69knLyixtJD3qv6fa9SbCJ2iepwXMXYaNMDDFURFPTyQT-PwRqd4LexLyKaV-qK59RId3y5-lnC00O6XkAKD1VUb_iIxjmEN_hRSLHdyLtCPCrQ4_oIatR_9bTnp2t016vPazNUnA9XMSfNEJeRxG6FBxvsE"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
          {/* Second Carousel Item (Visual indicator) */}
          <div className="flex-none w-full h-full snap-center relative">
            <img
              className="w-full h-full object-cover"
              alt="钓鱼人释放一条体型硕大的大口黑鲈"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsdwEg6UZGXCX0rmg7zDgXj3J1pke7x2ewHeIPElnPWj-8Wb-cPBdC4J7z9boAbsRAzX_FcvzUbT00yF8AHpSoGRCdl2mYG2lxIN_zR3m4c_85-InCPyHf8FKrpiTpeAg6-Us7LobTOBiOBOkKL69lR8t6UhUYzXf2wyb3ib1XaEK80uk090F0eSv_yM6QkpRbMnF5e4zbgZdTUXzQNVC70_RWq6BIQrPZcUpvlSivT-uMnYOnPnNWRvZKlQHx9_gJpHzRnU4Gxfo"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
        </div>
        {/* Carousel Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          <div className="w-8 h-1 bg-white rounded-full"></div>
          <div className="w-2 h-1 bg-white/50 rounded-full"></div>
          <div className="w-2 h-1 bg-white/50 rounded-full"></div>
        </div>
        {/* Floating Habitat Tag */}
        <div className="absolute bottom-6 right-6 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
          <span className="text-white text-xs font-semibold flex items-center gap-1">
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>water_drop</span>
            淡水生境
          </span>
        </div>
      </div>

      {/* Basic Info Section */}
      <section className="px-6 -mt-8 relative z-10">
        <div className="bg-surface-container-lowest rounded-3xl p-6 shadow-[0_12px_32px_rgba(25,28,29,0.06)]">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-3xl font-bold font-headline text-on-surface leading-tight">大口黑鲈</h1>
              <p className="text-secondary font-medium mt-1">LureCircle / <span className="italic text-sm">Micropterus salmoides</span></p>
            </div>
            <div className="bg-primary-container text-on-primary-container px-3 py-1 rounded-xl text-xs font-bold font-label">
              热门
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-surface-container-highest text-on-surface-variant rounded-full text-xs font-medium">俗称: 加州鲈</span>
            <span className="px-3 py-1 bg-surface-container-highest text-on-surface-variant rounded-full text-xs font-medium">肉食性</span>
            <span className="px-3 py-1 bg-surface-container-highest text-on-surface-variant rounded-full text-xs font-medium">春季/秋季</span>
          </div>
          <p className="text-on-surface-variant text-sm leading-relaxed font-body">
            大口黑鲈是太阳鱼科的一种肉食性淡水游钓鱼类。其特征是巨大的嘴部和橄榄绿色的色调，是北美最受欢迎的游钓鱼种，并广泛引入到中国各大湖泊水系中。
          </p>
        </div>
      </section>

      {/* Tabs Navigation */}
      <div className="mt-8 border-b border-outline-variant/20 px-6">
        <div className="flex gap-8 overflow-x-auto hide-scrollbar">
          <button className="pb-4 text-primary font-bold border-b-2 border-primary whitespace-nowrap">路亚指南</button>
          <button className="pb-4 text-on-surface-variant font-medium whitespace-nowrap">习性</button>
          <button className="pb-4 text-on-surface-variant font-medium whitespace-nowrap">趣味知识</button>
          <button className="pb-4 text-on-surface-variant font-medium whitespace-nowrap">季节性</button>
        </div>
      </div>

      {/* Tab Content: Lure Guide (Bento Style Layout) */}
      <section className="p-6 grid grid-cols-2 gap-4">
        {/* Rod Suggestion Card */}
        <div className="col-span-1 bg-surface-container-low p-5 rounded-3xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>precision_manufacturing</span>
            <h3 className="font-bold text-sm text-on-surface">推荐钓竿</h3>
          </div>
          <p className="text-2xl font-bold font-headline text-primary mb-1">ML - M</p>
          <p className="text-xs text-on-surface-variant">ML调性</p>
        </div>

        {/* Best Time Card */}
        <div className="col-span-1 bg-tertiary-fixed text-on-tertiary-fixed p-5 rounded-3xl relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>wb_twilight</span>
              <h3 className="font-bold text-sm">最佳时间</h3>
            </div>
            <p className="text-lg font-bold">清晨/傍晚</p>
            <p className="text-[10px] opacity-80 uppercase tracking-wider font-bold">低光照时段</p>
          </div>
          <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-8xl opacity-10 rotate-12">sunny</span>
        </div>

        {/* Lure Types Card */}
        <div className="col-span-2 bg-surface-container-low p-6 rounded-3xl">
          <h3 className="font-bold text-sm text-on-surface mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>phishing</span>
            拟饵推荐
          </h3>
          <div className="grid grid-cols-3 gap-3">
            <div className="flex flex-col items-center bg-surface-container-lowest p-3 rounded-2xl">
              <div className="w-12 h-12 mb-2 flex items-center justify-center">
                <img
                  className="w-full h-full object-contain mix-blend-multiply opacity-80"
                  alt="米诺拟饵图标"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMc3qEcBfUd-WH3s2F7MRlrZ8vBcFVm3oRvm7K7ALKAnVAw3S-AFMx5flr6dZseOeQc-yTQ-UpruSmSQAhs3DcU4jDxj3qI9qd-NFYN5Evoga-ZQg0250Ws4N0uXJm5Np6_gOwzRj2FA_njb0jmFic1r88U8QZbfLKBwm-Oh7tmEkzLE9y5p4yuYDgGhxWdNFQmuDMG90qojrZmM-6qX0p6sxn6sC2T4Ga3rV2Qso23t_1c5-wn2gvADxXs-D16Xra9VTJa4OCdmU"
                />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-tighter">米诺</span>
            </div>
            <div className="flex flex-col items-center bg-surface-container-lowest p-3 rounded-2xl">
              <div className="w-12 h-12 mb-2 flex items-center justify-center">
                <img
                  className="w-full h-full object-contain mix-blend-multiply opacity-80"
                  alt="VIB拟饵图标"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4ga9BQyq5QwNHCzHVlrRHAG2_fkCZHfTJtIvBC92xr2BKNPSMXqBx0pr8jlJVX-dUazAwFw2rjuoYshw8lNxb87sCHG3nGlhRMy5O2Yz_ySBpWK-tRw1PgyWkuljfKZz7wDm-Cf3k_q3KTLS0oDEJKPV4bYmE6MyAeCXZpdMSPPLaNmlI-UdYd-bhWdgEviq7PggXEASQx8sZB4jxjCrJ0e9yFCNZKEL9MSvc3ACZsoKzXGFEW3nvnhiTm12L2I4QFsdlgzXESrQ"
                />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-tighter">颤泳</span>
            </div>
            <div className="flex flex-col items-center bg-surface-container-lowest p-3 rounded-2xl">
              <div className="w-12 h-12 mb-2 flex items-center justify-center">
                <img
                  className="w-full h-full object-contain mix-blend-multiply opacity-80"
                  alt="软虫拟饵图标"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeM2rJFfEoMRKAy4q-VXDKs1jF8Fj0IYx4eiSZNHVzeuF8qGMojErnG0YetJDhBNoOGhWyWA_PX3OtyMSoB-pkYVldM3-RIhu3TebTjQdl-1uyMQ3R6h-i2CCoHgy8nNWqu4R5tvWjGYSYl20_vM3CVmjS8-hvEfDCmCLbJ7HBf6ZwHanQ0jEOeOPy24JZEHJU_BCxYEF5DZyDWeFDtnlpau0s3Sw__hSDhiAEFiTLigp6oN211DTgQzHf6LwMBRCfBYaUuT4SldY"
                />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-tighter">软虫</span>
            </div>
          </div>
        </div>

        {/* Techniques Section */}
        <div className="col-span-2 bg-primary-container p-6 rounded-3xl text-white">
          <h3 className="font-bold text-sm mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>sports_score</span>
            必杀技/钓法技巧
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-on-primary-container/30 flex-none flex items-center justify-center text-[10px] font-bold">1</div>
              <p className="text-sm">锁定重障区：寻找倒木、荷叶丛和码头桩，这些是它们埋伏猎物的地方。</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-on-primary-container/30 flex-none flex items-center justify-center text-[10px] font-bold">2</div>
              <p className="text-sm">变换收线速度。有时"顿挫收线"动作能更有效地诱发鱼只攻击。</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Habits Sneak Peek (Asymmetric Layout) */}
      <section className="p-6">
        <h2 className="text-xl font-bold font-headline mb-4">生态习性</h2>
        <div className="relative">
          <div className="bg-surface-container-low rounded-3xl p-6 mr-12">
            <p className="text-sm text-on-surface-variant leading-relaxed">
              大口黑鲈具有极强的领地意识。在产卵季节，它们会在浅水的沙质底部筑巢...
            </p>
            <button
              onClick={handleViewHabits}
              className="mt-4 text-primary font-bold text-sm flex items-center gap-1"
            >
              查看更多习性详情
              <span className="material-symbols-outlined text-sm">chevron_right</span>
            </button>
          </div>
          {/* Overlapping visual element */}
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-secondary-container rounded-2xl overflow-hidden shadow-lg rotate-6">
            <img
              className="w-full h-full object-cover"
              alt="水下湖泊植被近照"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXpKpDr7Jclr1B76nLjCr8zRB4oHLZ4Fh2UPBrJCFl9oagLcYDDalIUxi7at_QUzpFopWGEEWc-usNb4uwQeklg_Z3mzqNGHAYJqwqmogm9XCQzS0n2T0ACPRLOk9QhbHakj2ODL2-96CT302JoI7ANp577LHJDl-e9uB4a7UDn2ZiMufDsCjvj9AV0u88WS0d4eKAxFWHpqztI5PBl6wjymXiEugU2_R2RK_ovwp20TP8a-joalUneqUEk2Z3BjbHCq2uiRr3FQo"
            />
          </div>
        </div>
      </section>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 w-full z-50 px-6 pb-8 pt-4 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-t border-slate-100/10 flex gap-4">
        <button
          onClick={handleAddToCreel}
          className="flex-1 h-14 bg-tertiary text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-[0_12px_32px_rgba(97,48,0,0.2)] active:scale-95 transition-transform duration-200"
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>add_circle</span>
          加入我的鱼护
        </button>
        <button className="flex-none w-14 h-14 bg-secondary-container text-on-secondary-container rounded-2xl flex items-center justify-center shadow-sm active:scale-95 transition-transform duration-200" title="讨论">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>forum</span>
        </button>
        <button className="flex-none w-14 h-14 bg-secondary text-white rounded-2xl flex items-center justify-center shadow-sm active:scale-95 transition-transform duration-200" title="探索">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>explore</span>
        </button>
      </div>
    </div>
  );
};

export default FishDetailPage;
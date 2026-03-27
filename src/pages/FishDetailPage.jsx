import { useNavigate } from 'react-router-dom';
import TopBar from '../components/TopBar';

const FishDetailPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => navigate(-1);
  const handleAddToCreel = () => navigate('/add-record');

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
          <span className="text-xl font-bold tracking-tight text-emerald-900 dark:text-emerald-100 font-headline">
            鱼种详情
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-200/50 transition-colors active:scale-95 duration-150">
            <span className="material-symbols-outlined text-emerald-900">search</span>
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-200/50 transition-colors active:scale-95 duration-150">
            <span className="material-symbols-outlined text-emerald-900">share</span>
          </button>
        </div>
      </nav>

      {/* Hero Image */}
      <div className="relative w-full h-[397px] overflow-hidden bg-surface-container">
        <div className="flex h-full overflow-x-auto snap-x snap-mandatory hide-scrollbar">
          <div className="flex-none w-full h-full snap-center relative">
            <img
              className="w-full h-full object-cover"
              alt="大口黑鲈"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlLMNU7CU_ha70rADkzDK8_9XEt0Mk2x2sVR5onj7-YmdOmfoj4S7zV0Ho4LOMF2qtcdNw4UodbWtYEvXeR5jaGJjlHE8rYzrFeIIBk9FQ2oiIc-o69knLyixtJD3qv6fa9SbCJ2iepwXMXYaNMDDFURFPTyQT-PwRqd4LexLyKaV-qK59RId3y5-lnC00O6XkAKD1VUb_iIxjmEN_hRSLHdyLtCPCrQ4_oIatR_9bTnp2t016vPazNUnA9XMSfNEJeRxG6FBxvsE"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>
        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          <div className="w-8 h-1 bg-white rounded-full" />
          <div className="w-2 h-1 bg-white/50 rounded-full" />
          <div className="w-2 h-1 bg-white/50 rounded-full" />
        </div>
        {/* Habitat Tag */}
        <div className="absolute bottom-6 right-6 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
          <span className="text-white text-xs font-semibold flex items-center gap-1">
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>water_drop</span>
            淡水生境
          </span>
        </div>
      </div>

      {/* Basic Info */}
      <section className="px-6 -mt-8 relative z-10">
        <div className="bg-surface-container-lowest rounded-3xl p-6 shadow-[0_12px_32px_rgba(25,28,29,0.06)]">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-3xl font-bold font-headline text-on-surface leading-tight">大口黑鲈</h1>
              <p className="text-secondary font-medium mt-1">
                LureCircle / <span className="italic text-sm">Micropterus salmoides</span>
              </p>
            </div>
            <div className="bg-primary-container text-on-primary-container px-3 py-1 rounded-xl text-xs font-bold">
              热门
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-surface-container-highest text-on-surface-variant rounded-full text-xs font-medium">
              俗称：加州鲈
            </span>
            <span className="px-3 py-1 bg-surface-container-highest text-on-surface-variant rounded-full text-xs font-medium">
              肉食性
            </span>
            <span className="px-3 py-1 bg-surface-container-highest text-on-surface-variant rounded-full text-xs font-medium">
              春季/秋季
            </span>
          </div>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            大口黑鲈是太阳鱼科的一种肉食性淡水游钓鱼类。其特征是巨大的嘴部和橄榄绿色的色调，是北美最受欢迎的游钓鱼种，并广泛引入到中国各大湖泊水系中。
          </p>
        </div>
      </section>

      {/* Tabs */}
      <div className="mt-8 border-b border-outline-variant/20 px-6">
        <div className="flex gap-8 overflow-x-auto hide-scrollbar">
          <button className="pb-4 text-primary font-bold border-b-2 border-primary whitespace-nowrap">
            路亚指南
          </button>
          <button className="pb-4 text-on-surface-variant font-medium whitespace-nowrap">
            习性
          </button>
          <button className="pb-4 text-on-surface-variant font-medium whitespace-nowrap">
            趣味知识
          </button>
          <button className="pb-4 text-on-surface-variant font-medium whitespace-nowrap">
            季节性
          </button>
        </div>
      </div>

      {/* Lure Guide Content */}
      <section className="p-6 grid grid-cols-2 gap-4">
        {/* Rod Suggestion */}
        <div className="col-span-1 bg-surface-container-low p-5 rounded-3xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
              precision_manufacturing
            </span>
            <h3 className="font-bold text-sm text-on-surface">推荐钓竿</h3>
          </div>
          <p className="text-2xl font-bold font-headline text-primary mb-1">ML - M</p>
          <p className="text-xs text-on-surface-variant">ML 调性</p>
        </div>

        {/* Best Time */}
        <div className="col-span-1 bg-tertiary-fixed text-on-tertiary-fixed p-5 rounded-3xl relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>
                wb_twilight
              </span>
              <h3 className="font-bold text-sm">最佳时间</h3>
            </div>
            <p className="text-lg font-bold">清晨/傍晚</p>
            <p className="text-[10px] opacity-80 uppercase tracking-wider font-bold">低光照时段</p>
          </div>
          <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-8xl opacity-10 rotate-12">
            sunny
          </span>
        </div>

        {/* Lure Types */}
        <div className="col-span-2 bg-surface-container-low p-6 rounded-3xl">
          <h3 className="font-bold text-sm text-on-surface mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
              phishing
            </span>
            拟饵推荐
          </h3>
          <div className="grid grid-cols-3 gap-3">
            {['米诺', '颤泳', '软虫'].map((lure, idx) => (
              <div key={idx} className="flex flex-col items-center bg-surface-container-lowest p-3 rounded-2xl">
                <div className="w-12 h-12 mb-2 flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl text-secondary">fishing</span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-tighter">{lure}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Techniques */}
        <div className="col-span-2 bg-primary-container p-6 rounded-3xl text-white">
          <h3 className="font-bold text-sm mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
              sports_score
            </span>
            必杀技/钓法技巧
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-on-primary-container/30 flex-none flex items-center justify-center text-[10px] font-bold">
                1
              </div>
              <p className="text-sm">锁定重障区：寻找倒木、荷叶丛和码头桩，这些是它们埋伏猎物的地方。</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-on-primary-container/30 flex-none flex items-center justify-center text-[10px] font-bold">
                2
              </div>
              <p className="text-sm">变换收线速度。有时"顿挫收线"动作能更有效地诱发鱼只攻击。</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 w-full z-50 px-6 pb-8 pt-4 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-t border-slate-100/10 flex gap-4">
        <button
          onClick={handleAddToCreel}
          className="flex-1 h-14 bg-tertiary text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-[0_12px_32px_rgba(97,48,0,0.2)] active:scale-95 transition-transform duration-200"
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
            add_circle
          </span>
          加入我的鱼护
        </button>
        <button className="flex-none w-14 h-14 bg-secondary-container text-on-secondary-container rounded-2xl flex items-center justify-center shadow-sm active:scale-95 transition-transform duration-200">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>forum</span>
        </button>
        <button className="flex-none w-14 h-14 bg-secondary text-white rounded-2xl flex items-center justify-center shadow-sm active:scale-95 transition-transform duration-200">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>explore</span>
        </button>
      </div>
    </div>
  );
};

export default FishDetailPage;

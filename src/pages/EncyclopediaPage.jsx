import { useNavigate } from 'react-router-dom';
import TopBar from '../components/TopBar';
import BottomNav from '../components/BottomNav';

const EncyclopediaPage = () => {
  const navigate = useNavigate();

  const fishList = [
    {
      id: 'bass',
      name: '大口黑鲈',
      latin: 'Micropterus salmoides',
      tag: '热门',
      tagColor: 'bg-primary/10 text-primary',
      description: '北美最受欢迎的游钓鱼种，广泛分布于中国各大湖泊水系，喜栖息于重障碍区。',
      lures: ['米诺', '软虫', 'VIB'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlLMNU7CU_ha70rADkzDK8_9XEt0Mk2x2sVR5onj7-YmdOmfoj4S7zV0Ho4LOMF2qtcdNw4UodbWtYEvXeR5jaGJjlHE8rYzrFeIIBk9FQ2oiIc-o69knLyixtJD3qv6fa9SbCJ2iepwXMXYaNMDDFURFPTyQT-PwRqd4LexLyKaV-qK59RId3y5-lnC00O6XkAKD1VUb_iIxjmEN_hRSLHdyLtCPCrQ4_oIatR_9bTnp2t016vPazNUnA9XMSfNEJeRxG6FBxvsE'
    },
    {
      id: 'trout',
      name: '虹鳟',
      latin: 'Oncorhynchus mykiss',
      tag: '冷水',
      tagColor: 'bg-secondary/10 text-secondary',
      description: '原产于北美的冷水性鱼类，以其鲜艳的彩虹色侧线和强大的跳跃能力著称。',
      lures: ['亮片', '米诺', '飞蝇'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWnTOMJg8dJbDaoxeVVyemjTaAcvZE16i_s_JKTlqohjhHJZ7wnR1oYaHwyNhQNguCU73kxD3uQ3dVw_xbul7uBceqgeaZUUCnZQ7dfs-UjqN2Hyn9yxLF-Yvka5ZN03QkbOGzspSiSosWapj_mDW9NSvaOGAI98A6W6Cu5A3_pWd_YHiLqfKv-cMtsNYv0vkoZkHEKg8zQVf32wfdh8oQHkZS41IF9OYcXym2xXrF4K9ycEsLQA_54AFDALKoSqZLMZBZIoYS-QA'
    }
  ];

  const techniques = [
    { icon: 'phishing', color: 'text-primary', bgColor: 'bg-primary/10', title: '倒吊钓组', desc: '针对重障碍区鲈鱼的精细钓法，需要极高的灵敏度。' },
    { icon: 'waves', color: 'text-secondary', bgColor: 'bg-secondary/10', title: '水面系', desc: '铅笔、波趴等水面系拟饵，观赏性极强的钓法。' },
    { icon: 'precision_manufacturing', color: 'text-tertiary', bgColor: 'bg-tertiary/10', title: 'Jigging', desc: '铅头钩搭配软饵的经典钓法，适合搜索水底结构。' },
    { icon: 'speed', color: 'text-primary-container', bgColor: 'bg-primary-container/10', title: '快速搜索', desc: '复合亮片、VIB 等高速搜索拟饵，覆盖大面积水域。' }
  ];

  return (
    <div className="text-on-surface pb-32">
      <TopBar title="鱼种百科" showBack onBack={() => navigate(-1)} showNotification={false} />

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
            {['全部', '淡水鲈鱼', '鳟鱼', '狗鱼', '鲶鱼', '海水鱼'].map((cat, idx) => (
              <button
                key={idx}
                className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${
                  idx === 0
                    ? 'bg-primary-container text-on-primary-container'
                    : 'bg-surface-container-highest text-on-surface-variant hover:bg-surface-container-high'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Fish Cards */}
        <section className="mb-8">
          <div className="flex justify-between items-end mb-4">
            <h2 className="text-lg font-bold font-headline text-on-surface">热门鱼种</h2>
            <button onClick={() => alert('查看全部功能开发中')} className="text-sm font-semibold text-primary flex items-center gap-1">
              查看全部 <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>

          <div className="space-y-4">
            {fishList.map((fish) => (
              <div
                key={fish.id}
                onClick={() => navigate(`/fish/${fish.id}`)}
                className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm cursor-pointer hover:shadow-md transition-shadow"
              >
                <div className="flex">
                  <div className="w-32 h-32 flex-shrink-0 overflow-hidden">
                    <img className="w-full h-full object-cover" alt={fish.name} src={fish.image} />
                  </div>
                  <div className="flex-1 p-5">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold font-headline text-on-surface mb-1">{fish.name}</h3>
                        <p className="text-sm text-secondary mb-2">{fish.latin}</p>
                      </div>
                      <div className={`${fish.tagColor} px-2 py-1 rounded-lg text-xs font-bold`}>{fish.tag}</div>
                    </div>
                    <p className="text-sm text-on-surface-variant line-clamp-2 mb-4">{fish.description}</p>
                    <div className="flex gap-2">
                      {fish.lures.map((lure, idx) => (
                        <span key={idx} className="px-3 py-1 bg-surface-container-highest text-on-surface-variant text-xs rounded-full">
                          {lure}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Techniques Section */}
        <section>
          <h2 className="text-lg font-bold font-headline text-on-surface mb-4">热门钓法</h2>
          <div className="grid grid-cols-2 gap-4">
            {techniques.map((tech, idx) => (
              <div key={idx} className="bg-surface-container-low rounded-3xl p-5">
                <div className={`w-12 h-12 mb-3 flex items-center justify-center rounded-2xl ${tech.bgColor}`}>
                  <span className={`material-symbols-outlined ${tech.color}`} style={{ fontVariationSettings: "'FILL' 1" }}>
                    {tech.icon}
                  </span>
                </div>
                <h3 className="font-bold text-on-surface mb-2">{tech.title}</h3>
                <p className="text-xs text-on-surface-variant">{tech.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
};

export default EncyclopediaPage;

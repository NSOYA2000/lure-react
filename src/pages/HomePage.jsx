import { useNavigate } from 'react-router-dom';
import TopBar from '../components/TopBar';
import PostCard from '../components/PostCard';
import carouselBanner from '../assets/images/carousel-banner.png';
import headlineFeature from '../assets/images/headline-feature.png';
import avatarCaptain from '../assets/images/avatar-captain.png';
import fishCatch from '../assets/images/fish-catch.png';
import lureDetail from '../assets/images/lure-detail.png';

const HomePage = () => {
  const navigate = useNavigate();

  const handleViewTournament = () => navigate('/tournament');
  const handleViewAllHeadlines = () => navigate('/encyclopedia');
  const handleReadDetails = () => navigate('/encyclopedia');
  const handleAddRecord = () => navigate('/add-record');

  const posts = [
    {
      id: 1,
      author: '加勒比船长',
      avatar: avatarCaptain,
      time: '2 小时前',
      location: '密歇根湖',
      content: '终于用这款新的钨钢铅头钩搞定这条 5 磅重的小口黑鲈！灵敏度简直无敌，中鱼前能清晰感觉到水底的每一颗碎石。',
      images: [fishCatch, lureDetail],
      tags: [],
      likes: 428,
      comments: 56,
      liked: false
    },
    {
      id: 2,
      author: '路亚大师 99',
      avatar: null,
      time: '5 小时前',
      location: '装备讨论',
      content: '在浑水中什么颜色效果最好？我一直在纠结该选虎皮色还是黑蓝/荧光绿。',
      images: [],
      tags: ['提问', '装备'],
      likes: 89,
      comments: 112,
      liked: false
    }
  ];

  return (
    <div className="bg-surface font-body text-on-surface">
      <TopBar title="路亚圈" />

      <main className="pt-20 pb-28">
        {/* Tournament Banner */}
        <section className="px-6 mb-8">
          <div
            onClick={handleViewTournament}
            className="relative w-full rounded-3xl overflow-hidden group cursor-pointer bg-gradient-to-br from-[#2d3a28] to-[#3a4a34] p-6"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/20 rounded-full blur-3xl" />
            <div className="relative z-10">
              <span className="bg-amber-500 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full w-fit mb-3">
                火热报名中
              </span>
              <h2 className="text-white text-2xl font-bold font-headline leading-tight mb-2">
                2024 全国路亚锦标赛
              </h2>
              <p className="text-emerald-200 text-sm mb-4">6 月 21-22 日 · 浙江千岛湖</p>
              <div className="flex items-center gap-2 text-amber-400 text-sm font-bold">
                <span>了解详情</span>
                <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </div>
            </div>
          </div>
        </section>

        {/* Carousel Banner */}
        <section className="px-6 mb-8">
          <div className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden group">
            <img
              className="w-full h-full object-cover"
              alt="Professional fisherman casting a lure during sunrise"
              src={carouselBanner}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-6">
              <span className="bg-tertiary-container text-on-tertiary-container text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full w-fit mb-2">精选活动</span>
              <h2 className="text-white text-2xl font-bold font-headline leading-tight">
                2024 全国鲈鱼公开赛：<br />晨间出击
              </h2>
            </div>
          </div>
        </section>

        {/* Daily Headlines */}
        <section className="px-6 mb-10">
          <div className="flex justify-between items-end mb-4">
            <h2 className="text-2xl font-bold font-headline text-primary">今日头条</h2>
            <span
              onClick={handleViewAllHeadlines}
              className="text-sm font-semibold text-secondary flex items-center gap-1 cursor-pointer"
            >
              查看全部 <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </span>
          </div>
          <div className="bg-surface-container-lowest rounded-3xl overflow-hidden group">
            <div className="relative h-56 overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="Close up of a technical fishing lure in water"
                src={headlineFeature}
              />
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-medium">技巧</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold font-headline mb-3 text-on-surface">
                掌握"之字狗"动作：诱发水面爆口的秘籍
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                学习细微的手腕抖动技巧，让你的铅笔饵在水面划出完美的弧线，瞬间点燃大鱼的攻击欲望。
              </p>
              <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-outline">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs">calendar_today</span> 2023 年 10 月 24 日
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs">visibility</span> 1.24 万 阅读
                  </span>
                </div>
                <button
                  onClick={handleReadDetails}
                  className="bg-primary-container text-white px-5 py-2 rounded-xl text-xs font-bold transition-all active:scale-95"
                >
                  阅读详情
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Hot Discussions */}
        <section className="px-6">
          <h2 className="text-2xl font-bold font-headline text-primary mb-6">热门讨论</h2>
          <div className="space-y-6">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      </main>

      {/* FAB */}
      <button
        onClick={handleAddRecord}
        className="fixed right-6 bottom-28 w-14 h-14 bg-gradient-to-br from-tertiary to-tertiary-container text-white rounded-2xl shadow-[0_12px_32px_rgba(130,69,8,0.3)] flex items-center justify-center z-40 active:scale-95 transition-all"
      >
        <span className="material-symbols-outlined text-3xl">add</span>
      </button>
    </div>
  );
};

export default HomePage;

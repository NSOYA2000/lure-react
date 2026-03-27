import { useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * 圈子页面 - 钓鱼社区动态
 */
const CommunityPage = () => {
  const [activeTab, setActiveTab] = useState('recommend');
  const [selectedTag, setSelectedTag] = useState('all');

  // 标签分类
  const tags = [
    { id: 'all', label: '全部' },
    { id: 'gear', label: '装备' },
    { id: 'skill', label: '技巧' },
    { id: 'spot', label: '钓点' },
    { id: 'bass', label: '鲈鱼钓法' },
    { id: 'trout', label: '溪流鳟鱼' },
    { id: 'saltwater', label: '海水路亚' },
  ];

  // 帖子数据
  const posts = [
    {
      id: 1,
      user: {
        name: 'RiverWalker_99',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAe2w1hst6Upvre_kU6C1cbDnuRYjJBUIxnR5OJUNwE2UnFE2mwIImhLgjrsyrkZcqNbLIah9Csi98z5isFBWYUf3ZbLyO4kzSHVVmtTfZF0Dha1fDyqdcFkq6_O5X3PM2l7nqHA6t553AtSHmivJ-pPCLdYR79A_r-kzeRPzmkWbvf2bnNG6yDvVqzAGoQBXTkRE4FODa3O-3ipPr1VWNrXOKe3-8l4r-F9cFjNgWEl5dkkUEu5_CJH2tm6kcq5-BmR4ZHJ9b6we0',
      },
      time: '2 hours ago',
      content: '今天早上发现一个绝佳的隐秘钓点。水质清澈，小口黑鲈非常活跃。使用 3 英寸银色软饵。',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAby21D3skWhVDcGp9kbrw0QRTDWeoDF3pn7AY-sNAXpG6ZEWQXiGkEwO5YKc8vAncpSL2yVtX5OOYL4ZiYfBHaV7Nhlv4cMYjt_blNl4rOKDfvYVBcLKDBQ7jFmesb_5p3vzIb4B1plyIT4EQzsjAWCfM6zwf_PeJJLlV7bkU-N7p0OV950QxVfghJtJXX9flsJcL1fq_vRKL-6kmAVnEBpc_mGkI4C97rg1SKdj4gEQUoIUyN5kypnCHgW4K5cnROkpPh6PYdWPk',
      likes: 128,
      comments: 24,
      isFeatured: true,
    },
    {
      id: 2,
      user: {
        name: 'Angler_Master',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuGMXb8qHk4bkhJWFGCIt4ZKAsFU_9D_Df8XfF1cxRrzJoCF2EU9FGT_ABNKoyxG7PDhiLLm4Na7CpGobMpwhapMs7a8dRjeR2AsJjwzyOnMyCvuI2pgChsHmrOoY-JwHALSNiJE2x22UyO7DQ0MijuP_TiIYAHs9Yl_-X_LcUbScGZGVo8qVWHfqGCjjxx5swyWUfXjDqDxQQ45Vt3UP7qDBGIH4f35i5dGgf_5MFDqbiDl3HwYtPFeY8RI3bwKxQuoHeaOAbJb8',
      },
      time: '5 hours ago',
      content: '测试新的碳纤维鱼竿系列。灵敏度无与伦比，在深层水流中也能感觉到微弱的咬钩。强烈推荐用于锦标赛准备。',
      images: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBmSPSkzy2SVlta7DUVrcAUwM_KZztOBOSOvIVeN8As2jUFRZ-A2Wxz3zD2w23Dxi-z-a9eAWmG1dy6OMN4Fzg5e3_x37VREja7Xg4mFsxKg5dJb47dyPDqhDOSefzwzwr6CLVCzgHHRx1wxLaU0tkudwSZl72Tvsb3Groaf3XCIxaD3IuJZ0WnGIuX8bpe-5W5319tpGW3b34SrHILSYTpZ4Uc2tKkH_2GH7zSCB4SL4L9O2355uIoyHU6mcDjhtC-rwRTZi25t8k',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuC5XtOpSSLHOTZqYD24aziBagi6Z_ACmdsMvH2oWJbLMQXht4CGnuuZIVwAjc4vXcaZOIFLgxiZNle7v88Pcwl57Djsaqz6kV-o_e-RAI0qR-YZNVUuJ97aDtPoKtE-Rkz6fJ6KWQ3WOlxq66fPo05ZSzNCRjrHPWY1YEF7Kmid-TFA15M2joKZrUmfua3tJUrfc_PB_joL7caRY02cZSG8CV0ECiLa1vW2ZiiI6LnNCH6ebsWrrkAUxpLFYgpZuUtL-bpokBRq180',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDMn7phcP3Pc0c4x9jvxRleNwW9jyMyY2Wt7W6GMSzb4YIPA7nNz2Y4vei77ePscKsLhZl2C1SenBt07xdmx9DQXhzxs942jUeXrkdCsR5k0N7rjOc4XvBe4pzoLD_WnMIwVV8it0NCQBUcUm5kX_5BwlB9QayG9KwAqhLumRulI7_rOHkB8AxzgEiqjhqfH9vNHnmlGTph37-AwYxAYpZUVbWMJeNxhl8ZgA5IJOKQ5fiYr-mOFQoopMqMF9cEhdLe7rn7x5J_S2M',
      ],
      gear: {
        name: 'StealthStrike Pro 7\'2" 鱼竿',
        icon: 'shopping_bag',
      },
      likes: 342,
      comments: 56,
      isLarge: true,
    },
    {
      id: 3,
      user: {
        name: 'LureZen_Expert',
        avatar: null,
        initials: 'LZ',
      },
      time: '1 day ago',
      content: '"当水温降至 10°C 以下时，放慢你的收线速度。鱼会变得迟钝，更喜欢容易捕食的目标。"',
      isTip: true,
      likes: 89,
      comments: 12,
    },
    {
      id: 4,
      title: '月度渔获挑战',
      progress: {
        current: 420,
        target: 500,
        percentage: 84,
      },
      badge: '即将达成',
    },
  ];

  return (
    <>
      {/* TopBar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/10">
        <div className="flex items-center justify-between px-4 h-14">
          <div className="flex items-center gap-3">
            <button className="material-symbols-outlined text-on-surface active:scale-95 transition-transform">
              menu
            </button>
            <h1 className="text-xl font-bold font-headline text-primary">圈子</h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">
              search
            </button>
            <div className="w-8 h-8 rounded-full overflow-hidden bg-surface-container">
              <img
                alt="Avatar"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4DLgJloEANmz6xGSJUO8lC2JZCyo8aapSdSNnpsu0p3PkLP078RfmmbbmslpUKqpKZKEC5-9nety3GKK_qX-ccljjwA4KxwY_pTcrlTfZF0Dha1fDyqdcFkq6_O5X3PM2l7nqHA6t553AtSHmivJ-pPCLdYR79A_r-kzeRPzmkWbvf2bnNG6yDvVqzAGoQBXTkRE4FODa3O-3ipPr1VWNrXOKe3-8l4r-F9cFjNgWEl5dkkUEu5_CJH2tm6kcq5-BmR4ZHJ9b6we0"
              />
            </div>
          </div>
        </div>

        {/* Tab 导航 */}
        <nav className="flex justify-center border-t border-outline-variant/10">
          <div className="flex items-center gap-1 h-10 font-headline font-semibold text-sm">
            {[
              { id: 'follow', label: '关注' },
              { id: 'recommend', label: '推荐' },
              { id: 'local', label: '同城' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-1 rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-on-surface-variant hover:bg-surface-container-highest'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </nav>
      </header>

      <main className="pt-28 pb-24 px-4">
        {/* 水平滚动标签 */}
        <section className="mb-6">
          <div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
            {tags.map((tag) => (
              <button
                key={tag.id}
                onClick={() => setSelectedTag(tag.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium font-body transition-all ${
                  selectedTag === tag.id
                    ? 'bg-primary text-on-primary shadow-sm'
                    : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'
                }`}
              >
                {tag.label}
              </button>
            ))}
          </div>
        </section>

        {/* 帖子列表 */}
        <div className="flex flex-col gap-4">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </main>
    </>
  );
};

/**
 * 帖子卡片组件
 */
const PostCard = ({ post }) => {
  const [liked, setLiked] = useState(false);

  // 挑战卡片
  if (post.progress) {
    return (
      <article className="bg-surface-container-lowest rounded-xl p-4 shadow-sm border border-outline-variant/10">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-bold font-headline text-tertiary-container">
            {post.title}
          </p>
          <span className="material-symbols-outlined text-tertiary text-lg">
            emoji_events
          </span>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-medium font-body">
            <span className="text-on-surface-variant">社区总重量</span>
            <span className="text-on-surface">
              {post.progress.current}kg / {post.progress.target}kg
            </span>
          </div>
          <div className="h-2 w-full bg-tertiary-container/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-tertiary rounded-full shadow-[0_0_8px_rgba(97,48,0,0.3)] transition-all"
              style={{ width: `${post.progress.percentage}%` }}
            />
          </div>
          <p className="text-[11px] text-on-surface-variant">
            快要达成了！记录你的渔获，为所有参与者解锁「深水大师」勋章。
          </p>
        </div>
      </article>
    );
  }

  // 专业提示卡片
  if (post.isTip) {
    return (
      <article className="bg-surface-container-lowest rounded-xl p-4 shadow-sm border border-outline-variant/10">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            {post.user.avatar ? (
              <img
                alt={post.user.name}
                className="w-8 h-8 rounded-full object-cover"
                src={post.user.avatar}
              />
            ) : (
              <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container font-bold text-xs font-body">
                {post.user.initials}
              </div>
            )}
            <div>
              <p className="font-semibold text-sm font-body text-on-surface">
                {post.user.name}
              </p>
              <p className="text-xs text-on-surface-variant">{post.time}</p>
            </div>
          </div>
        </div>
        <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-primary-container text-on-primary">
          <span className="text-[10px] font-bold uppercase tracking-widest font-body opacity-80">
            专业建议
          </span>
          <p className="mt-1 text-sm font-medium leading-relaxed italic font-body">
            {post.content}
          </p>
        </div>
        <div className="flex items-center justify-between pt-3 mt-2 border-t border-outline-variant/10">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLiked(!liked)}
              className={`flex items-center gap-1 transition-colors ${
                liked ? 'text-red-500' : 'text-on-surface-variant hover:text-red-500'
              }`}
            >
              <span
                className="material-symbols-outlined text-lg"
                style={{ fontVariationSettings: liked ? "'FILL' 1" : undefined }}
              >
                favorite
              </span>
              <span className="text-xs font-medium font-body">{post.likes}</span>
            </button>
            <button className="flex items-center gap-1 text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-lg">
                chat_bubble
              </span>
              <span className="text-xs font-medium font-body">{post.comments}</span>
            </button>
          </div>
          <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">
            share
          </button>
        </div>
      </article>
    );
  }

  // 大卡片（多图表文）
  if (post.isLarge) {
    return (
      <article className="bg-surface-container-lowest rounded-xl p-4 shadow-sm border border-outline-variant/10">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <img
              alt={post.user.name}
              className="w-8 h-8 rounded-full object-cover"
              src={post.user.avatar}
            />
            <div>
              <p className="font-semibold text-sm font-body text-on-surface">
                {post.user.name}
              </p>
              <p className="text-xs text-on-surface-variant">{post.time}</p>
            </div>
          </div>
          <button className="material-symbols-outlined text-on-surface-variant text-lg">
            more_horiz
          </button>
        </div>
        <p className="text-sm leading-relaxed text-on-surface-variant font-body mb-3">
          {post.content}
        </p>
        <div className="grid grid-cols-2 gap-2 mb-3">
          <img
            alt="Gear"
            className="w-full h-40 object-cover rounded-xl"
            src={post.images[0]}
          />
          <div className="grid grid-rows-2 gap-2">
            <img
              alt="Lure"
              className="w-full h-full object-cover rounded-xl"
              src={post.images[1]}
            />
            <img
              alt="River"
              className="w-full h-full object-cover rounded-xl"
              src={post.images[2]}
            />
          </div>
        </div>
        {post.gear && (
          <div className="bg-surface-container p-3 rounded-xl mb-3">
            <div className="flex items-center gap-2 mb-1">
              <span className="material-symbols-outlined text-tertiary text-sm">
                {post.gear.icon}
              </span>
              <span className="text-xs font-bold uppercase tracking-tight font-body text-on-surface-variant">
                精选装备
              </span>
            </div>
            <p className="text-xs font-medium font-body text-on-surface">
              {post.gear.name}
            </p>
          </div>
        )}
        <div className="flex items-center justify-between pt-2 border-t border-outline-variant/10">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLiked(!liked)}
              className={`flex items-center gap-1 transition-colors ${
                liked ? 'text-red-500' : 'text-on-surface-variant hover:text-red-500'
              }`}
            >
              <span
                className="material-symbols-outlined text-lg"
                style={{ fontVariationSettings: liked ? "'FILL' 1" : undefined }}
              >
                favorite
              </span>
              <span className="text-xs font-medium font-body">{post.likes}</span>
            </button>
            <button className="flex items-center gap-1 text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-lg">
                chat_bubble
              </span>
              <span className="text-xs font-medium font-body">{post.comments}</span>
            </button>
          </div>
          <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">
            share
          </button>
        </div>
      </article>
    );
  }

  // 标准卡片
  return (
    <article className="bg-surface-container-lowest rounded-xl p-4 shadow-sm border border-outline-variant/10">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <img
            alt={post.user.name}
            className="w-8 h-8 rounded-full object-cover"
            src={post.user.avatar}
          />
          <div>
            <p className="font-semibold text-sm font-body text-on-surface">
              {post.user.name}
            </p>
            <p className="text-xs text-on-surface-variant">{post.time}</p>
          </div>
        </div>
        <button className="material-symbols-outlined text-on-surface-variant text-lg">
          more_horiz
        </button>
      </div>
      <p className="text-sm leading-relaxed text-on-surface-variant font-body mb-3">
        {post.content}
      </p>
      {post.image && (
        <div className="rounded-xl overflow-hidden aspect-[4/3] relative mb-3">
          <img
            alt="Catch"
            className="w-full h-full object-cover"
            src={post.image}
          />
          {post.isFeatured && (
            <div className="absolute bottom-2 left-2">
              <span className="bg-black/40 backdrop-blur-md text-white text-[10px] px-2 py-1 rounded-full uppercase tracking-widest font-bold font-body">
                推荐
              </span>
            </div>
          )}
        </div>
      )}
      <div className="flex items-center justify-between pt-2 border-t border-outline-variant/10">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setLiked(!liked)}
            className={`flex items-center gap-1 transition-colors ${
              liked ? 'text-red-500' : 'text-on-surface-variant hover:text-red-500'
            }`}
          >
            <span
              className="material-symbols-outlined text-lg"
              style={{ fontVariationSettings: liked ? "'FILL' 1" : undefined }}
            >
              favorite
            </span>
            <span className="text-xs font-medium font-body">{post.likes}</span>
          </button>
          <button className="flex items-center gap-1 text-on-surface-variant hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-lg">
              chat_bubble
            </span>
            <span className="text-xs font-medium font-body">{post.comments}</span>
          </button>
        </div>
        <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">
          share
        </button>
      </div>
    </article>
  );
};

export default CommunityPage;

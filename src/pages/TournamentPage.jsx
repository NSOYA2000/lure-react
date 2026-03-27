import { useNavigate } from 'react-router-dom';
import carouselBanner from '../assets/images/carousel-banner.png';
import fishCatch from '../assets/images/fish-catch.png';
import headlineFeature from '../assets/images/headline-feature.png';
import lureDetail from '../assets/images/lure-detail.png';

const TournamentPage = () => {
  const navigate = useNavigate();

  const handleRegister = () => navigate('/add-record');

  const highlights = [
    { icon: 'trophy', title: '高额奖金池', description: '总奖金超过 10 万元，冠军独享 5 万元大奖' },
    { icon: 'tools', title: '专业装备支持', description: '所有参赛选手获赠价值 2000 元的专业路亚装备套装' },
    { icon: 'verified', title: '官方认证证书', description: '完赛选手将获得中国路亚协会颁发的官方参赛证书' },
    { icon: 'camera_enhance', title: '专业摄影记录', description: '全程专业摄影团队跟拍，记录你的高光时刻' }
  ];

  const schedule = [
    { date: '即日起 - 6 月 15 日', title: '报名阶段', description: '线上提交报名信息，缴纳报名费', status: 'active' },
    { date: '6 月 20 日', title: '选手签到', description: '现场领取装备包，参加技术说明会', status: 'upcoming' },
    { date: '6 月 21-22 日', title: '正式比赛', description: '两天竞技，每日比赛时间 6:00-16:00', status: 'upcoming' },
    { date: '6 月 22 日晚', title: '颁奖典礼', description: '公布成绩，颁发奖金与证书', status: 'upcoming' }
  ];

  const prizes = [
    { rank: '冠军', prize: '¥50,000', trophy: '🏆', color: 'from-amber-400 to-amber-600' },
    { rank: '亚军', prize: '¥30,000', trophy: '🥈', color: 'from-slate-300 to-slate-400' },
    { rank: '季军', prize: '¥15,000', trophy: '🥉', color: 'from-orange-600 to-orange-800' },
    { rank: '殿军', prize: '¥5,000', trophy: '🎖️', color: 'from-emerald-600 to-emerald-800' }
  ];

  const galleryImages = [
    { src: carouselBanner, alt: '选手抛竿瞬间' },
    { src: fishCatch, alt: '渔获展示' },
    { src: headlineFeature, alt: '比赛现场' },
    { src: lureDetail, alt: '装备特写' }
  ];

  return (
    <div className="min-h-screen bg-[#f5f2eb] font-body">
      {/* Top App Bar */}
      <header className="fixed top-0 w-full z-50 bg-[#2d3a28]/95 backdrop-blur-md">
        <div className="flex justify-between items-center w-full px-6 py-4">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-emerald-100 cursor-pointer" onClick={() => navigate('/')}>
              arrow_back
            </span>
            <h1 className="text-xl font-bold tracking-tight text-emerald-100 font-headline">钓鱼大赛</h1>
          </div>
          <button onClick={handleRegister} className="bg-amber-500 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-amber-600 transition-colors">
            立即报名
          </button>
        </div>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[500px] overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${carouselBanner})` }} />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2d3a28]/80 via-[#2d3a28]/60 to-[#f5f2eb]" />
          <div className="relative z-10 h-full flex flex-col justify-end px-6 pb-12">
            <span className="bg-amber-500/90 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full w-fit mb-4">
              2024 全国路亚锦标赛
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">
              征服自然<br /><span className="text-amber-400">见证传奇</span>
            </h2>
            <p className="text-emerald-100 text-lg mb-6 max-w-md">6 月 21-22 日 · 浙江千岛湖</p>
            <div className="flex gap-4">
              <button onClick={handleRegister} className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-2xl text-base font-bold shadow-lg shadow-amber-500/30 transition-all active:scale-95">
                立即报名参赛
              </button>
              <button className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white px-8 py-4 rounded-2xl text-base font-bold transition-all active:scale-95">
                了解详情
              </button>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="bg-[#2d3a28] text-white py-8 px-6">
          <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400 mb-1">10 万+</div>
              <div className="text-emerald-200 text-sm">总奖金池</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400 mb-1">200+</div>
              <div className="text-emerald-200 text-sm">参赛名额</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400 mb-1">3 天</div>
              <div className="text-emerald-200 text-sm">赛程</div>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="px-6 py-12">
          <h2 className="text-2xl font-bold font-headline text-[#2d3a28] mb-8 text-center">赛事亮点</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {highlights.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#e8f0e6] flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-[#4a6741] text-2xl">{item.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#2d3a28] mb-2">{item.title}</h3>
                    <p className="text-[#6b7a66] text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Schedule */}
        <section className="px-6 py-12 bg-[#e8f0e6]">
          <h2 className="text-2xl font-bold font-headline text-[#2d3a28] mb-8 text-center">赛事日程</h2>
          <div className="max-w-2xl mx-auto">
            {schedule.map((item, idx) => (
              <div key={idx} className="relative pl-8 pb-8 last:pb-0">
                {idx !== schedule.length - 1 && <div className="absolute left-[11px] top-10 bottom-0 w-0.5 bg-[#c5d3c0]" />}
                <div className={`absolute left-0 top-1 w-6 h-6 rounded-full border-4 ${item.status === 'active' ? 'bg-amber-500 border-amber-200' : 'bg-white border-[#c5d3c0]'}`} />
                <div className="ml-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${item.status === 'active' ? 'bg-amber-500 text-white' : 'bg-[#c5d3c0] text-[#6b7a66]'}`}>
                      {item.date}
                    </span>
                  </div>
                  <h3 className="font-bold text-[#2d3a28] text-lg mb-1">{item.title}</h3>
                  <p className="text-[#6b7a66] text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Prizes */}
        <section className="px-6 py-12">
          <h2 className="text-2xl font-bold font-headline text-[#2d3a28] mb-2 text-center">奖项设置</h2>
          <p className="text-[#6b7a66] text-center mb-8">丰厚的奖金和荣誉等你来拿</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {prizes.map((item, idx) => (
              <div key={idx} className="relative bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="text-4xl mb-3">{item.trophy}</div>
                <div className="text-xs font-bold text-[#6b7a66] uppercase tracking-wider mb-1">{item.rank}</div>
                <div className={`text-2xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>{item.prize}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery */}
        <section className="px-6 py-12 bg-[#2d3a28]">
          <h2 className="text-2xl font-bold font-headline text-white mb-2 text-center">往届精彩</h2>
          <p className="text-emerald-200 text-center mb-8">精彩瞬间，定格回忆</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {galleryImages.map((img, idx) => (
              <div key={idx} className={`relative overflow-hidden rounded-xl ${idx === 0 ? 'col-span-2 row-span-2' : ''}`}>
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover min-h-[150px] hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white text-sm font-medium">{img.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-16 bg-gradient-to-b from-[#f5f2eb] to-[#e8f0e6]">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-headline text-[#2d3a28] mb-4">准备好迎接挑战了吗？</h2>
            <p className="text-[#6b7a66] text-lg mb-8 leading-relaxed">名额有限，报满即止。立即报名，成为 2024 全国路亚锦标赛的参赛选手！</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={handleRegister} className="bg-amber-500 hover:bg-amber-600 text-white px-10 py-4 rounded-2xl text-base font-bold shadow-lg shadow-amber-500/30 transition-all active:scale-95">
                立即报名
              </button>
              <button className="bg-[#2d3a28] hover:bg-[#3a4a34] text-white px-10 py-4 rounded-2xl text-base font-bold transition-all active:scale-95">
                下载赛事手册
              </button>
            </div>
            <p className="text-[#8a9a85] text-xs mt-6">报名截止时间：2024 年 6 月 15 日 23:59</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1a2318] text-[#8a9a85] py-8 px-6">
        <div className="max-w-4xl mx-auto text-center text-sm">
          <p className="mb-2">主办单位：中国路亚协会 | 承办单位：千岛湖路亚基地</p>
          <p className="text-xs">© 2024 全国路亚锦标赛组委会 版权所有</p>
        </div>
      </footer>
    </div>
  );
};

export default TournamentPage;

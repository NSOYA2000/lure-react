import React from 'react';
import { useNavigate } from 'react-router-dom';
import carouselBanner from '../assets/images/carousel-banner.png';
import headlineFeature from '../assets/images/headline-feature.png';
import avatarCaptain from '../assets/images/avatar-captain.png';
import fishCatch from '../assets/images/fish-catch.png';
import lureDetail from '../assets/images/lure-detail.png';

const HomePage = () => {
    const navigate = useNavigate();

    const handleAddRecord = () => {
        navigate('/add-record');
    };

    const handleViewAllHeadlines = () => {
        navigate('/encyclopedia');
    };

    const handleReadDetails = () => {
        // 这里可以导航到文章详情页，暂时先导航到百科页
        navigate('/encyclopedia');
    };

    const handleViewProfile = () => {
        navigate('/profile');
    };

    const handleViewFishDetail = (fishId) => {
        navigate(`/fish/${fishId}`);
    };

    return (
        <div className="bg-surface font-body text-on-surface">
            {/* TopAppBar */}
            <header className="fixed top-0 w-full z-50 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-md">
                <div className="flex justify-between items-center w-full px-6 py-4">
                    <div className="flex items-center gap-4">
                        <span className="material-symbols-outlined text-emerald-900 dark:text-emerald-500 cursor-pointer">menu</span>
                        <h1 className="text-xl font-bold tracking-tight text-emerald-900 dark:text-emerald-100 font-headline">路亚圈</h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="material-symbols-outlined text-emerald-900 dark:text-emerald-500 cursor-pointer">search</span>
                        <span className="material-symbols-outlined text-emerald-900 dark:text-emerald-500 cursor-pointer">notifications</span>
                    </div>
                </div>
            </header>

            <main className="pt-20 pb-28">
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
                            <h2 className="text-white text-2xl font-bold font-headline leading-tight">2024 全国鲈鱼公开赛：<br />晨间出击</h2>
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
                            <h3 className="text-xl font-bold font-headline mb-3 text-on-surface">掌握"之字狗"动作：诱发水面爆口的秘籍</h3>
                            <p className="text-on-surface-variant text-sm leading-relaxed mb-4">学习细微的手腕抖动技巧，让你的铅笔饵在水面划出完美的弧线，瞬间点燃大鱼的攻击欲望。</p>
                            <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-outline">
                                <div className="flex items-center gap-4">
                                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-xs">calendar_today</span> 2023年10月24日</span>
                                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-xs">visibility</span> 1.24万 阅读</span>
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
                        {/* Post 1 */}
                        <div className="bg-surface-container-low rounded-3xl p-6 relative overflow-hidden">
                            <div className="flex items-center gap-3 mb-4">
                                <img
                                    className="w-12 h-12 rounded-full object-cover border-2 border-white"
                                    alt="Portrait of a smiling fisherman"
                                    src={avatarCaptain}
                                />
                                <div>
                                    <h4 className="font-bold text-on-surface">加勒比船长</h4>
                                    <p className="text-xs text-outline">2小时前 • 密歇根湖</p>
                                </div>
                            </div>
                            <p className="text-on-surface mb-4 leading-relaxed">终于用这款新的钨钢铅头钩搞定这条5磅重的小口黑鲈！灵敏度简直无敌，中鱼前能清晰感觉到水底的每一颗碎石。</p>
                            <div className="grid grid-cols-2 gap-3 mb-4">
                                <img
                                    className="rounded-2xl h-40 w-full object-cover"
                                    alt="Fisherman holding a large smallmouth bass"
                                    src={fishCatch}
                                />
                                <img
                                    className="rounded-2xl h-40 w-full object-cover"
                                    alt="Detailed shot of a fishing jig"
                                    src={lureDetail}
                                />
                            </div>
                            <div className="flex items-center gap-6">
                                <button className="flex items-center gap-1.5 text-sm font-semibold text-primary">
                                    <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span> 428
                                </button>
                                <button className="flex items-center gap-1.5 text-sm font-semibold text-outline">
                                    <span className="material-symbols-outlined text-xl">chat_bubble</span> 56
                                </button>
                                <button className="flex items-center gap-1.5 text-sm font-semibold text-outline ml-auto">
                                    <span className="material-symbols-outlined text-xl">share</span>
                                </button>
                            </div>
                        </div>

                        {/* Post 2 */}
                        <div className="bg-surface-container-low rounded-3xl p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center">
                                    <span className="material-symbols-outlined text-on-secondary-container">person</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-on-surface">路亚大师99</h4>
                                    <p className="text-xs text-outline">5小时前 • 装备讨论</p>
                                </div>
                            </div>
                            <p className="text-on-surface mb-4 font-semibold">在浑水中什么颜色效果最好？我一直在纠结该选虎皮色还是黑蓝/荧光绿。</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-4 py-1.5 bg-surface-container-highest text-on-surface-variant text-xs font-bold rounded-full">提问</span>
                                <span className="px-4 py-1.5 bg-surface-container-highest text-on-surface-variant text-xs font-bold rounded-full">装备</span>
                            </div>
                            <div className="flex items-center gap-6">
                                <button className="flex items-center gap-1.5 text-sm font-semibold text-outline">
                                    <span className="material-symbols-outlined text-xl">favorite</span> 89
                                </button>
                                <button className="flex items-center gap-1.5 text-sm font-semibold text-primary">
                                    <span className="material-symbols-outlined text-xl">chat_bubble</span> 112
                                </button>
                            </div>
                        </div>
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

            {/* BottomNavBar - Hidden because main App provides navigation */}
            <nav className="fixed bottom-0 left-0 w-full z-50 rounded-t-3xl bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl shadow-[0_-4px_20px_rgba(0,0,0,0.05)] hidden">
                <div className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-3">
                    <a className="flex flex-col items-center justify-center bg-emerald-100 dark:bg-emerald-900/40 text-emerald-900 dark:text-emerald-100 rounded-2xl px-4 py-1.5 scale-90 transition-transform duration-200" href="#">
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
                        <span className="text-[10px] font-semibold font-inter uppercase tracking-wider">首页</span>
                    </a>
                    <a className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 px-4 py-1.5 hover:text-emerald-700 dark:hover:text-emerald-300" href="#">
                        <span className="material-symbols-outlined">menu_book</span>
                        <span className="text-[10px] font-semibold font-inter uppercase tracking-wider">百科</span>
                    </a>
                    <a className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 px-4 py-1.5 hover:text-emerald-700 dark:hover:text-emerald-300" href="#">
                        <span className="material-symbols-outlined">explore</span>
                        <span className="text-[10px] font-semibold font-inter uppercase tracking-wider">发现</span>
                    </a>
                    <a className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 px-4 py-1.5 hover:text-emerald-700 dark:hover:text-emerald-300" href="#">
                        <span className="material-symbols-outlined">chat_bubble</span>
                        <span className="text-[10px] font-semibold font-inter uppercase tracking-wider">消息</span>
                    </a>
                    <a className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 px-4 py-1.5 hover:text-emerald-700 dark:hover:text-emerald-300" href="#">
                        <span className="material-symbols-outlined">person</span>
                        <span className="text-[10px] font-semibold font-inter uppercase tracking-wider">我的</span>
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default HomePage;
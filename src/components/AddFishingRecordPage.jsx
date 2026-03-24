import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddFishingRecordPage = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1); // 返回上一页
  };

  const handleSave = () => {
    alert('保存成功！');
    navigate('/profile'); // 保存后跳转到个人中心
  };

  const handlePhotoUpload = () => {
    alert('照片上传功能开发中');
  };

  return (
    <div className="text-on-surface antialiased">
      {/* Mobile Modal Container */}
      <div className="max-w-md mx-auto min-h-screen bg-surface shadow-2xl relative flex flex-col">
        {/* Header - Fixed Top */}
        <header className="glass-header sticky top-0 z-50 flex items-center justify-between px-6 py-5">
          <h1 className="text-xl font-bold tracking-tight text-primary">新增渔获记录</h1>
          <button
            onClick={handleClose}
            aria-label="关闭"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-low hover:bg-surface-container-high transition-colors active:scale-95"
          >
            <span className="material-symbols-outlined text-on-surface-variant" data-icon="close">close</span>
          </button>
        </header>

        {/* Main Form Area */}
        <main className="flex-1 px-6 pt-4 pb-32">
          <form className="space-y-8">
            {/* Photo Upload Section - Asymmetric Bento Style */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <label className="text-sm font-semibold uppercase tracking-wider text-on-surface-variant font-label">渔获照片</label>
                <span className="text-xs text-on-surface-variant/60">最多上传3张</span>
              </div>
              <div className="grid grid-cols-3 gap-3 h-48">
                <div
                  onClick={handlePhotoUpload}
                  className="col-span-2 row-span-2 relative group cursor-pointer overflow-hidden rounded-3xl bg-surface-container-low border-2 border-dashed border-outline-variant/30 flex items-center justify-center hover:bg-surface-container transition-colors"
                >
                  <div className="flex flex-col items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-3xl" data-icon="add_a_photo">add_a_photo</span>
                    <span className="text-xs font-medium text-primary">主图</span>
                  </div>
                </div>
                <div
                  onClick={handlePhotoUpload}
                  className="relative group cursor-pointer overflow-hidden rounded-2xl bg-surface-container-low border-2 border-dashed border-outline-variant/30 flex items-center justify-center hover:bg-surface-container transition-colors"
                >
                  <span className="material-symbols-outlined text-outline text-xl" data-icon="add">add</span>
                </div>
                <div
                  onClick={handlePhotoUpload}
                  className="relative group cursor-pointer overflow-hidden rounded-2xl bg-surface-container-low border-2 border-dashed border-outline-variant/30 flex items-center justify-center hover:bg-surface-container transition-colors"
                >
                  <span className="material-symbols-outlined text-outline text-xl" data-icon="add">add</span>
                </div>
              </div>
            </section>

            {/* Species Selection */}
            <section className="space-y-2">
              <label className="text-sm font-semibold uppercase tracking-wider text-on-surface-variant font-label" htmlFor="species">鱼种</label>
              <div className="relative">
                <select className="w-full bg-surface-container-low border-none rounded-2xl px-5 py-4 appearance-none focus:ring-2 focus:ring-primary/20 text-on-surface font-medium" id="species">
                  <option value="">选择或搜索鱼种...</option>
                  <option value="bass">大口黑鲈</option>
                  <option value="trout">虹鳟</option>
                  <option value="pike">白斑狗鱼</option>
                  <option value="walleye">玻璃梭鲈</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <span className="material-symbols-outlined text-on-surface-variant" data-icon="expand_more">expand_more</span>
                </div>
              </div>
            </section>

            {/* Size & Weight - Grid Layout */}
            <section className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold uppercase tracking-wider text-on-surface-variant font-label">长度 (cm)</label>
                <input className="w-full bg-surface-container-low border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary/20 font-medium" placeholder="0.0" type="number"/>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold uppercase tracking-wider text-on-surface-variant font-label">重量 (kg)</label>
                <input className="w-full bg-surface-container-low border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary/20 font-medium" placeholder="0.00" type="number"/>
              </div>
            </section>

            {/* Date & Location */}
            <section className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold uppercase tracking-wider text-on-surface-variant font-label">钓获日期</label>
                <div className="relative">
                  <input className="w-full bg-surface-container-low border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary/20 font-medium text-on-surface" type="date"/>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <span className="material-symbols-outlined text-on-surface-variant" data-icon="calendar_today">calendar_today</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold uppercase tracking-wider text-on-surface-variant font-label">钓点</label>
                <div className="relative">
                  <input className="w-full bg-surface-container-low border-none rounded-2xl px-5 py-11 focus:ring-2 focus:ring-primary/20 font-medium pl-14" placeholder="输入钓点..." type="text"/>
                  <div className="absolute left-5 top-1/2 -translate-y-1/2">
                    <span className="material-symbols-outlined text-primary" data-icon="location_on" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                  </div>
                  {/* Mini Map Preview */}
                  <div className="absolute right-3 top-3 bottom-3 w-20 rounded-xl overflow-hidden shadow-sm">
                    <img
                      alt="钓点地图预览"
                      className="w-full h-full object-cover grayscale opacity-50"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4Ouzi6aamL7oXQVOlU0ZMPHgpWzKqHfBtTaRV53hGm_n58SsEZD7rWkBWpb5t0tmfJejdZVVWcE8YpYJVNK--lqF26k9K8YRQo4lK4UDaTOjVJfo7hH83zA2s77x0UgJXiX5RB_0wyrXIEGCOGIzfpXJ-tMQt1Jzp1RjCgwD69eZaI0UVJ1u4Zq3dl6vS3lUK7sEn9AyqPPSORxzMrjaU2w99CjGSj70L0caq5O6sgjK7RK0_KtOydlhNLoPRh04caY1PLLvgzxY"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Remarks / Notes */}
            <section className="space-y-2">
              <label className="text-sm font-semibold uppercase tracking-wider text-on-surface-variant font-label">备注</label>
              <textarea className="w-full bg-surface-container-low border-none rounded-3xl px-6 py-5 focus:ring-2 focus:ring-primary/20 font-body text-on-surface leading-relaxed resize-none" placeholder="使用的拟饵、水况、搏鱼细节等..." rows="4"></textarea>
            </section>
          </form>
        </main>

        {/* Footer - Floating Action Area */}
        <footer className="fixed bottom-0 left-0 right-0 max-w-md mx-auto p-6 glass-header">
          <button
            onClick={handleSave}
            className="w-full py-5 rounded-3xl bg-gradient-to-br from-tertiary to-tertiary-container text-white font-bold text-lg shadow-xl shadow-tertiary/20 active:scale-95 transition-transform"
          >
            保存到鱼护
          </button>
          <div className="mt-4 flex justify-center">
            <div className="w-32 h-1.5 bg-on-surface/10 rounded-full"></div>
          </div>
        </footer>
      </div>

      {/* Background Decoration (Desktop View) */}
      <div className="fixed inset-0 -z-10 hidden lg:flex items-center justify-center overflow-hidden">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-secondary-container/10 rounded-full blur-[100px]"></div>
      </div>
    </div>
  );
};

export default AddFishingRecordPage;
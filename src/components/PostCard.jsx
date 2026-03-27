/**
 * 帖子卡片组件
 * 用于展示社区帖子的卡片
 */
const PostCard = ({ post, onLike, onComment }) => {
  return (
    <div className="bg-surface-container-low rounded-3xl p-6 overflow-hidden">
      {/* 作者信息 */}
      <div className="flex items-center gap-3 mb-4">
        <img
          src={post.avatar}
          alt={post.author}
          className="w-12 h-12 rounded-full object-cover border-2 border-white"
        />
        <div className="flex-1">
          <h4 className="font-bold text-on-surface">{post.author}</h4>
          <p className="text-xs text-outline">{post.time} • {post.location}</p>
        </div>
      </div>

      {/* 帖子内容 */}
      <p className="text-on-surface mb-4 leading-relaxed">{post.content}</p>

      {/* 图片网格 */}
      {post.images && post.images.length > 0 && (
        <div className={`grid gap-3 mb-4 ${
          post.images.length === 1 ? 'grid-cols-1' :
          post.images.length === 2 ? 'grid-cols-2' :
          'grid-cols-2'
        }`}>
          {post.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Post image ${idx + 1}`}
              className={`rounded-2xl object-cover ${
                post.images.length === 1 ? 'h-64' : 'h-40'
              }`}
            />
          ))}
        </div>
      )}

      {/* 标签 */}
      {post.tags && post.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-4 py-1.5 bg-surface-container-highest text-on-surface-variant text-xs font-bold rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* 互动按钮 */}
      <div className="flex items-center gap-6">
        <button
          onClick={() => onLike?.(post.id)}
          className={`flex items-center gap-1.5 text-sm font-semibold ${
            post.liked ? 'text-primary' : 'text-outline'
          }`}
        >
          <span
            className="material-symbols-outlined text-xl"
            style={{ fontVariationSettings: post.liked ? "'FILL' 1" : undefined }}
          >
            favorite
          </span>
          {post.likes}
        </button>
        <button
          onClick={() => onComment?.(post.id)}
          className="flex items-center gap-1.5 text-sm font-semibold text-outline"
        >
          <span className="material-symbols-outlined text-xl">chat_bubble</span>
          {post.comments}
        </button>
        <button className="flex items-center gap-1.5 text-sm font-semibold text-outline ml-auto">
          <span className="material-symbols-outlined text-xl">share</span>
        </button>
      </div>
    </div>
  );
};

export default PostCard;

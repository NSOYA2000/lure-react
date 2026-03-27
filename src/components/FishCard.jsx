/**
 * 鱼类卡片组件
 * 用于展示鱼类信息的卡片
 */
const FishCard = ({ fish, onClick }) => {
  return (
    <div
      onClick={() => onClick?.(fish.id)}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={fish.image}
          alt={fish.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        {fish.tag && (
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-primary">
            {fish.tag}
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg text-on-surface mb-2">{fish.name}</h3>
        <p className="text-sm text-on-surface-variant mb-3 line-clamp-2">
          {fish.description}
        </p>
        <div className="flex items-center justify-between text-xs text-outline">
          <span>{fish.difficulty}</span>
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">location_on</span>
            {fish.location}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FishCard;

# Stitch Fishing - C 端前端

钓鱼应用 C 端前端项目 - React + Tailwind CSS

## 快速开始

### 1. 启动后端服务（必须先启动）

```bash
cd /Users/soya/Desktop/AI/stitch-backend
mvn spring-boot:run
```

等待后端启动成功后再启动前端。

### 2. 安装依赖（首次运行）

```bash
npm install
```

### 3. 启动开发服务器

```bash
npm run dev
```

访问：http://localhost:5173

## 可用命令

```bash
npm run dev      # 启动开发服务器
npm run build    # 构建生产版本
npm run preview  # 预览生产构建
npm run lint     # 运行 ESLint
```

## 项目结构

```
src/
├── assets/          # 静态资源
├── components/      # 通用组件
│   ├── BottomNav.jsx
│   ├── TopBar.jsx
│   ├── FishCard.jsx
│   └── PostCard.jsx
├── pages/           # 页面组件
│   ├── HomePage.jsx
│   ├── EncyclopediaPage.jsx    # 鱼种百科（调用后端 API）
│   ├── FishDetailPage.jsx
│   ├── ProfilePage.jsx
│   ├── AddFishingRecordPage.jsx
│   └── TournamentPage.jsx
├── routes/          # 路由配置
├── services/        # API 服务
│   └── fish.js      # 鱼种 API
├── utils/           # 工具函数
│   └── request.js   # Axios 封装
├── App.jsx          # 根组件
└── main.jsx         # 入口文件
```

## API 调用

项目已配置好后端 API 调用，位于 `src/services/fish.js`：

```javascript
import { getFishList, getFishDetail } from '@/services/fish';

// 获取鱼种列表
const fishList = await getFishList();

// 获取鱼种详情
const fish = await getFishDetail(id);
```

## 技术栈

- React 19
- React Router DOM
- Tailwind CSS v4
- Vite
- Axios

## 后端接口

| 接口 | 说明 |
|------|------|
| GET /api/fish/list | 获取鱼种列表 |
| GET /api/fish/{id} | 获取鱼种详情 |
| POST /api/auth/login | 用户登录 |

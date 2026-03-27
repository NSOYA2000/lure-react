import AppRoutes from './routes';
import BottomNav from './components/BottomNav';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-surface">
      {/* Material Icons 字体 */}
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      {/* 路由 */}
      <AppRoutes />

      {/* 底部导航 */}
      <BottomNav />
    </div>
  );
}

export default App;

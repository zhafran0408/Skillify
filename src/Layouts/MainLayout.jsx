import { NavLink, Outlet } from 'react-router-dom';

const MainLayout = () => {
  const activeLink = ({ isActive }) => 
    isActive 
      ? "text-purple-600 font-bold border-b-2 border-purple-600 pb-1 transition-all" 
      : "text-gray-500 hover:text-purple-400 transition-all";

  return (
    <div className="min-h-screen flex flex-col bg-purple-50 font-sans">
      <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 p-4 border-b border-purple-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <NavLink to="/" className="flex items-center gap-1.5 group">
            <span className="bg-purple-600 text-white px-3 py-1 rounded-xl rotate-[-4deg] text-xl font-black shadow-lg group-hover:rotate-0 transition-transform">
              SKILL
            </span>
            <span className="text-2xl font-black text-purple-900 tracking-tighter">IFY<span className="text-purple-600">.</span></span>
          </NavLink>
          <div className="flex gap-6 md:gap-8 text-[10px] md:text-sm font-bold uppercase tracking-widest">
            <NavLink to="/" className={activeLink}>Home</NavLink>
            <NavLink to="/courses" className={activeLink}>Courses</NavLink>
            <NavLink to="/about" className={activeLink}>About</NavLink>
          </div>
        </div>
      </nav>
      <main className="flex-row"><Outlet /></main>
      <footer className="bg-white border-t border-purple-100 py-10 text-center">
        <p className="text-gray-400 text-xs tracking-widest uppercase">&copy; 2026 EduCourse Hub</p>
      </footer>
    </div>
  );
};
export default MainLayout;

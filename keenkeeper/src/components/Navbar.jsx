import { NavLink } from 'react-router-dom';
import { Home, Clock, BarChart2 } from 'lucide-react';

const Navbar = () => {
  const navClass = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${isActive ? 'bg-brand text-white' : 'text-gray-600 hover:bg-gray-100'}`;

  return (
    <nav className="bg-white border-b sticky top-0 z-40 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="font-bold text-2xl text-brand tracking-tight">KeenKeeper — Keep Connections</div>
        <div className="flex gap-2 font-medium">
          <NavLink to="/" className={navClass}><Home size={18} /> Home</NavLink>
          <NavLink to="/timeline" className={navClass}><Clock size={18} /> Timeline</NavLink>
          <NavLink to="/stats" className={navClass}><BarChart2 size={18} /> Stats</NavLink>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
import { Link, useLocation, useNavigate } from 'react-router';
import { useAuth } from './AuthContext';

export default function AdminNavbar() {
  const { pathname } = useLocation();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const navLink = (to: string, label: string) => (
    <Link
      to={to}
      className={`px-3 py-2 rounded hover:bg-green-100 transition ${
        pathname === to ? 'text-green-700 font-semibold border-2' : 'text-gray-700'
      }`}
    >
      {label}
    </Link>
  );

  return (
    /* Skal også lave link i App.tsx */
    <nav className="bg-white shadow p-4 flex gap-4">
      <button onClick={() => { logout(); navigate('/login'); }} className='px-3 py-2 rounded hover:bg-blue-300 transition cursor-pointer'>
        Logout
      </button>
      {navLink('/admin/admindashboard', 'Dashboard')}
      {navLink('/admin/adminpage', 'Page')}
    </nav>
  );
}
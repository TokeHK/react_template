import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const { pathname } = useLocation();

  const navLink = (to: string, label: string) => (
    <Link
      to={to}
      className={`px-3 py-2 rounded hover:bg-blue-100 transition ${
        pathname === to ? 'text-blue-600 font-semibold' : 'text-gray-700'
      }`}
    >
      {label}
    </Link>
  );

  return (
    /* Skal også lave link i App.tsx */
    <nav className="bg-white shadow p-4 flex gap-4">
      {navLink('/', 'Home')}
      {navLink('/about', 'About')}
      {navLink('/hooks', 'Hooks')}
      {navLink('/form', 'Form')}
    </nav>
  );
}
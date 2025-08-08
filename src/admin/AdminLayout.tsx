import { Outlet } from 'react-router';
import AdminNavbar from './AdminNavbar';

const AdminLayout = () => {
  return (
    <div>
      <AdminNavbar />
      <Outlet />
    </div>
  );
};

export default AdminLayout;
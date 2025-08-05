import { Outlet, Link } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div>
      <h1>Admin navbar component</h1>
      <Link to={"/"}>Leave Admin</Link>
      <Outlet />
    </div>
  );
};

export default AdminLayout;

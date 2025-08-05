import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Hooks from './pages/Hooks';
import Form from './pages/Form'
import Unauthorized from './pages/Unauthorized';
import Layout from './components/Layout';
import NotFound from './pages/NotFound';

import Login from './pages/Login';
import { AuthProvider } from './admin/AuthContext';
import ProtectedRoute from './admin/ProtectedRoute';
import AdminDashboard from './admin/AdminDashboard';
import AdminLayout from './admin/AdminLayout';

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* skal også lave link i Navbar.tsx */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/hooks" element={<Hooks />} />
          <Route path="/form" element={<Form />} />
          <Route path="/login" element={<Login />} />
          
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path='*' element={<NotFound />} />
        </Route>
        {/* regular route end */}

        {/* admin route start */}
        <Route path="/admin" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
          <Route path="admindashboard" element={<AdminDashboard />} />
        </Route>
        {/* admin route end */}
      </Routes>
    </AuthProvider>
  );
}

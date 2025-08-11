import { Routes, Route, BrowserRouter } from 'react-router';
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
import AdminPage from './admin/AdminPage';

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* husk at lave links i components/Navbar.tsx */}
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
          <Route path="/admin" element={<ProtectedRoute adminOnly={true}><AdminLayout /></ProtectedRoute>}>
            <Route path="admindashboard" element={<AdminDashboard />} />
            <Route path="adminpage" element={<AdminPage />} />
          </Route>
          {/* admin route end */}
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

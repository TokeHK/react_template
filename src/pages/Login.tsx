import React from 'react';
import { useAuth } from '../admin/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (isAdmin: boolean) => {
    login({ name: 'Demo User', isAdmin });
    navigate('/admin/admindashboard');
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={() => handleLogin(false)}>Login as User</button>
      <br />
      <button onClick={() => handleLogin(true)}>Login as Admin</button>
    </div>
  );
};

export default Login;

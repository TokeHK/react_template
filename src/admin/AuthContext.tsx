import { createContext, useContext, useState, type ReactNode } from 'react';

interface User {
  email: string;
  password: string;
  isAdmin: boolean;
}

interface AuthContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (userData: User) => setUser(userData);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};


/* 
import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

interface User {
  email: string;
  admin: boolean;
}

interface AuthContextType {
  user: User | null;
  logout: () => void;
  checkSession: () => Promise<void>;
  loading: boolean;
  sessionChecked: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [sessionChecked, setSessionChecked] = useState(false);
  
  const logout = () => {
    setUser(null);
    setSessionChecked(false);
  };

  const checkSession = async () => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5029/login/loggedin', {
        credentials: 'include',
      });
      const data = await res.json();

      if (res.ok && data.loggedIn) {
        setUser({ email: data.email, admin: data.admin });
        console.log(data)
      } else {
        setUser(null);
        console.log(data)
      }
    } catch (err) {
      console.error('Session check failed', err);
      setUser(null);
    } finally {
      setLoading(false);
      setSessionChecked(true);
    }
  };

  useEffect(() => {
  }, []);// check session runs on render + reload

  return (
    <AuthContext.Provider value={{ user, logout, checkSession, loading, sessionChecked }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
*/
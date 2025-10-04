
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, UserRole } from '@/types/user';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string, role?: UserRole) => Promise<boolean>;
  register: (email: string, password: string, name: string, role: UserRole) => Promise<boolean>;
  logout: () => void;
  adminLogin: (password: string) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate checking for existing session
    const checkAuthState = async () => {
      try {
        // In a real app, you would check for stored tokens/session
        console.log('Checking auth state...');
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsLoading(false);
      } catch (error) {
        console.error('Auth check failed:', error);
        setIsLoading(false);
      }
    };

    checkAuthState();
  }, []);

  const login = async (email: string, password: string, role?: UserRole): Promise<boolean> => {
    try {
      setIsLoading(true);
      console.log('Attempting login:', { email, role });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock successful login
      const mockUser: User = {
        id: '1',
        email,
        name: email.split('@')[0],
        role: role || 'customer',
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      
      setUser(mockUser);
      setIsLoading(false);
      return true;
    } catch (error) {
      console.error('Login failed:', error);
      setIsLoading(false);
      return false;
    }
  };

  const register = async (email: string, password: string, name: string, role: UserRole): Promise<boolean> => {
    try {
      setIsLoading(true);
      console.log('Attempting registration:', { email, name, role });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock successful registration
      const mockUser: User = {
        id: '1',
        email,
        name,
        role,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      
      setUser(mockUser);
      setIsLoading(false);
      return true;
    } catch (error) {
      console.error('Registration failed:', error);
      setIsLoading(false);
      return false;
    }
  };

  const adminLogin = async (password: string): Promise<boolean> => {
    try {
      setIsLoading(true);
      console.log('Attempting admin login');
      
      // Simple password check for demo
      if (password === 'admin123') {
        const adminUser: User = {
          id: 'admin',
          email: 'admin@cleanconnect.com',
          name: 'Admin',
          role: 'admin',
          createdAt: new Date(),
          updatedAt: new Date(),
        };
        
        setUser(adminUser);
        setIsLoading(false);
        return true;
      }
      
      setIsLoading(false);
      return false;
    } catch (error) {
      console.error('Admin login failed:', error);
      setIsLoading(false);
      return false;
    }
  };

  const logout = () => {
    console.log('Logging out user');
    setUser(null);
  };

  const value: AuthContextType = {
    user,
    isLoading,
    login,
    register,
    logout,
    adminLogin,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

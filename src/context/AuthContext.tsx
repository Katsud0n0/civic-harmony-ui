
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User } from '@/types';

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => Promise<void>;
  register: (username: string, fullName: string, department: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  isLoading: boolean;
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

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in (from localStorage)
    const storedUser = localStorage.getItem('jd_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (username: string, password: string) => {
    // This is a mock implementation - in a real app, you would call an API
    setIsLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock user - in a real app this would come from the backend
    const mockUser: User = {
      id: '1',
      username: username.toLowerCase(),
      fullName: username,
      department: 'Education',
      email: `${username.toLowerCase()}@jdframeworks.com`,
      phone: '+91 9876543210',
    };
    
    // Save to localStorage
    localStorage.setItem('jd_user', JSON.stringify(mockUser));
    setUser(mockUser);
    setIsLoading(false);
  };

  const register = async (username: string, fullName: string, department: string, password: string) => {
    // This is a mock implementation - in a real app, you would call an API
    setIsLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock user registration
    const mockUser: User = {
      id: '1',
      username: username.toLowerCase(),
      fullName: fullName,
      department: department as any,
      email: `${username.toLowerCase()}@jdframeworks.com`,
    };
    
    // Save to localStorage
    localStorage.setItem('jd_user', JSON.stringify(mockUser));
    setUser(mockUser);
    setIsLoading(false);
  };

  const logout = () => {
    localStorage.removeItem('jd_user');
    setUser(null);
  };

  return (
    <AuthContext.Provider 
      value={{
        user,
        login,
        register,
        logout,
        isAuthenticated: !!user,
        isLoading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

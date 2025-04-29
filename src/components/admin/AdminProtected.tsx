import React, { ReactNode, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

// In a real application, this would be connected to an authentication system
// This is a simplified mock for demonstration purposes
const checkAdminStatus = (): Promise<boolean> => {
  // Mock authentication - In a real app, this would check cookies/tokens/session
  // For demo purposes, we'll consider the user an admin
  return Promise.resolve(true);
};

interface AdminProtectedProps {
  children: ReactNode;
}

const AdminProtected: React.FC<AdminProtectedProps> = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const verifyAdmin = async () => {
      try {
        const adminStatus = await checkAdminStatus();
        setIsAdmin(adminStatus);
      } catch (error) {
        console.error('Error verifying admin status:', error);
        setIsAdmin(false);
      } finally {
        setIsLoading(false);
      }
    };

    verifyAdmin();
  }, []);

  if (isLoading) {
    return (
      <div className="admin-loading">
        <p>Verifying admin privileges...</p>
      </div>
    );
  }

  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default AdminProtected; 
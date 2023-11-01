import { Link } from 'react-router-dom';
import React from 'react';

interface MainNavProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
}

export const MainNav: React.FC<MainNavProps> = ({ className, ...props }) => {
  return (
    <nav
      className={`flex items-center space-x-4 lg:space-x-6 ${className}`}
      {...props}
    >
      <Link
        to="/examples/dashboard"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Overview
      </Link>
      <Link
        to="/examples/dashboard"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Customers
      </Link>
      <Link
        to="/examples/dashboard"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Products
      </Link>
      <Link
        to="/examples/dashboard"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Settings
      </Link>
    </nav>
  );
};

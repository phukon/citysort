import { Link } from 'react-router-dom';
import React from 'react';

interface MainNavProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
}

export const MainNav: React.FC<MainNavProps> = ({ className, ...props }) => {
  return (
    <nav
      className={`flex items-center space-x-6 lg:space-x-6 ${className}`}
      {...props}
    >
      <Link
        to="/"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Home
      </Link>
      <Link
        to="/about"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        About
      </Link>
      <Link
        to="/disclaimer"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Disclaimer
      </Link>
    </nav>
  );
};

import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';

interface BackToHomeProps {
  currentPage?: string;
}

const BackToHome = ({ currentPage }: BackToHomeProps) => {
  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
      <Link 
        to="/" 
        className="flex items-center gap-1 hover:text-primary transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <Home className="w-4 h-4" />
        <span>Home</span>
      </Link>
      {currentPage && (
        <>
          <span>/</span>
          <span className="text-foreground">{currentPage}</span>
        </>
      )}
    </div>
  );
};

export default BackToHome;

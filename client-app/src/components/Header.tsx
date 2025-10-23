import { Building2 } from 'lucide-react';

interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <div className="logo" aria-hidden="true">
          <Building2 size={20} className="text-white m-2" />
        </div>
        <div className="title">
          <h1>{title}</h1>
          <small>{subtitle}</small>
        </div>
      </div>
    </header>
  );
};

export default Header;

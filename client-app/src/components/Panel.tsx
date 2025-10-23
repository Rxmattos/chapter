import type { ReactNode } from 'react';

interface PanelProps {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

const Panel: React.FC<PanelProps> = ({ title, description, children, className = '' }) => {
  return (
    <section className={`panel ${className}`} aria-label="Formulário de Cadastro">
      <div className="panel-head">
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
      <div className="panel-body">
        {children}
      </div>
      <div className="accent" aria-hidden="true" />
    </section>
  );
};

export default Panel;

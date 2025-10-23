import { useEffect, useState } from 'react';
import { CheckCircle, XCircle, Info, X } from 'lucide-react';
import type { ToastProps } from '../types';

const Toast: React.FC<ToastProps & { onClose: () => void }> = ({
  message,
  type = 'info',
  duration = 2200,
  onClose
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 250); // Aguarda a animação de saída
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle size={16} className="text-green-500" />;
      case 'error':
        return <XCircle size={16} className="text-red-500" />;
      default:
        return <Info size={16} className="text-blue-500" />;
    }
  };

  return (
    <div className={`toast ${isVisible ? 'show' : ''}`}>
      <div className="flex items-center gap-2">
        {getIcon()}
        <span>{message}</span>
        <button
          onClick={() => {
            setIsVisible(false);
            setTimeout(onClose, 250);
          }}
          className="ml-2 hover:opacity-70 transition-opacity"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
};

export default Toast;

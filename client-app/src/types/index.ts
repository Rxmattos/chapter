export interface CompanyFormData {
  cnpj: string;
  razao: string;
  fantasia: string;
  telefone: string;
  contato: string;
}

export interface FormErrors {
  [key: string]: string;
}

export interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  duration?: number;
}

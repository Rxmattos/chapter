import { useState, useCallback } from 'react';
import type { CompanyFormData, FormErrors } from '../types';
import { validateCNPJ, validatePhone } from '../utils/masks';

export const useForm = (initialValues: CompanyFormData) => {
  const [values, setValues] = useState<CompanyFormData>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = useCallback((field: keyof CompanyFormData, value: string) => {
    setValues(prev => ({ ...prev, [field]: value }));
    
    // Limpar erro do campo quando o usuário começar a digitar
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  }, [errors]);

  const validateField = useCallback((field: keyof CompanyFormData, value: string): string => {
    if (!value.trim()) {
      return 'Este campo é obrigatório';
    }

    switch (field) {
      case 'cnpj':
        if (!validateCNPJ(value)) {
          return 'CNPJ inválido';
        }
        break;
      case 'telefone':
        if (!validatePhone(value)) {
          return 'Telefone inválido';
        }
        break;
      case 'razao':
      case 'fantasia':
      case 'contato':
        if (value.trim().length < 2) {
          return 'Mínimo de 2 caracteres';
        }
        break;
    }

    return '';
  }, []);

  const validateForm = useCallback((): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    Object.keys(values).forEach((key) => {
      const field = key as keyof CompanyFormData;
      const error = validateField(field, values[field]);
      if (error) {
        newErrors[field] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  }, [values, validateField]);

  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
  }, [initialValues]);

  return {
    values,
    errors,
    handleChange,
    validateField,
    validateForm,
    reset
  };
};

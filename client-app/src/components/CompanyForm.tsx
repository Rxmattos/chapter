import { useState } from 'react';
import { useForm } from '../hooks/useForm';
import { masks } from '../utils/masks';
import Input from './Input';
import Button from './Button';
import Panel from './Panel';
import Toast from './Toast';
import type { CompanyFormData } from '../types';

const initialValues: CompanyFormData = {
  cnpj: '',
  razao: '',
  fantasia: '',
  telefone: '',
  contato: ''
};

const CompanyForm: React.FC = () => {
  const { values, errors, handleChange, validateForm, reset } = useForm(initialValues);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setToast({ message: 'Preencha todos os campos obrigatórios', type: 'error' });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulação de envio para API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setToast({ message: 'Cadastro salvo com sucesso!', type: 'success' });
      reset();
    } catch (error) {
      setToast({ message: 'Erro ao salvar cadastro', type: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    reset();
    setToast({ message: 'Formulário limpo', type: 'info' });
  };

  return (
    <>
      <Panel
        title="Dados da Empresa"
        description="Preencha os campos abaixo. Os formatos de CNPJ e telefone são validados automaticamente."
      >
        <form onSubmit={handleSubmit} noValidate>
          <div className="grid">
            <Input
              id="cnpj"
              name="cnpj"
              label="CNPJ"
              type="text"
              inputMode="numeric"
              placeholder="00.000.000/0000-00"
              value={values.cnpj}
              onChange={(e) => handleChange('cnpj', e.target.value)}
              mask={masks.cnpj}
              error={errors.cnpj}
              hint="Ex.: 12.345.678/0001-90"
              maxLength={18}
              required
            />

            <Input
              id="razao"
              name="razao"
              label="Razão Social"
              type="text"
              placeholder="Nome legal da empresa"
              value={values.razao}
              onChange={(e) => handleChange('razao', e.target.value)}
              error={errors.razao}
              required
            />

            <Input
              id="fantasia"
              name="fantasia"
              label="Nome da Empresa"
              type="text"
              placeholder="Nome fantasia"
              value={values.fantasia}
              onChange={(e) => handleChange('fantasia', e.target.value)}
              error={errors.fantasia}
              required
            />

            <Input
              id="telefone"
              name="telefone"
              label="Telefone de Contato"
              type="text"
              inputMode="tel"
              placeholder="(11) 98888-7777"
              value={values.telefone}
              onChange={(e) => handleChange('telefone', e.target.value)}
              mask={masks.phone}
              error={errors.telefone}
              maxLength={16}
              required
            />

            <div className="span-2">
              <Input
                id="contato"
                name="contato"
                label="Contato (responsável)"
                type="text"
                placeholder="Nome completo"
                value={values.contato}
                onChange={(e) => handleChange('contato', e.target.value)}
                error={errors.contato}
                required
              />
            </div>
          </div>

          <div className="actions">
            <Button
              type="button"
              variant="secondary"
              onClick={handleReset}
              disabled={isSubmitting}
            >
              Limpar
            </Button>
            <Button
              type="submit"
              variant="primary"
              loading={isSubmitting}
            >
              Salvar cadastro
            </Button>
          </div>
        </form>
      </Panel>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </>
  );
};

export default CompanyForm;

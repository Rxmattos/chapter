import { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  hint?: string;
  error?: string;
  mask?: (value: string) => string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, hint, error, mask, onChange, ...props }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let value = e.target.value;
      
      if (mask) {
        value = mask(value);
      }
      
      if (onChange) {
        onChange({
          ...e,
          target: {
            ...e.target,
            value
          }
        } as React.ChangeEvent<HTMLInputElement>);
      }
    };

    return (
      <div>
        <label htmlFor={props.id} className="label">
          {label}
        </label>
        <div className={`field ${error ? 'error' : ''}`}>
          <input
            ref={ref}
            {...props}
            onChange={handleChange}
            className="input"
          />
        </div>
        {hint && !error && (
          <div className="hint">{hint}</div>
        )}
        {error && (
          <div className="hint text-red-400">{error}</div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;

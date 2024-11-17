export interface InputProps {
  label?: string;
  type?: string;
  placeholder?: string;
  errorMsg?: string;
  name?: string;
  value?: string | number;
  onChange?: (input: { name: string; value: string }) => void;
}

export interface RadioInputProps extends InputProps {
  checked?: boolean;
  predefinedVale: string;
}

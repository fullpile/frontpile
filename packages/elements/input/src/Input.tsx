import type { InputProps } from './types';

function Input(props: InputProps) {
  return <input {...props} style={{ ...props.style }} />;
}

export { Input };
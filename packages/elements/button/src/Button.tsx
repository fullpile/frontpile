import type { ButtonProps } from './types';

function Button(props: ButtonProps) {
  return <button {...props} style={{ ...props.style }} />;
}

export { Button };
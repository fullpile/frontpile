import type { ButtonProps } from './types';

function Button(props: ButtonProps) {
  return <button type="button" {...props} style={{ ...props.style }}>{props.text}</button>;
}

export { Button };

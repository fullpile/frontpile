import type { ComponentPropsWithRef } from 'react';
import type { CSSProperties } from 'react';

type InputProps = ComponentPropsWithRef<'input'> & {
  label: string;
  error?: string;
  helperText?: string;
  style?: CSSProperties;
};

export type { InputProps };

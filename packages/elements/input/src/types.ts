import type { ComponentPropsWithRef, CSSProperties } from "react";

type InputProps = ComponentPropsWithRef<"input"> & {
  label: string;
  error?: string;
  helperText?: string;
  style?: CSSProperties;
};

export type { InputProps };

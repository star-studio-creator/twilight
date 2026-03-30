import type { ClassValue, HTMLInputAttributes } from "svelte/elements";
import type { SizeType } from "../types";

interface BaseInputProps extends Omit<HTMLInputAttributes, "size"> {
  class?: ClassValue;
  size?: SizeType;
  placeholder?: string;
  disabled?: boolean;
}

export interface NumberInputProps extends BaseInputProps {
  value: number | undefined;
}

export interface TextAreaInputProps extends BaseInputProps {
  value: string;
  rows?: number;
}

export interface TextInputProps extends BaseInputProps {
  value: string;
  shadowed?: boolean;
}

export interface FileInputProps extends BaseInputProps {
  value: File[];
  clearable?: boolean;
}

import type {
  ClassValue,
  HTMLInputAttributes,
  HTMLTextareaAttributes,
} from "svelte/elements";
import type { SizeType } from "../types";

interface BaseTextInputProps extends Omit<HTMLInputAttributes, "size"> {
  class?: ClassValue;
  size?: SizeType;
  placeholder?: string;
  disabled?: boolean;
}

interface BaseTextAreaProps extends Omit<HTMLTextareaAttributes, "size"> {
  class?: ClassValue;
  size?: SizeType;
  placeholder?: string;
  disabled?: boolean;
}

export interface NumberInputProps extends BaseTextInputProps {
  value: number | undefined;
}

export interface TextAreaInputProps extends BaseTextAreaProps {
  value: string;
  rows?: number;
}

export interface TextInputProps extends BaseTextInputProps {
  value: string;
  shadowed?: boolean;
}

export interface FileInputProps extends BaseTextInputProps {
  value: File[];
  clearable?: boolean;
}

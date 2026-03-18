import type { Component, Snippet } from "svelte";
import type { ClassValue, HTMLButtonAttributes } from "svelte/elements";
import type { ColorType, SizeType } from "../types";

export interface BaseButtonProps extends HTMLButtonAttributes {
  class?: ClassValue;
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
  children: Snippet;
}

export interface ButtonProps extends BaseButtonProps {
  size?: SizeType;
  color?: ColorType;
  icon?: Component;
  iconPosition?: "left" | "right";
}

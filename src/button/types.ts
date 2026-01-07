import type { Component, Snippet } from "svelte";

export interface BaseButtonProps {
  className?: string;
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
  children: Snippet;
}

export interface ButtonProps extends BaseButtonProps {
  type?: "default" | "primary" | "warning" | "danger";
  icon?: Component;
  iconPosition?: "left" | "right";
}

import type { Component, Snippet } from "svelte";
import type { HTMLButtonAttributes } from "svelte/elements";

export interface BaseButtonProps extends HTMLButtonAttributes {
  className?: string;
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
  children: Snippet;
}

export interface ButtonProps extends Omit<BaseButtonProps, "type"> {
  type?: "default" | "primary" | "warning" | "danger";
  icon?: Component;
  iconPosition?: "left" | "right";
}

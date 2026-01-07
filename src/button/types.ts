import type { Component, Snippet } from "svelte";
import type { HTMLButtonAttributes } from "svelte/elements";
import type { ColorType } from "../types";

export interface BaseButtonProps extends HTMLButtonAttributes {
  className?: string;
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
  children: Snippet;
}

export interface ButtonProps extends Omit<BaseButtonProps, "type"> {
  type?: ColorType;
  icon?: Component;
  iconPosition?: "left" | "right";
}

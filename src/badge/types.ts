import type { Component, Snippet } from "svelte";
import type { ClassValue } from "svelte/elements";
import type { ColorType, IconPosition, SizeType } from "../types";

export interface BadgeProps {
  class?: ClassValue;
  size?: SizeType;
  color?: ColorType | "success";
  icon?: Component;
  iconPosition?: IconPosition;
  children: Snippet;
}

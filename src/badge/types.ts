import type { Component, Snippet } from "svelte";
import type { ClassValue } from "svelte/elements";
import type { ColorType } from "../types";

export interface BadgeProps {
  class?: ClassValue;
  color?: ColorType | "success";
  icon?: Component;
  iconPosition?: "left" | "right";
  children: Snippet;
}

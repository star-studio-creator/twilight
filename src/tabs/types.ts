import type { Component } from "svelte";

export interface TabItem<T> {
  name: string;
  value: T;
  icon?: Component;
  disabled?: boolean;
}

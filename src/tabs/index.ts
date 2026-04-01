import type { Component } from "svelte";

export { default as Tabs } from "./Tabs.svelte";

export interface TabItem<T> {
  name: string;
  value: T;
  icon?: Component;
  disabled?: boolean;
}

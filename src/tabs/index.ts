import type { LucideIcon } from "@lucide/svelte";

export { default as Tabs } from "./Tabs.svelte";

export interface TabItem<T> {
  name: string;
  value: T;
  icon?: LucideIcon;
  disabled?: boolean;
}

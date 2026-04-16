<script lang="ts">
  import type { ClassValue, HTMLInputAttributes } from "svelte/elements";
  import type { ColorType, SizeType } from "../types";

  interface Props
    extends Omit<HTMLInputAttributes, "size" | "checked" | "type"> {
    class?: ClassValue;
    size?: SizeType;
    color?: ColorType;
    enabled: boolean;
    disabled?: boolean;
  }

  let {
    class: className,
    size = "md",
    color = "primary",
    enabled = $bindable(),
    disabled = false,
    ...props
  }: Props = $props();
</script>

<input
  class={[
    {
      "w-8 h-5 after:size-3": size === "sm",
      "w-10 h-6 after:size-4": size === "md",
      "w-12 h-7 after:size-5": size === "lg",
    },
    enabled && {
      "after:translate-x-3": size === "sm",
      "after:translate-x-4": size === "md",
      "after:translate-x-5": size === "lg",
    },
    !enabled && "bg-neutral-300 shadow-neutral-300/20 dark:bg-neutral-700 dark:shadow-neutral-700/20",
    enabled && {
      "bg-primary shadow-primary/20 dark:bg-primary-dark dark:shadow-primary-dark/20": color === "primary",
      "bg-neutral-950 shadow-neutral-950/20 dark:bg-neutral-600 dark:shadow-neutral-600/20": color === "secondary",
      "bg-success shadow-success/20 dark:bg-success-dark dark:shadow-success-dark/20": color === "success",
      "bg-warning shadow-warning/20 dark:bg-warning-dark dark:shadow-warning-dark/20": color === "warning",
      "bg-danger shadow-danger/20 dark:bg-danger-dark dark:shadow-danger-dark/20": color === "danger",
    },
    {
      "cursor-pointer active:scale-95 hover:shadow-md": !disabled,
      "cursor-not-allowed opacity-50": disabled,
    },
    "relative appearance-none rounded-full transition-all",
    "after:absolute after:top-1 after:left-1 after:rounded-full after:bg-neutral-50 after:transition-transform after:content-['']",
    className,
  ]}
  type="checkbox"
  role="switch"
  bind:checked={enabled}
  aria-checked={enabled}
  {disabled}
  {...props}
>

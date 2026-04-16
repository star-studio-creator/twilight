<script lang="ts">
  import type { Snippet } from "svelte";
  import type { ClassValue } from "svelte/elements";
  import type { ColorType, SizeType } from "../types";

  interface Props {
    class?: ClassValue;
    size?: SizeType;
    color?: ColorType;
    children: Snippet;
  }

  const {
    class: className,
    size = "md",
    color = "primary",
    children,
  }: Props = $props();
</script>

<div
  class={[
    {
      "p-2": size === "sm",
      "p-4": size === "md",
      "p-6": size === "lg",
    },
    {
      "border-primary shadow-primary/20 dark:border-primary-light dark:shadow-primary-light/20": color === "primary",
      "border-neutral-950 shadow-neutral-950/20 dark:border-neutral-300 dark:shadow-neutral-300/20": color === "secondary",
      "border-success shadow-success/20 dark:border-success-light dark:shadow-success-light/20": color === "success",
      "border-warning shadow-warning/20 dark:border-warning-light dark:shadow-warning-light/20": color === "warning",
      "border-danger shadow-danger/20 dark:border-danger-light dark:shadow-danger-light/20": color === "danger",
    },
    "border rounded-md shadow",
    className,
  ]}
>
  {@render children()}
</div>

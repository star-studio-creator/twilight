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
      "border-primary/50 shadow-primary/20 dark:border-primary-light/50 dark:shadow-primary-light/20": color === "primary",
      "border-secondary/50 shadow-secondary/20 dark:border-secondary-light/50 dark:shadow-secondary-light/20": color === "secondary",
      "border-success/50 shadow-success/20 dark:border-success-light/50 dark:shadow-success-light/20": color === "success",
      "border-warning/50 shadow-warning/20 dark:border-warning-light/50 dark:shadow-warning-light/20": color === "warning",
      "border-danger/50 shadow-danger/20 dark:border-danger-light/50 dark:shadow-danger-light/20": color === "danger",
    },
    "border rounded-md shadow",
    className,
  ]}
>
  {@render children()}
</div>

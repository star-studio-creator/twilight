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
      "border-blue-600 shadow-blue-600/20 dark:border-blue-400 dark:shadow-blue-400/20": color === "primary",
      "border-neutral-950 shadow-neutral-950/20 dark:border-neutral-300 dark:shadow-neutral-300/20": color === "secondary",
      "border-red-600 shadow-red-600/20 dark:border-red-500 dark:shadow-red-500/20": color === "danger",
    },
    "border rounded-md shadow",
    className,
  ]}
>
  {@render children()}
</div>

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

  const colorVariants = {
    primary: "bg-primary-soft text-primary-text shadow-primary-shadow",
    secondary: "bg-secondary-soft text-secondary-text shadow-secondary-shadow",
    success: "bg-success-soft text-success-text shadow-success-shadow",
    warning: "bg-warning-soft text-warning-text shadow-warning-shadow",
    danger: "bg-danger-soft text-danger-text shadow-danger-shadow",
    unstyled: "",
  } satisfies Record<ColorType, ClassValue>;

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
    colorVariants[color],
    "rounded-md shadow",
    className,
  ]}
>
  {@render children()}
</div>

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
    primary: "bg-primary-soft text-primary border-primary-border",
    secondary: "bg-secondary-soft text-secondary border-secondary-border",
    success: "bg-success-soft text-success border-success-border",
    warning: "bg-warning-soft text-warning border-warning-border",
    danger: "bg-danger-soft text-danger border-danger-border",
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
    "border rounded-md shadow",
    className,
  ]}
>
  {@render children()}
</div>

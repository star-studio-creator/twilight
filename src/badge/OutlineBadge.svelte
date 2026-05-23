<script lang="ts">
  import type { LucideIcon } from "@lucide/svelte";
  import type { Snippet } from "svelte";
  import type { ClassValue } from "svelte/elements";
  import type { ColorType, IconPosition, SizeType } from "../types";

  interface Props {
    class?: ClassValue;
    size?: SizeType;
    color?: ColorType;
    icon?: LucideIcon;
    iconPosition?: IconPosition;
    children: Snippet;
  }

  const {
    class: className,
    size = "md",
    color = "primary",
    icon: Icon,
    iconPosition = "left",
    children,
  }: Props = $props();

  const colorVariants = {
    primary: "text-primary border-primary-border",
    secondary: "text-secondary border-secondary-border",
    success: "text-success border-success-border",
    warning: "text-warning border-warning-border",
    danger: "text-danger border-danger-border",
    unstyled: "",
  } satisfies Record<ColorType, ClassValue>;
</script>

<span
  class={[
    {
      "gap-0.5 text-sm px-1": size === "sm",
      "gap-1 px-1.5": size === "md",
      "gap-1 text-lg px-2": size === "lg",
    },
    colorVariants[color],
    "w-fit flex items-center border rounded-md",
    className,
  ]}
>
  {#if Icon && iconPosition === "left"}
    <Icon />
  {/if}

  {@render children()}

  {#if Icon && iconPosition === "right"}
    <Icon />
  {/if}
</span>

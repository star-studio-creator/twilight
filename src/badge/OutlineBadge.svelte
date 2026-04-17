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
</script>

<span
  class={[
    {
      "gap-0.5 text-sm px-1": size === "sm",
      "gap-1 px-1.5": size === "md",
      "gap-1 text-lg px-2": size === "lg",
    },
    {
      "text-primary dark:text-primary-light": color === "primary",
      "text-secondary dark:text-secondary-light": color === "secondary",
      "text-success dark:text-success-light": color === "success",
      "text-warning dark:text-warning-light": color === "warning",
      "text-danger dark:text-danger-light": color === "danger",
    },
    "flex items-center border rounded-md",
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

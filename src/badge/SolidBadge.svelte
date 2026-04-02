<script lang="ts">
  import type { LucideIcon } from "@lucide/svelte";
  import type { Snippet } from "svelte";
  import type { ClassValue } from "svelte/elements";
  import type { ColorType, IconPosition, SizeType } from "../types";

  interface Props {
    class?: ClassValue;
    size?: SizeType;
    color?: ColorType | "success";
    icon?: LucideIcon;
    iconPosition?: IconPosition;
    children: Snippet;
  }

  const {
    class: className,
    size = "md",
    color = "primary",
    icon,
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
      "text-neutral-50": color !== "unstyled",
      "bg-primary dark:bg-primary-dark": color === "primary",
      "bg-neutral-950 dark:bg-neutral-600": color === "secondary",
      "bg-red-600 dark:bg-red-700": color === "danger",
      "bg-green-600 dark:bg-green-700": color === "success",
    },
    "flex items-center rounded-md",
    className,
  ]}
>
  {#if icon && iconPosition === "left"}
    {@const Icon = icon}
    <Icon size="1em" />
  {/if}

  {@render children()}

  {#if icon && iconPosition === "right"}
    {@const Icon = icon}
    <Icon size="1em" />
  {/if}
</span>

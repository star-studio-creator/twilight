<script lang="ts">
  import type { Component, Snippet } from "svelte";
  import type { ClassValue } from "svelte/elements";
  import type { ColorType, IconPosition, SizeType } from "../types";

  interface Props {
    class?: ClassValue;
    size?: SizeType;
    color?: ColorType | "success";
    icon?: Component;
    iconPosition?: IconPosition;
    children: Snippet;
  }

  const {
    class: className,
    size = "md",
    color = "primary",
    icon = null,
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
      "text-blue-600 dark:text-blue-400": color === "primary",
      "text-neutral-950 dark:text-neutral-300": color === "secondary",
      "text-red-600 dark:text-red-500": color === "danger",
      "text-green-600 dark:text-green-500": color === "success",
    },
    "flex items-center border rounded-md",
    className,
  ]}
>
  {#if icon && iconPosition === "left"}
    {@const Icon = icon}
    <Icon size="1em" />
  {/if}

  {@render children()}

  {#if iconPosition === "right"}
    {@const Icon = icon}
    <Icon size="1em" />
  {/if}
</span>

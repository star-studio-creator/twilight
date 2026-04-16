<script lang="ts">
  import type { LucideIcon } from "@lucide/svelte";
  import LoaderCircle from "@lucide/svelte/icons/loader-circle";
  import type { Snippet } from "svelte";
  import type { ClassValue, HTMLButtonAttributes } from "svelte/elements";
  import type { ColorType, IconPosition, SizeType } from "../types";
  import BaseButton from "./BaseButton.svelte";

  interface Props extends HTMLButtonAttributes {
    class?: ClassValue;
    size?: SizeType;
    color?: ColorType;
    onclick?: () => void;
    loading?: boolean;
    disabled?: boolean;
    icon?: LucideIcon;
    iconPosition?: IconPosition;
    children: Snippet;
  }

  const {
    class: className,
    size = "md",
    color = "primary",
    onclick,
    loading = false,
    disabled = false,
    icon: Icon,
    iconPosition = "left",
    children,
    ...props
  }: Props = $props();
</script>

<BaseButton
  class={[
    {
      "gap-0.5 text-sm px-1.5 py-1": size === "sm",
      "gap-1 px-2 py-1.5": size === "md",
      "gap-1 text-lg px-2 py-1.5": size === "lg",
    },
    {
      "text-primary dark:text-primary-light": color === "primary",
      "text-neutral-950 dark:text-neutral-300": color === "secondary",
      "text-success dark:text-success-light": color === "success",
      "text-warning dark:text-warning-light": color === "warning",
      "text-danger dark:text-danger-light": color === "danger",
    },
    {
      "active:scale-95": !disabled && !loading,
      "opacity-70": disabled,
    },
    "flex items-center transition-all",
    className,
  ]}
  {onclick}
  {loading}
  {disabled}
  {...props}
>
  {#if iconPosition === "left"}
    {#if loading}
      <LoaderCircle class="animate-spin" />
    {:else if Icon}
      <Icon />
    {/if}
  {/if}

  {@render children()}

  {#if iconPosition === "right"}
    {#if loading}
      <LoaderCircle class="animate-spin" />
    {:else if Icon}
      <Icon />
    {/if}
  {/if}
</BaseButton>

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

  const colorVariants = {
    primary:
      "text-primary-contrast bg-primary-bg not-disabled:hover:bg-primary-hover not-disabled:active:bg-primary-active shadow-primary-shadow",
    secondary:
      "text-secondary-contrast bg-secondary-bg not-disabled:hover:bg-secondary-hover not-disabled:active:bg-secondary-active shadow-secondary-shadow",
    success:
      "text-success-contrast bg-success-bg not-disabled:hover:bg-success-hover not-disabled:active:bg-success-active shadow-success-shadow",
    warning:
      "text-warning-contrast bg-warning-bg not-disabled:hover:bg-warning-hover not-disabled:active:bg-warning-active shadow-warning-shadow",
    danger:
      "text-danger-contrast bg-danger-bg not-disabled:hover:bg-danger-hover not-disabled:active:bg-danger-active shadow-danger-shadow",
    unstyled: "",
  } satisfies Record<ColorType, ClassValue>;
</script>

<BaseButton
  class={[
    {
      "gap-0.5 text-sm px-1.5 py-1": size === "sm",
      "gap-1 px-2 py-1.5": size === "md",
      "gap-1 text-lg px-2 py-1.5": size === "lg",
    },
    colorVariants[color],
    {
      "active:scale-95 shadow hover:shadow-md": !disabled && !loading,
      "opacity-70": disabled,
    },
    "flex items-center rounded-md transition-all",
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

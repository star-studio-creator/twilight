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

  const colorVariants = {
    primary: "text-primary-text hover:bg-primary-soft active:bg-primary-soft",
    secondary:
      "text-secondary-text hover:bg-secondary-soft active:bg-secondary-soft",
    success: "text-success-text hover:bg-success-soft active:bg-success-soft",
    warning: "text-warning-text hover:bg-warning-soft active:bg-warning-soft",
    danger: "text-danger-text hover:bg-danger-soft active:bg-danger-soft",
    unstyled: "",
  } satisfies Record<ColorType, ClassValue>;

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
    colorVariants[color],
    {
      "active:scale-95": !disabled && !loading,
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

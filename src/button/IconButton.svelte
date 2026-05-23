<script lang="ts">
  import type { LucideIcon } from "@lucide/svelte";
  import LoaderCircle from "@lucide/svelte/icons/loader-circle";
  import type { ClassValue, HTMLButtonAttributes } from "svelte/elements";
  import type { ColorType, SizeType } from "../types";
  import BaseButton from "./BaseButton.svelte";

  interface Props extends HTMLButtonAttributes {
    class?: ClassValue;
    size?: SizeType;
    color?: ColorType;
    label: string;
    onclick?: () => void;
    loading?: boolean;
    disabled?: boolean;
    icon: LucideIcon;
  }

  const colorVariants = {
    primary:
      "text-primary-text not-disabled:hover:bg-primary-soft not-disabled:active:bg-primary-soft",
    secondary:
      "text-secondary-text not-disabled:hover:bg-secondary-soft not-disabled:active:bg-secondary-soft",
    success:
      "text-success-text not-disabled:hover:bg-success-soft not-disabled:active:bg-success-soft",
    warning:
      "text-warning-text not-disabled:hover:bg-warning-soft not-disabled:active:bg-warning-soft",
    danger:
      "text-danger-text not-disabled:hover:bg-danger-soft not-disabled:active:bg-danger-soft",
    unstyled: "",
  } satisfies Record<ColorType, ClassValue>;

  const {
    class: className,
    size = "md",
    color = "primary",
    label,
    onclick,
    loading = false,
    disabled = false,
    icon: Icon,
    ...props
  }: Props = $props();
</script>

<BaseButton
  class={[
    {
      "text-sm p-1": size === "sm",
      "p-1.5": size === "md",
      "text-lg p-2": size === "lg",
    },
    colorVariants[color],
    {
      "active:scale-95 focus:outline-none focus-visible:ring-2": !disabled && !loading,
      "opacity-70": disabled,
    },
    "rounded-md transition-all",
    className,
  ]}
  aria-label={label}
  {onclick}
  {loading}
  {disabled}
  {...props}
>
  {#if loading}
    <LoaderCircle class="animate-spin" />
  {:else}
    <Icon />
  {/if}
</BaseButton>

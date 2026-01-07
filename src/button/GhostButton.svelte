<script lang="ts">
    import { clsx } from "clsx";
    import type { Component, Snippet } from "svelte";
    import BaseButton from "./BaseButton.svelte";

    interface Props {
      className?: string,
      type?: "default" | "primary" | "warning" | "danger"
      onClick?: () => void,
      icon?: Component,
      iconPosition?: "left" | "right"
      disabled?: boolean,
      children: Snippet
    }

    const {className, type = "default", onClick, icon, iconPosition = "left", disabled, children, ...props}: Props = $props();
</script>

<BaseButton className={
  clsx(
    className,
    "flex gap-1.5 items-center rounded-md px-2 py-1.5 transition-all",
    {
      "active:scale-95": !disabled,
      "opacity-70": disabled,
    },
    {
      "text-gray-950 dark:text-gray-50": type ==="default",
      "text-blue-600 dark:text-blue-700": type === "primary",
      "text-orange-500 dark:text-orange-600": type ==="warning",
      "text-red-600 dark:text-red-700": type === "danger"
    },
    !disabled && {
      "hover:bg-gray-950/10 dark:hover:bg-gray-50/15": type ==="default",
      "hover:bg-blue-600/10 dark:hover:bg-blue-700/20": type === "primary",
      "hover:bg-orange-500/10 dark:hover:bg-orange-600/20": type ==="warning",
      "hover:bg-red-600/10 dark:hover:bg-red-700/20": type === "danger"
    },
  )
} {onClick} {disabled} {...props}>
    {@const Icon = icon}
  
    {#if iconPosition === "left"}
        <Icon size={18} />
    {/if}
  
    {@render children()}
  
    {#if iconPosition === "right"}
        <Icon size={18} />
    {/if}
</BaseButton>

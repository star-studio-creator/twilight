<script lang="ts">
    import { LoaderCircle } from "@lucide/svelte";
    import { clsx } from "clsx";
    import BaseButton from "./BaseButton.svelte";
    import type { ButtonProps } from "./types"

    const {
      className = "",
      type = "default",
      onClick = () => {},
      icon = null,
      iconPosition = "left",
      loading = false,
      disabled = false,
      children,
      ...props
    }: ButtonProps = $props();
</script>

<BaseButton className={
  clsx(
    className,
    "flex gap-1.5 items-center border-2 rounded-md shadow px-2 py-1.5 transition-all",
    {
      "active:scale-95 hover:opacity-90 hover:shadow-md": !disabled,
      "opacity-70": disabled,
    },
    {
      "text-gray-950 border-gray-950 shadow-gray-950/30 dark:text-gray-50 dark:border-gray-50 dark:shadow-gray-50/30": type ==="default",
      "text-blue-600 border-blue-600 shadow-blue-600/30 dark:text-blue-700 dark:border-blue-700 dark:shadow-blue-700/30": type === "primary",
      "text-orange-500 border-orange-500 shadow-orange-500/30 dark:text-orange-600 dark:border-orange-600 dark:shadow-orange-600/30": type ==="warning",
      "text-red-600 border-red-600 shadow-red-600/30 dark:text-red-700 dark:border-red-700 dark:shadow-red-700/30": type === "danger"
    },
    !disabled && {
      "hover:bg-gray-950/5 dark:hover:bg-gray-50/5": type ==="default",
      "hover:bg-blue-600/5 dark:hover:bg-border-700/15": type === "primary",
      "hover:bg-orange-500/5 dark:hover:bg-orange-600/15": type ==="warning",
      "hover:bg-red-600/5 dark:hover:bg-red-700/15": type === "danger"
    },
  )
} {onClick} {disabled} {...props}>
    {@const Icon = icon}

    {#if iconPosition === "left"}
        {#if loading}
          <LoaderCircle class="animate-spin" size={18} />
        {:else}
          <Icon size={18} />
        {/if}
    {/if}

    {@render children()}

    {#if iconPosition === "right"}
        {#if loading}
          <LoaderCircle class="animate-spin" size={18} />
        {:else}
          <Icon size={18} />
        {/if}
    {/if}
</BaseButton>

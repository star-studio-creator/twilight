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

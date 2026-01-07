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
    "flex gap-1.5 items-center px-2 py-1.5 transition-all",
    {
      "active:scale-95 hover:opacity-90 hover:underline decoration-2 underline-offset-3": !disabled,
      "opacity-70": disabled,
    },
    {
      "text-gray-950 dark:text-gray-50": type ==="default",
      "text-blue-600 dark:text-blue-700": type === "primary",
      "text-orange-500 dark:text-orange-600": type ==="warning",
      "text-red-600 dark:text-red-700": type === "danger"
    }
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

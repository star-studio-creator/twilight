<script lang="ts">
import LoaderCircle from "@lucide/svelte/icons/loader-circle";
import BaseButton from "./BaseButton.svelte";
import type { ButtonProps } from "./types";

const {
  class: className = "",
  color = "primary",
  onClick = () => {},
  icon = null,
  iconPosition = "left",
  loading = false,
  disabled = false,
  children,
  ...props
}: ButtonProps = $props();
</script>

<BaseButton
  class={[
        className,
        "flex gap-1.5 items-center px-2 py-1.5 transition-all",
        {
            "active:scale-95 hover:opacity-90 hover:underline decoration-2 underline-offset-3":
                !disabled,
            "opacity-70": disabled,
        },
        {
            "text-blue-600 dark:text-blue-700": color === "primary",
            "text-neutral-950 dark:text-neutral-50": color === "secondary",
            "text-red-600 dark:text-red-700": color === "danger",
        },
    ]}
  {onClick}
  {disabled}
  {...props}
>
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

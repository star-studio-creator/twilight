<script lang="ts">
import LoaderCircle from "@lucide/svelte/icons/loader-circle";
import BaseButton from "./BaseButton.svelte";
import type { ButtonProps } from "./types";

const {
  class: className = "",
  size = "md",
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
        "flex gap-1 items-center transition-all",
        {
          "gap-0.5 text-sm px-1.5 py-1": size === "sm",
          "gap-1 px-2 py-1.5": size === "md",
          "gap-1 text-lg px-2 py-1.5": size === "lg",
        },
        {
            "text-blue-600 dark:text-blue-700": color === "primary",
            "text-neutral-950 dark:text-neutral-50": color === "secondary",
            "text-red-600 dark:text-red-700": color === "danger",
        },
        {
            "active:scale-95 hover:opacity-90 hover:underline decoration-2 underline-offset-3":
                !disabled,
            "opacity-70": disabled,
        },
    ]}
  {onClick}
  {disabled}
  {...props}
>
  {@const Icon = icon}

  {#if iconPosition === "left"}
    {#if loading}
      <LoaderCircle class="animate-spin" size="1em" />
    {:else if icon !== null}
      <Icon size="1em" />
    {/if}
  {/if}

  {@render children()}

  {#if iconPosition === "right"}
    {#if loading}
      <LoaderCircle class="animate-spin" size="1em" />
    {:else if icon !== null}
      <Icon size="1em" />
    {/if}
  {/if}
</BaseButton>

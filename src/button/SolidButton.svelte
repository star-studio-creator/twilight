<script lang="ts">
  import LoaderCircle from "@lucide/svelte/icons/loader-circle";
  import BaseButton from "./BaseButton.svelte";
  import type { ButtonProps } from "./types";

  const {
    class: className = "",
    size = "md",
    color = "primary",
    onclick = () => {},
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
    {
      "gap-0.5 text-sm px-1.5 py-1": size === "sm",
      "gap-1 px-2 py-1.5": size === "md",
      "gap-1 text-lg px-2 py-1.5": size === "lg",
    },
    {
      "text-neutral-50": color !== "unstyled",
      "bg-blue-600 shadow-blue-600/20 dark:bg-blue-700 dark:shadow-blue-700/20": color === "primary",
      "bg-neutral-950 shadow-neutral-950/20 dark:bg-neutral-600 dark:shadow-neutral-600/20": color === "secondary",
      "bg-red-600 shadow-red-600/20 dark:bg-red-700 dark:shadow-red-700/20": color === "danger",
    },
    {
      "active:scale-95 hover:shadow-md": !disabled && !loading,
      "opacity-70": disabled,
    },
    "flex items-center rounded-md shadow transition-all",
    className,
  ]}
  {onclick}
  {loading}
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

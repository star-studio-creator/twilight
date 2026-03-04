<script lang="ts">
import type { BadgeProps } from "./types";

const {
  class: className,
  color = "default",
  icon = null,
  iconPosition = "left",
  children,
}: BadgeProps = $props();
</script>

<span
  class={[
        className,
        "flex items-center gap-1 px-2 border rounded-full",
        {
            "text-neutral-950 dark:text-neutral-200": color === "default",
            "text-green-600 dark:text-green-700": color === "success",
            "text-blue-600 dark:text-blue-700": color === "primary",
            "text-orange-500 dark:text-orange-600": color === "warning",
            "text-red-600 dark:text-red-700": color === "danger",
        },
    ]}
>
  {#if iconPosition === "left"}
    {@const Icon = icon}
    <Icon size={16} />
  {/if}

  {@render children()}

  {#if iconPosition === "right"}
    {@const Icon = icon}
    <Icon size={16} />
  {/if}
</span>

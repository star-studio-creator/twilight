<script lang="ts">
import type { BadgeProps } from "./types";

const {
  class: className,
  color = "primary",
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
            "text-blue-600 dark:text-blue-700": color === "primary",
            "text-neutral-950 dark:text-neutral-200": color === "secondary",
            "text-red-600 dark:text-red-700": color === "danger",
            "text-green-600 dark:text-green-700": color === "success",
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

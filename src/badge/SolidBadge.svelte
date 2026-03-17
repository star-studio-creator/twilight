<script lang="ts">
import type { BadgeProps } from "./types";

const {
  class: className,
  size = "md",
  color = "primary",
  icon = null,
  iconPosition = "left",
  children,
}: BadgeProps = $props();
</script>

<span
  class={[
        className,
        "flex items-center rounded-md",
        {
          "gap-0.5 text-sm px-1": size === "sm",
          "gap-1 px-1.5": size === "md",
          "gap-1 text-lg px-2": size === "lg",
        },
        {
            "text-neutral-50 bg-blue-600 dark:bg-blue-700": color === "primary",
            "text-neutral-50 dark:text-neutral-950 bg-neutral-950 dark:bg-neutral-300":
                color === "secondary",
            "text-neutral-50 bg-red-600 dark:bg-red-700": color === "danger",
            "text-neutral-50 bg-green-600 dark:bg-green-700": color === "success",
        },
    ]}
>
  {#if icon && iconPosition === "left"}
    {@const Icon = icon}
    <Icon size="1em" />
  {/if}

  {@render children()}

  {#if iconPosition === "right"}
    {@const Icon = icon}
    <Icon size="1em" />
  {/if}
</span>

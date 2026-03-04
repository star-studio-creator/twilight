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
        "flex items-center gap-1 px-2 rounded-full",
        {
            "text-neutral-50": color !== "unstyled",
            "bg-blue-600 dark:bg-blue-700": color === "primary",
            "bg-neutral-950 dark:text-neutral-950 dark:bg-neutral-50":
                color === "secondary",
            "bg-red-600 dark:bg-red-700": color === "danger",
            "bg-green-600 dark:bg-green-700": color === "success",
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

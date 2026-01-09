<script lang="ts">
    import LoaderCircle from "@lucide/svelte/icons/loader-circle";
    import { clsx } from "clsx";
    import BaseButton from "./BaseButton.svelte";
    import type { ButtonProps } from "./types";

    const {
        className = "",
        color = "default",
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
    className={clsx(
        className,
        "flex gap-1.5 items-center rounded-md shadow px-2 py-1.5 transition-all text-gray-50",
        {
            "active:scale-95 hover:opacity-90 hover:shadow-md":
                !loading && !disabled,
            "opacity-70": loading || disabled,
        },
        {
            "bg-gray-950 shadow-gray-950/30 dark:text-gray-950 dark:bg-gray-50 dark:shadow-gray-50/30":
                color === "default",
            "bg-blue-600 shadow-blue-600/30 dark:bg-blue-700 dark:shadow-blue-700/30":
                color === "primary",
            "bg-orange-500 shadow-orange-500/30 dark:bg-orange-600 dark:shadow-orange-600/30":
                color === "warning",
            "bg-red-600 shadow-red-600/30 dark:bg-red-700 dark:shadow-red-700/30":
                color === "danger",
        },
    )}
    {onClick}
    {loading}
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

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
        "flex gap-1.5 items-center rounded-md shadow px-2 py-1.5 transition-all text-neutral-50",
        {
            "active:scale-95 hover:opacity-90 hover:shadow-md":
                !loading && !disabled,
            "opacity-70": loading || disabled,
        },
        {
            "bg-blue-600 shadow-blue-600/30 dark:bg-blue-700 dark:shadow-blue-700/30":
                color === "primary",
            "bg-neutral-950 shadow-neutral-950/30 dark:text-neutral-950 dark:bg-neutral-50 dark:shadow-neutral-50/30":
                color === "secondary",
            "bg-red-600 shadow-red-600/30 dark:bg-red-700 dark:shadow-red-700/30":
                color === "danger",
        },
    ]}
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

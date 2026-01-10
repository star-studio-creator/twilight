<script lang="ts">
    import LoaderCircle from "@lucide/svelte/icons/loader-circle";
    import BaseButton from "./BaseButton.svelte";
    import type { ButtonProps } from "./types";

    const {
        class: className = "",
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
    class={[
        className,
        "flex gap-1.5 items-center border-2 border-current rounded-md shadow shadow-current/30 px-2 py-1.5 transition-all",
        {
            "active:scale-95 hover:bg-current/5 hover:opacity-90 hover:shadow-md":
                !disabled,
            "opacity-70": disabled,
        },
        {
            "text-gray-950 dark:text-gray-50": color === "default",
            "text-blue-600 dark:text-blue-700": color === "primary",
            "text-orange-500 dark:text-orange-600": color === "warning",
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

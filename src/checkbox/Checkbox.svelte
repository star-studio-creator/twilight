<script lang="ts">
    import Check from "@lucide/svelte/icons/check";
    import type { ClassValue, HTMLInputAttributes } from "svelte/elements";
    import type { ColorType } from "../types";

    interface Props extends HTMLInputAttributes {
        class?: ClassValue;
        color?: ColorType;
        checked: boolean;
        disabled?: boolean;
    }

    let {
        class: className = "",
        color = "default",
        checked = $bindable(),
        disabled = false,
    }: Props = $props();
</script>

<div class="flex items-center relative">
    <input
        type="checkbox"
        class={[
            className,
            "appearance-none size-5 rounded-md shadow transition-all",
            {
                "cursor-pointer active:scale-95 hover:opacity-90 hover:shadow-md":
                    !disabled,
                "cursor-not-allowed opacity-50": disabled,
            },
            !checked &&
                "bg-neutral-300 dark:bg-neutral-700 shadow-neutral-300/30 dark:shadow-neutral-700/30",
            checked && {
                "bg-neutral-950 dark:bg-neutral-500 shadow-neutral-950/30 dark:shadow-neutral-500/30":
                    color === "default",
                "bg-blue-600 dark:bg-blue-700 shadow-blue-600/30 dark:shadow-blue-700/30":
                    color === "primary",
                "bg-orange-500 dark:bg-orange-600 shadow-orange-500/30 dark:shadow-orange-600/30":
                    color === "warning",
                "bg-red-600 dark:bg-red-700 shadow-red-600/30 dark:shadow-red-700/30":
                    color === "danger",
            },
        ]}
        bind:checked
        {disabled}
    />

    {#if checked}
        <Check
            class="absolute ml-0.5 mt-0.5 text-neutral-50"
            size={16}
            strokeWidth={3}
        />
    {/if}
</div>

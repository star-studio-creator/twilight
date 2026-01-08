<script lang="ts">
    import clsx from "clsx";
    import type { Component } from "svelte";
    import type { ColorType } from "../types";

    interface Props {
        color?: ColorType;
        selected: boolean;
        icon?: Component;
        disabled?: boolean;
    }

    let {
        color = "default",
        selected = $bindable(),
        icon = null,
        disabled = false,
    }: Props = $props();
</script>

<!-- svelte-ignore a11y_consider_explicit_label: 使用时外层会包裹 label 元素 -->
<button
    type="button"
    class={clsx(
        "w-10 h-6 pl-0.5 rounded-full shadow transition-all",
        {
            "cursor-pointer active:scale-95 hover:opacity-90 hover:shadow-md":
                !disabled,
            "cursor-not-allowed opacity-50": disabled,
        },
        !selected &&
            "bg-gray-300 dark:bg-gray-700 shadow-gray-300/30 dark:shadow-gray-700/30",
        selected && {
            "bg-gray-950 dark:bg-gray-500 shadow-gray-950/30 dark:shadow-gray-500/30":
                color === "default",
            "bg-blue-600 dark:bg-blue-700 shadow-blue-600/30 dark:shadow-blue-700/30":
                color === "primary",
            "bg-orange-500 dark:bg-orange-600 shadow-orange-500/30 dark:shadow-orange-600/30":
                color === "warning",
            "bg-red-600 dark:bg-red-700 shadow-red-600/30 dark:shadow-red-700/30":
                color === "danger",
        },
    )}
    onclick={() => {
        selected = !selected;
    }}
    role="switch"
    aria-checked={selected}
    {disabled}
>
    <div
        class={clsx(
            "grid place-content-center bg-gray-50 text-gray-950 size-5 rounded-full transition-transform pointer-events-none",
            selected && "translate-x-4",
        )}
    >
        {#if icon}
            {@const Icon = icon}
            <Icon size={16} />
        {/if}
    </div>
</button>

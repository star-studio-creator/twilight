<script lang="ts">
import type { Component } from "svelte";
import type { ColorType, SizeType } from "../types";

interface Props {
  size?: SizeType;
  color?: ColorType;
  enabled: boolean;
  disabled?: boolean;
}

let {
  size = "md",
  color = "primary",
  enabled = $bindable(),
  disabled = false,
}: Props = $props();
</script>

<div class="relative">
  <input
    type="checkbox"
    role="switch"
    class={[
            "appearance-none rounded-full transition-all",
            {
                "cursor-pointer active:scale-95 hover:opacity-90 hover:shadow-md":
                    !disabled,
                "cursor-not-allowed opacity-50": disabled,
            },
            {
              "w-8 h-5": size === "sm",
              "w-10 h-6": size === "md",
              "w-12 h-7": size === "lg",
            },
            !enabled &&
                "bg-neutral-300 dark:bg-neutral-700 shadow-neutral-300/30 dark:shadow-neutral-700/30",
            enabled && {
                "bg-blue-600 dark:bg-blue-700 shadow-blue-600/30 dark:shadow-blue-700/30":
                    color === "primary",
                "bg-neutral-950 dark:bg-neutral-500 shadow-neutral-950/30 dark:shadow-neutral-500/30":
                    color === "secondary",
                "bg-red-600 dark:bg-red-700 shadow-red-600/30 dark:shadow-red-700/30":
                    color === "danger",
            },
        ]}
    bind:checked={enabled}
    aria-checked={enabled}
    {disabled}
  >

  <div
    class={[
            "absolute top-1 left-1 grid bg-neutral-50 rounded-full transition-transform pointer-events-none",
            {
              "text-xs size-3": size === "sm",
              "text-sm size-4": size === "md",
              "size-5": size === "lg",
            },
            enabled && {
              "translate-x-3": size === "sm",
              "translate-x-4": size === "md",
              "translate-x-5": size === "lg",
            },
        ]}
  ></div>
</div>

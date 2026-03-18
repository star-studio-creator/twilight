<script lang="ts">
import Check from "@lucide/svelte/icons/check";
import type { ClassValue, HTMLInputAttributes } from "svelte/elements";
import type { ColorType, SizeType } from "../types";

interface Props extends Omit<HTMLInputAttributes, "size"> {
  class?: ClassValue;
  size?: SizeType;
  color?: ColorType;
  checked: boolean;
  disabled?: boolean;
}

let {
  class: className = "",
  size = "md",
  color = "primary",
  checked = $bindable(),
  disabled = false,
}: Props = $props();
</script>

<div class="relative">
  <input
    type="checkbox"
    class={[
            className,
            "appearance-none rounded-md shadow transition-all",
            {
              "size-4": size === "sm",
              "size-5": size === "md",
              "size-6": size === "lg",
            },
            !checked &&
                "bg-neutral-300 dark:bg-neutral-700 shadow-neutral-300/30 dark:shadow-neutral-700/30",
            checked && {
                "bg-blue-600 dark:bg-blue-700 shadow-blue-600/30 dark:shadow-blue-700/30":
                    color === "primary",
                "bg-neutral-950 dark:bg-neutral-500 shadow-neutral-950/30 dark:shadow-neutral-500/30":
                    color === "secondary",
                "bg-red-600 dark:bg-red-700 shadow-red-600/30 dark:shadow-red-700/30":
                    color === "danger",
            },
            {
                "cursor-pointer active:scale-95 hover:opacity-90 hover:shadow-md":
                    !disabled,
                "cursor-not-allowed opacity-50": disabled,
            },
        ]}
    bind:checked
    {disabled}
  >
  {#if checked}
    <Check
      class={["absolute top-0 left-0 text-neutral-50",
        {
          "top-1 left-0.5 size-3": size === "sm",
          "top-0.5 left-0.5 size-4": size === "md",
          "top-0.5 left-0.5 size-5": size === "lg",
        },
      ]}
      strokeWidth={3}
    />
  {/if}
</div>

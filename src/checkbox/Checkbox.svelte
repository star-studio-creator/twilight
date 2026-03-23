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
      {
        "size-4": size === "sm",
        "size-5": size === "md",
        "size-6": size === "lg",
      },
      !checked && "bg-neutral-200 shadow-neutral-200/20 dark:bg-neutral-700 dark:shadow-neutral-700/20",
      checked && {
        "bg-blue-600 shadow-blue-600/20 dark:bg-blue-700 dark:shadow-blue-700/20": color === "primary",
        "bg-neutral-950 shadow-neutral-950/20 dark:bg-neutral-600 dark:shadow-neutral-600/20": color === "secondary",
        "bg-red-600 shadow-red-600/20 dark:bg-red-700 dark:shadow-red-700/20": color === "danger",
      },
      {
        "cursor-pointer active:scale-95 hover:shadow-md": !disabled,
        "cursor-not-allowed opacity-50": disabled,
      },
      "appearance-none rounded-md shadow transition-all",
      className,
    ]}
    bind:checked
    {disabled}
  >
  {#if checked}
    <Check
      class={[
        {
          "top-1 left-0.5 size-3": size === "sm",
          "top-0.5 left-0.5 size-4": size === "md",
          "top-0.5 left-0.5 size-5": size === "lg",
        },
        "absolute pointer-events-none text-neutral-50",
      ]}
      strokeWidth={3}
    />
  {/if}
</div>

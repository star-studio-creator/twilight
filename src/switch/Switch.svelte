<script lang="ts">
  import type { ClassValue } from "svelte/elements";
  import type { ColorType, SizeType } from "../types";

  interface Props {
    class?: ClassValue;
    size?: SizeType;
    color?: ColorType;
    enabled: boolean;
    disabled?: boolean;
  }

  let {
    class: className = "",
    size = "md",
    color = "primary",
    enabled = $bindable(),
    disabled = false,
  }: Props = $props();
</script>

<div class="relative">
  <input
    class={[
      {
        "w-8 h-5": size === "sm",
        "w-10 h-6": size === "md",
        "w-12 h-7": size === "lg",
      },
      !enabled && "bg-neutral-300 shadow-neutral-300/20 dark:bg-neutral-700 dark:shadow-neutral-700/20",
      enabled && {
        "bg-blue-600 shadow-blue-600/20 dark:bg-blue-700 dark:shadow-blue-700/20": color === "primary",
        "bg-neutral-950 shadow-neutral-950/20 dark:bg-neutral-600 dark:shadow-neutral-600/20": color === "secondary",
        "bg-red-600 shadow-red-600/20 dark:bg-red-700 dark:shadow-red-700/20": color === "danger",
      },
      {
        "cursor-pointer active:scale-95 hover:shadow-md": !disabled,
        "cursor-not-allowed opacity-50": disabled,
      },
      "appearance-none rounded-full transition-all",
      className,
    ]}
    type="checkbox"
    role="switch"
    bind:checked={enabled}
    aria-checked={enabled}
    {disabled}
  >

  <div
    class={[
      {
        "size-3": size === "sm",
        "size-4": size === "md",
        "size-5": size === "lg",
      },
      enabled && {
        "translate-x-3": size === "sm",
        "translate-x-4": size === "md",
        "translate-x-5": size === "lg",
      },
      "absolute top-1 left-1 pointer-events-none bg-neutral-50 rounded-full transition-transform",
    ]}
  ></div>
</div>

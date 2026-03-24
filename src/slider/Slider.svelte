<script lang="ts">
  import type { ClassValue } from "svelte/elements";

  interface Props {
    class?: ClassValue;
    value: number;
    min: number;
    max: number;
    step?: number;
    disabled?: boolean;
  }

  let {
    class: className = "",
    value = $bindable(),
    min,
    max,
    step = 1,
    disabled = false,
  }: Props = $props();
</script>

<input
  class={[
    {
      "cursor-pointer": !disabled,
      "cursor-not-allowed opacity-70": disabled,
    },
    "h-1.5 appearance-none rounded-full bg-blue-600 text-blue-600",
    "[&::-webkit-slider-thumb]:size-4 [&::-moz-range-thumb]:size-4",
    "[&::-webkit-slider-thumb]:appearance-none [&::-moz-range-thumb]:appearance-none",
    "[&::-webkit-slider-thumb]:bg-white [&::-moz-range-thumb]:bg-white",
    "[&::-webkit-slider-thumb]:rounded-full [&::-moz-range-thumb]:rounded-full",
    "[&::-webkit-slider-thumb]:border-2 [&::-moz-range-thumb]:border-2",
    "[&::-webkit-slider-thumb]:border-current [&::-moz-range-thumb]:border-current",
    "[&::-webkit-slider-thumb]:shadow [&::-moz-range-thumb]:shadow",
    "[&::-webkit-slider-thumb]:shadow-current/20 [&::-moz-range-thumb]:shadow-current/20",
    "[&::-webkit-slider-thumb]:transition-all [&::-moz-range-thumb]:transition-all",
    "active:[&::-webkit-slider-thumb]:shadow-md active:[&::-moz-range-thumb]:shadow-md",
    "active:[&::-webkit-slider-thumb]:scale-95 active:[&::-moz-range-thumb]:scale-95",
    className,
  ]}
  type="range"
  bind:value
  {min}
  {max}
  {step}
  {disabled}
>

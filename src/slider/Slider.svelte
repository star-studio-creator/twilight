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

  const progress = $derived(((value - min) / (max - min)) * 100);
</script>

<input
  class={[
    {
      "cursor-pointer": !disabled,
      "cursor-not-allowed opacity-70": disabled,
    },
    "[--slider-fill:var(--color-blue-600)] dark:[--slider-fill:var(--color-blue-700)]",
    "[--slider-rest:var(--color-neutral-300)] dark:[--slider-rest:var(--color-neutral-700)]",
    "h-1.5 appearance-none rounded-full text-blue-600 dark:text-blue-700",
    "[&::-webkit-slider-thumb]:size-4 [&::-moz-range-thumb]:size-4",
    "[&::-webkit-slider-thumb]:appearance-none [&::-moz-range-thumb]:appearance-none",
    "[&::-webkit-slider-thumb]:bg-neutral-50 [&::-moz-range-thumb]:bg-neutral-50",
    "[&::-webkit-slider-thumb]:rounded-full [&::-moz-range-thumb]:rounded-full",
    "[&::-webkit-slider-thumb]:border-2 [&::-moz-range-thumb]:border-2",
    "[&::-webkit-slider-thumb]:border-current [&::-moz-range-thumb]:border-current",
    "[&::-webkit-slider-thumb]:shadow [&::-moz-range-thumb]:shadow",
    "[&::-webkit-slider-thumb]:shadow-current/20 [&::-moz-range-thumb]:shadow-current/20",
    "[&::-webkit-slider-thumb]:transition-all [&::-moz-range-thumb]:transition-all",
    !disabled && "active:[&::-webkit-slider-thumb]:shadow-md active:[&::-moz-range-thumb]:shadow-md",
    !disabled && "active:[&::-webkit-slider-thumb]:scale-95 active:[&::-moz-range-thumb]:scale-95",
    className,
  ]}
  type="range"
  bind:value
  {min}
  {max}
  {step}
  {disabled}
  style={`background: linear-gradient(to right, var(--slider-fill) 0%, var(--slider-fill) ${progress}%, var(--slider-rest) ${progress}%, var(--slider-rest) 100%)`}
>

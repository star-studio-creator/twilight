<script lang="ts">
  import type { ClassValue, HTMLInputAttributes } from "svelte/elements";

  interface Props extends Omit<HTMLInputAttributes, "type" | "value"> {
    class?: ClassValue;
    value: number;
    min: number;
    max: number;
    step?: number;
    disabled?: boolean;
  }

  let {
    class: className,
    value = $bindable(),
    min,
    max,
    step = 1,
    disabled = false,
    ...props
  }: Props = $props();

  const progress = $derived.by(() => {
    const range = max - min;

    if (range === 0) {
      return 0;
    }

    return Math.min(100, Math.max(0, ((value - min) / range) * 100));
  });
</script>

<style>
  @reference "tailwindcss";

  .slider {
    --slider-progress: 0%;

    background: linear-gradient(
      to right,
      var(--twilight-color-primary) 0%,
      var(--twilight-color-primary) var(--slider-progress),
      var(--twilight-color-secondary-soft) var(--slider-progress),
      var(--twilight-color-secondary-soft) 100%
    );
  }

  .slider::-webkit-slider-thumb {
    @apply size-5 rounded-full bg-primary border-none shadow shadow-primary-shadow transition-all;
  }

  .slider::-moz-range-thumb {
    @apply size-5 rounded-full bg-primary border-none shadow shadow-primary-shadow transition-all;
  }

  .slider:not(:disabled):active::-webkit-slider-thumb {
    @apply scale-95 shadow-md;
  }

  .slider:not(:disabled):active::-moz-range-thumb {
    @apply scale-95 shadow-md;
  }
</style>

<input
  class={[
    {
      "cursor-pointer": !disabled,
      "cursor-not-allowed opacity-70": disabled,
    },
    "slider appearance-none h-1.5 rounded-full text-primary",
    className,
  ]}
  type="range"
  bind:value
  {min}
  {max}
  {step}
  {disabled}
  style={`--slider-progress: ${progress}%`}
  {...props}
>

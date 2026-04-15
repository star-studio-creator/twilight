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
    --slider-fill: var(--color-primary);
    --slider-rest: var(--color-neutral-300);
    --slider-progress: 0%;

    background: linear-gradient(
      to right,
      var(--slider-fill) 0%,
      var(--slider-fill) var(--slider-progress),
      var(--slider-rest) var(--slider-progress),
      var(--slider-rest) 100%
    );
  }

  :global(.dark) .slider {
    --slider-fill: var(--color-primary-dark);
    --slider-rest: var(--color-neutral-700);
  }

  .slider::-webkit-slider-thumb {
    @apply size-4 bg-neutral-50 rounded-full border-3 border-current shadow shadow-current/20 transition-all;
  }

  .slider::-moz-range-thumb {
    @apply size-4 bg-neutral-50 rounded-full border-3 border-current shadow shadow-current/20 transition-all;
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
    "slider appearance-none h-1.5 rounded-full text-primary dark:text-primary-light",
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

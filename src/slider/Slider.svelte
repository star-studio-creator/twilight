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
    "appearance-none h-1.5 rounded-full bg-blue-600 dark:bg-blue-700",
    className,
  ]}
  type="range"
  bind:value
  {min}
  {max}
  {step}
  {disabled}
>

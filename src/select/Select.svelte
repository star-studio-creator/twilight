<script lang="ts" generics="T">
  import type { ClassValue } from "svelte/elements";
  import type { SizeType } from "../types";

  interface Props<T> {
    class?: ClassValue;
    size?: SizeType;
    value: T;
    options: Record<string, T>;
    disabled?: boolean;
  }

  let {
    class: className = "",
    size = "md",
    value = $bindable(),
    options,
    disabled = false,
  }: Props<T> = $props();
</script>

<select
  class={[
    className,
    {
      "text-sm px-2 py-0.5": size === "sm",
      "px-2 py-0.5": size === "md",
      "text-lg px-3 py-1": size === "lg",
    },
    {
      "cursor-pointer": !disabled,
      "opacity-70 cursor-not-allowed": disabled,
    },
    "px-2 py-0.5 border border-neutral-300 rounded-md shadow-md shadow-neutral-300/30"
  ]}
  bind:value
  {disabled}
>
  {#each Object.entries(options) as [ optionName, optionValue ]}
    <option value={optionValue}>{optionName}</option>
  {/each}
</select>

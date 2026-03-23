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
    {
      "text-sm px-2 py-0.5": size === "sm",
      "px-2 py-0.5": size === "md",
      "text-lg px-3 py-1": size === "lg",
    },
    {
      "cursor-pointer hover:shadow-md": !disabled,
      "cursor-not-allowed opacity-70": disabled,
    },
    "border rounded-md shadow border-neutral-300 shadow-neutral-300/20 dark:border-neutral-600 dark:shadow-neutral-600/20 transition-shadow",
    className,
  ]}
  bind:value
  {disabled}
>
  {#each Object.entries(options) as [ optionName, optionValue ]}
    <option value={optionValue}>{optionName}</option>
  {/each}
</select>

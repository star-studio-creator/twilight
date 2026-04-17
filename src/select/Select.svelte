<script lang="ts" generics="T">
  import type { ClassValue, HTMLSelectAttributes } from "svelte/elements";
  import type { SizeType } from "../types";

  interface Props<T> extends Omit<HTMLSelectAttributes, "size"> {
    class?: ClassValue;
    size?: SizeType;
    value: T;
    options: Record<string, T>;
    disabled?: boolean;
  }

  let {
    class: className,
    size = "md",
    value = $bindable(),
    options,
    disabled = false,
    ...props
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
    "border rounded-md shadow border-secondary-light shadow-secondary-light/20 dark:border-secondary-dark dark:shadow-secondary-dark/20 transition-shadow",
    className,
  ]}
  bind:value
  {disabled}
  {...props}
>
  {#each Object.entries(options) as [ optionName, optionValue ]}
    <option value={optionValue}>{optionName}</option>
  {/each}
</select>

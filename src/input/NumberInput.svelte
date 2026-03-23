<script lang="ts">
  import type { NumberInputProps } from "./types";

  let {
    class: className = "",
    size = "md",
    value = $bindable(),
    disabled = false,
    placeholder = "",
  }: NumberInputProps = $props();
</script>

<input
  class={[
    className,
    {
      "text-sm px-2 py-0.5": size === "sm",
      "px-2 py-0.5": size === "md",
      "text-lg px-3 py-1": size === "lg",
    },
    "border rounded-md shadow border-neutral-300 shadow-neutral-300/20 transition-shadow",
    {
      "hover:shadow-md": !disabled,
      "cursor-not-allowed opacity-70": disabled,
    },
  ]}
  type="number"
  bind:value
  {disabled}
  {placeholder}
>

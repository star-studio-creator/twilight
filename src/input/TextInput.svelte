<script lang="ts">
  import type { TextInputProps } from "./types";

  let {
    class: className = "",
    size = "md",
    value = $bindable(),
    disabled = false,
    shadowed = false,
    placeholder = "",
  }: TextInputProps = $props();
</script>

<input
  class={[
    {
      "text-sm px-2 py-0.5": size === "sm",
      "px-2 py-0.5": size === "md",
      "text-lg px-3 py-1": size === "lg",
    },
    {
      "hover:shadow-md": !disabled,
      "cursor-not-allowed opacity-70": disabled,
    },
    "border rounded-md shadow border-neutral-300 shadow-neutral-300/20 transition-shadow",
    className,
  ]}
  type={shadowed ? "password" : "text"}
  bind:value
  {disabled}
  {placeholder}
>

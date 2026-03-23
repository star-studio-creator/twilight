<script lang="ts">
  import type { TextAreaInputProps } from "./types";

  let {
    class: className = "",
    size = "md",
    value = $bindable(),
    rows = 5,
    disabled = false,
    placeholder = "",
  }: TextAreaInputProps = $props();
</script>

<textarea
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
    "border rounded-md shadow border-neutral-300 shadow-neutral-300/20 dark:border-neutral-600 dark:shadow-neutral-600/20 transition-shadow",
    className,
  ]}
  bind:value
  {rows}
  {disabled}
  {placeholder}
></textarea>

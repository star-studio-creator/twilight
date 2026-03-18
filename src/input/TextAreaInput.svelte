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
        className,
        {
          "text-sm px-2 py-0.5": size === "sm",
          "px-2 py-0.5": size === "md",
          "text-lg px-3 py-1": size === "lg",
        },
        "px-2 py-0.5 border rounded-md shadow-md border-neutral-300 shadow-neutral-300/30",
        disabled && "cursor-not-allowed opacity-70"
    ]}
  bind:value
  {rows}
  {disabled}
  {placeholder}
></textarea>

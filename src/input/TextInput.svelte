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
        className,
        {
          "text-sm px-2 py-0.5": size === "sm",
          "px-2 py-0.5": size === "md",
          "text-lg px-3 py-1": size === "lg",
        },
        "px-2 py-0.5 border rounded-md shadow-md border-neutral-300 shadow-neutral-300/30",
        disabled && "cursor-not-allowed opacity-70"
    ]}
  type={shadowed ? "password" : "text"}
  bind:value
  {disabled}
  {placeholder}
>

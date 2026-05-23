<script lang="ts">
  import type { ClassValue, HTMLTextareaAttributes } from "svelte/elements";
  import type { SizeType } from "../types";

  interface Props extends Omit<HTMLTextareaAttributes, "size"> {
    class?: ClassValue;
    size?: SizeType;
    value: string;
    rows?: number;
    placeholder?: string;
    disabled?: boolean;
  }

  let {
    class: className,
    size = "md",
    value = $bindable(),
    rows = 5,
    disabled = false,
    placeholder = "",
    ...props
  }: Props = $props();
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
    "border rounded-md shadow border-muted-border shadow-muted-shadow focus:outline-none focus:border-primary-border transition-all",
    className,
  ]}
  bind:value
  {rows}
  {disabled}
  {placeholder}
  {...props}
></textarea>

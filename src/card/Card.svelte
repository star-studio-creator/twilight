<script lang="ts">
  import type { Snippet } from "svelte";
  import type { ClassValue } from "svelte/elements";
  import type { ColorType, SizeType } from "../types";

  interface Props {
    class?: ClassValue;
    size?: SizeType;
    color?: ColorType;
    children: Snippet;
  }

  const {
    class: className,
    size = "md",
    color = "primary",
    children,
  }: Props = $props();
</script>

<div
  class={[
    className,
    "border rounded-md shadow-md",
    {
      "p-2": size === "sm",
      "p-4": size === "md",
      "p-6": size === "lg",
    },
    {
      "border-blue-600 shadow-blue-600/10": color === "primary",
      "border-neutral-600 shadow-neutral-600/10": color === "secondary",
      "border-red-600 shadow-red-600/10": color === "danger",
    },
  ]}
>
  {@render children()}
</div>

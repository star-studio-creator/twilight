<script lang="ts">
  import type { Snippet } from "svelte";
  import type { ClassValue, HTMLAttributes } from "svelte/elements";

  interface Props extends HTMLAttributes<HTMLDivElement> {
    class: ClassValue;
    position: "top" | "bottom" | "left" | "right";
    children: Snippet;
  }

  const { class: className, position, children, ...props }: Props = $props();
</script>

<div
  class={[
    {
      "top-0": position === "top",
      "bottom-0": position === "bottom",
      "left-0": position === "left",
      "right-0": position === "right",
    },
    "sticky z-10",
    className,
  ]}
  {...props}
>
  {@render children()}
</div>

<script lang="ts">
  import type { Snippet } from "svelte";
  import type { ClassValue, HTMLAnchorAttributes } from "svelte/elements";
  import BaseLink from "./BaseLink.svelte";

  interface Props
    extends Omit<HTMLAnchorAttributes, "href" | "target" | "rel"> {
    class?: ClassValue;
    type: "internal" | "external";
    href: string;
    preload?: boolean;
    newTab?: boolean;
    children: Snippet;
  }

  const { class: className, ...props }: Props = $props();
</script>

<BaseLink
  class={[
    "transition-colors hover:underline decoration-2 underline-offset-4",
    "text-primary hover:text-primary-hover",
    className,
  ]}
  {...props}
/>

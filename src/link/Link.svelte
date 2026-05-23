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
    "text-primary-text hover:text-primary-hover active:text-primary-active focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-border",
    className,
  ]}
  {...props}
/>

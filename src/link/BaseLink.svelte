<script lang="ts">
  import type { Snippet } from "svelte";
  import type { ClassValue, HTMLAnchorAttributes } from "svelte/elements";

  interface Props
    extends Omit<HTMLAnchorAttributes, "href" | "target" | "rel"> {
    class?: ClassValue;
    type: "internal" | "external";
    href: string;
    preload?: boolean;
    newTab?: boolean;
    children: Snippet;
  }

  const {
    class: className,
    type,
    href,
    preload,
    newTab,
    children,
    ...props
  }: Props = $props();
</script>

<a
  class={className}
  {href}
  target={type === "external" && newTab ? "_blank" : undefined}
  rel={type === "external" && newTab ? "noopener noreferrer" : undefined}
  data-preload={type === "internal" && preload ? true : undefined}
  {...props}
>
  {@render children()}
</a>

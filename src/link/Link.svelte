<script lang="ts">
  import type { ComponentProps } from "svelte";
  import BaseLink from "./BaseLink.svelte";

  type Props = ComponentProps<typeof BaseLink>;

  const { class: className, ...props }: Props = $props();
</script>

<BaseLink
  class={[
    "transition-colors hover:underline decoration-2 underline-offset-4",
    "text-primary hover:text-primary-dark dark:text-primary-light dark:hover:text-primary",
    className,
  ]}
  {...props}
/>

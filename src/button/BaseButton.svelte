<script lang="ts">
  import type { Snippet } from "svelte";
  import type { ClassValue, HTMLButtonAttributes } from "svelte/elements";

  interface Props extends HTMLButtonAttributes {
    class?: ClassValue;
    onclick?: () => void;
    loading?: boolean;
    disabled?: boolean;
    children: Snippet;
  }

  const {
    class: className,
    onclick,
    loading = false,
    disabled = false,
    children,
    ...props
  }: Props = $props();
</script>

<button
  type="button"
  class={[
    {
      "cursor-pointer": !loading && !disabled,
      // 禁用优先级比加载状态更高
      "cursor-wait": loading && !disabled,
      "cursor-not-allowed": disabled,
    },
    "w-min text-nowrap",
    className,
  ]}
  {onclick}
  disabled={loading || disabled}
  {...props}
>
  {@render children()}
</button>

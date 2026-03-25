<script lang="ts">
  import type { BaseButtonProps } from "./types";

  const {
    class: className = "",
    onclick = () => {},
    loading = false,
    disabled = false,
    children,
    ...props
  }: BaseButtonProps = $props();
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

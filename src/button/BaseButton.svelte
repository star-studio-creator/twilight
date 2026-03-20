<script lang="ts">
  import type { BaseButtonProps } from "./types";

  const {
    class: className = "",
    onClick = () => {},
    loading = false,
    disabled = false,
    children,
    ...props
  }: BaseButtonProps = $props();
</script>

<button
  type="button"
  class={[
        className,
        "w-min text-nowrap",
        {
            "cursor-pointer": !loading && !disabled,
            // 禁用优先级比加载状态更高
            "cursor-wait": loading && !disabled,
            "cursor-not-allowed": disabled,
        },
    ]}
  onclick={onClick}
  disabled={loading || disabled}
  {...props}
>
  {@render children()}
</button>

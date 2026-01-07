<script lang="ts">
  import clsx from "clsx";
  import type { BaseButtonProps } from "./types";

  const {
    className = "",
    onClick = () => {},
    loading = false,
    disabled = false,
    children,
    ...props
  }: BaseButtonProps = $props();
</script>

<button type="button" class={
  clsx(
    className,
    {
      "cursor-pointer": !loading && !disabled,
      // 禁用优先级比加载状态更高
      "cursor-wait": loading && !disabled,
      "cursor-not-allowed": disabled,
    }
  )
  // 在底层状态上，无论是加载还是禁用，都禁用按钮
  } onclick={onClick} disabled={loading || disabled} {...props}>
    {@render children()}
</button>

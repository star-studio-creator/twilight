<script lang="ts">
    import clsx from "clsx";
    import type { Snippet } from "svelte";

  interface Props {
    className?: string
    onClick?: () => void,
    disabled?: boolean
    children: Snippet
  }

    const {className, onClick, disabled, children, ...props}: Props = $props();
</script>

<button type="button" class={
  clsx(
    className,
    {
      "cursor-pointer": !disabled,
      "cursor-not-allowed": disabled,
    }
  )
  } onclick={onClick} {disabled} {...props}>
    {@render children()}
</button>

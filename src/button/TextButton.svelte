<script lang="ts">
    import { clsx } from "clsx";
    import type { Snippet } from "svelte";
    import BaseButton from "./BaseButton.svelte";

    interface Props {
      className?: string,
      type?: "default" | "primary" | "warning" | "danger"
      onClick?: () => void,
      disabled?: boolean,
      children: Snippet
    }

    const {className, type = "default", onClick, disabled, children, ...props}: Props = $props();
</script>

<BaseButton className={
  clsx(
    className,
    "px-2 py-1.5 transition-all",
    {
      "active:scale-95 hover:opacity-90 hover:underline underline-offset-3": !disabled,
      "opacity-70": disabled,
    },
    {
      "text-gray-950 dark:text-gray-50": type ==="default",
      "text-blue-600 dark:text-blue-700": type === "primary",
      "text-orange-500 dark:text-orange-600": type ==="warning",
      "text-red-600 dark:text-red-700": type === "danger"
    }
  )
} {onClick} {disabled} {...props}>
  {@render children()}
</BaseButton>

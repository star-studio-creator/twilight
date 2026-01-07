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
    "border rounded-md shadow px-2 py-1.5 transition-all dark:text-gray-50",
    {
      "active:scale-95 hover:opacity-90 hover:shadow-md": !disabled,
      "opacity-70": disabled,
    },
    {
      "border-gray-950 shadow-gray-950/30 dark:text-gray-50 dark:border-gray-50 dark:shadow-gray-50/30": type ==="default",
      "border-blue-600 shadow-blue-600/30 dark:border-blue-700 dark:shadow-blue-700/30": type === "primary",
      "border-orange-500 shadow-orange-500/30 dark:border-orange-600 dark:shadow-orange-600/30": type ==="warning",
      "border-red-600 shadow-red-600/30 dark:border-red-700 dark:shadow-red-700/30": type === "danger"
    },
    !disabled && {
      "hover:bg-gray-950/5 dark:hover:bg-gray-50/5": type ==="default",
      "hover:bg-blue-600/5 dark:hover:bg-border-700/15": type === "primary",
      "hover:bg-orange-500/5 dark:hover:bg-orange-600/15": type ==="warning",
      "hover:bg-red-600/5 dark:hover:bg-red-700/15": type === "danger"
    },
  )
} {onClick} {disabled} {...props}>
  {@render children()}
</BaseButton>

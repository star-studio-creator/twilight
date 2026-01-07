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
    "rounded-md shadow px-2 py-1.5 transition-all text-gray-50",
    {
      "active:scale-95 hover:opacity-90 hover:shadow-md": !disabled,
      "opacity-70": disabled,
    },
    {
      "bg-gray-950 shadow-gray-950/30 dark:text-gray-950 dark:bg-gray-50 dark:shadow-gray-50/30": type ==="default",
      "bg-blue-600 shadow-blue-600/30 dark:bg-blue-700 dark:shadow-blue-700/30": type === "primary",
      "bg-orange-500 shadow-orange-500/30 dark:bg-orange-600 dark:shadow-orange-600/30": type ==="warning",
      "bg-red-600 shadow-red-600/30 dark:bg-red-700 dark:shadow-red-700/30": type === "danger"
    }
  )
} {onClick} {disabled} {...props}>
  {@render children()}
</BaseButton>

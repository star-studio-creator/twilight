<script lang="ts">
  import type { ClassValue, HTMLInputAttributes } from "svelte/elements";
  import type { ColorType, SizeType } from "../types";

  interface Props
    extends Omit<HTMLInputAttributes, "size" | "checked" | "type"> {
    class?: ClassValue;
    size?: SizeType;
    color?: ColorType;
    enabled: boolean;
    disabled?: boolean;
  }

  let {
    class: className,
    size = "md",
    color = "primary",
    enabled = $bindable(),
    disabled = false,
    ...props
  }: Props = $props();

  const enabledColorVariants = {
    primary:
      "bg-primary-bg ring-primary-border hover:bg-primary-hover active:bg-primary-active shadow-primary-shadow",
    secondary:
      "bg-secondary-bg ring-secondary-border hover:bg-secondary-hover active:bg-secondary-active shadow-secondary-shadow",
    success:
      "bg-success-bg ring-success-border hover:bg-success-hover active:bg-success-active shadow-success-shadow",
    warning:
      "bg-warning-bg ring-warning-border hover:bg-warning-hover active:bg-warning-active shadow-warning-shadow",
    danger:
      "bg-danger-bg ring-danger-border hover:bg-danger-hover active:bg-danger-active shadow-danger-shadow",
    unstyled: "",
  } satisfies Record<ColorType, ClassValue>;

  const notEnabledColorVariants = {
    primary: "ring-primary-border",
    secondary: "ring-secondary-border",
    success: "ring-success-border",
    warning: "ring-warning-border",
    danger: "ring-danger-border",
    unstyled: "",
  } satisfies Record<ColorType, ClassValue>;

  const afterColorVariants = {
    primary: "after:bg-primary-contrast",
    secondary: "after:bg-secondary-contrast",
    success: "after:bg-success-contrast",
    warning: "after:bg-warning-contrast",
    danger: "after:bg-danger-contrast",
    unstyled: "",
  } satisfies Record<ColorType, ClassValue>;
</script>

<input
  class={[
    {
      "w-8 h-5 after:size-3": size === "sm",
      "w-10 h-6 after:size-4": size === "md",
      "w-12 h-7 after:size-5": size === "lg",
    },
    enabled && {
      "after:translate-x-3": size === "sm",
      "after:translate-x-4": size === "md",
      "after:translate-x-5": size === "lg",
    },
    !enabled && "bg-muted-bg shadow-muted-shadow",
    enabled && enabledColorVariants[color],
    !enabled && notEnabledColorVariants[color],
    enabled ? afterColorVariants[color] : "after:bg-bg dark:after:bg-fg",
    {
      "cursor-pointer active:scale-95 hover:shadow-md focus:outline-none focus-visible:ring-2": !disabled,
      "cursor-not-allowed opacity-50": disabled,
    },
    "relative appearance-none rounded-full shadow transition-all",
    "after:content-[''] after:absolute after:top-1 after:left-1 after:rounded-full after:transition-transform",
    className,
  ]}
  type="checkbox"
  role="switch"
  bind:checked={enabled}
  aria-checked={enabled}
  {disabled}
  {...props}
>

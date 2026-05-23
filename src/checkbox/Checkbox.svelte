<script lang="ts">
  import Check from "@lucide/svelte/icons/check";
  import type { ClassValue, HTMLInputAttributes } from "svelte/elements";
  import type { ColorType, SizeType } from "../types";

  interface Props extends Omit<HTMLInputAttributes, "size"> {
    class?: ClassValue;
    size?: SizeType;
    color?: ColorType;
    checked: boolean;
    disabled?: boolean;
  }

  let {
    class: className,
    size = "md",
    color = "primary",
    checked = $bindable(),
    disabled = false,
    ...props
  }: Props = $props();

  const colorVariants = {
    primary:
      "border-primary-border hover:bg-primary-soft checked:border-primary checked:bg-primary checked:shadow-primary-shadow checked:hover:bg-primary-hover checked:hover:border-primary-hover checked:active:bg-primary-active checked:active:border-primary-active",
    secondary:
      "border-secondary-border hover:bg-secondary-soft checked:border-secondary checked:bg-secondary checked:shadow-secondary-shadow checked:hover:bg-secondary-hover checked:hover:border-secondary-hover checked:active:bg-secondary-active checked:active:border-secondary-active",
    success:
      "border-success-border hover:bg-success-soft checked:border-success checked:bg-success checked:shadow-success-shadow checked:hover:bg-success-hover checked:hover:border-success-hover checked:active:bg-success-active checked:active:border-success-active",
    warning:
      "border-warning-border hover:bg-warning-soft checked:border-warning checked:bg-warning checked:shadow-warning-shadow checked:hover:bg-warning-hover checked:hover:border-warning-hover checked:active:bg-warning-active checked:active:border-warning-active",
    danger:
      "border-danger-border hover:bg-danger-soft checked:border-danger checked:bg-danger checked:shadow-danger-shadow checked:hover:bg-danger-hover checked:hover:border-danger-hover checked:active:bg-danger-active checked:active:border-danger-active",
    unstyled: "",
  } satisfies Record<ColorType, ClassValue>;

  const iconColorVariants = {
    primary: "text-primary-contrast",
    secondary: "text-secondary-contrast",
    success: "text-success-contrast",
    warning: "text-warning-contrast",
    danger: "text-danger-contrast",
    unstyled: "",
  } satisfies Record<ColorType, ClassValue>;
</script>

<div class="relative">
  <input
    type="checkbox"
    class={[
      {
        "size-4": size === "sm",
        "size-5": size === "md",
        "size-6": size === "lg",
      },
      colorVariants[color],
      {
        "cursor-pointer active:scale-95 hover:shadow-md": !disabled,
        "cursor-not-allowed opacity-50": disabled,
      },
      "peer appearance-none rounded border shadow transition-all",
      className,
    ]}
    bind:checked
    {disabled}
    {...props}
  >
  <Check
    class={[
      {
        "top-1 left-0.5 text-xs": size === "sm",
        "top-0.5 left-0.5 text-[16px]": size === "md",
        "top-0.5 left-0.5 text-xl": size === "lg",
      },
      iconColorVariants[color],
      "absolute pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity",
    ]}
    strokeWidth={3}
  />
</div>

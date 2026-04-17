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
      !checked && "bg-secondary-light shadow-secondary-light/20 dark:bg-secondary-dark dark:shadow-secondary-dark/20",
      checked && {
        "bg-primary shadow-primary/20 dark:bg-primary-dark dark:shadow-primary-dark/20": color === "primary",
        "bg-secondary shadow-secondary/20 dark:bg-secondary-dark dark:shadow-secondary-dark/20": color === "secondary",
        "bg-success shadow-success/20 dark:bg-success-dark dark:shadow-success-dark/20": color === "success",
        "bg-warning shadow-warning/20 dark:bg-warning-dark dark:shadow-warning-dark/20": color === "warning",
        "bg-danger shadow-danger/20 dark:bg-danger-dark dark:shadow-danger-dark/20": color === "danger",
      },
      {
        "cursor-pointer active:scale-95 hover:shadow-md": !disabled,
        "cursor-not-allowed opacity-50": disabled,
      },
      "appearance-none rounded-md shadow transition-all",
      className,
    ]}
    bind:checked
    {disabled}
    {...props}
  >
  {#if checked}
    <Check
      class={[
        {
          "top-1 left-0.5 text-xs": size === "sm",
          "top-0.5 left-0.5 text-[16px]": size === "md",
          "top-0.5 left-0.5 text-xl": size === "lg",
        },
        "absolute pointer-events-none text-neutral-50",
      ]}
      strokeWidth={3}
    />
  {/if}
</div>

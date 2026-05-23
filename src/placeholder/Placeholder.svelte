<script lang="ts">
  import Hammer from "@lucide/svelte/icons/hammer";
  import type { ClassValue, HTMLAttributes } from "svelte/elements";
  import type { ColorType } from "../types";

  interface PlaceholderProps extends HTMLAttributes<HTMLDivElement> {
    class?: ClassValue;
    color?: ColorType;
  }

  const colorVariants = {
    primary: "text-primary bg-primary-soft",
    secondary: "text-secondary bg-secondary-soft",
    success: "text-success bg-success-soft",
    warning: "text-warning bg-warning-soft",
    danger: "text-danger bg-danger-soft",
    unstyled: "",
  } satisfies Record<ColorType, ClassValue>;

  const { class: className, color = "primary" }: PlaceholderProps = $props();
</script>

<div
  class={[
    colorVariants[color],
    "grid place-content-center rounded-md",
    className,
  ]}
>
  <div class="flex items-center text-lg gap-1">
    <Hammer />
    <span>开发中</span>
  </div>
</div>

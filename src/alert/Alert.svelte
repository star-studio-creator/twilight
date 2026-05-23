<script lang="ts">
  import type { LucideIcon } from "@lucide/svelte";
  import type { Snippet } from "svelte";
  import type { ClassValue, HTMLAttributes } from "svelte/elements";
  import type { ColorType, SizeType } from "../types";

  interface Props extends HTMLAttributes<HTMLDivElement> {
    class?: ClassValue;
    size?: SizeType;
    color?: ColorType;
    title: string;
    icon?: LucideIcon;
    children: Snippet;
  }

  const {
    class: className,
    size = "md",
    color = "primary",
    title,
    icon: Icon,
    children,
  }: Props = $props();

  const colorVariants = {
    primary: "bg-primary-soft text-primary-text border-primary-border",
    secondary: "bg-secondary-soft text-secondary-text border-secondary-border",
    success: "bg-success-soft text-success-text border-success-border",
    warning: "bg-warning-soft text-warning-text border-warning-border",
    danger: "bg-danger-soft text-danger-text border-danger-border",
    unstyled: "",
  } satisfies Record<ColorType, ClassValue>;
</script>

<div
  class={[
    {
      "text-sm px-3 py-2 gap-1": size === "sm",
      "px-4 py-3 gap-1.5": size === "md",
      "text-lg px-4 py-3 gap-2": size === "lg",
    },
    colorVariants[color],
    "grid grid-rows-[auto_1fr] grid-cols-[auto_1fr] border rounded-md",
  ]}
>
  {#if Icon}
    <Icon class="row-start-1 col-start-1 place-self-center" strokeWidth={3} />
  {/if}

  <p
    class={[
      {
        "row-start-1 col-start-2": Icon,
        "row-start-1 col-start-1 col-span-2": !Icon,
      },
      "font-bold",
    ]}
  >
    {title}
  </p>

  <div
    class={[
      {
        "row-start-2 col-start-2": Icon,
        "row-start-2 col-start-1 col-span-2": !Icon,
      },
      className,
    ]}
  >
    {@render children()}
  </div>
</div>

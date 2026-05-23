<script lang="ts">
  import type { LucideIcon } from "@lucide/svelte";
  import ChevronDown from "@lucide/svelte/icons/chevron-down";
  import type { Snippet } from "svelte";
  import { cubicOut } from "svelte/easing";
  import type { ClassValue } from "svelte/elements";
  import { slide } from "svelte/transition";
  import type { ColorType, SizeType } from "../types";

  interface Props {
    class?: ClassValue;
    size?: SizeType;
    color?: ColorType;
    title: string;
    icon?: LucideIcon;
    children: Snippet;
  }

  const colorVariants = {
    primary:
      "text-primary hover:bg-primary-soft active:bg-primary-soft shadow-primary-shadow",
    secondary:
      "text-secondary hover:bg-secondary-soft active:bg-secondary-soft shadow-secondary-shadow",
    success:
      "text-success hover:bg-success-soft active:bg-success-soft shadow-success-shadow",
    warning:
      "text-warning hover:bg-warning-soft active:bg-warning-soft shadow-warning-shadow",
    danger:
      "text-danger hover:bg-danger-soft active:bg-danger-soft shadow-danger-shadow",
    unstyled: "",
  } satisfies Record<ColorType, ClassValue>;

  const borderVariants = {
    primary: "border-primary-border",
    secondary: "border-secondary-border",
    success: "border-success-border",
    warning: "border-warning-border",
    danger: "border-danger-border",
    unstyled: "",
  } satisfies Record<ColorType, ClassValue>;

  let {
    class: className,
    size = "md",
    color = "primary",
    title,
    icon: Icon,
    children,
  }: Props = $props();

  const disclosureId = $props.id();
  const triggerId = `${disclosureId}-trigger`;
  const panelId = `${disclosureId}-panel`;

  let open = $state(false);
</script>

<div
  class={[
    borderVariants[color],
    "border rounded-md overflow-hidden"
  ]}
>
  <button
    type="button"
    id={triggerId}
    class={[
      {
        "text-sm px-3 py-1": size === "sm",
        "px-4 py-2": size === "md",
        "text-lg px-4 py-3": size === "lg",
      },
      colorVariants[color],
      open && borderVariants[color],
      open && "border-b",
      "w-full font-bold hover:shadow cursor-pointer transition-all"
    ]}
    onclick={() => {
      // biome-ignore lint/suspicious/noGlobalAssign: 误报
      open = !open;
    }}
    aria-expanded={open}
    aria-controls={panelId}
  >
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-1">
        {#if Icon}
          <Icon strokeWidth={3} />
        {/if}

        <p>{title}</p>
      </div>

      <ChevronDown
        class={[
          open === true && "rotate-180",
          "transition-transform"
        ]}
        strokeWidth={3}
      />
    </div>
  </button>

  {#if open}
    <div
      id={panelId}
      class={[
        {
          "text-sm px-3 py-1": size === "sm",
          "px-4 py-2": size === "md",
          "text-lg px-4 py-3": size === "lg",
        },
        className
      ]}
      transition:slide={{ duration: 150, easing: cubicOut }}
      role="region"
      aria-labelledby={triggerId}
    >
      {@render children()}
    </div>
  {/if}
</div>

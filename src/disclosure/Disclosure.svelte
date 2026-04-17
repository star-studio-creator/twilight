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
    {
      "border-primary/50 dark:border-primary-light/50": color === "primary",
      "border-neutral-950/50 dark:border-neutral-300/50": color === "secondary",
      "border-success/50 dark:border-success-light/50": color === "success",
      "border-warning/50 dark:border-warning-light/50": color === "warning",
      "border-danger/50 dark:border-danger-light/50": color === "danger",
    },
    "border rounded-md"
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
      {
        "text-primary dark:text-primary-light": color === "primary",
        "text-neutral-950 dark:text-neutral-300": color === "secondary",
        "text-success dark:text-success-light": color === "success",
        "text-warning dark:text-warning-light": color === "warning",
        "text-danger dark:text-danger-light": color === "danger",
      },
      open && "border-b border-current/50",
      "w-full font-bold shadow hover:shadow-md cursor-pointer",
      "bg-current/5 hover:bg-current/10 shadow-current/10 dark:shadow-current/20 transition-colors"
    ]}
    onclick={() => open = !open}
    aria-expanded={open}
    aria-controls={panelId}
  >
    <div class="flex justify-between items-center">
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

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
    icon,
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
      "border-primary dark:border-primary-light": color === "primary",
      "border-neutral-950 dark:border-neutral-300": color === "secondary",
      "border-red-600 dark:border-red-500": color === "danger",
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
        "text-red-600 dark:text-red-500": color === "danger",
      },
      open && "border-b border-current",
      "w-full font-bold shadow hover:shadow-md cursor-pointer",
      "hover:bg-current/5 dark:hover:bg-current/10 shadow-current/5 dark:shadow-current/10 transition-colors"
    ]}
    onclick={() => open = !open}
    aria-expanded={open}
    aria-controls={panelId}
  >
    <div class="flex justify-between items-center">
      <div class="flex items-center gap-1">
        {#if icon}
          {@const Icon = icon}

          <Icon size="1em" />
        {/if}

        <p>{title}</p>
      </div>

      <ChevronDown
        class={[
          open === true && "rotate-180",
          "transition-transform"
        ]}
        size="1em"
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

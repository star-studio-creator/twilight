<script lang="ts">
  import type { Component, Snippet } from "svelte";
  import type { ClassValue, HTMLAttributes } from "svelte/elements";
  import type { ColorType, SizeType } from "../types";

  interface Props extends HTMLAttributes<HTMLDivElement> {
    class?: ClassValue;
    size?: SizeType;
    color?: ColorType;
    title: string;
    icon?: Component;
    children: Snippet;
  }

  const {
    class: className = "",
    size = "md",
    color = "primary",
    title,
    icon = null,
    children,
  }: Props = $props();
</script>

<div
  class={[
    {
      "text-sm px-3 py-2 gap-1": size === "sm",
      "px-4 py-3 gap-1.5": size === "md",
      "text-lg px-4 py-3 gap-2": size === "lg",
    },
    {
      "text-(--twilight-primary) dark:text-(--twilight-primary-dark)": color === "primary",
      "text-neutral-950 dark:text-neutral-300": color === "secondary",
      "text-red-600 dark:text-red-500": color === "danger",
    },
    "grid grid-rows-[auto_1fr] grid-cols-[auto_1fr]",
    "border border-current rounded-md",
  ]}
>
  {#if icon}
    {@const Icon = icon}

    <Icon
      class="row-start-1 col-start-1 place-self-center"
      size="1em"
      strokeWidth={3}
    />
  {/if}

  <p
    class={[
      {
        "row-start-1 col-start-2": icon,
        "row-start-1 col-start-1 col-span-2": !icon,
      },
      "font-bold",
    ]}
  >
    {title}
  </p>

  <div
    class={[
      {
        "row-start-2 col-start-2": icon,
        "row-start-2 col-start-1 col-span-2": !icon,
      },
      className,
    ]}
  >
    {@render children()}
  </div>
</div>

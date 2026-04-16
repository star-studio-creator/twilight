<script lang="ts">
  import Hammer from "@lucide/svelte/icons/hammer";
  import type { ClassValue, HTMLAttributes } from "svelte/elements";
  import type { ColorType } from "../types";

  interface PlaceholderProps extends HTMLAttributes<HTMLDivElement> {
    class?: ClassValue;
    color?: ColorType;
  }

  const { class: className, color = "primary" }: PlaceholderProps = $props();
</script>

<div
  class={[
    {
      "text-primary bg-primary/10 dark:text-primary-light dark:bg-primary-dark/20": color === "primary",
      "text-neutral-950 bg-neutral-950/10 dark:text-neutral-300 dark:bg-neutral-300/10": color === "secondary",
      "text-danger bg-danger/10 dark:text-danger-light dark:bg-danger-light/20": color === "danger",
    },
    "grid place-content-center rounded-md",
    className,
  ]}
>
  <div class="flex items-center text-lg gap-1">
    <Hammer />
    <span>开发中</span>
  </div>
</div>

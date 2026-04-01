<script lang="ts">
  import Hammer from "@lucide/svelte/icons/hammer";
  import type { ClassValue, HTMLAttributes } from "svelte/elements";
  import type { ColorType } from "../types";

  interface PlaceholderProps extends HTMLAttributes<HTMLDivElement> {
    class?: ClassValue;
    color?: ColorType;
  }

  const { class: className = "", color = "primary" }: PlaceholderProps =
    $props();
</script>

<div
  class={[
    {
      "text-(--twilight-primary) bg-blue-100 dark:text-(--twilight-primary-dark) dark:bg-blue-950": color === "primary",
      "text-neutral-950 bg-neutral-200 dark:text-neutral-300 dark:bg-neutral-800": color === "secondary",
      "text-red-600 bg-red-100 dark:text-red-500 dark:bg-red-950": color === "danger",
    },
    "grid place-content-center rounded-md",
    className,
  ]}
>
  <div class="flex items-center text-lg gap-1">
    <Hammer size="1em" />
    <span>开发中</span>
  </div>
</div>

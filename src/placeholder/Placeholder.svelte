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
      "text-primary dark:text-primary-light": color === "primary",
      "text-neutral-950 dark:text-neutral-300": color === "secondary",
      "text-success dark:text-success-light": color === "success",
      "text-warning dark:text-warning-light": color === "warning",
      "text-danger dark:text-danger-light": color === "danger",
    },
    "grid place-content-center rounded-md bg-current/10 dark:bg-current/20",
    className,
  ]}
>
  <div class="flex items-center text-lg gap-1">
    <Hammer />
    <span>开发中</span>
  </div>
</div>

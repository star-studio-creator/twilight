<script lang="ts">
  import type { LucideIcon } from "@lucide/svelte";
  import type { Snippet } from "svelte";
  import type { ClassValue } from "svelte/elements";

  interface Props {
    class?: ClassValue;
    label: string;
    description?: string;
    error?: string;
    icon?: LucideIcon;
    children: Snippet;
  }

  let {
    class: className,
    label,
    description,
    error,
    icon: Icon,
    children,
  }: Props = $props();
</script>

<label class={["flex flex-col gap-1.5", className]}>
  <div class="flex items-center gap-1 text-sm">
    {#if Icon}
      <Icon />
    {/if}

    <p>{label}</p>
  </div>

  {@render children()}

  {#if error}
    <p class="text-sm text-danger dark:text-danger-light">{error}</p>
  {:else if description}
    <p class="text-sm text-neutral-600 dark:text-neutral-500">{description}</p>
  {/if}
</label>

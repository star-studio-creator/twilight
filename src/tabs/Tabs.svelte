<script lang="ts" generics="T">
  import BaseButton from "../button/BaseButton.svelte";
  import type { TabItem } from "./types";

  interface Props {
    active?: T;
    items: TabItem<T>[];
  }

  let { active = $bindable(), items }: Props = $props();
</script>

<div class="flex">
  {#each items as item (item.value)}
    <BaseButton
      class={[
        {
          "text-blue-600 dark:text-blue-400 border-current shadow-current/20": item.value === active,
          "text-neutral-950 border-neutral-300 shadow-neutral-300/20 dark:text-neutral-300 dark:border-neutral-700 dark:shadow-neutral-700/20": item.value !== active,
        },
        {
          "active:scale-95 hover:bg-current/5 dark:hover:bg-current/10 hover:shadow": !item.disabled,
          "opacity-70": item.disabled,
        },
        "flex gap-1.5 items-center border-b-2 rounded-t px-3 py-1.5 transition-all",
      ]}
      onclick={() => active = item.value}
      disabled={item.disabled}
    >
      {#if item.icon}
        {@const Icon = item.icon}

        <Icon size="1em" />
      {/if}

      <span>{item.name}</span>
    </BaseButton>
  {/each}
</div>

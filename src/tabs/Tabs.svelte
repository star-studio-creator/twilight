<script lang="ts" generics="T extends string">
  import type { Component } from "svelte";

  interface TabItem<T> {
    name: string;
    value: T;
    icon?: Component;
    disabled?: boolean;
  }

  interface Props {
    active?: T;
    items: TabItem<T>[];
  }

  const id = $props.id();
  const tabsId = `${id}-tabs`;

  let { active = $bindable(), items }: Props = $props();
</script>

<div class="flex">
  {#each items as item (item.value)}
    {@const itemId = `${tabsId}-item-${item.value}`}

    <input
      id={itemId}
      type="radio"
      class="peer sr-only"
      name={tabsId}
      checked={item.value === active}
      onchange={() => active = item.value}
      disabled={item.disabled}
    >

    <label
      for={itemId}
      class={[
        {
          "text-primary dark:text-primary-light border-current shadow-current/20 peer-focus-visible:outline": item.value === active,
          "text-neutral-950 border-neutral-300 shadow-neutral-300/20 dark:text-neutral-300 dark:border-neutral-700 dark:shadow-neutral-700/20": item.value !== active,
        },
        {
          "cursor-pointer active:scale-95 hover:bg-current/5 dark:hover:bg-current/10 hover:shadow": !item.disabled,
          "cursor-not-allowed opacity-70": item.disabled,
        },
        "flex gap-1.5 items-center border-b-2 rounded-t px-3 py-1.5 transition-all",
      ]}
    >
      {#if item.icon}
        {@const Icon = item.icon}

        <Icon size="1em" />
      {/if}

      <span>{item.name}</span>
    </label>
  {/each}
</div>

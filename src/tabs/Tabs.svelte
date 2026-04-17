<script lang="ts" generics="T extends string">
  import type { LucideIcon } from "@lucide/svelte";

  interface TabItem<T> {
    name: string;
    value: T;
    icon?: LucideIcon;
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
          "text-secondary border-secondary-light shadow-secondary-light/20 dark:text-secondary-light dark:border-secondary-dark dark:shadow-secondary-dark/20": item.value !== active,
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

        <Icon />
      {/if}

      <span>{item.name}</span>
    </label>
  {/each}
</div>

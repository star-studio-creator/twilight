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

    <div>
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
            "cursor-pointer active:scale-95 hover:bg-muted-soft peer-checked:hover:bg-primary-soft": !item.disabled,
            "cursor-not-allowed opacity-70": item.disabled,
          },
          "flex gap-1.5 items-center border-b-2 rounded-t px-3 py-1.5 transition-all",
          "text-muted-text border-muted-border peer-checked:text-primary-text peer-checked:border-primary-border",
        ]}
      >
        {#if item.icon}
          {@const Icon = item.icon}

          <Icon />
        {/if}

        <span>{item.name}</span>
      </label>
    </div>
  {/each}
</div>

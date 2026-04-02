<script lang="ts">
  import Heart from "@lucide/svelte/icons/heart";
  import { Field } from "@/field";
  import { type TabItem, Tabs } from "@/tabs";

  type TabItemValueType = "tab1" | "tab2" | "tab3";

  const items: TabItem<TabItemValueType>[] = [
    { name: "Tab 1", value: "tab1" },
    { name: "Tab 2", value: "tab2", icon: Heart },
    { name: "Tab 3", value: "tab3", icon: Heart, disabled: true },
  ];

  let active = $state<TabItemValueType>("tab1");
</script>

<Field label="当前标签"><p>{active}</p></Field>

<Tabs bind:active {items} />

{#if active === "tab1"}
  <p>Tab 1</p>
{:else if active === "tab2"}
  <p>Tab 2</p>
{:else if active === "tab3"}
  <p>Tab 3</p>
{/if}

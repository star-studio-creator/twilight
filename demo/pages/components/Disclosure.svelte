<script lang="ts">
  import { COLORS, DEMO_TEXT, SIZES } from "@demo/constants";
  import { Disclosure } from "@/disclosure";
  import { Switch } from "@/switch";

  let disabled = $state(false);
</script>

<div class="flex gap-2">
  <label class="flex gap-2">
    禁用
    <Switch bind:enabled={disabled} />
  </label>
</div>

{#each SIZES as size (`size-${size}`)}
  <div class="flex flex-col gap-4">
    {#each COLORS as color (`color-${color}`)}
      <Disclosure
        class="w-full"
        {size}
        {color}
        {disabled}
        title={`${size} / ${color}`}
      >
        <p>{DEMO_TEXT}</p>
        <p>{DEMO_TEXT}</p>
      </Disclosure>
    {/each}
  </div>
{/each}

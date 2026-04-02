<script lang="ts">
  import { COLORS, DEMO_TEXT, SIZES } from "@demo/constants";
  import Heart from "@lucide/svelte/icons/heart";
  import { Disclosure } from "@/disclosure";
  import { Switch } from "@/switch";

  let withIcon = $state(false);
</script>

<div class="flex gap-2">
  <label class="flex gap-2">
    Icon
    <Switch bind:enabled={withIcon} />
  </label>
</div>

{#each SIZES as size}
  {#each COLORS as color}
    <Disclosure {size} {color} title={DEMO_TEXT} icon={withIcon ? Heart : undefined}>
      {#each { length: 5 } as _}
        <p>{DEMO_TEXT}</p>
      {/each}
    </Disclosure>
  {/each}
{/each}

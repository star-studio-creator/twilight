<script lang="ts">
  import { COLORS, DEMO_TEXT, SIZES } from "@demo/constants";
  import Heart from "@lucide/svelte/icons/heart";
  import { Alert } from "@/alert";
  import { Field } from "@/field";
  import { Switch } from "@/switch";

  let withIcon = $state(false);
</script>

<Field label="显示图标"><Switch bind:enabled={withIcon} /></Field>

{#each SIZES as size}
  <div class="flex flex-wrap gap-4">
    {#each COLORS as color}
      <Alert
        {size}
        {color}
        title={DEMO_TEXT}
        icon={withIcon ? Heart : undefined}
      >
        {#each { length: 3 } as _}
          <p>{DEMO_TEXT}</p>
        {/each}
      </Alert>
    {/each}
  </div>
{/each}

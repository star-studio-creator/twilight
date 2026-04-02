<script lang="ts">
  import { COLORS, DEMO_TEXT, SIZES } from "@demo/constants";
  import { Field } from "@/field";
  import { Switch } from "@/switch";

  let disabled = $state(false);

  let enabled = $state(false);
</script>

<Field label="禁用"><Switch bind:enabled={disabled} /></Field>

<Field label="当前状态"><p>{enabled ? "已开启" : "未开启"}</p></Field>

{#each SIZES as size}
  <div class="flex gap-4">
    {#each COLORS as color}
      <Switch {size} {color} bind:enabled {disabled} />
    {/each}
  </div>
{/each}

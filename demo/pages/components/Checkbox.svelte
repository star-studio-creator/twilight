<script lang="ts">
  import { COLORS, DEMO_TEXT, SIZES } from "@demo/constants";
  import { Checkbox } from "@/checkbox";
  import { Field } from "@/field";
  import { Switch } from "@/switch";

  let disabled = $state(false);

  let checked = $state(false);
</script>

<Field label="禁用"><Switch bind:enabled={disabled} /></Field>

<Field label="当前状态"><p>{checked ? "已勾选" : "未勾选"}</p></Field>

{#each SIZES as size}
  <div class="flex gap-4">
    {#each COLORS as color}
      <label class="flex gap-2">
        <Checkbox {size} {color} bind:checked {disabled} />
        {DEMO_TEXT}
      </label>
    {/each}
  </div>
{/each}

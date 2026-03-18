<script lang="ts">
import { Switch } from "../../../src/switch";
import { COLORS, DEMO_TEXT, SIZES } from "../../constants";

let disabled = $state(false);

let enabled = $state(false);
</script>

<label class="flex gap-2">
  禁用
  <Switch bind:enabled={disabled} />
</label>

<p>当前状态：{enabled ? "已开启" : "未开启"}</p>

{#each SIZES as size}
  <div class="flex gap-4">
    {#each COLORS as color}
      <label class="flex gap-2">
        <Switch {size} {color} bind:enabled {disabled} />
        {DEMO_TEXT}
      </label>
    {/each}
  </div>
{/each}

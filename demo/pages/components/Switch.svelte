<script lang="ts">
import Heart from "@lucide/svelte/icons/heart";
import { Switch } from "../../../src/switch";
import { COLORS, DEMO_TEXT, SIZES } from "../../constants";

let disabled = $state(false);
let withIcon = $state(false);

let enabled = $state(false);
</script>

<div class="flex gap-2">
  <label class="flex gap-2">
    禁用
    <Switch bind:enabled={disabled} />
  </label>

  <label class="flex gap-2">
    Icon
    <Switch bind:enabled={withIcon} />
  </label>
</div>

<p>当前状态：{enabled ? "已开启" : "未开启"}</p>

{#each SIZES as size}
  <div class="flex gap-4">
    {#each COLORS as color}
      <label class="flex gap-2">
        <Switch
          {size}
          {color}
          bind:enabled
          icon={withIcon ? Heart : null}
          {disabled}
        />
        {DEMO_TEXT}
      </label>
    {/each}
  </div>
{/each}

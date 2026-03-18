<script lang="ts">
import Heart from "@lucide/svelte/icons/heart";
import {
  BaseButton,
  GhostButton,
  OutlineButton,
  SolidButton,
  TextButton,
} from "../../../src/button";
import { Switch } from "../../../src/switch";
import type { IconPosition } from "../../../src/types";
import { COLORS, DEMO_TEXT, SIZES } from "../../constants";

let loading = $state(false);
let disabled = $state(false);
let withIcon = $state(false);
let iconPosition: IconPosition = $state("left");
</script>

<div class="flex gap-2">
  <label class="flex gap-2">
    加载
    <Switch bind:enabled={loading} />
  </label>

  <label class="flex gap-2">
    禁用
    <Switch bind:enabled={disabled} />
  </label>

  <label class="flex gap-2">
    Icon
    <Switch bind:enabled={withIcon} />
  </label>

  {#if withIcon}
    <select bind:value={iconPosition}>
      <option value="left">左侧</option>
      <option value="right">右侧</option>
    </select>
  {/if}
</div>

<h2 class="text-xl font-bold">GhostButton</h2>
{#each SIZES as size}
  <div class="flex gap-4">
    {#each COLORS as color}
      <GhostButton
        {size}
        {color}
        {loading}
        {disabled}
        icon={withIcon ? Heart : null}
        {iconPosition}
      >
        {DEMO_TEXT}
      </GhostButton>
    {/each}
  </div>
{/each}

<h2 class="text-xl font-bold">OutlineButton</h2>
{#each SIZES as size}
  <div class="flex gap-4">
    {#each COLORS as color}
      <OutlineButton
        {size}
        {color}
        {loading}
        {disabled}
        icon={withIcon ? Heart : null}
        {iconPosition}
      >
        {DEMO_TEXT}
      </OutlineButton>
    {/each}
  </div>
{/each}

<h2 class="text-xl font-bold">SolidButton</h2>
{#each SIZES as size}
  <div class="flex gap-4">
    {#each COLORS as color}
      <SolidButton
        {size}
        {color}
        {loading}
        {disabled}
        icon={withIcon ? Heart : null}
        {iconPosition}
      >
        {DEMO_TEXT}
      </SolidButton>
    {/each}
  </div>
{/each}

<h2 class="text-xl font-bold">TextButton</h2>
{#each SIZES as size}
  <div class="flex gap-4">
    {#each COLORS as color}
      <TextButton
        {size}
        {color}
        {loading}
        {disabled}
        icon={withIcon ? Heart : null}
        {iconPosition}
      >
        {DEMO_TEXT}
      </TextButton>
    {/each}
  </div>
{/each}

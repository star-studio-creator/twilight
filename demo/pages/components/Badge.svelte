<script lang="ts">
import Heart from "@lucide/svelte/icons/heart";
import { OutlineBadge, SolidBadge } from "../../../src/badge";
import Switch from "../../../src/switch/Switch.svelte";
import type { ColorType, IconPosition, SizeType } from "../../../src/types";

const CONTENT = "示例 Demo";
const SIZES: SizeType[] = ["sm", "md", "lg"];
const COLORS: (ColorType | "success")[] = [
  "primary",
  "secondary",
  "danger",
  "success",
];

let withIcon = $state(false);
let iconPosition: IconPosition = $state("left");
</script>

<div class="flex gap-2">
  <label class="flex gap-2">
    Icon
    <Switch bind:selected={withIcon} />
  </label>

  {#if withIcon}
    <select bind:value={iconPosition}>
      <option value="left">左侧</option>
      <option value="right">右侧</option>
    </select>
  {/if}
</div>

<h2 class="text-xl font-bold">OutlineBadge</h2>
{#each SIZES as size}
  <div class="flex gap-4">
    {#each COLORS as color}
      <OutlineBadge
        {size}
        {color}
        icon={withIcon ? Heart : null}
        {iconPosition}
      >
        {CONTENT}
      </OutlineBadge>
    {/each}
  </div>
{/each}

<h2 class="text-xl font-bold">SolidBadge</h2>
{#each SIZES as size}
  <div class="flex gap-4">
    {#each COLORS as color}
      <SolidBadge {size} {color} icon={withIcon ? Heart : null} {iconPosition}>
        {CONTENT}
      </SolidBadge>
    {/each}
  </div>
{/each}

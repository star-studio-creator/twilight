<script lang="ts">
  import { COLORS, DEMO_TEXT, SIZES } from "@demo/constants";
  import Heart from "@lucide/svelte/icons/heart";
  import { OutlineBadge, SolidBadge } from "@/badge";
  import { Switch } from "@/switch";
  import type { ColorType, IconPosition } from "@/types";

  const COLORS_FULL: (ColorType | "success")[] = [...COLORS, "success"];

  let withIcon = $state(false);
  let iconPosition: IconPosition = $state("left");
</script>

<div class="flex gap-2">
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

<h2 class="text-xl font-bold">OutlineBadge</h2>
{#each SIZES as size}
  <div class="flex gap-4">
    {#each COLORS_FULL as color}
      <OutlineBadge
        {size}
        {color}
        icon={withIcon ? Heart : null}
        {iconPosition}
      >
        {DEMO_TEXT}
      </OutlineBadge>
    {/each}
  </div>
{/each}

<h2 class="text-xl font-bold">SolidBadge</h2>
{#each SIZES as size}
  <div class="flex gap-4">
    {#each COLORS_FULL as color}
      <SolidBadge {size} {color} icon={withIcon ? Heart : null} {iconPosition}>
        {DEMO_TEXT}
      </SolidBadge>
    {/each}
  </div>
{/each}

<script lang="ts">
  import { COLORS, DEMO_TEXT, SIZES } from "@demo/constants";
  import Heart from "@lucide/svelte/icons/heart";
  import { OutlineBadge, SolidBadge } from "@/badge";
  import { Field } from "@/field";
  import { Select } from "@/select";
  import { Switch } from "@/switch";
  import type { IconPosition } from "@/types";

  const iconPositionOptions: Record<string, IconPosition> = {
    左侧: "left",
    右侧: "right",
  };

  let withIcon = $state(false);
  let iconPosition: IconPosition = $state("left");
</script>

<div class="flex gap-4">
  <Field label="显示图标"><Switch bind:enabled={withIcon} /></Field>

  {#if withIcon}
    <Field label="图标位置">
      <Select bind:value={iconPosition} options={iconPositionOptions} />
    </Field>
  {/if}
</div>

<h2 class="text-xl font-bold">SolidBadge</h2>
{#each SIZES as size}
  <div class="flex flex-wrap gap-4">
    {#each COLORS as color}
      <SolidBadge
        {size}
        {color}
        icon={withIcon ? Heart : undefined}
        {iconPosition}
      >
        {DEMO_TEXT}
      </SolidBadge>
    {/each}
  </div>
{/each}

<h2 class="text-xl font-bold">OutlineBadge</h2>
{#each SIZES as size}
  <div class="flex flex-wrap gap-4">
    {#each COLORS as color}
      <OutlineBadge
        {size}
        {color}
        icon={withIcon ? Heart : undefined}
        {iconPosition}
      >
        {DEMO_TEXT}
      </OutlineBadge>
    {/each}
  </div>
{/each}

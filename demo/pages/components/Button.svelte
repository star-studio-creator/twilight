<script lang="ts">
  import { COLORS, DEMO_TEXT, SIZES } from "@demo/constants";
  import Heart from "@lucide/svelte/icons/heart";
  import {
    GhostButton,
    IconButton,
    OutlineButton,
    SolidButton,
    TextButton,
  } from "@/button";
  import { Field } from "@/field";
  import { Select } from "@/select";
  import { Switch } from "@/switch";
  import type { IconPosition } from "@/types";

  const iconPositionOptions: Record<string, IconPosition> = {
    左侧: "left",
    右侧: "right",
  };

  let loading = $state(false);
  let disabled = $state(false);
  let withIcon = $state(false);
  let iconPosition: IconPosition = $state("left");
</script>

<div class="flex gap-4">
  <Field label="加载"><Switch bind:enabled={loading} /></Field>

  <Field label="禁用"><Switch bind:enabled={disabled} /></Field>

  <Field label="显示图标"><Switch bind:enabled={withIcon} /></Field>

  {#if withIcon}
    <Field label="图标位置">
      <Select bind:value={iconPosition} options={iconPositionOptions} />
    </Field>
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
        icon={withIcon ? Heart : undefined}
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
        icon={withIcon ? Heart : undefined}
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
        icon={withIcon ? Heart : undefined}
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
        icon={withIcon ? Heart : undefined}
        {iconPosition}
      >
        {DEMO_TEXT}
      </TextButton>
    {/each}
  </div>
{/each}

<h2 class="text-xl font-bold">IconButton</h2>
{#each SIZES as size}
  <div class="flex gap-4">
    {#each COLORS as color}
      <IconButton
        {size}
        {color}
        {loading}
        {disabled}
        label="喜欢"
        icon={Heart}
      />
    {/each}
  </div>
{/each}

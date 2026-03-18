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
import { COLORS, DEMO_TEXT } from "../../constants";

let loading = $state(false);
let disabled = $state(false);
let withIcon = $state(false);
let iconPosition: IconPosition = $state("left");
</script>

<div class="flex gap-4 justify-center">
  <label class="flex gap-2">
    Loading
    <Switch bind:enabled={loading} />
  </label>
  <label class="flex gap-2">
    Disabled
    <Switch bind:enabled={disabled} />
  </label>
  <label class="flex gap-2">
    With Icon
    <Switch bind:enabled={withIcon} />
  </label>
  <div class="flex gap-2">
    <p>Icon Position</p>
    <select bind:value={iconPosition}>
      <option value="left">Left</option>
      <option value="right">Right</option>
    </select>
  </div>
</div>

<div class="flex flex-col gap-4 items-center">
  <div class="flex gap-4">
    {#each COLORS as color}
      <SolidButton
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

  <div class="flex gap-4">
    {#each COLORS as color}
      <OutlineButton
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

  <div class="flex gap-4">
    {#each COLORS as color}
      <GhostButton
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

  <div class="flex gap-4">
    {#each COLORS as color}
      <TextButton
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

  <BaseButton {loading} {disabled}>{DEMO_TEXT}</BaseButton>
</div>

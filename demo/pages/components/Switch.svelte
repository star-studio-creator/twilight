<script lang="ts">
import Heart from "@lucide/svelte/icons/heart";
import { Switch } from "../../../src/switch";
import type { ColorType } from "../../../src/types";

const colors: ColorType[] = ["primary", "secondary", "danger", "unstyled"];

let selected = $state(false);

let disabled = $state(false);
let withIcon = $state(false);
</script>

<div class="flex gap-4 justify-center">
  <label class="flex gap-2">
    Disabled
    <Switch bind:selected={disabled} />
  </label>
  <label class="flex gap-2">
    With Icon
    <Switch bind:selected={withIcon} />
  </label>
</div>

<p class="text-center">Selected: {selected ? "Yes" : "No"}</p>

<div class="flex gap-4 justify-center">
  {#each colors as color}
    <label class="flex gap-2">
      {color}
      <Switch {color} bind:selected icon={withIcon ? Heart : null} {disabled} />
    </label>
  {/each}
</div>

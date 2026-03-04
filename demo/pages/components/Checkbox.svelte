<script lang="ts">
import { Checkbox } from "../../../src/checkbox";
import { Switch } from "../../../src/switch";
import type { ColorType } from "../../../src/types";

<<<<<<< feat/update-biome
const colors: ColorType[] = ["primary", "secondary", "danger", "unstyled"];
=======
    const colors: ColorType[] = ["primary", "secondary", "danger", "unstyled"];
>>>>>>> main

let checked = $state(false);

let disabled = $state(false);
</script>

<div class="flex gap-4 justify-center">
  <label class="flex gap-2">
    Disabled
    <Switch bind:selected={disabled} />
  </label>
</div>

<p class="text-center">Selected: {checked ? "Yes" : "No"}</p>

<div class="flex gap-4 justify-center">
  {#each colors as color}
    <label class="flex gap-2 items-center">
      {color}
      <Checkbox {color} bind:checked {disabled} />
    </label>
  {/each}
</div>

<script lang="ts">
    import Heart from "@lucide/svelte/icons/heart";
    import { OutlineBadge, SolidBadge } from "../../../src/badge";
    import Switch from "../../../src/switch/Switch.svelte";
    import type { ColorType } from "../../../src/types";

    const colors: (ColorType | "success")[] = [
        "primary",
        "secondary",
        "danger",
        "success",
    ];

    let withIcon = $state(false);
    let iconPosition: "left" | "right" = $state("left");
</script>

<div class="flex gap-4 justify-center">
    <label class="flex gap-2">
        With Icon
        <Switch bind:selected={withIcon} />
    </label>
    <div class="flex gap-2">
        <p>Icon Position</p>
        <select bind:value={iconPosition}>
            <option value="left">Left</option>
            <option value="right">Right</option>
        </select>
    </div>
</div>

<div class="flex gap-2 justify-center">
    {#each colors as color}
        <OutlineBadge {color} icon={withIcon ? Heart : null} {iconPosition}>
            OutlineBadge
        </OutlineBadge>
    {/each}
</div>

<div class="flex gap-2 justify-center">
    {#each colors as color}
        <SolidBadge {color} icon={withIcon ? Heart : null} {iconPosition}>
            SolidBadge
        </SolidBadge>
    {/each}
</div>

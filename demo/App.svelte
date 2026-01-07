<script lang="ts">
    import { Heart } from "@lucide/svelte";
    import {BaseButton, GhostButton, OutlineButton, SolidButton, TextButton} from "../src/button";
    import type { ColorType } from "../src/types";

    const colors: ColorType[] = ["default", "primary", "warning", "danger"];

    let loading = $state(false);
    let disabled = $state(false);
    let withIcon = $state(false);
    let iconPosition: "left" | "right" = $state("left");
</script>

<div class="grid place-content-center gap-8 h-screen dark:bg-gray-950">
    <div class="flex gap-4 justify-center text-gray-950 dark:text-gray-50">
        <div class="flex gap-2">
            <p>Loading</p>
            <input type="checkbox" bind:checked={loading} />
        </div>
        <div class="flex gap-2">
            <p>Disabled</p>
            <input type="checkbox" bind:checked={disabled} />
        </div>
        <div class="flex gap-2">
            <p>With Icon</p>
            <input type="checkbox" bind:checked={withIcon} />
        </div>
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
            {#each colors as type}
                <SolidButton {type} {loading} {disabled} icon={withIcon ? Heart : null} {iconPosition}>
                    Solid Button
                </SolidButton>
            {/each}
        </div>

        <div class="flex gap-4">
            {#each colors as type}
                <OutlineButton {type} {loading} {disabled} icon={withIcon ? Heart : null} {iconPosition}>
                    Outline Button
                </OutlineButton>
            {/each}
        </div>

        <div class="flex gap-4">
            {#each colors as type}
                <GhostButton {type} {loading} {disabled} icon={withIcon ? Heart : null} {iconPosition}>
                    Ghost Button
                </GhostButton>
            {/each}
        </div>

        <div class="flex gap-4">
            {#each colors as type}
                <TextButton {type} {loading} {disabled} icon={withIcon ? Heart : null} {iconPosition}>
                    Text Button
                </TextButton>
            {/each}
        </div>

        <BaseButton {loading} {disabled}>Base Button</BaseButton>
    </div>
</div>

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
    import type { ColorType } from "../../../src/types";

    const colors: ColorType[] = ["primary", "secondary", "danger", "unstyled"];

    let loading = $state(false);
    let disabled = $state(false);
    let withIcon = $state(false);
    let iconPosition: "left" | "right" = $state("left");
</script>

<div class="flex gap-4 justify-center">
    <label class="flex gap-2">
        Loading
        <Switch bind:selected={loading} />
    </label>
    <label class="flex gap-2">
        Disabled
        <Switch bind:selected={disabled} />
    </label>
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

<div class="flex flex-col gap-4 items-center">
    <div class="flex gap-4">
        {#each colors as color}
            <SolidButton
                {color}
                {loading}
                {disabled}
                icon={withIcon ? Heart : null}
                {iconPosition}
            >
                Solid Button
            </SolidButton>
        {/each}
    </div>

    <div class="flex gap-4">
        {#each colors as color}
            <OutlineButton
                {color}
                {loading}
                {disabled}
                icon={withIcon ? Heart : null}
                {iconPosition}
            >
                Outline Button
            </OutlineButton>
        {/each}
    </div>

    <div class="flex gap-4">
        {#each colors as color}
            <GhostButton
                {color}
                {loading}
                {disabled}
                icon={withIcon ? Heart : null}
                {iconPosition}
            >
                Ghost Button
            </GhostButton>
        {/each}
    </div>

    <div class="flex gap-4">
        {#each colors as color}
            <TextButton
                {color}
                {loading}
                {disabled}
                icon={withIcon ? Heart : null}
                {iconPosition}
            >
                Text Button
            </TextButton>
        {/each}
    </div>

    <BaseButton {loading} {disabled}>Base Button</BaseButton>
</div>

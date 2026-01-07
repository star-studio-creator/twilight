<script lang="ts">
    import { Heart } from "@lucide/svelte";
    import {BaseButton, GhostButton, OutlineButton, SolidButton, TextButton} from "../src/button";
</script>

<div class="grid place-content-center h-screen dark:bg-gray-950">
    <div class="flex flex-col gap-4 items-center">
        <div class="flex gap-4">
            <SolidButton>Solid Button</SolidButton>
            <SolidButton type="primary">Solid Button</SolidButton>
            <SolidButton type="warning" icon={Heart}>Solid Button</SolidButton>
            <SolidButton type="danger" icon={Heart} iconPosition="right">Solid Button</SolidButton>
        </div>
        <div class="flex gap-4">
            <SolidButton disabled>Solid Button</SolidButton>
            <SolidButton type="primary" disabled>Solid Button</SolidButton>
            <SolidButton type="warning" icon={Heart} disabled>Solid Button</SolidButton>
            <SolidButton type="danger" iconPosition="right" disabled>Solid Button</SolidButton>
        </div>

        <div class="flex gap-4">
            <OutlineButton>Outline Button</OutlineButton>
            <OutlineButton type="primary">Outline Button</OutlineButton>
            <OutlineButton type="warning" icon={Heart}>Outline Button</OutlineButton>
            <OutlineButton type="danger" icon={Heart} iconPosition="right">Outline Button</OutlineButton>
        </div>
        <div class="flex gap-4">
            <OutlineButton disabled>Outline Button</OutlineButton>
            <OutlineButton type="primary" disabled>Outline Button</OutlineButton>
            <OutlineButton type="warning" icon={Heart} disabled>Outline Button</OutlineButton>
            <OutlineButton type="danger" icon={Heart} iconPosition="right" disabled>Outline Button</OutlineButton>
        </div>

        <div class="flex gap-4">
            <GhostButton>Ghost Button</GhostButton>
            <GhostButton type="primary">Ghost Button</GhostButton>
            <GhostButton type="warning" icon={Heart}>Ghost Button</GhostButton>
            <GhostButton type="danger" icon={Heart} iconPosition="right">Ghost Button</GhostButton>
        </div>
        <div class="flex gap-4">
            <GhostButton disabled>Ghost Button</GhostButton>
            <GhostButton type="primary" disabled>Ghost Button</GhostButton>
            <GhostButton type="warning" icon={Heart} disabled>Ghost Button</GhostButton>
            <GhostButton type="danger" icon={Heart} iconPosition="right" disabled>Ghost Button</GhostButton>
        </div>

        <div class="flex gap-4">
            <TextButton>Text Button</TextButton>
            <TextButton type="primary">Text Button</TextButton>
            <TextButton type="warning" icon={Heart}>Text Button</TextButton>
            <TextButton type="danger" icon={Heart} iconPosition="right">Text Button</TextButton>
        </div>
        <div class="flex gap-4">
            <TextButton disabled>Text Button</TextButton>
            <TextButton type="primary" disabled>Text Button</TextButton>
            <TextButton type="warning" icon={Heart} disabled>Text Button</TextButton>
            <TextButton type="danger" icon={Heart} iconPosition="right" disabled>Text Button</TextButton>
        </div>

        <BaseButton>Base Button</BaseButton>
    </div>
</div>

<script lang="ts">
    import {BaseButton, GhostButton, OutlineButton, SolidButton, TextButton} from "../src/button";
</script>

<div class="grid place-content-center h-screen dark:bg-gray-950">
    <div class="flex flex-col gap-4 items-center">
        <div class="flex gap-4">
            <SolidButton>Solid Button</SolidButton>
            <SolidButton type="primary">Solid Button</SolidButton>
            <SolidButton type="warning">Solid Button</SolidButton>
            <SolidButton type="danger">Solid Button</SolidButton>
        </div>
        <div class="flex gap-4">
            <SolidButton disabled>Solid Button</SolidButton>
            <SolidButton type="primary" disabled>Solid Button</SolidButton>
            <SolidButton type="warning" disabled>Solid Button</SolidButton>
            <SolidButton type="danger" disabled>Solid Button</SolidButton>
        </div>

        <div class="flex gap-4">
            <OutlineButton>Outline Button</OutlineButton>
            <OutlineButton type="primary">Outline Button</OutlineButton>
            <OutlineButton type="warning">Outline Button</OutlineButton>
            <OutlineButton type="danger">Outline Button</OutlineButton>
        </div>
        <div class="flex gap-4">
            <OutlineButton disabled>Outline Button</OutlineButton>
            <OutlineButton type="primary" disabled>Outline Button</OutlineButton>
            <OutlineButton type="warning" disabled>Outline Button</OutlineButton>
            <OutlineButton type="danger" disabled>Outline Button</OutlineButton>
        </div>

        <div class="flex gap-4">
            <GhostButton>Ghost Button</GhostButton>
            <GhostButton type="primary">Ghost Button</GhostButton>
            <GhostButton type="warning">Ghost Button</GhostButton>
            <GhostButton type="danger">Ghost Button</GhostButton>
        </div>
        <div class="flex gap-4">
            <GhostButton disabled>Ghost Button</GhostButton>
            <GhostButton type="primary" disabled>Ghost Button</GhostButton>
            <GhostButton type="warning" disabled>Ghost Button</GhostButton>
            <GhostButton type="danger" disabled>Ghost Button</GhostButton>
        </div>

        <div class="flex gap-4">
            <TextButton>Text Button</TextButton>
            <TextButton type="primary">Text Button</TextButton>
            <TextButton type="warning">Text Button</TextButton>
            <TextButton type="danger">Text Button</TextButton>
        </div>
        <div class="flex gap-4">
            <TextButton disabled>Text Button</TextButton>
            <TextButton type="primary" disabled>Text Button</TextButton>
            <TextButton type="warning" disabled>Text Button</TextButton>
            <TextButton type="danger" disabled>Text Button</TextButton>
        </div>

        <BaseButton>Base Button</BaseButton>
    </div>
</div>

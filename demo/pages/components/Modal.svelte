<script lang="ts">
  import { DEMO_TEXT } from "@demo/constants";
  import AppWindow from "@lucide/svelte/icons/app-window";
  import X from "@lucide/svelte/icons/x";
  import { SolidButton } from "@/button";
  import { Field } from "@/field";
  import TextInput from "@/input/TextInput.svelte";
  import Modal from "@/modal/Modal.svelte";
  import { Select } from "@/select";
  import { Switch } from "@/switch";
  import type { SizeType } from "@/types";

  const sizeOptions: Record<string, SizeType> = {
    Small: "sm",
    Medium: "md",
    Large: "lg",
  };

  let size: SizeType = $state("md");
  let title = $state("标题 Title");
  let closeable = $state(true);
  let withIcon = $state(false);

  let open = $state(false);
</script>

<div class="flex gap-4">
  <Field label="尺寸">
    <Select bind:value={size} options={sizeOptions} />
  </Field>

  <Field label="标题"><TextInput bind:value={title} /></Field>
</div>

<div class="flex gap-4">
  <Field label="允许关闭"><Switch bind:enabled={closeable} /></Field>

  <Field label="显示图标"><Switch bind:enabled={withIcon} /></Field>
</div>

<SolidButton onclick={() => open = true}>打开模态窗</SolidButton>

<Modal
  class="flex flex-col gap-1"
  {size}
  {title}
  bind:open
  {closeable}
  icon={withIcon ? AppWindow : undefined}
>
  <SolidButton onclick={() => open = false} icon={X}>关闭模态窗</SolidButton>

  {#each { length: 10 } as _}
    <p>{DEMO_TEXT}</p>
  {/each}
</Modal>

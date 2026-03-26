<script lang="ts">
  import { DEMO_TEXT } from "@demo/constants";
  import AppWindow from "@lucide/svelte/icons/app-window";
  import { SolidButton } from "@/button";
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

<div class="flex gap-2">
  <label class="flex gap-2">
    尺寸
    <Select bind:value={size} options={sizeOptions} />
  </label>

  <label class="flex gap-2">
    标题
    <TextInput bind:value={title} />
  </label>
</div>

<div class="flex gap-2">
  <label class="flex gap-2">
    允许关闭
    <Switch bind:enabled={closeable} />
  </label>

  <label class="flex gap-2">
    Icon
    <Switch bind:enabled={withIcon} />
  </label>
</div>

<SolidButton onclick={() => open = true}>打开模态窗</SolidButton>

<Modal
  class="flex flex-col gap-1"
  {size}
  {title}
  bind:open
  {closeable}
  icon={withIcon ? AppWindow : null}
>
  {#each { length: 10 } as _}
    <p>{DEMO_TEXT}</p>
  {/each}
</Modal>

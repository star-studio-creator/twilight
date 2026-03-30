<script lang="ts">
  import { DEMO_TEXT, SIZES } from "@demo/constants";
  import { Field } from "@/field";
  import { FileInput, NumberInput, TextAreaInput, TextInput } from "@/input";
  import { Switch } from "@/switch";

  let placeholder = $state("");
  let disabled = $state(false);

  let textAreaInputRows = $state(5);
  let textInputShadowed = $state(false);

  let fileInputValue = $state<File[]>([]);
  let numberInputValue = $state(0);
  let textAreaInputValue = $state("");
  let textInputValue = $state("");
  let fieldValue = $state("");
</script>

<div class="flex gap-2">
  <label class="flex gap-2">
    占位符文本
    <TextInput bind:value={placeholder} />
  </label>

  <label class="flex gap-2">
    禁用
    <Switch bind:enabled={disabled} />
  </label>
</div>

<div class="flex gap-2">
  <label class="flex gap-2">
    文本块行数
    <NumberInput bind:value={textAreaInputRows} />
  </label>

  <label class="flex items-center gap-2">
    文本输入隐藏内容
    <Switch bind:enabled={textInputShadowed} />
  </label>
</div>

<h2 class="text-xl font-bold">Field</h2>
<Field
  class="max-w-md"
  label="示例字段"
  description="这是一个轻量的字段说明文案。"
>
  <TextInput
    id="field-demo-input"
    bind:value={fieldValue}
    {disabled}
    {placeholder}
  />
</Field>
<p>
  <span class="font-bold">Field 输入值：</span>
  {fieldValue}
</p>

<h2 class="text-xl font-bold">FileInput</h2>
<p>
  <span class="font-bold">文件输入值：</span>
  {fileInputValue.map((file) => file.name).join(", ")}
</p>
{#each SIZES as size (size)}
  <FileInput
    {size}
    bind:value={fileInputValue}
    accept="*"
    multiple
    clearable
    {disabled}
  />
{/each}

<h2 class="text-xl font-bold">NumberInput</h2>
<p>
  <span class="font-bold">数字输入值：</span>
  {numberInputValue}
</p>
{#each SIZES as size (size)}
  <label class="flex items-center gap-2">
    {DEMO_TEXT}
    <NumberInput
      {size}
      bind:value={numberInputValue}
      {disabled}
      {placeholder}
    />
  </label>
{/each}

<h2 class="text-xl font-bold">TextAreaInput</h2>
<p>
  <span class="font-bold">文本块输入值：</span>
  {textAreaInputValue}
</p>
{#each SIZES as size (size)}
  <label class="flex items-center gap-2">
    {DEMO_TEXT}
    <TextAreaInput
      {size}
      bind:value={textAreaInputValue}
      rows={textAreaInputRows}
      {disabled}
      {placeholder}
    />
  </label>
{/each}

<h2 class="text-xl font-bold">TextInput</h2>
<p>
  <span class="font-bold">文本输入值：</span>
  {textInputValue}
</p>
{#each SIZES as size (size)}
  <label class="flex items-center gap-2">
    {DEMO_TEXT}
    <TextInput
      {size}
      bind:value={textInputValue}
      shadowed={textInputShadowed}
      {disabled}
      {placeholder}
    />
  </label>
{/each}

<script lang="ts">
  import { DEMO_TEXT, SIZES } from "@demo/constants";
  import { FileInput, NumberInput, TextAreaInput, TextInput } from "@/input";
  import { Switch } from "@/switch";

  let placeholder = $state(DEMO_TEXT);
  let disabled = $state(false);

  let fileMultiple = $state(false);
  let fileClearable = $state(false);

  let textAreaInputRows = $state(5);
  let textInputShadowed = $state(false);

  let fileInputValue = $state<File[]>([]);
  let numberInputValue = $state(0);
  let textAreaInputValue = $state("");
  let textInputValue = $state("");
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
  <label class="flex items-center gap-2">
    文件输入可多选
    <Switch bind:enabled={fileMultiple} />
  </label>

  <label class="flex items-center gap-2">
    文件输入可清空
    <Switch bind:enabled={fileClearable} />
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
    {placeholder}
    {disabled}
    multiple={fileMultiple}
    clearable={fileClearable}
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

<script lang="ts">
  import { DEMO_TEXT, SIZES } from "@demo/constants";
  import { Field } from "@/field";
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

<div class="flex gap-4">
  <Field label="占位符文本"><TextInput bind:value={placeholder} /></Field>

  <Field label="禁用"><Switch bind:enabled={disabled} /></Field>
</div>

<div class="flex gap-4">
  <Field label="文件输入可多选"><Switch bind:enabled={fileMultiple} /></Field>

  <Field label="文件输入可清空">
    <Switch bind:enabled={fileClearable} />
  </Field>
</div>

<div class="flex gap-4">
  <Field label="文本块行数">
    <NumberInput bind:value={textAreaInputRows} />
  </Field>

  <Field label="文本输入隐藏内容">
    <Switch bind:enabled={textInputShadowed} />
  </Field>
</div>

<h2 class="text-xl font-bold">FileInput</h2>
<Field label="文件输入值">
  <p>{fileInputValue.map((file) => file.name).join(", ") || "暂无文件"}</p>
</Field>
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
<Field label="数字输入值"><p>{numberInputValue}</p></Field>
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
<Field label="文本块输入值"><p>{textAreaInputValue || "暂无内容"}</p></Field>
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
<Field label="文本输入值"><p>{textInputValue || "暂无内容"}</p></Field>
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

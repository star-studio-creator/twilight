<script lang="ts">
  import { DEMO_TEXT, SIZES } from "@demo/constants";
  import { Field } from "@/field";
  import { FileInput, NumberInput, TextAreaInput, TextInput } from "@/input";
  import { Switch } from "@/switch";

  let placeholder = $state(DEMO_TEXT);
  let disabled = $state(false);

  let textAreaInputRows = $state(5);
  let textInputShadowed = $state(false);

  let fileMultiple = $state(false);
  let fileClearable = $state(false);

  let textInputValue = $state("");
  let numberInputValue = $state(0);
  let textAreaInputValue = $state("");
  let fileInputValue = $state<File[]>([]);
</script>

<div class="flex gap-4">
  <Field label="占位符文本"><TextInput bind:value={placeholder} /></Field>

  <Field label="禁用"><Switch bind:enabled={disabled} /></Field>
</div>

<div class="flex gap-4">
  <Field label="文本输入隐藏内容">
    <Switch bind:enabled={textInputShadowed} />
  </Field>

  <Field label="文本块行数">
    <NumberInput bind:value={textAreaInputRows} />
  </Field>
</div>

<div class="flex gap-4">
  <Field label="文件输入可多选"><Switch bind:enabled={fileMultiple} /></Field>

  <Field label="文件输入可清空">
    <Switch bind:enabled={fileClearable} />
  </Field>
</div>

<div class="flex flex-col gap-4 max-w-lg">
  <h2 class="text-xl font-bold">TextInput</h2>
  <Field label="文本输入值"><p>{textInputValue || "暂无内容"}</p></Field>
  {#each SIZES as size}
    <TextInput
      {size}
      bind:value={textInputValue}
      shadowed={textInputShadowed}
      {disabled}
      {placeholder}
    />
  {/each}

  <h2 class="text-xl font-bold">NumberInput</h2>
  <Field label="数字输入值"><p>{numberInputValue}</p></Field>
  {#each SIZES as size}
    <NumberInput
      {size}
      bind:value={numberInputValue}
      {disabled}
      {placeholder}
    />
  {/each}

  <h2 class="text-xl font-bold">TextAreaInput</h2>
  <Field label="文本块输入值"><p>{textAreaInputValue || "暂无内容"}</p></Field>
  {#each SIZES as size}
    <TextAreaInput
      {size}
      bind:value={textAreaInputValue}
      rows={textAreaInputRows}
      {disabled}
      {placeholder}
    />
  {/each}

  <h2 class="text-xl font-bold">FileInput</h2>
  <Field label="文件输入值">
    <p>{fileInputValue.map((file) => file.name).join(", ") || "暂无文件"}</p>
  </Field>
  {#each SIZES as size}
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
</div>

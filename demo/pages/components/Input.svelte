<script lang="ts">
import { NumberInput, TextAreaInput, TextInput } from "../../../src/input";
import { Switch } from "../../../src/switch";
import { DEMO_TEXT, SIZES } from "../../constants";

let placeholder = $state("");
let disabled = $state(false);

let textAreaInputRows = $state(5);
let textInputShadowed = $state(false);

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
  <label class="flex gap-2">
    文本块行数
    <NumberInput bind:value={textAreaInputRows} />
  </label>

  <label class="flex items-center gap-2">
    文本输入隐藏内容
    <Switch bind:enabled={textInputShadowed} />
  </label>
</div>

<h2 class="text-xl font-bold">NumberInput</h2>
<p>
  <span class="font-bold">数字输入值：</span>
  {numberInputValue}
</p>
{#each SIZES as size}
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
{#each SIZES as size}
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
{#each SIZES as size}
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

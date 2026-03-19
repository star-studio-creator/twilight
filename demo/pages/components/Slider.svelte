<script lang="ts">
import { NumberInput } from "@/input";
import { Slider } from "@/slider";
import { Switch } from "@/switch";
import { DEMO_TEXT } from "../../constants";

let min = $state(0);
let max = $state(10);
let step = $state(1);
let disabled = $state(false);

let value = $state(0);
</script>

<div class="flex gap-2">
  <label class="flex gap-2">
    最小值
    <NumberInput bind:value={min} />
  </label>

  <label class="flex gap-2">
    最大值
    <NumberInput bind:value={max} />
  </label>
</div>

<div class="flex gap-2">
  <label class="flex gap-2">
    步进
    <NumberInput bind:value={step} />
  </label>

  <label class="flex gap-2">
    禁用
    <Switch bind:enabled={disabled} />
  </label>
</div>

<p>当前值：{value}</p>

<label class="flex items-center gap-2">
  {DEMO_TEXT}
  <Slider bind:value {min} {max} {step} {disabled} />
</label>

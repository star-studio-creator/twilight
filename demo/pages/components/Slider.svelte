<script lang="ts">
  import { Field } from "@/field";
  import { NumberInput } from "@/input";
  import { Slider } from "@/slider";
  import { Switch } from "@/switch";

  let min = $state(1);
  let max = $state(100);
  let step = $state(1);
  let disabled = $state(false);

  let value = $state(0);
</script>

<div class="flex gap-4">
  <Field label="最小值"><NumberInput bind:value={min} /></Field>

  <Field label="最大值"><NumberInput bind:value={max} /></Field>
</div>

<div class="flex gap-4">
  <Field label="步进"><NumberInput bind:value={step} /></Field>

  <Field label="禁用"><Switch bind:enabled={disabled} /></Field>
</div>

<Field label="当前值"><p>{value}</p></Field>

<Slider bind:value {min} {max} {step} {disabled} />

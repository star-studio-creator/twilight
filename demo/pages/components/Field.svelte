<script lang="ts">
  import { DEMO_TEXT } from "@demo/constants";
  import Heart from "@lucide/svelte/icons/heart";
  import { Field } from "@/field";
  import { NumberInput, TextAreaInput, TextInput } from "@/input";
  import { Switch } from "@/switch";

  let withIcon = $state(false);
  let error = $state(false);

  let numberValue = $state(0);
  let textAreaValue = $state("");
  let textValue = $state("");
</script>

<div class="flex gap-4">
  <Field label="显示图标"><Switch bind:enabled={withIcon} /></Field>

  <Field label="错误"><Switch bind:enabled={error} /></Field>
</div>

<Field
  label={DEMO_TEXT}
  icon={withIcon ? Heart : undefined}
  description={DEMO_TEXT}
  error={error ? DEMO_TEXT : undefined}
>
  <NumberInput bind:value={numberValue} />
</Field>

<Field
  label={DEMO_TEXT}
  icon={withIcon ? Heart : undefined}
  description={DEMO_TEXT}
  error={error ? DEMO_TEXT : undefined}
>
  <TextAreaInput bind:value={textAreaValue} />
</Field>

<Field
  label={DEMO_TEXT}
  icon={withIcon ? Heart : undefined}
  description={DEMO_TEXT}
  error={error ? DEMO_TEXT : undefined}
>
  <TextInput bind:value={textValue} />
</Field>

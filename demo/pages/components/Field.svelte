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

<div class="flex gap-2">
  <label class="flex gap-2">
    Icon
    <Switch bind:enabled={withIcon} />
  </label>

  <label class="flex gap-2">
    错误
    <Switch bind:enabled={error} />
  </label>
</div>

<Field
  label={DEMO_TEXT}
  icon={withIcon ? Heart : null}
  description={DEMO_TEXT}
  error={error ? DEMO_TEXT : undefined}
>
  <NumberInput bind:value={numberValue} />
</Field>

<Field
  label={DEMO_TEXT}
  icon={withIcon ? Heart : null}
  description={DEMO_TEXT}
  error={error ? DEMO_TEXT : undefined}
>
  <TextAreaInput bind:value={textAreaValue} />
</Field>

<Field
  label={DEMO_TEXT}
  icon={withIcon ? Heart : null}
  description={DEMO_TEXT}
  error={error ? DEMO_TEXT : undefined}
>
  <TextInput bind:value={textValue} />
</Field>

<script lang="ts">
  import { DEMO_TEXT } from "@demo/constants";
  import { SolidButton } from "@/button";
  import { Field } from "@/field";
  import { Switch } from "@/switch";
  import { toast } from "@/toast";

  let withDescription = $state(false);
</script>

<Field label="包含描述"><Switch bind:enabled={withDescription} /></Field>

<div class="flex gap-4">
  <SolidButton
    onclick={() => toast.success(DEMO_TEXT, {description: withDescription ? DEMO_TEXT: undefined})}
  >
    Success
  </SolidButton>
  <SolidButton
    onclick={() => toast.info(DEMO_TEXT, {description: withDescription ? DEMO_TEXT: undefined})}
  >
    Info
  </SolidButton>
  <SolidButton
    onclick={() => toast.warning(DEMO_TEXT, {description: withDescription ? DEMO_TEXT: undefined})}
  >
    Warning
  </SolidButton>
  <SolidButton
    onclick={() => toast.error(DEMO_TEXT, {description: withDescription ? DEMO_TEXT: undefined})}
  >
    Error
  </SolidButton>
</div>

<script lang="ts">
  import { DEMO_TEXT } from "@demo/constants";
  import { SolidButton } from "@/button";
  import { toast } from "@/toast";
</script>

<div class="flex flex-wrap gap-3">
  <SolidButton onclick={() => toast(DEMO_TEXT)}>Default</SolidButton>
  <SolidButton onclick={() => toast(DEMO_TEXT, {description: DEMO_TEXT})}>
    Description
  </SolidButton>
  <SolidButton onclick={() => toast.success(DEMO_TEXT)}>Success</SolidButton>
  <SolidButton onclick={() => toast.info(DEMO_TEXT)}>Info</SolidButton>
  <SolidButton onclick={() => toast.warning(DEMO_TEXT)}>Warning</SolidButton>
  <SolidButton onclick={() => toast.error(DEMO_TEXT)}>Error</SolidButton>
</div>

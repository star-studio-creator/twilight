<script lang="ts">
  import { COLORS } from "@demo/constants";
  import { Placeholder } from "@/placeholder";
</script>

<div class="flex flex-col gap-4 max-w-lg">
    {#each COLORS as color}
      <Placeholder class="w-full h-32" {color} />
    {/each}
</div>

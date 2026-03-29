<script lang="ts">
  import { COLORS } from "@demo/constants";
  import { Placeholder } from "@/placeholder";
</script>

{#each COLORS as color}
  <Placeholder class="w-full h-32" {color} />
{/each}

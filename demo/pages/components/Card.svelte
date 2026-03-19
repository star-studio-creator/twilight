<script lang="ts">
import { Card } from "@/card";
import { COLORS, DEMO_TEXT, SIZES } from "../../constants";
</script>

{#each SIZES as size}
  <div class="flex gap-4">
    {#each COLORS as color}
      <Card
        class={[
            "flex flex-col",
            {
              "gap-2": size === "sm",
              "gap-4": size === "md",
              "gap-6": size === "lg",
            },
          ]}
        {size}
        {color}
      >
        {#each { length: 3 } as _}
          <p>{DEMO_TEXT}</p>
        {/each}
      </Card>
    {/each}
  </div>
{/each}

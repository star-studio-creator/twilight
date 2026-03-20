<script lang="ts">
import { isActive, navigate } from "@demo/router";
import ChevronLeft from "@lucide/svelte/icons/chevron-left";
import { Router } from "sv-router";
import { GhostButton } from "@/button";
</script>

<div
  class="flex flex-col gap-4 text-neutral-950 dark:text-neutral-50 max-w-[60vw] mx-auto my-8"
>
  {#if isActive("/")}
    <h1 class="text-center text-2xl font-bold">暮光 / Twilight</h1>
  {:else}
    <GhostButton onClick={() => navigate("/")} icon={ChevronLeft}>
      Back
    </GhostButton>
  {/if}

  <Router />
</div>

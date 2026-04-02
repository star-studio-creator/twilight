<script lang="ts">
  import { isActive, navigate } from "@demo/router";
  import ChevronLeft from "@lucide/svelte/icons/chevron-left";
  import { Router } from "sv-router";
  import { GhostButton } from "@/button";
  import Switch from "@/switch/Switch.svelte";
  import { getTheme, setTheme } from "@/theme";
  import { Toaster } from "@/toast";

  let isDarkTheme = $state(getTheme() === "dark");

  $effect(() => {
    setTheme(isDarkTheme ? "dark" : "light");
  });
</script>

<Toaster />

<div class="flex flex-col gap-4 w-[90vw] max-w-5xl mx-auto my-8">
  <div class="flex justify-between items-center">
    {#if isActive("/")}
      <h1 class="text-center text-2xl font-bold">暮光 / Twilight</h1>
    {:else}
      <GhostButton onclick={() => navigate("/")} icon={ChevronLeft}>
        Back
      </GhostButton>
    {/if}

    <label class="flex gap-2">
      暗色主题
      <Switch bind:enabled={isDarkTheme} />
    </label>
  </div>

  <Router />
</div>

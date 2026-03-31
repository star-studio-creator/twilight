<script lang="ts">
  import { onMount } from "svelte";
  import { Toaster } from "svelte-sonner";
  import { getTheme, type ThemeType } from "@/theme";

  // 将 Tailwind CSS Dark Mode 与 Svelte Sonner Theme 同步
  let theme: ThemeType = $state(getTheme());

  onMount(() => {
    const observer = new MutationObserver(() => {
      theme = getTheme();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  });
</script>

<Toaster position="top-right" richColors {theme} />

<script lang="ts">
  import CircleCheck from "@lucide/svelte/icons/circle-check";
  import Info from "@lucide/svelte/icons/info";
  import LoaderCircle from "@lucide/svelte/icons/loader-circle";
  import CircleAlert from "@lucide/svelte/icons/circle-alert";
  import CircleX from "@lucide/svelte/icons/circle-x";
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

<Toaster position="top-right" richColors {theme}>
  {#snippet successIcon()}
    <CircleCheck size={20} />
  {/snippet}
  {#snippet infoIcon()}
    <Info size={20} />
  {/snippet}
  {#snippet warningIcon()}
    <CircleAlert size={20} />
  {/snippet}
  {#snippet errorIcon()}
    <CircleX size={20} />
  {/snippet}
  {#snippet loadingIcon()}
    <LoaderCircle size={20} />
  {/snippet}
</Toaster>

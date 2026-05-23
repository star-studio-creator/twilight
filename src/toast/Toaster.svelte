<script lang="ts">
  import CircleAlert from "@lucide/svelte/icons/circle-alert";
  import CircleCheck from "@lucide/svelte/icons/circle-check";
  import CircleX from "@lucide/svelte/icons/circle-x";
  import Info from "@lucide/svelte/icons/info";
  // biome-ignore lint/correctness/noUnusedImports: 误报
  import { Toaster as SonnerToaster } from "svelte-sonner";
</script>

<SonnerToaster
  position="top-right"
  expand
  toastOptions={{
    unstyled: true,
    classes: {
      toast: "min-[600px]:min-w-70 flex gap-1.5 px-3 py-2 border border-current/50 rounded-md bg-current/10 dark:bg-current/20 shadow-md shadow-current/10 dark:shadow-current/20 backdrop-blur",
      icon: "mt-1 text-[16px]",
      title: "font-bold",
      description: "text-sm",
      success: "text-success dark:text-success-light",
      info: "text-primary dark:text-primary-light",
      warning: "text-warning dark:text-warning-light",
      error: "text-danger dark:text-danger-light",
    }
  }}
>
  {#snippet successIcon()}
    <CircleCheck />
  {/snippet}
  {#snippet infoIcon()}
    <Info />
  {/snippet}
  {#snippet warningIcon()}
    <CircleAlert />
  {/snippet}
  {#snippet errorIcon()}
    <CircleX />
  {/snippet}
</SonnerToaster>

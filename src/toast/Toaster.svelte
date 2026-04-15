<script lang="ts">
  import CircleAlert from "@lucide/svelte/icons/circle-alert";
  import CircleCheck from "@lucide/svelte/icons/circle-check";
  import CircleX from "@lucide/svelte/icons/circle-x";
  import Info from "@lucide/svelte/icons/info";
  import { Toaster as SonnerToaster } from "svelte-sonner";
</script>

<SonnerToaster
  position="top-right"
  expand
  toastOptions={{
    unstyled: true,
    classes: {
      toast: "min-[600px]:min-w-70 overflow-hidden flex gap-1.5 px-3 py-2 border rounded-md shadow-md shadow-current/10",
      icon: "mt-1 text-[16px]",
      title: "font-bold",
      description: "text-sm",
      success: "text-green-600 bg-green-50 dark:text-green-400 dark:bg-green-950",
      info: "text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-950",
      warning: "text-orange-600 bg-orange-50 dark:text-orange-500 dark:bg-orange-950",
      error: "text-red-600 bg-red-50 dark:text-red-500 dark:bg-red-950",
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

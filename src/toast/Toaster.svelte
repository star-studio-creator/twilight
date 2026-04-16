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
      toast: "min-[600px]:min-w-70 overflow-hidden flex gap-1.5 px-3 py-2 border rounded-md shadow-md shadow-current/10 backdrop-blur",
      icon: "mt-1 text-[16px]",
      title: "font-bold",
      description: "text-sm",
      success: "text-success bg-success/10 dark:text-success-light dark:bg-success-dark/20",
      info: "text-primary bg-primary/10 dark:text-primary-light dark:bg-primary-dark/20",
      warning: "text-warning bg-warning/10 dark:text-warning-light dark:bg-warning-dark/20",
      error: "text-danger bg-danger/10 dark:text-danger-light dark:bg-danger-dark/20",
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

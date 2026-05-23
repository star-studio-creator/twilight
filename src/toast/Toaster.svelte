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
      toast: "min-[600px]:min-w-70 flex gap-1.5 px-3 py-2 border rounded-md bg-bg shadow hover:shadow-md",
      icon: "mt-1 text-[16px]",
      title: "font-bold",
      description: "text-sm",
      success: "text-success bg-success-soft border-success-border shadow-success-shadow",
      info: "text-primary bg-primary-soft border-primary-border shadow-primary-shadow",
      warning: "text-warning bg-warning-soft border-warning-border shadow-warning-shadow",
      error: "text-danger bg-danger-soft border-danger-border shadow-danger-shadow",
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

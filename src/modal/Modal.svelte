<script lang="ts">
  import type { LucideIcon } from "@lucide/svelte";
  import X from "@lucide/svelte/icons/x";
  import type { Snippet } from "svelte";
  import { cubicOut } from "svelte/easing";
  import type { ClassValue } from "svelte/elements";
  import { fade, scale } from "svelte/transition";
  import { IconButton } from "../button";
  import type { SizeType } from "../types";

  interface Props {
    class?: ClassValue;
    size?: SizeType;
    title: string;
    open: boolean;
    closeable?: boolean;
    icon?: LucideIcon;
    children: Snippet;
  }

  let {
    class: className,
    size = "md",
    title,
    open = $bindable(),
    closeable = true,
    icon: Icon,
    children,
  }: Props = $props();

  const titleId = $props.id();

  // biome-ignore lint/correctness/noUnusedVariables: 误报
  function portal(node: HTMLElement) {
    document.body.appendChild(node);
  }

  // biome-ignore lint/correctness/noUnusedVariables: 误报
  function scrollLock() {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }

  function handleClose() {
    if (!closeable) {
      return;
    }

    open = false;
  }

  function handleBackdropClick(event: MouseEvent) {
    if (event.target !== event.currentTarget) {
      return;
    }

    handleClose();
  }

  function handleKeydown(event: KeyboardEvent) {
    if (!open || event.key !== "Escape") {
      return;
    }

    handleClose();
  }
</script>

<svelte:window onkeydown={handleKeydown} />

{#if open}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    class="fixed inset-0 z-20 grid place-content-center bg-fg/10 backdrop-blur-xs"
    onclick={handleBackdropClick}
    transition:fade={{ duration: 100 }}
    {@attach portal}
    {@attach scrollLock}
  >
    <div
      class={[
        {
          "w-md": size === "sm",
          "w-xl": size === "md",
          "w-2xl": size === "lg",
        },
        "flex flex-col gap-4 max-w-[90vw] max-h-[90vh] p-5",
        "bg-bg shadow-bg/30 rounded-lg shadow-lg",
      ]}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      in:scale={{ start: 0.95, duration: 150, easing: cubicOut }}
      out:scale={{ start: 0.98, duration: 100 }}
    >
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2 text-xl font-bold">
          {#if Icon}
            <Icon />
          {/if}

          <h2 id={titleId}>{title}</h2>
        </div>

        {#if closeable}
          <IconButton
            size="lg"
            color="secondary"
            label="关闭"
            onclick={handleClose}
            icon={X}
          />
        {/if}
      </div>

      <div class={["overflow-y-auto", className]}>{@render children()}</div>
    </div>
  </div>
{/if}

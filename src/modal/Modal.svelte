<script lang="ts">
  import X from "@lucide/svelte/icons/x";
  import type { Component, Snippet } from "svelte";
  import type { ClassValue } from "svelte/elements";
  import GhostButton from "@/button/GhostButton.svelte";
  import type { SizeType } from "@/types";

  interface Props {
    class?: ClassValue;
    size?: SizeType;
    title: string;
    open: boolean;
    closeable?: boolean;
    icon?: Component;
    children: Snippet;
  }

  let {
    class: className = "",
    size = "md",
    title,
    open = $bindable(),
    closeable = true,
    icon = null,
    children,
  }: Props = $props();

  function portal(node: HTMLElement) {
    document.body.appendChild(node);
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
    class="fixed top-0 left-0 grid place-content-center w-screen h-screen bg-black/10 z-20"
    onclick={handleBackdropClick}
    {@attach portal}
  >
    <div
      class={[
        {
          "w-md": size === "sm",
          "w-xl": size === "md",
          "w-2xl": size === "lg",
        },
        "flex flex-col gap-4 max-h-[90vh] p-6 bg-neutral-50 rounded-lg shadow-lg",
        ]}
      role="dialog"
      aria-modal="true"
    >
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-2 text-xl font-bold">
          {#if icon}
            {@const Icon = icon}

            <Icon size="1em" />
          {/if}

          <h2>{title}</h2>
        </div>

        {#if closeable}
          <GhostButton
            class="text-sm p-1.5"
            size="unstyled"
            color="secondary"
            onclick={handleClose}
            aria-label="关闭"
          >
            <X class="1em" />
          </GhostButton>
        {/if}
      </div>

      <div class={["overflow-y-auto", className]}>{@render children()}</div>
    </div>
  </div>
{/if}

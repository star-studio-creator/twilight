<script lang="ts">
import type { Component } from "svelte";
import type { ColorType } from "../types";

interface Props {
  color?: ColorType;
  selected: boolean;
  icon?: Component;
  disabled?: boolean;
}

<<<<<<< feat/update-biome
let {
  color = "primary",
  selected = $bindable(),
  icon = null,
  disabled = false,
}: Props = $props();
=======
    let {
        color = "primary",
        selected = $bindable(),
        icon = null,
        disabled = false,
    }: Props = $props();
>>>>>>> main
</script>

<div class="flex items-center relative">
  <input
    type="checkbox"
    role="switch"
    class={[
            "appearance-none w-10 h-6 rounded-full transition-all",
            {
                "cursor-pointer active:scale-95 hover:opacity-90 hover:shadow-md":
                    !disabled,
                "cursor-not-allowed opacity-50": disabled,
            },
            !selected &&
                "bg-neutral-300 dark:bg-neutral-700 shadow-neutral-300/30 dark:shadow-neutral-700/30",
            selected && {
                "bg-blue-600 dark:bg-blue-700 shadow-blue-600/30 dark:shadow-blue-700/30":
                    color === "primary",
                "bg-neutral-950 dark:bg-neutral-500 shadow-neutral-950/30 dark:shadow-neutral-500/30":
                    color === "secondary",
                "bg-red-600 dark:bg-red-700 shadow-red-600/30 dark:shadow-red-700/30":
                    color === "danger",
            },
        ]}
    bind:checked={selected}
    aria-checked={selected}
    {disabled}
  >

  <div
    class={[
            "absolute ml-0.5 grid place-content-center bg-neutral-50 text-neutral-950 size-5 rounded-full transition-transform pointer-events-none",
            selected && "translate-x-4",
        ]}
  >
    {#if icon}
      {@const Icon = icon}
      <Icon size={14} />
    {/if}
  </div>
</div>

<script lang="ts">
  import Trash from "@lucide/svelte/icons/trash";
  import { OutlineBadge } from "@/badge";
  import { OutlineButton } from "@/button";
  import type { FileInputProps } from "./types";

  let inputElement: HTMLInputElement | null = null;

  let {
    class: className = "",
    size = "md",
    value = $bindable<File[]>([]),
    disabled = false,
    placeholder = "点击选择文件",
    clearable = false,
    multiple = false,
    ...props
  }: FileInputProps = $props();

  function onchange(event: Event) {
    const target = event.currentTarget as HTMLInputElement;
    const files = Array.from(target.files ?? []);

    value = multiple ? files : files.slice(0, 1);
  }

  function clear() {
    value = [];

    if (inputElement) {
      inputElement.value = "";
    }
  }
</script>

<label
  class={[
    {
      "min-h-24 p-2": size === "sm",
      "min-h-36 p-3": size === "md",
      "min-h-48 p-4": size === "lg",
    },
    {
      "cursor-pointer hover:shadow-md": !disabled,
      "cursor-not-allowed opacity-70": disabled,
    },
    {
      "flex flex-col": value.length !== 0,
      "grid place-content-center": value.length === 0,
    },
    "border rounded-md shadow border-neutral-300 shadow-neutral-300/20 dark:border-neutral-600 dark:shadow-neutral-600/20 transition-shadow",
    className,
  ]}
>
  <input
    bind:this={inputElement}
    class="sr-only"
    type="file"
    {disabled}
    {multiple}
    {onchange}
    {...props}
  >

  {#if value.length === 0}
    <p class="text-neutral-600 dark:text-neutral-500">{placeholder}</p>
  {:else}
    <div class="flex flex-1 flex-wrap gap-2">
      {#each value as file}
        <OutlineBadge class="h-min" {size} color="secondary">
          {file.name}
        </OutlineBadge>
      {/each}
    </div>

    <div class="flex justify-between items-end">
      <p class="text-sm text-neutral-600 dark:text-neutral-500">
        已选择 {value.length} 个文件
      </p>

      {#if clearable && value.length > 0}
        <OutlineButton size="sm" color="secondary" onclick={clear} icon={Trash}>
          清空
        </OutlineButton>
      {/if}
    </div>
  {/if}
</label>

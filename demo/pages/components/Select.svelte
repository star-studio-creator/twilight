<script lang="ts">
import { Select } from "@/select/select";
import { Switch } from "@/switch/switch";
import { SIZES } from "../../constants";

const options = {
  TypeScript: "typescript",
  JavaScript: "javascript",
  C: "c",
  "C++": "c++",
  Java: "java",
  Golang: "golang",
  Rust: "rust",
};

let disabled = $state(false);

let value = $state("typescript");
</script>

<div class="flex gap-2">
  <label class="flex gap-2">
    禁用
    <Switch bind:enabled={disabled} />
  </label>
</div>

<p>当前值：{value}</p>

{#each SIZES as size}
  <label class="flex items-center gap-2">
    <Select {size} bind:value {options} {disabled} />
  </label>
{/each}

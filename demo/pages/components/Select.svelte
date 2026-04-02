<script lang="ts">
  import { SIZES } from "@demo/constants";
  import { Field } from "@/field";
  import { Select } from "@/select";
  import { Switch } from "@/switch";

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

<Field label="禁用"><Switch bind:enabled={disabled} /></Field>

<Field label="当前值"><p>{value}</p></Field>

{#each SIZES as size}
  <label class="flex items-center gap-2">
    <Select {size} bind:value {options} {disabled} />
  </label>
{/each}

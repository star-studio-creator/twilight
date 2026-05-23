<script lang="ts">
  import { DEMO_TEXT } from "@demo/constants";
  import { Field } from "@/field";
  import { Select } from "@/select";
  import { Sticky } from "@/sticky";

  type StickyPosition = "top" | "bottom" | "left" | "right";

  const positionOptions: Record<string, StickyPosition> = {
    上: "top",
    下: "bottom",
    左: "left",
    右: "right",
  };

  let position = $state<StickyPosition>("top");
</script>

<Field label="位置">
  <Select bind:value={position} options={positionOptions} />
</Field>

<div class="w-full h-128 overflow-auto border border-border rounded">
  <div
    class={[
      {
        "flex flex-col justify-end": position === "bottom",
        "flex justify-end": position === "right",
      },
      "w-screen h-screen",
    ]}
  >
    <Sticky
      class={[
        {
          "w-full h-16": position === "top" || position === "bottom",
          "h-full w-32": position === "left" || position === "right",
        },
        "grid place-content-center text-primary-contrast bg-primary-bg",
      ]}
      {position}
    >
      {DEMO_TEXT}
    </Sticky>
  </div>
</div>

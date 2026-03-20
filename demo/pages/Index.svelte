<script lang="ts">
import { navigate } from "@demo/router";
import { GhostButton } from "@/button";

const routes: Record<string, string> = {
  Badge: "/components/badge",
  Button: "/components/button",
  Card: "/components/card",
  Checkbox: "/components/checkbox",
  Input: "/components/input",
  Select: "/components/select",
  Slider: "/components/slider",
  Switch: "/components/switch",
};
</script>

<div class="flex flex-col gap-4 items-center">
  {#each Object.entries(routes) as [ name, route ]}
    <GhostButton onClick={() => navigate(route)}> {name} </GhostButton>
  {/each}
</div>

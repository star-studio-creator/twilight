<script lang="ts">
  import Check from "@lucide/svelte/icons/check";
  import Settings2 from "@lucide/svelte/icons/settings-2";
  import SquareFunction from "@lucide/svelte/icons/square-function";
  import SquareMenu from "@lucide/svelte/icons/square-menu";
  import SquareMousePointer from "@lucide/svelte/icons/square-mouse-pointer";
  import Tag from "@lucide/svelte/icons/tag";
  import TextCursorInput from "@lucide/svelte/icons/text-cursor-input";
  import ToggleRight from "@lucide/svelte/icons/toggle-right";
  import type { Component } from "svelte";

  interface Route {
    name: string;
    path: string;
    icon: Component;
  }

  const routes: Route[] = [
    { name: "Badge", path: "/components/badge", icon: Tag },
    { name: "Button", path: "/components/button", icon: SquareFunction },
    { name: "Card", path: "/components/card", icon: SquareMenu },
    { name: "Checkbox", path: "/components/checkbox", icon: Check },
    { name: "Input", path: "/components/input", icon: TextCursorInput },
    { name: "Select", path: "/components/select", icon: SquareMousePointer },
    { name: "Slider", path: "/components/slider", icon: Settings2 },
    { name: "Switch", path: "/components/switch", icon: ToggleRight },
  ];
</script>

<div class="grid grid-cols-2 md:grid-cols-3 gap-4">
  {#each routes as route}
    {@const Icon = route.icon}

    <a
      class="p-4 border border-neutral-600 rounded-md shadow-md shadow-neutral-600/10 gap-4"
      href={route.path}
    >
      <Icon />
      <h2 class="text-lg font-bold">{route.name}</h2>
    </a>
  {/each}
</div>

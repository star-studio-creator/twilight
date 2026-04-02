<script lang="ts">
  import type { LucideIcon } from "@lucide/svelte";
  import AppWindow from "@lucide/svelte/icons/app-window";
  import BellRing from "@lucide/svelte/icons/bell-ring";
  import Check from "@lucide/svelte/icons/check";
  import ChevronsUpDown from "@lucide/svelte/icons/chevrons-up-down";
  import FormInput from "@lucide/svelte/icons/form-input";
  import Hammer from "@lucide/svelte/icons/hammer";
  import Info from "@lucide/svelte/icons/info";
  import PanelsTopLeft from "@lucide/svelte/icons/panels-top-left";
  import Settings2 from "@lucide/svelte/icons/settings-2";
  import SquareFunction from "@lucide/svelte/icons/square-function";
  import SquareMenu from "@lucide/svelte/icons/square-menu";
  import SquareMousePointer from "@lucide/svelte/icons/square-mouse-pointer";
  import Tag from "@lucide/svelte/icons/tag";
  import TextCursorInput from "@lucide/svelte/icons/text-cursor-input";
  import ToggleRight from "@lucide/svelte/icons/toggle-right";

  interface Route {
    name: string;
    path: string;
    icon: LucideIcon;
  }

  const routes: Route[] = [
    { name: "Alert", path: "/components/alert", icon: BellRing },
    { name: "Badge", path: "/components/badge", icon: Tag },
    { name: "Button", path: "/components/button", icon: SquareFunction },
    { name: "Card", path: "/components/card", icon: SquareMenu },
    { name: "Checkbox", path: "/components/checkbox", icon: Check },
    {
      name: "Disclosure",
      path: "/components/disclosure",
      icon: ChevronsUpDown,
    },
    { name: "Field", path: "/components/field", icon: FormInput },
    { name: "Input", path: "/components/input", icon: TextCursorInput },
    { name: "Modal", path: "/components/modal", icon: AppWindow },
    { name: "Placeholder", path: "/components/placeholder", icon: Hammer },
    { name: "Select", path: "/components/select", icon: SquareMousePointer },
    { name: "Slider", path: "/components/slider", icon: Settings2 },
    { name: "Switch", path: "/components/switch", icon: ToggleRight },
    { name: "Tabs", path: "/components/tabs", icon: PanelsTopLeft },
    { name: "Toast", path: "/components/toast", icon: Info },
  ];
</script>

<div class="grid grid-cols-2 md:grid-cols-3 gap-4">
  {#each routes as route}
    {@const Icon = route.icon}

    <a
      class="flex flex-col gap-2 p-4 border border-neutral-600 rounded-md shadow-md shadow-neutral-600/10"
      href={route.path}
    >
      <Icon class="size-6!" />
      <h2 class="text-lg font-bold">{route.name}</h2>
    </a>
  {/each}
</div>

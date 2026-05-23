<script lang="ts">
  import type { RouteType } from "@demo/router";
  import { p } from "@demo/router";
  import type { LucideIcon } from "@lucide/svelte";
  import AppWindow from "@lucide/svelte/icons/app-window";
  import BellRing from "@lucide/svelte/icons/bell-ring";
  import Check from "@lucide/svelte/icons/check";
  import ChevronsUpDown from "@lucide/svelte/icons/chevrons-up-down";
  import FormInput from "@lucide/svelte/icons/form-input";
  import Hammer from "@lucide/svelte/icons/hammer";
  import Info from "@lucide/svelte/icons/info";
  import LinkIcon from "@lucide/svelte/icons/link";
  import PanelsTopLeft from "@lucide/svelte/icons/panels-top-left";
  import Settings2 from "@lucide/svelte/icons/settings-2";
  import SquareFunction from "@lucide/svelte/icons/square-function";
  import SquareMenu from "@lucide/svelte/icons/square-menu";
  import SquareMousePointer from "@lucide/svelte/icons/square-mouse-pointer";
  import Sticker from "@lucide/svelte/icons/sticker";
  import Tag from "@lucide/svelte/icons/tag";
  import TextCursorInput from "@lucide/svelte/icons/text-cursor-input";
  import ToggleRight from "@lucide/svelte/icons/toggle-right";
  import { Card } from "@/card";
  import { BaseLink } from "@/link";

  interface Route {
    name: string;
    path: RouteType;
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
    { name: "Link", path: "/components/link", icon: LinkIcon },
    { name: "Modal", path: "/components/modal", icon: AppWindow },
    { name: "Placeholder", path: "/components/placeholder", icon: Hammer },
    { name: "Select", path: "/components/select", icon: SquareMousePointer },
    { name: "Slider", path: "/components/slider", icon: Settings2 },
    { name: "Sticky", path: "/components/sticky", icon: Sticker },
    { name: "Switch", path: "/components/switch", icon: ToggleRight },
    { name: "Tabs", path: "/components/tabs", icon: PanelsTopLeft },
    { name: "Toast", path: "/components/toast", icon: Info },
  ];
</script>

<div class="grid grid-cols-2 md:grid-cols-3 gap-4">
  {#each routes as route}
    {@const Icon = route.icon}

    <BaseLink type="internal" href={p(route.path)} preload>
      <Card
        class="flex flex-col gap-2 active:scale-95 transition-transform"
        color="secondary"
      >
        <Icon class="text-2xl" />
        <h2 class="text-lg font-bold">{route.name}</h2>
      </Card>
    </BaseLink>
  {/each}
</div>

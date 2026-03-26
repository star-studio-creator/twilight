import Badge from "@demo/pages/components/Badge.svelte";
import Button from "@demo/pages/components/Button.svelte";
import Card from "@demo/pages/components/Card.svelte";
import Checkbox from "@demo/pages/components/Checkbox.svelte";
import Input from "@demo/pages/components/Input.svelte";
import Modal from "@demo/pages/components/Modal.svelte";
import Select from "@demo/pages/components/Select.svelte";
import Slider from "@demo/pages/components/Slider.svelte";
import Switch from "@demo/pages/components/Switch.svelte";
import Index from "@demo/pages/Index.svelte";
import { createRouter } from "sv-router";

export const { p, navigate, isActive, route } = createRouter({
  "/": Index,
  "/components": {
    "/badge": Badge,
    "/button": Button,
    "/card": Card,
    "/checkbox": Checkbox,
    "/input": Input,
    "/modal": Modal,
    "/select": Select,
    "/slider": Slider,
    "/switch": Switch,
  },
});

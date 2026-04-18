<script lang="ts">
  import { DEMO_TEXT } from "@demo/constants";
  import { p } from "@demo/router";
  import { Field } from "@/field";
  import { Link } from "@/link";
  import { Switch } from "@/switch";

  let internalLinkPreload = $state(false);
  let externalLinkNewTab = $state(true);
</script>

<div class="flex gap-4">
  <Field label="内部链接预加载">
    <Switch bind:enabled={internalLinkPreload} />
  </Field>

  <Field label="外部链接新标签页打开">
    <Switch bind:enabled={externalLinkNewTab} />
  </Field>
</div>

<p>
  {DEMO_TEXT}
  <Link type="internal" href={p("/")} preload={internalLinkPreload}>
    内部链接：返回首页
  </Link>
  {DEMO_TEXT}
</p>

<p>
  {DEMO_TEXT}
  <Link type="external" href="https://example.com" newTab={externalLinkNewTab}>
    外部链接：example.com
  </Link>
  {DEMO_TEXT}
</p>

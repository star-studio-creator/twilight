<script lang="ts">
  import { DEMO_TEXT } from "@demo/constants";
  import { p } from "@demo/router";
  import { SolidBadge } from "@/badge";
  import { Field } from "@/field";
  import { BaseLink, Link } from "@/link";
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

<h2 class="text-xl font-bold">Link</h2>
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

<h2 class="text-xl font-bold">BaseLink</h2>
<p>
  {DEMO_TEXT}
  <BaseLink type="internal" href={p("/")} preload={internalLinkPreload}>
    <SolidBadge class="inline-flex">内部链接：返回首页</SolidBadge>
  </BaseLink>
  {DEMO_TEXT}
</p>

<p>
  {DEMO_TEXT}
  <BaseLink
    type="external"
    href="https://example.com"
    newTab={externalLinkNewTab}
  >
    <SolidBadge class="inline-flex">外部链接：example.com</SolidBadge>
  </BaseLink>
  {DEMO_TEXT}
</p>

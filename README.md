# 暮光 / Twilight

## 使用

您需要在主 CSS 文件中：

- 导入 Tailwind CSS
- 导入组件库基础 CSS
- 导入默认主题 CSS
- 将组件库路径加入 Tailwind CSS 扫描范围
- 设置暗色主题应用条件

示例代码如下：

```css
@import "tailwindcss";

@import "@star-studio/twilight/index.css";
@import "@star-studio/twilight/theme/default.css";

@source "./node_modules/@star-studio/twilight";

@custom-variant dark (&:where(.dark, .dark *));
```

## 明暗主题切换

```typescript
import { getTheme, setTheme, toggleTheme } from "@star-studio/twilight/theme";

getTheme();  // "light" | "dark"

setTheme("dark");

toggleTheme();
```

## 自定义主题

如需自定义主题，则不需要导入 `theme/default.css`。

您可将该模板复制到主 CSS 文件中，在此基础上进行主题定制：

```css
html {
  --twilight-color-bg: var(--color-neutral-50);
  --twilight-color-fg: var(--color-neutral-950);

  --twilight-color-muted-text: var(--color-neutral-500);
  --twilight-color-muted-bg: var(--color-neutral-300);
  --twilight-color-muted-border: var(--color-neutral-300);
  --twilight-color-muted-shadow: --alpha(
    var(--twilight-color-muted-border) /
    30%
  );

  --twilight-color-primary-text: var(--color-blue-600);
  --twilight-color-primary-bg: var(--color-blue-600);
  --twilight-color-primary-hover: var(--color-blue-700);
  --twilight-color-primary-active: var(--color-blue-800);
  --twilight-color-primary-soft: var(--color-blue-100);
  --twilight-color-primary-contrast: var(--color-neutral-50);
  --twilight-color-primary-border: var(--color-blue-500);
  --twilight-color-primary-shadow: --alpha(
    var(--twilight-color-primary-border) /
    30%
  );

  --twilight-color-secondary-text: var(--color-neutral-800);
  --twilight-color-secondary-bg: var(--color-neutral-800);
  --twilight-color-secondary-hover: var(--color-neutral-900);
  --twilight-color-secondary-active: var(--color-neutral-950);
  --twilight-color-secondary-soft: var(--color-neutral-200);
  --twilight-color-secondary-contrast: var(--color-neutral-50);
  --twilight-color-secondary-border: var(--color-neutral-500);
  --twilight-color-secondary-shadow: --alpha(
    var(--twilight-color-secondary-border) /
    30%
  );

  --twilight-color-success-text: var(--color-green-700);
  --twilight-color-success-bg: var(--color-green-700);
  --twilight-color-success-hover: var(--color-green-800);
  --twilight-color-success-active: var(--color-green-900);
  --twilight-color-success-soft: var(--color-green-100);
  --twilight-color-success-contrast: var(--color-neutral-50);
  --twilight-color-success-border: var(--color-green-600);
  --twilight-color-success-shadow: --alpha(
    var(--twilight-color-success-border) /
    30%
  );

  --twilight-color-warning-text: var(--color-orange-600);
  --twilight-color-warning-bg: var(--color-orange-600);
  --twilight-color-warning-hover: var(--color-orange-700);
  --twilight-color-warning-active: var(--color-orange-800);
  --twilight-color-warning-soft: var(--color-orange-100);
  --twilight-color-warning-contrast: var(--color-neutral-50);
  --twilight-color-warning-border: var(--color-orange-500);
  --twilight-color-warning-shadow: --alpha(
    var(--twilight-color-warning-border) /
    30%
  );

  --twilight-color-danger-text: var(--color-red-600);
  --twilight-color-danger-bg: var(--color-red-600);
  --twilight-color-danger-hover: var(--color-red-700);
  --twilight-color-danger-active: var(--color-red-800);
  --twilight-color-danger-soft: var(--color-red-100);
  --twilight-color-danger-contrast: var(--color-neutral-50);
  --twilight-color-danger-border: var(--color-red-500);
  --twilight-color-danger-shadow: --alpha(
    var(--twilight-color-danger-border) /
    30%
  );
}

html.dark {
  --twilight-color-bg: var(--color-neutral-950);
  --twilight-color-fg: var(--color-neutral-50);

  --twilight-color-muted-text: var(--color-neutral-400);
  --twilight-color-muted-bg: var(--color-neutral-700);
  --twilight-color-muted-border: var(--color-neutral-700);
  --twilight-color-muted-shadow: --alpha(
    var(--twilight-color-muted-border) /
    30%
  );

  --twilight-color-primary-text: var(--color-blue-400);
  --twilight-color-primary-bg: var(--color-blue-600);
  --twilight-color-primary-hover: var(--color-blue-500);
  --twilight-color-primary-active: var(--color-blue-600);
  --twilight-color-primary-soft: var(--color-blue-950);
  --twilight-color-primary-contrast: var(--color-neutral-50);
  --twilight-color-primary-border: var(--color-blue-500);
  --twilight-color-primary-shadow: --alpha(
    var(--twilight-color-primary-border) /
    30%
  );

  --twilight-color-secondary-text: var(--color-neutral-300);
  --twilight-color-secondary-bg: var(--color-neutral-300);
  --twilight-color-secondary-hover: var(--color-neutral-200);
  --twilight-color-secondary-active: var(--color-neutral-300);
  --twilight-color-secondary-soft: var(--color-neutral-800);
  --twilight-color-secondary-contrast: var(--color-neutral-950);
  --twilight-color-secondary-border: var(--color-neutral-500);
  --twilight-color-secondary-shadow: --alpha(
    var(--twilight-color-secondary-border) /
    30%
  );

  --twilight-color-success-text: var(--color-green-600);
  --twilight-color-success-bg: var(--color-green-700);
  --twilight-color-success-hover: var(--color-green-600);
  --twilight-color-success-active: var(--color-green-700);
  --twilight-color-success-soft: var(--color-green-950);
  --twilight-color-success-contrast: var(--color-neutral-50);
  --twilight-color-success-border: var(--color-green-600);
  --twilight-color-success-shadow: --alpha(
    var(--twilight-color-success-border) /
    30%
  );

  --twilight-color-warning-text: var(--color-orange-500);
  --twilight-color-warning-bg: var(--color-orange-600);
  --twilight-color-warning-hover: var(--color-orange-500);
  --twilight-color-warning-active: var(--color-orange-600);
  --twilight-color-warning-soft: var(--color-orange-950);
  --twilight-color-warning-contrast: var(--color-neutral-50);
  --twilight-color-warning-border: var(--color-orange-600);
  --twilight-color-warning-shadow: --alpha(
    var(--twilight-color-warning-border) /
    30%
  );

  --twilight-color-danger-text: var(--color-red-500);
  --twilight-color-danger-bg: var(--color-red-600);
  --twilight-color-danger-hover: var(--color-red-500);
  --twilight-color-danger-active: var(--color-red-600);
  --twilight-color-danger-soft: var(--color-red-950);
  --twilight-color-danger-contrast: var(--color-neutral-50);
  --twilight-color-danger-border: var(--color-red-600);
  --twilight-color-danger-shadow: --alpha(
    var(--twilight-color-danger-border) /
    30%
  );
}

@theme inline {
  --color-fg: var(--twilight-color-fg);
  --color-bg: var(--twilight-color-bg);

  --color-muted-text: var(--twilight-color-muted-text);
  --color-muted-bg: var(--twilight-color-muted-bg);
  --color-muted-border: var(--twilight-color-muted-border);
  --color-muted-shadow: var(--twilight-color-muted-shadow);

  --color-primary-text: var(--twilight-color-primary-text);
  --color-primary-bg: var(--twilight-color-primary-bg);
  --color-primary-hover: var(--twilight-color-primary-hover);
  --color-primary-active: var(--twilight-color-primary-active);
  --color-primary-soft: var(--twilight-color-primary-soft);
  --color-primary-contrast: var(--twilight-color-primary-contrast);
  --color-primary-border: var(--twilight-color-primary-border);
  --color-primary-shadow: var(--twilight-color-primary-shadow);

  --color-secondary-text: var(--twilight-color-secondary-text);
  --color-secondary-bg: var(--twilight-color-secondary-bg);
  --color-secondary-hover: var(--twilight-color-secondary-hover);
  --color-secondary-active: var(--twilight-color-secondary-active);
  --color-secondary-soft: var(--twilight-color-secondary-soft);
  --color-secondary-contrast: var(--twilight-color-secondary-contrast);
  --color-secondary-border: var(--twilight-color-secondary-border);
  --color-secondary-shadow: var(--twilight-color-secondary-shadow);

  --color-success-text: var(--twilight-color-success-text);
  --color-success-bg: var(--twilight-color-success-bg);
  --color-success-hover: var(--twilight-color-success-hover);
  --color-success-active: var(--twilight-color-success-active);
  --color-success-soft: var(--twilight-color-success-soft);
  --color-success-contrast: var(--twilight-color-success-contrast);
  --color-success-border: var(--twilight-color-success-border);
  --color-success-shadow: var(--twilight-color-success-shadow);

  --color-warning-text: var(--twilight-color-warning-text);
  --color-warning-bg: var(--twilight-color-warning-bg);
  --color-warning-hover: var(--twilight-color-warning-hover);
  --color-warning-active: var(--twilight-color-warning-active);
  --color-warning-soft: var(--twilight-color-warning-soft);
  --color-warning-contrast: var(--twilight-color-warning-contrast);
  --color-warning-border: var(--twilight-color-warning-border);
  --color-warning-shadow: var(--twilight-color-warning-shadow);

  --color-danger-text: var(--twilight-color-danger-text);
  --color-danger-bg: var(--twilight-color-danger-bg);
  --color-danger-hover: var(--twilight-color-danger-hover);
  --color-danger-active: var(--twilight-color-danger-active);
  --color-danger-soft: var(--twilight-color-danger-soft);
  --color-danger-contrast: var(--twilight-color-danger-contrast);
  --color-danger-border: var(--twilight-color-danger-border);
  --color-danger-shadow: var(--twilight-color-danger-shadow);
}
```

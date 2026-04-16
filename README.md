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
body {
  color: var(--color-neutral-950);
  background-color: var(--color-neutral-50);
}

html.dark body {
  color: var(--color-neutral-50);
  background-color: var(--color-neutral-950);
}

@theme {
  --color-primary: var(--color-blue-600);
  --color-primary-light: var(--color-blue-400);
  --color-primary-dark: var(--color-blue-700);
  --color-success: var(--color-green-600);
  --color-success-light: var(--color-green-500);
  --color-success-dark: var(--color-green-700);
  --color-warning: var(--color-orange-600);
  --color-warning-light: var(--color-orange-500);
  --color-warning-dark: var(--color-orange-700);
  --color-danger: var(--color-red-600);
  --color-danger-light: var(--color-red-500);
  --color-danger-dark: var(--color-red-700);
}
```

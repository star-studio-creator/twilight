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

@import "./node_modules/@star-studio/twilight/index.css";
@import "./node_modules/@star-studio/twilight/theme/default.css";

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
}
```

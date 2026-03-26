# 暮光 / Twilight

## 使用

使用前，应在 `index.css` 中将组件库目录添加到 Tailwind CSS 扫描范围内：

```css
@source "./node_modules/@star-studio/twilight";
```

## 暗色主题

您需在 `index.css` 中将暗色主题应用条件改为 `.dark` 类：

```css
@custom-variant dark (&:where(.dark, .dark *));
```

如需避免切换时包含颜色渐变的组件出现闪烁，应添加以下 CSS 类：

```css
.theme-switching *,
.theme-switching *::before,
.theme-switching *::after {
  transition: none !important;
}
```

代码示例：

```typescript
import { getTheme, setTheme, toggleTheme } from "@star-studio/twilight/theme";

getTheme();  // "light" | "dark"

setTheme("dark");

toggleTheme();
```

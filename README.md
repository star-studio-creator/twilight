# 暮光 / Twilight

## 使用

请在 CSS 中将组件库加入到 Tailwind CSS 扫描范围内，并配置暗色主题应用条件：

```css
@source "./node_modules/@star-studio/twilight";
@custom-variant dark (&:where(.dark, .dark *));
```

之后，在应用入口文件中引入组件库 CSS：

```typescript
import "@star-studio/twilight/index.css";
```

如需使用默认主题（蓝色），需一并引入对应 CSS：

```typescript
import "@star-studio/twilight/theme/default.css";
```

## 明暗主题切换

```typescript
import { getTheme, setTheme, toggleTheme } from "@star-studio/twilight/theme";

getTheme();  // "light" | "dark"

setTheme("dark");

toggleTheme();
```

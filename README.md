# 暮光 / Twilight

## 使用

您需要在主 CSS 文件中：

- 导入 Tailwind CSS
- 将组件库路径加入 Tailwind CSS 扫描范围
- 导入组件库基础 CSS
- 导入默认主题 CSS
- 设置暗色主题应用条件

示例代码如下：

```css
@import "tailwindcss";

@source "./node_modules/@star-studio/twilight";

@import "./node_modules/@star-studio/twilight/index.css";
@import "./node_modules/@star-studio/twilight/theme/default.css";

@custom-variant dark (&:where(.dark, .dark *));
```

## 明暗主题切换

```typescript
import { getTheme, setTheme, toggleTheme } from "@star-studio/twilight/theme";

getTheme();  // "light" | "dark"

setTheme("dark");

toggleTheme();
```

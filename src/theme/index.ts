const DARK_CLASS = "dark";
const THEME_SWITCHING_CLASS = "theme-switching";

export type ThemeType = "light" | "dark";

export function getTheme(): ThemeType {
  return document.documentElement.classList.contains(DARK_CLASS)
    ? "dark"
    : "light";
}

export function setTheme(theme: ThemeType) {
  const currentTheme = getTheme();
  if (
    (currentTheme === "light" && theme === "light") ||
    (currentTheme === "dark" && theme === "dark")
  ) {
    return;
  }

  const root = document.documentElement;

  root.classList.add(THEME_SWITCHING_CLASS);

  // 强制触发样式计算
  root.offsetHeight;

  if (theme === "light") {
    root.classList.remove(DARK_CLASS);
  } else {
    root.classList.add(DARK_CLASS);
  }

  // 在主题切换完成后移除禁用过度动画的类
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      root.classList.remove(THEME_SWITCHING_CLASS);
    });
  });
}

export function toggleTheme() {
  const root = document.documentElement;

  root.classList.add(THEME_SWITCHING_CLASS);

  // 强制触发样式计算
  root.offsetHeight;

  root.classList.toggle(DARK_CLASS);

  // 在主题切换完成后移除禁用过度动画的类
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      root.classList.remove(THEME_SWITCHING_CLASS);
    });
  });
}

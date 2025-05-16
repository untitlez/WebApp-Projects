"use client";

export const ToggleTheme = ({ id, main, sub }) => {
  const switchTheme = () => {
    const target = document.getElementById(id);
    const currentTheme = target.dataset.theme;
    if (currentTheme === main) {
      target.setAttribute("data-theme", sub);
    } else {
      target.setAttribute("data-theme", main);
    }
  };

  return (
    <input
      type="checkbox"
      className="toggle toggle-sm lg:toggle-md"
      defaultChecked
      onChange={switchTheme}
    />
  );
};

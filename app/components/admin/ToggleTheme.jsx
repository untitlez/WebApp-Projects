"use client";

export const ToggleTheme = () => {
  const switchTheme = () => {
    const currentTheme = document.body.getAttribute("data-theme");
    if (currentTheme === "luxury") {
      document.body.setAttribute("data-theme", "winter");
    } else {
      document.body.setAttribute("data-theme", "luxury");
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

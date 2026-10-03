"use strict";

const menuLabels = document.documentElement.lang.startsWith("zh")
  ? { open: "打开导航", close: "关闭导航" }
  : { open: "Open navigation", close: "Close navigation" };

// Real page links also work without JavaScript; carry the current section across.
function updateLanguageLinks() {
  document.querySelectorAll(".language-switch a").forEach((link) => {
    link.hash = window.location.hash;
  });
}
updateLanguageLinks();
window.addEventListener("hashchange", updateLanguageLinks);

const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.getElementById("mobile-nav");
function closeMenu(restoreFocus = false) {
  mobileNav.hidden = true;
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", menuLabels.open);
  if (restoreFocus) menuToggle.focus();
}
menuToggle.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute(
    "aria-label",
    open ? menuLabels.close : menuLabels.open,
  );
  mobileNav.hidden = !open;
});
mobileNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMenu();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !mobileNav.hidden) closeMenu(true);
});
document.addEventListener("click", (event) => {
  if (!mobileNav.hidden && !event.target.closest(".header")) closeMenu();
});
window.matchMedia("(max-width: 900px)").addEventListener("change", (event) => {
  if (!event.matches) closeMenu();
});

const tabs = [...document.querySelectorAll('[role="tab"]')];
function activateTab(selectedTab) {
  tabs.forEach((tab) => {
    const selected = tab === selectedTab;
    tab.setAttribute("aria-selected", String(selected));
    tab.tabIndex = selected ? 0 : -1;
    document.getElementById(tab.getAttribute("aria-controls")).hidden =
      !selected;
  });
}
tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => activateTab(tab));
  tab.addEventListener("keydown", (event) => {
    let next;
    if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
    if (event.key === "ArrowLeft")
      next = (index - 1 + tabs.length) % tabs.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = tabs.length - 1;
    if (next !== undefined) {
      event.preventDefault();
      activateTab(tabs[next]);
      tabs[next].focus();
    }
  });
});
document.getElementById("year").textContent = String(new Date().getFullYear());

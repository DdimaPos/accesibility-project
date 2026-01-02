class NavigationView {
  attachDropdownMenuHandler() {
    const navMenu = document.querySelector(".nav__menu");
    const menuButton = navMenu.querySelector("button");

    navMenu.addEventListener("click", (ev) => {
      ev.stopPropagation();
      const expanded = menuButton.getAttribute('aria-expanded') === 'true';
      navMenu.classList.toggle("active");
      menuButton.setAttribute('aria-expanded', !expanded)
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {n
        navMenu.classList.remove("active");
        menuButton.setAttribute("aria-expanded", "false");
      }
    });

    document.addEventListener("click", (e) => {
      if (!navMenu.contains(e.target)) {
        navMenu.classList.remove("active");
        menuButton.setAttribute("aria-expanded", "false");
      }
    });
  }
}

const navigationMenu= new NavigationView();
navigationMenu.attachDropdownMenuHandler();

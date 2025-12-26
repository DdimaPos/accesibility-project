class NavigationView {
  attachDropdownMenuHandler() {
    const navMenu = document.querySelector(".nav__menu");

    navMenu.addEventListener("click", (ev) => {
      ev.stopPropagation();
      navMenu.classList.toggle("active");
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") navMenu.classList.remove("active");
    });

    document.addEventListener("click", (e) => {
      if (!navMenu.contains(e.target)) {
        navMenu.classList.remove("active");
      }
    });
  }
}

const navigationMenu= new NavigationView();
navigationMenu.attachDropdownMenuHandler();

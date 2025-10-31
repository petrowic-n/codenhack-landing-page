const mobileNav = () => {
  const menuBtn = document.querySelector(".hamburger-menu");
  const mobileNav = document.querySelector(".mobile-nav");

  let isMobileNavOpen = false;

  menuBtn.addEventListener("click", () => {
    isMobileNavOpen = !isMobileNavOpen;
    if (isMobileNavOpen) {
      mobileNav.style.top = "64px";
      mobileNav.style.display = "block";
    } else {
      mobileNav.style.top = "0px";
      mobileNav.style.display = "none";
    }
  });
};

export default mobileNav;

const mobileClose = document.getElementsByClassName("mobile-nav-toggle")[0];
const navBar = document.getElementById("navbar");
const productsMobile = document.getElementsByClassName("products")[0];
const productsMobileCate = document.getElementsByClassName("productsMobile")[0];
console.log(productsMobile);
const mobMenu = {
  Tiles: "rak tiles 3.jpeg",
  "Artificial grass & Green Walls": "hvt Artificial Grass  3.png",
  Hardware: "h2.png",
  "Plywood &  Covering Materials": "p1.png",
  "Curtains & Blinds": "b1.jpg",
  Glass: "GLASS1.jpg",
  Doors: "DOOR1.png",
  "Wardrobe Kitchen (Sleek)": "k1.jpg",
  "Power Tools": "ralliwolf amarble cutter .jpeg",
  Light: "LIGHT1.png",
  "Flooring and walls": "hvt DeckWood Flooring 2.jpeg",
  Watercloset: "americanstandard Spalets 1.jpeg",
  "Bathroom accessories": "3.jpeg",
  "Taps & Showers": "franke taps 1.jpeg",
  "Wash basin": "FREE-STANDING BASINS aquant .jpeg",
};

productsMobile.addEventListener("click", () => {
  if (window.innerWidth < 900) {
    productsMobileCate.classList.toggle("productsMobileActive");
  } else {
    window.location.href = "./products.html";
  }
});
const productClass = document.getElementsByClassName("mobileCategory");

for (let i of productClass) {
  i.addEventListener("click", (e) => {
    const text = i.getElementsByTagName("p")[0].textContent.trim();
    if (i.getElementsByTagName("p")[0].textContent.trim() === "Bathroom") {
      const subCat = i.querySelector(".productSubClass");
      subCat.classList.add("productSubClassActive");
      i.addEventListener("click", () => {
        const activeClass = document.querySelector(".productSubClassActive");
        if (activeClass) {
          activeClass.classList.remove("productSubClassActive");
        }
        const subCat = i.querySelector(".productSubClass");
        subCat.classList.add("productSubClassActive");
      });
    } else {
      const activeClass = document.querySelector(".productSubClassActive");
      if (activeClass) {
        activeClass.classList.remove("productSubClassActive");
      }
      // LoadProducts(e.target);
      console.log(mobMenu[text]);
      sessionStorage.setItem(
        "homePageProduct",
        `${window.location.href}$${mobMenu[text]}`
      );
      window.location.href = "./products.html#indexRedirectGallery";

      mobileClose.classList.toggle("bi-list");
      mobileClose.classList.toggle("bi-x");
      navBar.classList.remove("navbar-mobile");
    }
  });
}
const productSubClass = document.getElementsByClassName("productSubClass");

for (let j of productSubClass) {
  j.addEventListener("click", (e) => {
    const text = e.target.textContent.trim();
    console.log(mobMenu[text]);
    sessionStorage.setItem(
      "homePageProduct",
      `${window.location.href}$${mobMenu[text]}`
    );
    window.location.href = "./products.html#indexRedirectGallery";
    // LoadProducts(e.target);
    mobileClose.classList.toggle("bi-list");
    mobileClose.classList.toggle("bi-x");
    navBar.classList.remove("navbar-mobile");
  });
}

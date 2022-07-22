// const mobileClose = document.getElementsByClassName("mobile-nav-toggle")[0];
// const navBar = document.getElementById("navbar");
const indexGalary = [
  "aquant bath chairs 1.jpeg",
  "rak tiles 3.jpeg",
  "b1.jpg",
  "hvt DeckWood Flooring 4.jpeg",
  "k7.jpg",
  "GLASS1.jpg",
  "h1.jpeg",
  "DOOR2.jpeg",
  "Vertical Green Walls hvt  3.jpeg",
  "LIGHT2.png",
  "p5.jpg",
  "rak water closets 3.jpeg",
  "makita Cordless Circular Saw.jpeg",
];
// const mobMenu = {
//   Tiles: "rak tiles 3.jpeg",
//   "Artificial grass & Green Walls": "hvt Artificial Grass  3.png",
//   Hardware: "h2.png",
//   "Plywood &  Covering Materials": "p1.png",
//   "Curtains & Blinds": "b1.jpg",
//   Glass: "GLASS1.jpg",
//   Doors: "DOOR1.png",
//   "Wardrobe Kitchen (Sleek)": "k1.jpg",
//   "Power Tools": "ralliwolf amarble cutter .jpeg",
//   Light: "LIGHT1.png",
//   "Flooring and walls": "hvt DeckWood Flooring 2.jpeg",
//   Watercloset: "americanstandard Spalets 1.jpeg",
//   "Bathroom accessories": "3.jpeg",
//   "Taps & Showers": "franke taps 1.jpeg",
//   "Wash basin": "FREE-STANDING BASINS aquant .jpeg",
// };
const galaryImg = document.getElementsByClassName("galaryImg")[0];

const div1 = document.createElement("div");
const div2 = document.createElement("div");
//div2.className = "galaryMobileDisplay"
const div3 = document.createElement("div");
//div3.className = "galaryMobileDisplay"

const imgInDiv = Math.floor(indexGalary.length / 3);

for (let i = 0; i < imgInDiv; i++) {
  const divInner = document.createElement("div");
  divInner.className = "galaryImgLink";
  const img = document.createElement("img");
  img.src = `/prodPics/indexGalary/${indexGalary[i]}`;
  const p = document.createElement("p");
  p.textContent = "visit";
  p.addEventListener("click", () => {
    sessionStorage.setItem(
      "homePageProduct",
      `${window.location.href}$${indexGalary[i]}`
    );
    window.location.href = "./products.html#indexRedirectGallery";
  });
  divInner.appendChild(img);
  divInner.appendChild(p);

  div1.appendChild(divInner);
}
console.log("ASdasd");

for (let i = imgInDiv; i < indexGalary.length - imgInDiv - 1; i++) {
  //starts from 6 and ends at 12
  const divInner = document.createElement("div");
  divInner.className = "galaryImgLink";
  const img = document.createElement("img");
  img.src = `/prodPics/indexGalary/${indexGalary[i]}`;
  const p = document.createElement("p");
  p.textContent = "visit";
  p.addEventListener("click", () => {
    sessionStorage.setItem(
      "homePageProduct",
      `${window.location.href}$${indexGalary[i]}`
    );
    window.location.href = "./products.html#indexRedirectGallery";
  });
  divInner.appendChild(img);
  divInner.appendChild(p);

  div2.appendChild(divInner);
}

for (let i = imgInDiv * 2 + 1; i < indexGalary.length; i++) {
  //starts from 13 and ends at 20
  const divInner = document.createElement("div");
  divInner.className = "galaryImgLink";
  const img = document.createElement("img");
  img.src = `/prodPics/indexGalary/${indexGalary[i]}`;
  const p = document.createElement("p");
  p.textContent = "visit";
  p.addEventListener("click", () => {
    sessionStorage.setItem(
      "homePageProduct",
      `${window.location.href}$${indexGalary[i]}`
    );
    window.location.href = "./products.html#indexRedirectGallery";
  });
  divInner.appendChild(img);
  divInner.appendChild(p);

  div3.appendChild(divInner);
}

galaryImg.appendChild(div1);
galaryImg.appendChild(div2);
galaryImg.appendChild(div3);

const title = document.getElementsByClassName("title-pg")[0];
title.style.cursor = "pointer";
title.addEventListener("click", () => {
  window.location.href = "./about.html";
});

// const productsMobile = document.getElementsByClassName("products")[0];
// const productsMobileCate = document.getElementsByClassName("productsMobile")[0];
// console.log(productsMobile);

// productsMobile.addEventListener("click", () => {
//   productsMobileCate.classList.toggle("productsMobileActive");
// });
// const productClass = document.getElementsByClassName("mobileCategory");

// for (let i of productClass) {
//   i.addEventListener("click", (e) => {
//     const text = i.getElementsByTagName("p")[0].textContent.trim();
//     if (i.getElementsByTagName("p")[0].textContent.trim() === "Bathroom") {
//       const subCat = i.querySelector(".productSubClass");
//       subCat.classList.add("productSubClassActive");
//       i.addEventListener("click", () => {
//         const activeClass = document.querySelector(".productSubClassActive");
//         if (activeClass) {
//           activeClass.classList.remove("productSubClassActive");
//         }
//         const subCat = i.querySelector(".productSubClass");
//         subCat.classList.add("productSubClassActive");
//       });
//     } else {
//       const activeClass = document.querySelector(".productSubClassActive");
//       if (activeClass) {
//         activeClass.classList.remove("productSubClassActive");
//       }
//       // LoadProducts(e.target);
//       console.log(mobMenu[text]);
//       sessionStorage.setItem(
//         "homePageProduct",
//         `${window.location.href}$${mobMenu[text]}`
//       );
//       window.location.href = "./products.html#indexRedirectGallery";

//       mobileClose.classList.toggle("bi-list");
//       mobileClose.classList.toggle("bi-x");
//       navBar.classList.remove("navbar-mobile");
//     }
//   });
// }
// const productSubClass = document.getElementsByClassName("productSubClass");

// for (let j of productSubClass) {
//   j.addEventListener("click", (e) => {
//     const text = e.target.textContent.trim();
//     console.log(mobMenu[text]);
//     sessionStorage.setItem(
//       "homePageProduct",
//       `${window.location.href}$${mobMenu[text]}`
//     );
//     window.location.href = "./products.html#indexRedirectGallery";
//     // LoadProducts(e.target);
//     mobileClose.classList.toggle("bi-list");
//     mobileClose.classList.toggle("bi-x");
//     navBar.classList.remove("navbar-mobile");
//   });
// }

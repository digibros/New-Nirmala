const bottomCarousel = document.getElementById("bottomCarousel");

/*const homeLinks = document.getElementsByClassName('homeLinks')[0];

homeLinks.addEventListener('click', (e) => {//redirected to product page to display items
    sessionStorage.setItem("homePageProductBtn", `${window.location.href}$${e.target.textContent}`)
    window.location.href = "./products.html#indexRedirectGallery"
})*/

const homeLogo = [
  "1519890796997.jpeg ",
  "IMG-7731.PNG",
  "IMG-7741.PNG ",
  "logo 2.jpeg",
  "2560px-Godrej_Logo.svg.png",
  "IMG-7732.PNG",
  "IMG-7742.JPG",
  "logo jcb .png",
  "DeWalt-Logo.png",
  "IMG-7743.GIF",
  "austin-plywood-logo-DE021447CF-seeklogo.com.png",
  "logo.png",
  "Hettich-Logo.png",
  "IMG-7734.PNG",
  "Unknown 2.png",
  "bosch.png",
  "modiguard-500x500.jpeg",
  "IMG-7724.PNG",
  "Unknown 3.png",
  "brand3.png",
  "American.png",
  "alstone.jpg",
  "bison.png",
  "ferm.png",
  "ozone.png",
  "ply.png",
  "ralli.png",
  "rel.png",
  "sleek.png",
  "tesa.png",
  "toto.png",
  "IMG-7725.JPG",
  "Unknown 333.png",
  "IMG-7727.PNG",
  "IMG-7737.PNG",
  "Unknown 75.jpeg",
  "xveneer_logo.png.pagespeed.ic.o8QyimQqq2.png",
  "IMG-7738.PNG",
  "fevicol-logo-7BC591EE18-seeklogo.com.png",
  "IMG-7729.PNG",
  "IMG-7739.PNG",
  "Unknown.png",
  "hafele-vector-logo.png",
  "IMG-7730.JPG",
  "IMG-7740.PNG",
  "images.png",
];

for (i of homeLogo) {
  const div0 = document.createElement("div");
  div0.className = "iconss";
  const img1 = document.createElement("img");
  img1.src = `/logos/${i}`;
  img1.style.marginLeft = "-50em";
  div0.appendChild(img1);
  bottomCarousel.appendChild(div0);
}

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

const galaryImg = document.getElementsByClassName("galaryImg")[0];

const div1 = document.createElement("div");
const div2 = document.createElement("div");
//div2.className = "galaryMobileDisplay"
const div3 = document.createElement("div");
//div3.className = "galaryMobileDisplay"

const imgInDiv = Math.floor(indexGalary.length / 3);
console.log(indexGalary.length);

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

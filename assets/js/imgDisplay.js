const listListener = document.getElementsByClassName("dropdown-item");
const productsHeading = document.getElementById("productsHeading");
const productsGallery = document.getElementsByClassName("productsGallery")[0];
const allProductPhotos = document.getElementById("allProductPhotos");
const mobileClose = document.getElementsByClassName("mobile-nav-toggle")[0];

/*
artifical_grass        glass        flooring_and_walls      glass_railings   laminates   mirror              pannel          taps     wash_basin
 bath_tub               cupboards_and_cabinates   general_items_fevicol   green_walls      light      'modular kitchens'   plywood      'sher board'         tiles    water_closet
 bathroom_accessories   curtains_and_blinds      'glass doors'            hardware         mdf         modular_kitchen     power_tools   shower_and_drains   venner   wpc

*/

// const artifical_grass = [
//   "Artificial Sports Turf 1.jpeg",
//   "hvt Artificial Grass  3.png",
//   "hvt Artificial Grass  1.jpeg",
//   "hvt Artificial Grass  4.jpeg",
//   "hvt Artificial Grass  2.jpeg",
// ];

const glass = [
  "GLASS1.jpg",
  "GLASS2.jpg",
  "GLASS3.jpg",
  "GLASS4.jpg",
  "GLASS5.jpg",

  // "hindware SHOWER ENCLOSURES 1.jpeg",
  // "hindware SHOWER ENCLOSURES 3.jpeg",
  // "hindware SHOWER ENCLOSURES 2.jpeg",
];

const flooring_and_walls = [
  "Laminate Wooden Flooring leglo vector series  2.jpeg",
  "hvt DeckWood Flooring 2.jpeg",
  "vector series Aquawood Flooring 4.jpeg",
  "victor series Outdoor Decking 1.jpeg",
  "Laminate Wooden Flooring urben cllection  vector series  2.jpeg",
  "hvt DeckWood Flooring 4.jpeg",
  "victor flores Valentino Series 2.jpeg",
  "victor series Outdoor Decking 2.jpeg",
  "Laminate Wooden Flooring urben cllection  vector series  3.jpeg",
  "hvt Wall Panelling  1.jpeg",
  "victor flores Valentino Series 3.jpeg",
  "victor series Outdoor Decking 3.jpeg",
  "Laminate Wooden Flooring urben cllection  vector series 1.jpeg",
  "hvt Wall Panelling  3.jpeg",
  "victor flores Valentino Series 4.jpeg",
  "victor series Outdoor Decking3.jpeg",
  "Laminate Wooden Flooring wood line vector series  2.jpeg",
  "hvt Wall Panelling 1.jpeg",
  "victor series Cladex Max 1.jpeg",
  "victor series foor Accessories  1.jpeg",
  "Laminate Wooden Flooring wood line vector series  3.jpeg",
  "vector series Aquawood Flooring 1.jpeg",
  "victor series Cladex Max 2.jpeg",
  "victor series foor Accessories  2.jpeg",
  "hvt DeckWood Flooring 1.jpeg",
  "vector series Aquawood Flooring 2.jpeg",
  "victor series Cladex Max 3.jpeg",
];

const glass_railings = [
  "ozone glass door heardware 1.jpeg",
  "ozone glass door heardware 3.jpeg",
];

const laminates = [
  "Laminate Wooden Flooring french bleed vector series  2.jpeg",
  "Laminate Wooden Flooring french bleed vector series 1.jpeg",
  "Laminate Wooden Flooring leglo vector series  3.jpeg",
  "Laminate Wooden Flooring french bleed vector series  3.jpeg",
  "Laminate Wooden Flooring leglo vector series  1.jpeg",
  "Laminate Wooden Flooring wood line vector series 1.jpeg",
];

const mirror = [
  "rak mirrors and lightings 3.jpeg",
  "aquant  mirror 1.jpeg",
  "rak FURNITURE 2.jpeg",
  "rak mirrors and lighting 1.jpeg",
  "aquant  mirror  2.jpeg",
  "aquant  mirror  3.jpeg",
  "rak FURNITURE 1.jpeg",
  "rak FURNITURE 3.jpeg",
  "rak mirrors and lightings 2.jpeg",
  "rak shower tiles .jpeg",
];

const pannel = [
  "BISON PANEL PLAIN BOARD .png",
  "time x venner wall pannel  3.jpeg",
  "BISON PANEL PLAIN BOARD 3.png",
];

const taps_showers = [
  "american standard Commercial Bathroom  4.jpeg",
  "franke taps 1.jpeg",
  "american standard Commercial Bathroom  5.jpeg",
  "grohe bathtub 2.jpeg",
  "americanstandard kitchen 1.jpeg",
  "grohe bathtub 3.jpeg",
  "aquant  taps  3.jpeg",
  "grohe bathtub1.jpeg",
  "aquant  taps 2.jpeg",
  "grohe taps 1.jpeg",
  "aquant BATH SPOUTS 2.jpeg",
  "grohe taps 2.jpeg",
  "aquant taps .jpeg",
  "grohe taps 3.jpeg",
  "Bath & Shower americanstandard  3.jpeg",
  "aquant  SHOWER HEADS 1.jpeg",
  "aquant  SHOWER HEADS4.jpeg",
  "aquant BODY JETS 1.jpeg",
  "aquint shower drain  3.jpeg",
  "Bath & Shower americanstandard  4.jpeg",
  "aquant  SHOWER HEADS 2.jpeg",
  "aquant BODY JETS  2.jpeg",
  "aquant SHOWERS IN PVD FINISHES 1.jpeg",
  "aquint shower drain  4.jpeg",
  "SHOWERS hindware 1.png",
  "aquant  SHOWER HEADS 3.jpeg",
  "aquant BODY JETS  3.jpeg",
  "aquant SHOWERS IN PVD FINISHES 2.jpeg",
];

const wash_basin = [
  "FREE-STANDING BASINS aquant .jpeg",
  "aquant CONCRETE WASH BASINS .jpeg",
  "aquant STONE FREE-STANDING BASINS 1.jpeg",
  "hindware sink 3.png",
  "toto washlet 1.jpeg",
  "Wash Basins. americanstandard  1.jpeg",
  "aquant INOX STEEL SERIES BASINS.jpeg",
  "aquant STONE FREE-STANDING BASINS 2.jpeg",
  "rak wash basin 1.jpeg",
  "Wash Basins. americanstandard  2.jpeg",
  "aquant MARBLE COUNTER-TOP BASINS.jpeg",
  "franke Kitchen sinks  1.jpeg",
  "rak wash basin 2.jpeg",
  "Wash Basins. americanstandard  3.jpeg",
  "aquant ONYX COUNTER-TOP BASINS .jpeg",
  "hindware sink 1.png",
  "rak wash basin 3.jpeg",
  "Wash Basins. americanstandard  4.jpeg",
  "aquant REGULAR BASINS.jpeg",
  "hindware sink 2.png",
];

const bath_tub = [
  "americanstandard Bath tubs .jpeg",
  "hindware BATHTUBS  2.jpeg",
  "hindware BATHTUBS  1.jpeg",
  "hindware BATHTUBS  3.jpeg",
];

const cupboards_and_cabinates = [
  "godrej Kitchen Fittings.jpeg",
  "wardrobes sleek 3.jpeg",
  "hittich drawing system .jpeg",
  "ozone KITCHEN & FURNITURE FITTINGS .jpeg",
  "godrej Kitchen Fittings3.jpeg",
  "hafele Kitchen Solutions   .jpeg",
  "hittich slidding and folding door systems .jpeg",
  "wardrobes sleek 1.jpeg",
  "godrej Kitchen Fittings4.jpeg",
  "hettich Hallway bathroom .jpeg",
  "istockphoto-1138890679-170667a.jpeg",
  "wardrobes sleek 2.jpeg",
  "godrej Kitchen Fittings5.jpeg",
  "hettich Hallway beadroom .jpeg",
  "nimmi Kitchen Solutions 2.jpeg",
  "hafele Kitchen Solutions    5.jpeg",
  "hafele Kitchen Solutions    2.jpeg",
  "hettich Hallway cupboards .jpeg",
  "nimmi Kitchen Solutions 3.jpeg",
  "wardrobes sleek 4.jpeg",
  "hafele Kitchen Solutions    3.jpeg",
  "hittich drawer .jpeg",
  "nimmi Kitchen Solutions.jpeg",
  "wardrobes sleek 5.jpeg",
];

const general_items_fevicol = [
  "fevicol  2.png",
  "fevicol  3.png",
  "fevicol  4.png",
  "fevicol 1.png",
  "fevicol 5.png",
  "fevicol 9.png",
];

const artifical_grass_and_green_walls = [
  // "Artificial Sports Turf 1.jpeg",
  "hvt Artificial Grass  3.png",
  "hvt Artificial Grass  1.jpeg",
  "hvt Artificial Grass  4.jpeg",
  // "hvt Artificial Grass  2.jpeg",
  "Vertical Green Walls hvt  2.jpeg",
  "Vertical Green Walls hvt  3.jpeg",
  "Vertical Green Walls hvt  4.jpeg",
];

const light = [
  "LIGHT1.png",
  "LIGHT2.png",
  "LIGHT3.png",

  // "2.jpeg",
  // "philips   hue 2.png",
  // "philips bulbs  .png",
  // "philips bulbs  6.png",
  // "philips luminairs  4.png",
  // "philips luminairs 3.png",
  // "honnex light .jpeg",
  // "philips   track light .jpeg",
  // "philips bulbs  1.png",
  // "philips bulbs  9.png",
  // "philips luminairs  5.png",
  // "phlipslights .jpeg",
  // "honnex light 2.jpeg",
  // "philips  led pannel .jpeg",
  // "philips bulbs  5.png",
  // "philips luminairs  1 2.png",
  // "philips luminairs  6.png",
];

const modular_kitchen = [
  "k1.jpg",
  "k2.jpg",
  "k3.jpg",
  "k4.png",
  "k5.jpg",
  "k6.jpg",
  "k7.jpg",
  "k8.jpg",
  "k9.jpg",
  "k10.jpg",
  // "ModernBoldKitchen.jpeg",
  // "VintageConnoisseur Inspiration.jpeg",
  // "TheSoloist Inspiration.jpeg",
  // "NatureLover Inspiration1.jpeg",
  // "sleek Shutters.jpeg",
  // "Romantic Inpiration1.jpeg",
  // "sleek Appliances.jpeg",
];

const plywood = [
  "p1.png",
  "p2.jpeg",
  "p3.webp",
  "p4.jpg",
  "p5.jpg",
  "p6.jpg",
  "p7.png",
  // "CenturyPly  flushdoores .jpeg",
  // "austin playwood  blackboard platinum plus .jpeg",
  // "century plywood natzure woods .jpeg",
  // "CenturyPly  water resistance.png",
  // "austin playwood  britch .jpeg",
  // "donyi-plywood-sheet .jpeg",
];

const sher_board = [
  "BISON DESIGNER BOARD.png",
  "BISON DESIGNER BOARD2.png",
  "BISON PLANK 1.png",
  "BISON PLANK 2.png",
  "action tesa mfd  2.jpeg",
  "action tesa mfd 1.jpeg",
];

const tiles = [
  "Kitchen simero  2.jpeg",
  "ipira wood tiles 1.jpeg",
  "ispiria polish cold 1.jpeg",
  "ispiria polish warm  3.jpeg",
  "rak tiles 3.jpeg",
  "vector series  Carpet Tiles 3.jpeg",
  "Kitchen simero 1.jpeg",
  "ipira wood tiles 2.jpeg",
  "ispiria polish warm 1.jpeg",
  "simero Bathroom tiles 4.jpeg",
  "vector series  Carpet Tiles 4.jpeg",
  "vector series  Carpet Tiles 2.jpeg",
  "ispiria polish warm 2.jpeg",
  "vector series  Carpet Tiles 1.jpeg",
  "ipira stone tiles 1.jpeg",
  "ispiria polish cold 3.jpeg",
  "rak tiles 2.jpeg",
  "Living Room simero 2.jpeg",
];

const water_closet = [
  "americanstandard Spalets 1.jpeg",
  "aquant REGULAR WHITE TOILETS.jpeg",
  "hindware CISTERNS 2.png",
  "rak water closets 1.jpeg",
  "rak water closets 4.jpeg",
  "americanstandard Spalets2.jpeg",
  "aquant SPECIAL-FINISH TOILETS.jpeg",
  "hindware water closet 1.png",
  "rak water closets 2.jpeg",
  "rak water closets 5.jpeg",
  "aquant REGULAR WHITE TOILETS 1.jpeg",
  "hindware CISTERNS 1.png",
  "hindware water closet 3.jpeg",
  "rak water closets 3.jpeg",
  "toto washlet .jpeg",
];

const bathroom_accessories = [
  "3.jpeg",
  "american standard Commercial Bathroom  3.jpeg",
  "americanstandard Accessories  2.jpeg",
  "americanstandard Accessories 15.jpeg",
  "aquant BATH COMPONENTS 1].jpeg",
  "aquant MISC. COMPONENTS  3.jpeg",
  "aquant MISC. COMPONENTS 1.jpeg",
  "hindware ADDONS  3.png",
  "aquant URINALS.jpeg",
  "aquant bath chairs  3.jpeg",
  "americanstandard Accessories   4.jpeg",
  "aquant bath chairs 1.jpeg",
  "auqant health faucet  1.jpeg",
  "hindware ACCESSORIES 1.png",
  "aquant MISC. COMPONENTS 2 .jpeg",
  "ozoneRAILING SOLUTIONS  3.jpeg",
  "rak ACCESSORIES 3.jpeg",
  "rak ACCESSORIES 4.jpeg",
  "rak ACCESSORIES 5.jpeg",
  "auqant health faucet  2.jpeg",
];

const curtains_and_blinds = [
  "b1.jpg",
  "b2.jpg",
  "b3.jpg",

  // "marvel LUZON BLINDS.jpeg",
  // "marvel ROLLER BLINDS.jpeg",
  // "marvel SKYLIGHT BLINDS.jpeg",
  // "marvel printed blindes .jpeg",
];

const glass_doors = [
  "aristo Glaze  1.jpeg",
  "aristo Reflection 3.jpeg",
  "aristo Tesseract 2.jpeg",
  "aristo highlight 1.jpeg",
  "aristo latitude.jpeg",
  "aristo mosaic 3.jpeg",
  "aristo Glaze  3.jpeg",
  "aristo Streaks 2.jpeg",
  "aristo cristal .jpeg",
  "aristo latitude 2.jpeg",
  "aristo mosaic  1.jpeg",
  "ozone HANA DEMOUNTABLE PARTITIONING SYSTEMS.jpeg",
];

const hardware = [
  "h1.jpeg",
  "h2.png",
  "h3.jpg",
  "h4.png",
  "h5.jpg",
  "h6.png",
  "h7.jpg",
  "h8.jpg",
  "h9.jpg",
  "h10.jpg",
  "h16.jpg",
  "h15.jpg",
  "h11.jpg",
  "h12.jpg",
  "h13.jpg",
  "h14.png",
  // "2hafele Furniture Hinges .jpeg",
  // "haffle Furniture & Door Handles 2.jpeg",
  // "nimmi Door Hardware  2.png",
  // "ozone DIGITAL SAFES .jpeg",
  // "americanstandard Accessories   9.jpeg",
  // "haffle Furniture & Door Handles 3.jpeg",
  // "hafele Furniture Hinges 3.jpeg",
  // "godrej Home Security .jpeg",
  // "hittich hinges.jpeg",
  // "nimmi Door Hardware .png",
  // "ozone LOCKING SYSTEMS & SOLUTIONS 2.png",
  // "goodrej door closer .jpeg",
  // "nimmi Cabinet Handles 2.png",
  // "nimmi Other Door Accessories .png",
  // "ozone LOCKING SYSTEMS & SOLUTIONS 3.jpeg",
  // "nimmi Door Hardware  3.png",
  // "nimmi Cabinet Handles 3.png",
  // "nimmi Sliding Solutions 1.png",
  // "ozone LOCKING SYSTEMS & SOLUTIONS.jpeg",
  // "haffle Furniture & Door Handles .jpeg",
  // "nimmi Cabinet Handles.png",
  // "ozone DIGITAL SAFES  2.jpeg",
  // "ozone KITCHEN & FURNITURE FITTINGS  1.jpeg",
];

const mdf = ["action tesa mfd  2.jpeg", "action tesa mfd 1.jpeg"];

const power_tools = [
  // "KPT drill .jpeg",
  "jcbSOCKETS, RATCHETS & ACCESSORIES.png",
  "powertex blower .png",
  "ralliwolf amarble cutter .jpeg",
  "bosch CORDLESS RIGHT ANGLE DRILLS.png",
  "makita Cordless Angle Grinder .jpeg",
  "powertex gardencutter .png",
  "ralliwolf angular grinder  3.jpeg",
  "bosch sander .png",
  "makita Cordless Angle Grinder 2.jpeg",
  "ralliwolf  chop saw   3.jpeg",
  "dewalt grass cutter .jpeg",
  "makita Cordless Circular Saw  .jpeg",
  "ralliwolf  earth auger .png",
  "dewalt sanders .jpeg",
  "makita Cordless Circular Saw .jpeg",
  "ralliwolf  welding mechien.jpeg",
];

const shower_and_drains = [
  "Bath & Shower americanstandard  3.jpeg",
  "aquant  SHOWER HEADS 1.jpeg",
  "aquant  SHOWER HEADS4.jpeg",
  "aquant BODY JETS 1.jpeg",
  "aquint shower drain  3.jpeg",
  "Bath & Shower americanstandard  4.jpeg",
  "aquant  SHOWER HEADS 2.jpeg",
  "aquant BODY JETS  2.jpeg",
  "aquant SHOWERS IN PVD FINISHES 1.jpeg",
  "aquint shower drain  4.jpeg",
  "SHOWERS hindware 1.png",
  "aquant  SHOWER HEADS 3.jpeg",
  "aquant BODY JETS  3.jpeg",
  "aquant SHOWERS IN PVD FINISHES 2.jpeg",
  // "aquint shower drain 1.jpeg",
];

const venner = [
  "time x venner wood mosaic 2.jpeg",
  "time x venner wall pannel  2.jpeg",
  "time x venner wall pannel 1.jpeg",
  "time x venner wood mosaic 1.jpeg",
  "time x venner exotic collection 1.jpeg",
  "time x venner stone wash blue .jpeg",
  "time x venner .jpeg",
  "timex.jpeg",
];

const Doors = [
  "DOOR1.png",
  "DOOR2.jpeg",
  "DOOR3.jpg",
  "DOOR4.jpg",
  "DOOR5.jpg",
  // "Austin Doors art jaali.jpeg",
  // "Austin Doors doores 2.png",
  // "Austin Doors doores 3.jpeg",
  // "Austin Doors doores.jpeg",
  // "Austin Doors doores.png",
];

function LoadProducts(li) {
  if (li.textContent === "Watercloset") {
    const srcLink = "/prodPics/water_closet/";
    appendImges(water_closet, srcLink);
  }
  if (li.textContent === "Bathroom accessories") {
    const srcLink = "/prodPics/Bathroom_accessories/";
    appendImges(bathroom_accessories, srcLink);
  }

  if (li.textContent === "Mirror") {
    const srcLink = "/prodPics/Mirror/";
    appendImges(mirror, srcLink);
  }

  if (li.textContent === "Bath tub") {
    const srcLink = "/prodPics/bath_tub/";
    appendImges(bath_tub, srcLink);
  }

  if (li.textContent === "Taps & Showers") {
    const srcLink = "/prodPics/Taps/";
    appendImges(taps_showers, srcLink);
  }

  // if (li.textContent === "Shower and drains") {
  //   const srcLink = "/prodPics/shower_and_drains/";
  //   appendImges(shower_and_drains, srcLink);
  // }

  if (li.textContent === "Wash basin") {
    const srcLink = "/prodPics/wash_basin/";
    appendImges(wash_basin, srcLink);
  }

  if (li.textContent === "Tiles") {
    const srcLink = "/prodPics/tiles/";
    appendImges(tiles, srcLink);
  }

  // if (li.textContent === "Artificial Grass") {
  //   const srcLink = "/prodPics/artifical_grass/";
  //   appendImges(artifical_grass, srcLink);
  // }

  if (li.textContent === "Artificial grass & Green Walls") {
    const srcLink = "/prodPics/artifical_grass_and_green_walls/";
    appendImges(artifical_grass_and_green_walls, srcLink);
  }
  if (li.textContent === "Hardware") {
    const srcLink = "/prodPics/hardware/";
    appendImges(hardware, srcLink);
  }

  if (li.textContent === "Plywood") {
    const srcLink = "/prodPics/plywood/";
    appendImges(plywood, srcLink);
  }

  if (li.textContent === "Laminates") {
    const srcLink = "/prodPics/laminates/";
    appendImges(laminates, srcLink);
  }
  if (li.textContent === "Venner") {
    const srcLink = "/prodPics/venner/";
    appendImges(venner, srcLink);
  }

  if (li.textContent === "MDF") {
    const srcLink = "/prodPics/mdf/";
    appendImges(mdf, srcLink);
  }

  if (li.textContent === "Shera Board") {
    const srcLink = "/prodPics/shera_board/";
    appendImges(sher_board, srcLink);
  }

  if (li.textContent === "Pannel") {
    const srcLink = "/prodPics/pannel/";
    appendImges(pannel, srcLink);
  }

  if (li.textContent === "Curtains & Blinds") {
    const srcLink = "/prodPics/curtains_and_blinds/";
    appendImges(curtains_and_blinds, srcLink);
  }
  if (li.textContent === "Glass") {
    const srcLink = "/prodPics/glass/";
    appendImges(glass, srcLink);
  }
  // if (li.textContent === "Glass railings") {
  //   const srcLink = "/prodPics/glass_railings/";
  //   appendImges(glass_railings, srcLink);
  // }
  if (li.textContent === "Doors") {
    const srcLink = "/prodPics/wpc/";
    appendImges(Doors, srcLink);
  }
  if (li.textContent === "Glass doors") {
    const srcLink = "/prodPics/glass_doors/";
    appendImges(glass_doors, srcLink);
  }
  if (li.textContent === "General Items (fevicol)") {
    const srcLink = "/prodPics/general_items_fevicol/";
    appendImges(general_items_fevicol, srcLink);
  }
  if (li.textContent === "Wardrobe Kitchen (Sleek) ") {
    const srcLink = "/prodPics/modular_kitchen/";
    appendImges(modular_kitchen, srcLink);
  }
  if (li.textContent === "Power Tools") {
    const srcLink = "/prodPics/power_tools/";
    appendImges(power_tools, srcLink);
  }
  if (li.textContent === "Light") {
    const srcLink = "/prodPics/light/";
    appendImges(light, srcLink);
  }
  if (li.textContent === "Flooring and walls") {
    const srcLink = "/prodPics/flooring_and_walls/";
    appendImges(flooring_and_walls, srcLink);
  }
  if (li.textContent === "Cupboards and cabinates") {
    const srcLink = "/prodPics/cupboards_and_cabinates/";
    appendImges(cupboards_and_cabinates, srcLink);
  }
}

const navBar = document.getElementById("navbar");

//console.log(navBar)

for (let li of listListener) {
  li.addEventListener("click", () => {
    const allHeading = Array.from(productsHeading.getElementsByTagName("span"));
    for (let i of allHeading) {
      i.classList.remove("tagsSelected");
    }

    const selectedProduct =
      li.parentElement.parentElement.parentElement.getElementsByTagName(
        "span"
      )[0];
    selectedProduct.classList.add("tagsSelected");

    LoadProducts(li);

    //navBar.style.display = "none"
  });
}

function appendImges(arr, srcLink) {
  productsGallery.style.display = "none";
  allProductPhotos.textContent = "";
  const alli = arr.length;

  const singleColImg = Math.round(alli / 3);

  const div1 = document.createElement("div");

  for (let j = 0; j < singleColImg; j++) {
    const imge = document.createElement("img");
    imge.style.width = "100%";
    imge.src = `${srcLink}${arr[j]}`;
    imge.alt = arr[j];
    div1.appendChild(imge);
    div1.className = "col1";
    allProductPhotos.appendChild(div1);
  }
  const div2 = document.createElement("div");
  for (let j = singleColImg; j < singleColImg * 2; j++) {
    const imge = document.createElement("img");
    imge.style.width = "100%";
    imge.src = `${srcLink}${arr[j]}`;
    imge.alt = arr[j];
    div2.appendChild(imge);
    div2.className = "col2";
    allProductPhotos.appendChild(div2);
  }

  const div3 = document.createElement("div");
  for (let k = singleColImg * 2; k < alli; k++) {
    const imge = document.createElement("img");
    imge.style.width = "100%";
    imge.src = `${srcLink}${arr[k]}`;
    imge.alt = arr[k];
    div3.appendChild(imge);
    div3.className = "col3";
    allProductPhotos.appendChild(div3);
  }
  if (sessionStorage.homePageProduct) {
    sessionStorage.removeItem("homePageProduct");
  } else if (sessionStorage.homePageProductBtn) {
    sessionStorage.removeItem("homePageProductBtn");
  }
}

const allProductsArr = [
  artifical_grass_and_green_walls,
  glass,
  flooring_and_walls,
  // glass_railings,
  laminates,
  mirror,
  pannel,
  taps_showers,
  wash_basin,
  bath_tub,
  cupboards_and_cabinates,
  general_items_fevicol,
  // green_walls,
  light,
  plywood,
  sher_board,
  tiles,
  water_closet,
  bathroom_accessories,
  curtains_and_blinds,
  glass_doors,
  hardware,
  mdf,
  modular_kitchen,
  power_tools,
  // shower_and_drains,
  venner,
  wpc,
];

const allProductsArrString = [
  "artifical_grass_and_green_walls",
  "glass",
  "flooring_and_walls",
  // "glass_railings",
  "laminates",
  "mirror",
  "pannel",
  "taps",
  "wash_basin",
  "bath_tub",
  "cupboards_and_cabinates",
  "general_items_fevicol",
  // "green_walls",
  "light",
  "plywood",
  "sher_board",
  "tiles",
  "water_closet",
  "bathroom_accessories",
  "curtains_and_blinds",
  "glass_doors",
  "hardware",
  "mdf",
  "modular_kitchen",
  "power_tools",
  // "shower_and_drains",
  "venner",
  "wpc",
];

const redirectedImg = sessionStorage.homePageProduct;

if (redirectedImg) {
  //this is executed when products from home page is clicked

  for (let a = 0; a < allProductsArr.length; a++) {
    for (let b of allProductsArr[a]) {
      if (redirectedImg.slice(redirectedImg.indexOf("$") + 1) === b) {
        const srcLink = `/prodPics/${allProductsArrString[a]}/`;
        appendImges(allProductsArr[a], srcLink);
      }
    }
  }
}

/*const redirectedImgBtn = sessionStorage.homePageProductBtn;

if (redirectedImgBtn) {
  const imgName = redirectedImgBtn.slice(redirectedImgBtn.indexOf('$') + 1)
  const p = document.createElement('p')
  p.innerText = imgName;
  LoadProducts(p)
}*/

/*functionality in mobile for products */

const productClass = document.getElementsByClassName("mobileCategory");

for (let i of productClass) {
  i.addEventListener("click", () => {
    const activeClass = document.querySelector(".productSubClassActive");
    if (activeClass) {
      activeClass.classList.remove("productSubClassActive");
    }
    const subCat = i.querySelector(".productSubClass");
    subCat.classList.add("productSubClassActive");
  });
}

const productSubClass = document.getElementsByClassName("productSubClass");

for (let j of productSubClass) {
  j.addEventListener("click", (e) => {
    LoadProducts(e.target);
    mobileClose.classList.toggle("bi-list");
    mobileClose.classList.toggle("bi-x");
    navBar.classList.remove("navbar-mobile");
  });
}

const productsMobile = document.getElementsByClassName("active")[0];
const productsMobileCate = document.getElementsByClassName("productsMobile")[0];

productsMobile.addEventListener("click", () => {
  productsMobileCate.classList.toggle("productsMobileActive");
});

/*const productPageLinksMobile = document.getElementsByClassName('productPageLinksMobile')[0]


productPageLinksMobile.addEventListener('click', (e) => {
  if (e.target.textContent !== 'more') {
    LoadProducts(e.target)
  } else {   //to display list of products in mobile view when more button is pressed
    mobileClose.classList.toggle('bi-list')

    mobileClose.classList.toggle('bi-x')
    navBar.classList.add('navbar-mobile')
    productsMobileCate.classList.add('productsMobileActive')
  }
})*/

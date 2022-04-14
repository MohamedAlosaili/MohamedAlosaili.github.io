// Header Script For Mobile Menu
let header = document.querySelector("#header");
let toggler = header.querySelector("#toggler");
let menu = header.querySelector("#nav-links");
let linkItems = menu.querySelectorAll("#nav-item");

// Search Icon And Search Input
let searchIcon = header.querySelector("#search-icon");
let searchInput = header.querySelector("#search-input");

toggler.addEventListener("click", () => {
  menu.classList.toggle("active");
  if (toggler.classList.contains("fa-bars")) {
    toggler.classList.remove("fa-bars");
    toggler.classList.add("fa-xmark");
  } else {
    toggler.classList.add("fa-bars");
    toggler.classList.remove("fa-xmark");
  }

  // Close Search Input And Change Icon If It Active
  if (searchInput.classList.contains("active")) {
    searchInput.classList.remove("active");
  }
  if (searchIcon.classList.contains("fa-xmark")) {
    searchIcon.classList.add("fa-magnifying-glass");
    searchIcon.classList.remove("fa-xmark");
  }
});

linkItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (toggler.classList.contains("fa-bars")) {
      toggler.classList.remove("fa-bars");
      toggler.classList.add("fa-xmark");
    } else {
      toggler.classList.add("fa-bars");
      toggler.classList.remove("fa-xmark");
    }
    menu.classList.remove("active");
  });
});

// Defined Witch Menu Item is Active
linkItems.forEach((item) => {
  item.addEventListener("click", () => {
    let activeItem = menu.querySelector(".active");

    activeItem.classList.remove("active");
    item.classList.add("active");
  });
});

window.addEventListener("scroll", () => {
  let activeItem = menu.querySelector(".active");
  let scroll = window.scrollY;
  if ((scroll >= landing.offsetTop) & (scroll < book.offsetTop - 100)) {
    activeItem.classList.remove("active");
    menu.children[0].classList.add("active");
  } else if (scroll < packages.offsetTop - 100) {
    activeItem.classList.remove("active");
    menu.children[1].classList.add("active");
  } else if (scroll < services.offsetTop - 100) {
    activeItem.classList.remove("active");
    menu.children[2].classList.add("active");
  } else if (scroll < gallery.offsetTop - 100) {
    activeItem.classList.remove("active");
    menu.children[3].classList.add("active");
  } else if (scroll < review.offsetTop - 100) {
    activeItem.classList.remove("active");
    menu.children[4].classList.add("active");
  } else if (scroll < contact.offsetTop - 100) {
    activeItem.classList.remove("active");
    menu.children[5].classList.add("active");
  } else {
    activeItem.classList.remove("active");
    menu.children[6].classList.add("active");
  }
});

// Header Script For Stcky Status
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

// Search input Script

searchIcon.addEventListener("click", () => {
  searchInput.classList.toggle("active");

  if (searchIcon.classList.contains("fa-magnifying-glass")) {
    searchIcon.classList.remove("fa-magnifying-glass");
    searchIcon.classList.add("fa-xmark");
  } else {
    searchIcon.classList.add("fa-magnifying-glass");
    searchIcon.classList.remove("fa-xmark");
  }

  // Close Menu And Change Icon To Bars If It Active
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
  }
  if (toggler.classList.contains("fa-xmark")) {
    toggler.classList.add("fa-bars");
    toggler.classList.remove("fa-xmark");
  }
});

// Header Script For Register Form
let logInIcon = header.querySelector("#log-in-icon");
let formBlock = header.querySelector("#block");
let balckLayer = formBlock.querySelector("#black-layer");
let closeBtn = formBlock.querySelector("#close-btn");

// Open Register Form
logInIcon.addEventListener("click", () => {
  formBlock.classList.add("active");

  // Close Search If It Active
  if (searchInput.classList.contains("active")) {
    searchInput.classList.remove("active");
  }
  if (searchIcon.classList.contains("fa-xmark")) {
    searchIcon.classList.add("fa-magnifying-glass");
    searchIcon.classList.remove("fa-xmark");
  }

  // Close Menu If It Active
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
  }
  if (toggler.classList.contains("fa-xmark")) {
    toggler.classList.add("fa-bars");
    toggler.classList.remove("fa-xmark");
  }
});

// Close Register Form 1
balckLayer.addEventListener("click", () => {
  formBlock.classList.remove("active");
});

// Close Register Form 2
closeBtn.addEventListener("click", () => {
  formBlock.classList.remove("active");
});

// Landing Script For Video Slider
let slideHolder = document.querySelector("#slide-holder");
let slide = slideHolder.querySelectorAll(".slide");
let videoHolder = document.querySelector("#video");

slide.forEach((slide, index) => {
  slide.addEventListener("click", () => {
    let activeSlide = slideHolder.querySelector(".active");
    activeSlide.classList.remove("active");
    slide.classList.add("active");

    let activeVedio = videoHolder.querySelector(".active");
    activeVedio.classList.remove("active");
    console.log(activeVedio);
    videoHolder.children[index].classList.add("active");
  });
});

// Hidden Body Scroll When Menu Or Login Is Active
document.addEventListener("click", () => {
  if (
    menu.classList.contains("active") ||
    formBlock.classList.contains("active")
  ) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "scroll";
  }
});

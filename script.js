// ===[ Progress Scroll Bar ]===


const scrollProgress = document.getElementById("scroll-progress");

window.addEventListener("scroll", function () {
  
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
    height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight,
    scrolled = (winScroll / height) * 100;
  scrollProgress.style.width = scrolled + "%";
});

// ===[ Progress Scroll Bar End ]===

// ===[ Card Login Popup ]===

const loginPop = document.querySelectorAll(".popUp");

const loginPopList = Array.from(loginPop);

loginPopList.forEach((li) => {
  li.addEventListener("click", () => {
    
    document.querySelector(".main-wrapper").style.display = "block"
  });
});

document.querySelector("#popDown").addEventListener("click", function () {
  document.querySelector(".main-wrapper").style.display = "none"
});

// ===[ Card Login Popup End ]===

// ===[ Card Details Popup ]===

const popUpCardDetailsList =
  document.getElementsByClassName("popUpCard-Detail");

const cardList = Array.from(popUpCardDetailsList);
console.log(cardList);
cardList.forEach((li) => {
  li.addEventListener("click", () => {

      document.querySelector(".details-card").style.display = "block"

  });
});

document.querySelector(".close-tb").addEventListener("click", function () {
  console.log((document.querySelector(".details-card").style.display = "none"));
});

// ===[ Card Details Popup End]===











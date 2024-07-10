const circles = document.querySelector(".circles");
const imageBanner = document.querySelector(".imageBanner");
const leftBtn = document.querySelector(".ri-arrow-left-s-line");
const rightBtn = document.querySelector(".ri-arrow-right-s-line");
// imageBanner.querySelector("img:first-child").classList.add("show")
circles.querySelector("i:first-child").classList.add("magnify");
let rightClickCounter = 1;
let leftClickCounter = 1;
let toTranslate = 0;
rightBtn.addEventListener(
  "click",
  function (e) {
    if (rightClickCounter != 4) {
      rightClickCounter++;
      toTranslate -= 25;
      document.querySelector(
        ".imageSilderDiv"
      ).style.transform = `translateX(${toTranslate}%)`;
      circles
        .querySelector(`:nth-child(${rightClickCounter})`)
        .classList.add("magnify");
      circles
        .querySelector(`:nth-child(${rightClickCounter - 1})`)
        .classList.remove("magnify");
    } else {
      rightClickCounter = 1;
      toTranslate=0
      document.querySelector(".imageSilderDiv").style.transform =
        `translateX(${toTranslate}%)`;
      circles
        .querySelector(`:nth-child(${rightClickCounter})`)
        .classList.add("magnify");
      circles.querySelector(`:nth-child(4)`).classList.remove("magnify");
    }
  },
  false
);

leftBtn.addEventListener(
  "click",
  function (e) {
    if (rightClickCounter != 1) {
      rightClickCounter--;
      toTranslate += 25;
      document.querySelector(
        ".imageSilderDiv"
      ).style.transform = `translateX(${toTranslate}%)`;
      circles
        .querySelector(`:nth-child(${rightClickCounter})`)
        .classList.add("magnify");
      circles
        .querySelector(`:nth-child(${rightClickCounter + 1})`)
        .classList.remove("magnify");
    }else{
        rightClickCounter = 4
        toTranslate=-75
        document.querySelector(
            ".imageSilderDiv"
          ).style.transform = `translateX(${toTranslate}%)`;
          circles
        .querySelector(`:nth-child(${rightClickCounter})`)
        .classList.add("magnify");
      circles
        .querySelector(`:nth-child(1)`)
        .classList.remove("magnify");
    }
  },
  false
);

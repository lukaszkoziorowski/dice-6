const btn = document.querySelector(".btn-random");

const dotLeftOne = document.querySelector(".left-one");
const dotLeftTwo = document.querySelector(".left-two");
const dotLeftThree = document.querySelector(".left-three");
const dotMiddleOne = document.querySelector(".middle-one");
const dotMiddleTwo = document.querySelector(".middle-two");
const dotMiddleThree = document.querySelector(".middle-three");
const dotRightOne = document.querySelector(".right-one");
const dotRightTwo = document.querySelector(".right-two");
const dotRightThree = document.querySelector(".right-three");

const dots = [
  dotLeftOne,
  dotLeftTwo,
  dotLeftThree,
  dotMiddleOne,
  dotMiddleTwo,
  dotMiddleThree,
  dotRightOne,
  dotRightTwo,
  dotRightThree
];

function rollDice() {
  dots.forEach(dot => {
    dot.classList.remove("active");
  });
  const dotsNumber = Math.floor(Math.random() * (6 - 1 + 1) + 1);
  console.log(dotsNumber);
  switch (dotsNumber) {
    case 1:
      console.log("Wyszla jedynka");
      dotMiddleTwo.classList.add("active");
      break;
    case 2:
      dotMiddleOne.classList.add("active");
      dotMiddleThree.classList.add("active");
      break;
    case 3:
      dotLeftOne.classList.add("active");
      dotMiddleTwo.classList.add("active");
      dotRightThree.classList.add("active");
      break;
    case 4:
      dotLeftOne.classList.add("active");
      dotLeftThree.classList.add("active");
      dotRightOne.classList.add("active");
      dotRightThree.classList.add("active");
      break;
    case 5:
      dotLeftOne.classList.add("active");
      dotLeftThree.classList.add("active");
      dotMiddleTwo.classList.add("active");
      dotRightOne.classList.add("active");
      dotRightThree.classList.add("active");
      break;
    case 6:
      dotLeftOne.classList.add("active");
      dotLeftTwo.classList.add("active");
      dotLeftThree.classList.add("active");
      dotRightOne.classList.add("active");
      dotRightTwo.classList.add("active");
      dotRightThree.classList.add("active");
      break;
  }
}

btn.addEventListener("click", rollDice);

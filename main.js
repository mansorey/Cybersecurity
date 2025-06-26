AOS.init();

const typing = document.querySelector(".typing");
let text = typing.textContent;
typing.textContent = "";
let i = 0;
const typeEffect = () => {
  if (i < text.length) {
    typing.textContent += text.charAt(i);
    i++;
    setTimeout(typeEffect, 50);
  }
};
setTimeout(typeEffect, 500);
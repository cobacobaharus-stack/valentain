const openButton = document.getElementById("openLetter");
const letterContent = document.getElementById("letterContent");

openButton?.addEventListener("click", () => {
  const isOpen = letterContent.classList.toggle("open");
  letterContent.setAttribute("aria-hidden", String(!isOpen));
});

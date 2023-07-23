export default function productsSideBar() {}

const sideMenu = document.querySelector(".side-menu");
const mainSection = document.querySelector(".main-section");

mainSection.addEventListener("click", function (e) {
  const clicked = e.target;
  if (
    clicked.closest("section").className !== "side-menu" ||
    clicked.nodeName !== "INPUT"
  )
    return;

  console.log(clicked.checked);
  // console.log(e.target.classList);
});

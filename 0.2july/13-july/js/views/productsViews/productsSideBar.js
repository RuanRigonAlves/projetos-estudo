import * as model from "../../model.js";

export default function productsSideBar() {}

const sideMenu = document.querySelector(".side-menu");
const mainSection = document.querySelector(".main-section");

mainSection.addEventListener("click", function (e) {
  const SMTypes = document.querySelectorAll('input[name="type-food"]');
  const clicked = e.target;
  const parentEl = document.querySelector(".checkbox-wrapper");
  if (
    clicked.closest("section").className !== "side-menu" ||
    clicked.nodeName !== "INPUT"
  )
    return;

  for (const food of SMTypes) {
    food.checked
      ? food.classList.add("active-food")
      : food.classList.remove("active-food");
  }
  // console.log(parentEl);

  // teste(clicked.id)

  console.log(e);
  console.log(clicked);

  model.testing(clicked.id);

  console.log(model.myCoffeeData.Coffee.productsSubCategories);

  const subCategoryHTML = (() => {
    let html = "";
    for (const subCategory in model.myCoffeeData.Coffee.productsSubCategories) {
      html += `
        <div>
          <input type="checkbox" name="${subCategory}" id="${subCategory}" />
          <label for="${subCategory}">${capitalizeFirstLetter(
        subCategory
      )}</label>
        </div>
      `;
    }
    return html;
  })();

  parentEl.insertAdjacentHTML(
    "afterend",
    `
    <div class="checkbox-wrapper">
      <p>Sub Category</p>
      <div>
        ${subCategoryHTML}
      </div>
    </div>
  `
  );

  // console.log(clicked.id);
});

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

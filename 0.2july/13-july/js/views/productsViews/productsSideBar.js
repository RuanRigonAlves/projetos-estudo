import * as model from "../../model.js";
import * as productView from "./productsView.js";

export default function productsSideBar() {}

const sideMenu = document.querySelector(".side-menu");
const mainSection = document.querySelector(".main-section");

let currentSubCategoryWrapper = null; // Keep track of the current subcategory section.

mainSection.addEventListener("click", function (e) {
  const SMTypes = document.querySelectorAll('input[name="type-food"]');
  const clicked = e.target;
  const parentEl = document.querySelector(".checkbox-wrapper");
  const mainContent = document.querySelector(".main-content");

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

  if (clicked.name === "type-food") {
    model.testing(clicked.id);

    console.log(model.myCoffeeData.Coffee.productsSubCategories);

    mainContent.innerHTML = "";

    //  preciso rever essa budega pra entender//
    const combinedProducts = Object.values(
      model.myCoffeeData.Coffee.productsSubCategories
    )
      .map((obj) => obj) // Extract the 'products' array from each object
      .flat(); // Combine all the 'products' arrays into one

    productView.displayProducts(combinedProducts);
    //  preciso rever essa budega pra entender//

    const subCategoryHTML = Object.keys(
      model.myCoffeeData.Coffee.productsSubCategories
    )
      .map(
        (subCategory) => `
      <div>
        <input type="checkbox" name="${subCategory}" id="${subCategory}" />
        <label for="${subCategory}">${capitalizeFirstLetter(
          subCategory
        )}</label>
      </div>
    `
      )
      .join("");

    if (currentSubCategoryWrapper) {
      currentSubCategoryWrapper.remove();
    }

    parentEl.insertAdjacentHTML(
      "afterend",
      `
    <div class="checkbox-wrapper2">
      <p>Sub Category</p>
      <div>
        ${subCategoryHTML}
      </div>
    </div>
  `
    );
    currentSubCategoryWrapper = document.querySelector(".checkbox-wrapper2");
  }

  // console.log(clicked.id);
});

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const clearHTML = function () {
  mainContent.innerHTML = "";
};

import * as model from "../../model.js";
import * as productView from "./productsView.js";
import * as globalFunctions from "../../globalFunctions.js";

export default function productsSideBar() {}

const mainSection = document.querySelector(".main-section");

let currentSubCategoryWrapper = null; // Keep track of the current subcategory section.

mainSection.addEventListener("click", function (e) {
  const clicked = e.target;
  const mainContent = document.querySelector(".main-content");

  if (clicked.name === "type-food") {
    handleTypeFoodClick(clicked);
  }

  if (clicked.className === "sub-category-items") {
    const subCatItems = document.querySelectorAll(".sub-category-items");

    globalFunctions.clearHTML(mainContent);

    const selectedSubCategory = checkedItems(subCatItems);

    if (!selectedSubCategory.length) {
      const currentType = Object.values(
        model.myCoffeeData.Coffee.productsSubCategories
      ).flat();
      productView.displayProducts(currentType);
    } else {
      productView.displayProducts(selectedSubCategory);
    }
  }
});

function handleTypeFoodClick(clicked) {
  const parentEl = document.querySelector(".checkbox-wrapper");
  const mainContent = document.querySelector(".main-content");

  // Update sub-categories and display products
  updateSubCategoriesAndDisplayProducts(clicked, mainContent);

  // Display sub-category checkboxes
  displaySubCategoryCheckboxes(parentEl);

  // Update the current sub-category wrapper
  updateCurrentSubCategoryWrapper();
}

function updateSubCategoriesAndDisplayProducts(clicked, mainContent) {
  model.getSubCategoryByID(clicked.id);
  globalFunctions.clearHTML(mainContent);

  const combinedProducts = Object.values(
    model.myCoffeeData.Coffee.productsSubCategories
  ).flat();

  productView.displayProducts(combinedProducts);
}

function displaySubCategoryCheckboxes(parentEl) {
  const subCategoryHTML = Object.keys(
    model.myCoffeeData.Coffee.productsSubCategories
  )
    .map(
      (subCategory) => `
    <div>
      <input type="checkbox" name="${subCategory}" id="${subCategory}" class="sub-category-items" />
      <label for="${subCategory}">${globalFunctions.capitalizeFirstLetter(
        subCategory
      )}</label>
    </div>
  `
    )
    .join("");

  removeCurrentSubCategoryWrapper();

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
}

function removeCurrentSubCategoryWrapper() {
  if (currentSubCategoryWrapper) {
    currentSubCategoryWrapper.remove();
  }
}

function updateCurrentSubCategoryWrapper() {
  currentSubCategoryWrapper = document.querySelector(".checkbox-wrapper2");
}

function checkedItems(nodeListItems) {
  const selectedProducts = [];

  nodeListItems.forEach((item) => {
    if (item.checked) {
      const subCategoryProducts =
        model.myCoffeeData.Coffee.productsSubCategories[item.id];

      const flattenedProducts = subCategoryProducts.flat();

      selectedProducts.push(...flattenedProducts);
    }
  });
  return selectedProducts;
}

"use strict";

export default function initModel() {}

// COFFEE DATA
export const myCoffeeData = {};
// COFFEE DATA

// Fetch the JSON file and add to myCoffeeData//
export async function fetchCoffeeData() {
  try {
    const response = await fetch("./json/coffee.json");
    const jsonData = await response.json();
    // console.log(jsonData);
    myCoffeeData["Coffee"] = jsonData;

    getCategories(jsonData.products);
    getSubCategories(jsonData.products);
    // console.log(jsonData);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
fetchCoffeeData();
// Fetch the JSON file and add to myCoffeeData//

// Create productsCategories inside Object and store values //
const getCategories = function (arrayProducts) {
  myCoffeeData.Coffee.productsCategories = {};

  for (const product of arrayProducts) {
    const category = product.category;
    if (!(category in myCoffeeData.Coffee.productsCategories)) {
      myCoffeeData.Coffee.productsCategories[category] = [];
    }
    myCoffeeData.Coffee.productsCategories[category].push(product);
  }
};
// Create productsCategories inside Object and store values //

// Create productsSubCategories inside Object and store values //
const getSubCategories = function (arrayProducts) {
  myCoffeeData.Coffee.productsSubCategories = {};

  for (const product of arrayProducts) {
    const subCategory = product.subcategory;
    if (!(subCategory in myCoffeeData.Coffee.productsSubCategories)) {
      myCoffeeData.Coffee.productsSubCategories[subCategory] = [];
    }
    myCoffeeData.Coffee.productsSubCategories[subCategory].push(product);
  }
};

// Create productsSubCategories inside Object and store values //

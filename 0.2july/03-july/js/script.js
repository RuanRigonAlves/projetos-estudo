"use strict";

import * as displayJS from "./display.js";

//////////////////////////////// TESTING /////////////////////////////////////

export const creatures = {};

displayJS.searchBarParent.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.className !== "search-button") return;
  const searchCreature = displayJS.searchBarParent
    .querySelector("input")
    .value.replace(/\s/g, "");
  if (!searchCreature) return;

  console.log(searchCreature);

  getCreatureData(searchCreature);
});

const getCreatureData = function (creature) {
  fetch(`https://dev.tibiadata.com/v4/creature/${creature}`)
    .then((response) => response.json())
    .then(function (data) {
      const defenses = {};
      const id = {};

      console.log(data);

      data.creature.id = Object.assign(data.creature.race);

      data.creature.defenses = Object.assign(
        defenses,
        { immune: data.creature.immune },
        { strong: data.creature.strong },
        { weakness: data.creature.weakness }
      );

      data.creature.loot_list = capitalizeArrayLists(data.creature.loot_list);

      changeDeftextToIcon(data.creature.defenses);

      creatures[creature] = data;

      displayJS.displayCreaturesRow(creatures);
      // displayJS.displayCreatures(creatures);
    })
    .catch((error) => {
      console.log("error");
    });
};

// getCreatureData("rotworm");
// getCreatureData("demon");
// getCreatureData("medusa");

// LOOT CAPITALIZE
const capitalize = function (word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

const capitalizeArrayLists = function (arrayLists) {
  return arrayLists
    .map((words) => {
      return words
        .split(" ")
        .map((word) => capitalize(word))
        .join(" ");
    })
    .join(", ");
};
// LOOT CAPITALIZE

// CHANGE DEFENSE TEXT TO DEFEENSE ICON & REMOVE COMMA
function replaceValuesInObj(o, targetValue, replaceValue) {
  Object.keys(o).forEach((key) => {
    if (o[key] === targetValue) o[key] = replaceValue;
    if (typeof o[key] === "object" && o[key] !== null) {
      replaceValuesInObj(o[key], targetValue, replaceValue);
    }
  });
}

const changeDeftextToIcon = function (obj) {
  Object.keys(displayJS.iconMap).forEach((key) => {
    replaceValuesInObj(obj, key, displayJS.iconMap[key]);
  });

  replaceValuesInObj(obj, null, displayJS.iconMap.question);

  for (let key in obj) {
    if (Array.isArray(obj[key])) {
      obj[key] = obj[key].join("");
    }
  }
  return obj;
};
// CHANGE DEFENSE TEXT TO DEFEENSE ICON & REMOVE COMMA

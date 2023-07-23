export * as displayJS from "./display.js";

import { creatures } from "./script.js";

export const creaturesListH1 = document.querySelector(".list-of-creatures");
export const searchBarParent = document.querySelector(".search-wrapper");
export const creatureListRow = document.querySelector(".creatures-row");
export const creatureRowList = document.querySelector(".creatures-row-list");
export const activeDisplay = document.querySelectorAll(".active-display");

export const iconMap = {
  fire: `<img src="./img/fire.png" alt=""/>`,
  ice: `<img src="./img/frost.png" alt=""/>`,
  earth: `<img src="./img/earth.png" alt=""/>`,
  death: `<img src="./img/death.png" alt=""/>`,
  holy: `<img src="./img/holy.png" alt=""/>`,
  physical: `<img src="./img/physical.png" alt=""/>`,
  energy: `<img src="./img/energy.png" alt=""/>`,
  question: `<img src="./img/question.png" alt=""/>`,
};

creatureListRow.addEventListener("click", function (e) {
  if (e.target.parentElement.classList.value !== "creatures-row") return;

  const activeDisplay = document.querySelectorAll(".active-display");
  const targetID = e.target.id;

  activeDisplay[0]?.classList.remove("active-display");

  e.target.classList.add("active-display");

  displayCreatures(creatures[targetID]);
});

export const displayCreaturesRow = function (creaturesObj) {
  Object.values(creaturesObj).forEach(function (creature) {
    const existingElement = document.getElementById(creature.creature.id);
    if (!existingElement) {
      creatureListRow.innerHTML += `
    <img class="creature-row-img" id="${creature.creature.id}" src="${creature.creature.image_url}" alt="" /?>
    `;
    }
  });
};

export const displayCreatures = function (creaturesObj) {
  Object.values(creaturesObj);

  creaturesObj = creaturesObj.creature;

  creaturesListH1.innerHTML = `
        <div class="creature-wrapper slide" id="${creaturesObj.name}">
          <div class="name-img">
            <h2>${creaturesObj.name}</h2>
            <img src="${creaturesObj.image_url}" alt="" />
          </div>
          <ul class="statitics">
            <ul class="stats">
            <li class="health"><img src="./img/health.png" alt=""/>${creaturesObj.hitpoints}</li>
              <li class="exp"><img src="./img/star.png" alt="" />${creaturesObj.experience_points}</li>
            </ul>
            <ul class="defenses">
              <ul class="weak">
                <p>Weak</p>
                <li class="weak">${creaturesObj.defenses.weakness}</li>
              </ul>
              <ul class="strong">
                <p>Strong</p>
                <li class="strong">${creaturesObj.defenses.strong}</li>
              </ul>
              <ul class="immune">
                <p>Immune</p>
                <li class="imune">${creaturesObj.defenses.immune}</li>
              </ul>
            </ul>
          </ul>
          <div class="loot">
            <p class="item">Loot:${creaturesObj.loot_list}</p>
          </div>
        </div>`;
};

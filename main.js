const items = document.querySelectorAll(".nav-list-item");

items.forEach((item) => {
  item.addEventListener("click", () => {
    // Retire les classes actives de tous les items et de leurs enfants
    items.forEach((el) => {
      el.classList.remove("bouton-actif-nav-list-item");
      el.querySelector(".nav-liens").classList.remove("bouton-actif-nav-liens");
      el.querySelector(".nav-icones").classList.remove(
        "bouton-actif-nav-icones",
      );
    });

    // Ajoute les classes à l'item cliqué et à ses enfants
    item.classList.add("bouton-actif-nav-list-item");
    item.querySelector(".nav-liens").classList.add("bouton-actif-nav-liens");
    item.querySelector(".nav-icones").classList.add("bouton-actif-nav-icones");
  });
});

// Ajout Distance totale
const nbKms = document.querySelector(".kms-donnees");

const tabNbKms = [3, 3, 3];

function calcultotal(tabDonnees) {
  let somme = 0;
  for (let i = 0; i < tabDonnees.length; i++) {
    somme += tabDonnees[i];
  }
  return somme;
}

nbKms.textContent = calcultotal(tabNbKms);

//Ajout durée total activité
const dureeTemps = document.querySelector(".temps-donnees");

const tabDuree = [
  [25, 55],
  [27, 9],
  [24, 47],
];

function enSecondes(minutes, secondes) {
  return minutes * 60 + secondes;
}

function formaterDuree(totalSecondes) {
  const heures = Math.floor(totalSecondes / 3600);
  const minutes = Math.floor((totalSecondes % 3600) / 60);
  const secondes = totalSecondes % 60;
  return `${heures}h${String(minutes).padStart(2, "0")}m${String(secondes).padStart(2, "0")}s`;
}

let total = 0;
for (let i = 0; i < tabDuree.length; i++) {
  total += enSecondes(tabDuree[i][0], tabDuree[i][1]);
}

dureeTemps.textContent = formaterDuree(total);


//frequence cardique
const cardioMoyen = document.querySelector(".frequence-donnees");

const tabCardio = [156,151,155];

cardioMoyen.textContent = Math.round(calcultotal(tabCardio)/tabCardio.length);

// Calories totales
const caloriesTotales = document.querySelector(".calories-donnees");

const tabCalories= [279,278,281];

caloriesTotales.textContent = calcultotal(tabCalories);



const pokemons = window.POKEMON.pokemon;
const pokeSection = document.getElementById('poke-section');
const startingModal = document.getElementById('modalWCont');
const infoStats = document.getElementById('info-stats');
let newPokeArray;
let pokeEast;

// JSON para capturar nombres orientales
function fetchJSON (array) {
  fetch("https://raw.githubusercontent.com/Zotapianola/SCL010-data-lovers/master/src/data/pokemon/pokeEast.json"
  )
  .then(function(response) {
    // console.log(response.status);
    return response.json();
  })
  .then(function(jsn) {
    pokeEast = jsn;
    createDivs(array);
    // console.log(pokeEast);
  })
}

// crear cartas
function createDivs(array)
{
  for (let i = 0; i < array.length;i++)
  {
    let newDiv = document.createElement("div");
    let japaneseName;
    let base;
    newDiv.setAttribute("class","flip-card");
    // busca parámetros de nueva base de datos y los junta con la anterior
    for (let j = 0; j < pokeEast.length; j++)
    {
      if (pokeEast[j].name.english === array[i].name)
      {
        japaneseName = pokeEast[j].name.japanese;
        base = pokeEast[j].base;
      }
    }
    newDiv.innerHTML =
   `<div class="flip-card-inner">
     <div class="flip-card-front">
     <h3>${array[i].name}</h3>
       <img src=${array[i].img} alt="poke-card">
     </div>
     <div class="flip-card-back">
     <h3>${japaneseName}</h3>
     <p>${(JSON.stringify(base)).replace(/"|\{|\}/g, "")}</p>
       <img src=${array[i].img} alt="poke-card">
     </div>
   </div>`;
   pokeSection.appendChild(newDiv);
  }
}

window.onload = function () {
    fetchJSON(pokemons);
    // modal de inicio
    startingModal.innerHTML =
    `<div class="modal-welcome">
        <h3>Welcome to KANTODEX</h3>
          <p>Here you can order, filter and see some Kanto generation pokemons data</p>
          <a class="CloseX" href="#"><img src="../img/btn_close.png" alt="Close"/></a>
        </div>`;
  };

// obtener tipos de pokemon
let typesArray = [];
const allTypes = function (pokemons)
{
  let type0;
  let type1;
  for (let i = 0; i < pokemons.length; i++)
  {
    type0 = pokemons[i].type[0];
    type1 = pokemons[i].type[1];
    if (typesArray.indexOf(type0) === - 1)
    {
      typesArray.push(type0);
    }
    if (typesArray.indexOf(type1) === - 1 && type1 != undefined)
    {
      typesArray.push(type1);
    }
  }
};
allTypes(pokemons);

// crear menú por tipos
document.getElementById("type-menu").innerHTML =
  `<select name= "select" id="dropdown-types">
        <option disabled selected value>Type</option>
  </select>`;

const selectType = document.getElementById("dropdown-types");
let newOption;
for (let i = 0; i < typesArray.length; i++)
{
  newOption = document.createElement("option");
  newOption.text = typesArray[i];
  selectType.appendChild(newOption);
}

// crear menú de orden
document.getElementById("order-menu").innerHTML =
`<select name="order-select" id="dropdown-order">
    <option disabled selected value>Order</option>
    <option>A-Z</option>
    <option>Z-A</option>
    <option>1-151</option>
    <option>151-1</option>
  </select>`;

// escuchar cambios en selector dropdown de ordenamiento
const selectOrder = document.getElementById("dropdown-order");
selectOrder.addEventListener("change", ()=> {
    // el tipo seleccionado es almacenado en condition
    let condition = selectOrder.options[selectOrder.selectedIndex].text;
    // borra contenido de section
    pokeSection.innerHTML = "";
    // crea nuevos divs en base a array
    newPokeArray = window.sortData(pokemons, condition);
    fetchJSON(newPokeArray);
    infoStats.innerHTML = "";
  }
);

// escuchar cambios en selector dropdown por tipos
selectType.addEventListener("change", ()=> {
  // el tipo seleccionado es almacenado en condition
  let condition = selectType.options[selectType.selectedIndex].text;
  // borra contenido de section
  pokeSection.innerHTML = "";
  // crea nuevos divs en base a array
  newPokeArray = window.filterData(pokemons, condition);
  fetchJSON(newPokeArray);
  infoStats.innerHTML = `${window.computeStats(newPokeArray, pokemons, condition)}`;
  }
);

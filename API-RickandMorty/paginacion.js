
const alive = "puntoVerde.png";
const dead = "puntoRojo.jpg";

const apiRick= async (pagina,filtro)=>{
    let url = "https://rickandmortyapi.com/api/character/?page=" + pagina;
  if (filtro) {
    url += "&name=" + filtro;
  }

const api= await fetch(url);
const data= await api.json();
divTodas=document.querySelector("#resultado");
divTodas.innerHTML="";
data.results.map(item=>{
    divItem=document.createElement('div');
    let condition = item.status === "Alive" ? alive: dead;
    divItem.innerHTML=`<div class="descripcion">
    <img src="${item.image}" alt="Personaje">
     <h2>${item.name}</h2>
     <span>${item.status}</span>
     <img id="imagen" src="${condition}" alt="">
    <h4>${item.gender}</h4>
    <h3>${item.species}</h3>
    </div>
    `;
    divTodas.appendChild(divItem);
});

};
apiRick(1)
const buscarPersonajes = () => { 
const nombre = document.querySelector("#nombrePersonaje").value;
apiRick(1,nombre);
};
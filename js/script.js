// @here
// BUM.
// Esercizio di oggi Js Icons Es6
// repo/cartella js-es6-icons

// Milestone 1:
// - Definire un array di oggetti; ogni oggetto rappresenta un'icona, che è caratterizzata da: nome, prefisso, tipo e famiglia.
// - Utilizzando la funzione forEach e il template literal, visualizzare in pagina tutte le icone con il proprio nome.

let icons_list = [
  {
    name : 'cat',
    prefix : 'fa-',
    type : 'animal',
    family : 'fas',
  },
  {
    name : 'crow',
    prefix : 'fa-',
    type : 'animal',
    family : 'fas',
  },
  {
    name : 'dog',
    prefix : 'fa-',
    type : 'animal',
    family : 'fas',
  },
  {
    name : 'dove',
    prefix : 'fa-',
    type : 'animal',
    family : 'fas',
  },
  {
    name : 'dragon',
    prefix : 'fa-',
    type : 'animal',
    family : 'fas',
  },
  {
    name : 'horse',
    prefix : 'fa-',
    type : 'animal',
    family : 'fas',
  },
  {
    name : 'hippo',
    prefix : 'fa-',
    type : 'animal',
    family : 'fas',
  },
  {
    name : 'fish',
    prefix : 'fa-',
    type : 'animal',
    family : 'fas',
  },
  {
    name : 'carrot',
    prefix : 'fa-',
    type : 'vegetable',
    family : 'fas',
  },
  {
    name : 'apple-alt',
    prefix : 'fa-',
    type : 'vegetable',
    family : 'fas',
  },
  {
    name : 'lemon',
    prefix : 'fa-',
    type : 'vegetable',
    family : 'fas',
  },
  {
    name : 'pepper-hot',
    prefix : 'fa-',
    type : 'vegetable',
    family : 'fas',
  },
  {
    name : 'user-astronaut',
    prefix : 'fa-',
    type : 'user',
    family : 'fas',
  },
  {
    name : 'user-graduate',
    prefix : 'fa-',
    type : 'user',
    family : 'fas',
  },
  {
    name : 'user-ninja',
    prefix : 'fa-',
    type : 'user',
    family : 'fas',
  },
  {
    name : 'user-secret',
    prefix : 'fa-',
    type : 'user',
    family : 'fas',
  },
];

const iconsContainer=document.getElementById('icons-container');

icons_list.forEach((element) => {
iconsContainer.innerHTML+=`<div><i class="${element.family} ${element.prefix}${element.name}"></i><span>${element.name}</span></div>`
});

// Milestone 2:
// - Definire un array di colori e associare ad ogni tipo di icona un colore.
// - Visualizzare le icone di colore diverso in base al tipo.


const colors=['blue','orange','purple']
// i colori sono 3 perché i tipi sono tre
const types_list=[];
icons_list.forEach((item) => {
const {type}=item;
// oppure senza destrutturazione const type=item.type;
if (!types_list.includes(type))
{
 types_list.push(type);
}

});
// ora ho array di colori e array di tipi
console.log(types_list);

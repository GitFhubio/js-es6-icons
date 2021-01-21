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

const btn1=document.getElementById('btn1');
const btn2=document.getElementById('btn2');
btn1.addEventListener('click',function()
{ if(iconsContainer.innerHTML!='')
{iconsContainer.innerHTML='';}
else{
  icons_list.forEach((element) => {
  iconsContainer.innerHTML+=`<div><i class="${element.family} ${element.prefix}${element.name}"></i><p>${element.name}</p></div>`
  });
}
}
)
// lo so che esiste Jquery..

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

  // icons_list.forEach((element) => {
  //     const type=element.type;
  //   // const {name,family,prefix,type} = element;
  //   // qui connetto il colore al tipo
  //   let type_index = types_list.indexOf(type);
  //   let icon_color = colors[type_index];
  //
  //   iconsContainer.innerHTML+=`
  //     <div class="icon">
  //     <i class="${element.family} ${element.prefix}${element.name}" style='color:${icon_color};'></i>
  //     <h2>${element.name}</h2>
  //     </div>
  //     `;
  //
  // });

// o meglio

btn2.addEventListener('click',function()
{
  if(iconsContainer.innerHTML!='')
 {iconsContainer.innerHTML='';}
 else{
generaIcone(icons_list);
}
}
)
  // Milestone 3:
  // - Aggiungere una select per filtrare le icone in base al tipo.
  // - Popolare le options della select dinamicamente e, ogni volta che cambia il valore selezionato, visualizzare le icone corrispondenti.

  const myselect =document.getElementsByClassName('icons-filter')[0];

  types_list.forEach((element) => {
    myselect.innerHTML += `
      <option value="${element}">${element}</option>
    `
  });

  myselect.addEventListener('change',() => {
  let selected_type = myselect.value;
  iconsContainer.innerHTML='';

  // injquery
  //   $('select.icons-filter').change(() => {
  // let selected_type = $('select.icons-filter').val();
  // $('#icons-container').empty();

  // oppure alternativa sempre in js puro
  // while (iconsContainer.firstChild){
  //   iconsContainer.removeChild(iconsContainer.firstChild);
  // }

if (selected_type=='') {

generaIcone(icons_list);
  //     icons_list.forEach((element) => {
  //     const type=element.type;
  //   // const {name,family,prefix,type} = element;
  //   let type_index = types_list.indexOf(type);
  //   let icon_color = colors[type_index];
  //   iconsContainer.innerHTML+=`
  //     <div class="icon">
  //     <i class="${element.family} ${element.prefix}${element.name}" style='color:${icon_color};'></i>
  //     <h2>${element.name}</h2>
  //     </div>
  //     `;
  //
  // });
}

else{
const selected_icons = icons_list.filter((icon) => selected_type === icon.type);


generaIcone(selected_icons);
// selected_icons.forEach((element) => {
// const type=element.type;
// // const {name,family,prefix,type} = element;
// let type_index = types_list.indexOf(type);
// let icon_color = colors[type_index];
// iconsContainer.innerHTML+=`
// <div class="icon">
// <i class="${element.family} ${element.prefix}${element.name}" style='color:${icon_color};'></i>
// <h2>${element.name}</h2>
// </div>
// `;
//
// });
}
}
);

// farmi una funzione?
function generaIcone(icone_array){
icone_array.forEach((element) => {
    const type=element.type;
  // const {name,family,prefix,type} = element;
  let type_index = types_list.indexOf(type);
  let icon_color = colors[type_index];
  iconsContainer.innerHTML+=`
    <div class="icon">
    <i class="${element.family} ${element.prefix}${element.name}" style='color:${icon_color};'></i>
    <p>${element.name}</p>
    </div>
    `;
});
}

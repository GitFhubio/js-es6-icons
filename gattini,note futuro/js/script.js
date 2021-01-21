const maxAge=20;
const cats = [
  {
    name: "Bit",
    gender: "Female",
    color: "grey",
    age: 5
  },
  {
    name: "Adam",
    gender: "Male",
    color: "#black",
    age: 6
  },
  {
    name: "Emily",
    gender: "Female",
    color: "orange",
    age: 7
  },
  {
    name: "Mike",
    gender: "Male",
    color: "red",
    age: 9
  }
];

// cats.forEach((element)=>{
//   console.log(`The kitty named ${element.name} has color ${element.color}`)
// })
const topContainer=document.getElementById('container-top');
cats.forEach((element) => {
// metto nello stile in linea il colore e non il font size perche il fontsize non dipende dal database di gatti,è un dato variabile quello
topContainer.innerHTML+= `
<div>
<i class="fas fa-cat" style="color:${element.color}"></i><span>${element.name}</span>
</div>
`
});

// dividere i gatti in due contenitori distinti in base al sesso e aggiungere a fianco di ogni gattino un fiocco colorato di rosa se femmina o di blu se maschio.
// Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio.

const containerMale=document.getElementById('container-male');
const containerFemale=document.getElementById('container-female');

const pink = '#FF69B4';
const blue = '#4169E1';
const ribbonCats=cats.map((element)=>
{
  return{
  ...element,ribbon:{
    color:element.gender==='Male' ? blue : pink ,
    opacity:element.age/maxAge
  }
  }
}

)
const females=ribbonCats.filter((element)=>
{
return element.gender==='Female';
})
const males=ribbonCats.filter((element)=>
{
return element.gender==='Male';
})
console.log(females, males);
males.forEach((element) => {
containerMale.innerHTML+=`<div><i class="fas fa-cat" style="color:${element.color}"></i><i class="fas fa-ribbon" style="color: ${element.ribbon.color}; opacity: ${element.ribbon.opacity}"></i> ${element.name}</div>`
});
females.forEach((element) => {
containerFemale.innerHTML+=`<div><i class="fas fa-cat" style="color:${element.color}"></i><i class="fas fa-ribbon" style="color: ${element.ribbon.color}; opacity: ${element.ribbon.opacity}"></i> ${element.name}</div>`
});

// oppure
// unico foreach con condizioni

// senza operatore ternario con la modifica all'oggetto
// faccio sempre i due foreach

// all'interno dei singoli foreach
// const opacity=element.age/maxAge;

// in realtà conviene fare la distrutturazione

// const {age, color , name } =element;
// è meglio perché ci prepara a quello che dovremo usare
// const opacity=age/ maxAge;
// e levo tutti gli element

// e poi metto il ribbon col colore corrispondente nell'innerhtml

// mi potrei fare una funzione

// come argomenti prevede la lista di gatti,il container e il gender Color
// const insertCat = function (catList,box,gendercolor){
//
// }
//
// e poi insertCat(females,boxFemale,'pink')
// e poi insertCat(males,boxFemale,'blue')



// MILESTONE3


// const containerBottom=document.getElementById('container-bottom');
// const orderedCats=[...females,...males]
// console.log(orderedCats);
// orderedCats.forEach((element) => {
// containerBottom.innerHTML+=`<div><i class="fas fa-cat" style="color:${element.color}"></i><i class="fas fa-ribbon" style="color: ${element.ribbon.color}; opacity: ${element.ribbon.opacity}"></i> ${element.name}</div>`
// });

// oppure  e destrutturazione


const containerBottom=document.getElementById('container-bottom');
const orderedCats=[...females,...males];
console.log(orderedCats);
orderedCats.forEach((element) => {
const {color,name,gender,age}=element;
if(gender=='Male'){
  containerBottom.innerHTML+=`<div><i class="fas fa-cat" style="color:${color}"></i><i class="fas fa-ribbon" style="color: blue; opacity:${age/maxAge}" ></i> ${name}</div>`
  } else{
  containerBottom.innerHTML+=`<div><i class="fas fa-cat" style="color:${color}"></i><i class="fas fa-ribbon" style="color: pink; opacity:${age/maxAge}"></i> ${name}</div>`
  };


// oppure nell'if faccio
// let ribbonColor;
//  if(gender=='Male'){
//    ribbonColor='blue';
//   else{ribbonColor='pink';}

// e poi un innerHTML totale con RibbonColor

})


//  aggiungendo una proprietà ribbon che è a sua volta un oggetto
// dovrei dichiararmi l'oggetto di ribbon fuori se lo voglio fare con if ed else
//
// var ribbonCats = Cats.map((element)=> {
// const obj = {opacity:element.age, color:'' }
// if(element.gender === 'MALE') { obj.color = blue}
// else {obj.color = pink}
//   return {
//     ...element, ribbon: obj
//   }
// });

// questa è l'alternativa if else a questo ternario

// var ribbonCats = Cats.map((element)=> {
//   return {
//     ...element, ribbon: {
//     color: ((element.gender === 'Male') ? blue : pink),
//     opacity: (element.age)
//     }
//   }
// });

const langEl = document.querySelector('#changeLangue');
const link =  document.querySelectorAll('#changeLangue > a')
const TitleEl =  document.querySelector('.title')

link.forEach(el=>{
el.addEventListener('click',()=>{
langEl.querySelector('.active').classList.remove('active')
el.classList.add('active')

const attr = el.getAttribute('language');
TitleEl.textContent = data[attr].title
})

})

let data ={
"portuguese":{
"title":"Olá Mundo"
},
"french":{
"title":"Salut Monde"
},
"japanese":{
"title":"こんにちは世界"
},
"english":{
"title":"Hello world"
},
"norway":{
"title":"Hei Verden"
},

}
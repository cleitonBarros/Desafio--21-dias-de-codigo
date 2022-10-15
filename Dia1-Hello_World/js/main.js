
let gavetaDeCores= document.querySelector('#changeClr')
let Langue= document.querySelector('#changeLangue')
const buttonLangue = document.querySelector('.buttonLangue')
const buttonColour = document.querySelector('.buttonColour')





buttonColour.addEventListener('click',()=>{
    gavetaDeCores.classList.toggle('active')
})
buttonLangue.addEventListener('click',()=>{
    Langue.classList.toggle('active')
})


function changeColor(color){
    document.body.style.background =color;
   
    //mark as active when

    document.querySelectorAll('span').forEach(function(item){
        item.classList.remove('active')
    })
    event.target.classList.add('active')
}

        
      
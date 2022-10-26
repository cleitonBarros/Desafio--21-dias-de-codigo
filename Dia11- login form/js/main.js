const forgetMyPass = document.querySelector('.group a.fgtmypass')
const login = document.querySelector('.Box1')
const passForget = document.querySelector('.Box2')
const enviarEmail = document.querySelector('.enviarEmail')

forgetMyPass.addEventListener('click', (event)=>{
  event.preventDefault()
 login.classList.add('hidden')
 passForget.classList.remove('hidden')
})
enviarEmail.addEventListener('click', (event)=>{
  event.preventDefault()
  login.classList.remove('hidden')
  passForget.classList.add('hidden')
})
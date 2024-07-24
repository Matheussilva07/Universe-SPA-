import { Router } from "./Router.js"

const router = new Router()
router.add("/","/pages/home.html")
router.add("/universo", "/pages/universo.html")
router.add( "/exploracao","/pages/exploracao.html")
router.add( "/saberMais","/pages/saberMais.html")


router.handle()

window.onpopstate = ()=> router.handle()
window.route = () => router.route()


const botaoTema = document.querySelector("#botaoTema")
const html = document.querySelector('html')

botaoTema.addEventListener('click', MudarTema)

function MudarTema(){
  html.classList.toggle('darkMode')
}
import { ElementosHtml } from './ElementosHtml.js'
const html= new ElementosHtml();

let navbar = document.querySelector('.navbar');
navbar.innerHTML = html.navbar();
let formEmail = document.querySelector('.form-contato-email');
let secRedsSociais = document.querySelector('.sec-redes-sociais');

let rodape = document.querySelector('.rodape');
rodape.innerHTML = html.rodape()
//footer
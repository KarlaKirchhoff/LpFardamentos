import { ElementosHtml } from "./ElementosHtml.js";
const html = new ElementosHtml();
let navbar = document.querySelector('.navbar');
navbar.innerHTML = html.navbar('#');
let banner = document.querySelector('.banner');
banner.style.backgroundImage = `url('../img/sobreNos/foto-loja-lp-fardamentos.jpg')`
banner.appendChild(html.banner('', 'Nossa História'));

let formEmail = document.querySelector('.form-contato-email');
formEmail.innerHTML = html.enviarEmail(false, '#', true,'FALE CONOSCO');

let rodape = document.querySelector('.rodape');
rodape.innerHTML = html.rodape('#');
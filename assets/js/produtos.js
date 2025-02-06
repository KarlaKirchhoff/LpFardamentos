import { ElementosHtml } from "./ElementosHtml.js";
const html = new ElementosHtml();

let navbar = document.querySelector('.navbar');
navbar.innerHTML = html.navbar('#');
html.menuHamburguer();

let banner = document.querySelector('.banner');
banner.style.backgroundImage = `url('../img/produtos/homem-uniforme-avental-marrom.jpg')`
banner.appendChild(html.banner('', 'Como Podemos Ajudar'));

let rodape = document.querySelector('.rodape');
rodape.innerHTML = html.rodape('#')

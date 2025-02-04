import { ElementosHtml } from "./ElementosHtml.js";
const html = new ElementosHtml();
let navbar = document.querySelector('.navbar');
navbar.innerHTML = html.navbar('#');
let banner = document.querySelector('.banner');
banner.appendChild(html.banner('', 'Nossa História'));
let rodape = document.querySelector('.rodape');
rodape.innerHTML = html.rodape('#');
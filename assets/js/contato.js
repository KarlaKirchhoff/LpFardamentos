import { ElementosHtml } from "./ElementosHtml.js";
const html = new ElementosHtml();

let navbar = document.querySelector('.navbar');
navbar.innerHTML = html.navbar('#');
let banner = document.querySelector('.banner');
banner.appendChild(html.banner('', 'Entre em  Contato'));
let rodape = document.querySelector('.rodape');
rodape.innerHTML = html.rodape('#');

let formEmail = document.querySelector('.lista-redes-sociais');
formEmail.innerHTML = html.redesSociais(true, 'CANAIS DE ATENDIMENTO');
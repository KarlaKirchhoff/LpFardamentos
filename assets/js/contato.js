import { ElementosHtml } from "./ElementosHtml.js";
const html = new ElementosHtml();

let navbar = document.querySelector('.navbar');
navbar.innerHTML = html.navbar('#');
html.menuHamburguer();

let banner = document.querySelector('.banner');
banner.style.backgroundImage = `url(../img/fotos-roupas-modelagens.jpg)`;
banner.appendChild(html.banner('', 'Entre em  Contato'));

let formEmail = document.querySelector('.form-contato-email');
formEmail.innerHTML = html.enviarEmail(false, '#', true,'Envie um Email');

let redesSociais = document.querySelector('.lista-redes-sociais');
redesSociais.innerHTML = html.redesSociais(true, 'CANAIS DE ATENDIMENTO');

let rodape = document.querySelector('.rodape');
rodape.innerHTML = html.rodape('#');
import { ElementosHtml } from './ElementosHtml.js'
const html = new ElementosHtml();

let navbar = document.querySelector('.navbar');
navbar.innerHTML = html.navbar('index');
html.menuHamburguer();

let banner = document.querySelector('.banner');
banner.style.backgroundImage = `url('./assets/img/index/banner-homem-avental-marrom-cozinha.png')`
banner.appendChild(html.banner('index', 'LP Fardamentos e Atoalhados'))

let form = document.querySelector('.form-contato-email');
form.innerHTML = html.enviarEmail(true, './assets/img/foto-loja-lp-fardamentos.jpg', true, 'Entre em Contato')

let redesSociais = document.querySelector('.lista-redes-sociais');
redesSociais.innerHTML = html.redesSociais(true, '')

let rodape = document.querySelector('.rodape');
rodape.innerHTML = html.rodape('index');
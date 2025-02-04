import { ElementosHtml } from './ElementosHtml.js'
const html = new ElementosHtml();

let navbar = document.querySelector('.navbar');
navbar.innerHTML = html.navbar('index');

let banner = document.querySelector('.banner');
banner.appendChild(html.banner('index', 'LP Fardamentos e Atoalhados'))

let form = document.querySelector('.form-contato-email');
form.innerHTML = html.enviarEmail(true, '#', true, 'Entre em Contato')

let rodape = document.querySelector('.rodape');
rodape.innerHTML = html.rodape('index');
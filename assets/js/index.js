import { ElementosHtml } from './ElementosHtml.js'
const html= new ElementosHtml();

function criarBanner(){
    let banner = document.querySelector('.banner');
    banner.appendChild(html.banner('index', 'LP Fardamentos e Atoalhados'))
}

function carregarFormEmail(){
    let form = document.querySelector('.form-contato-email');
    form.innerHTML = html.enviarEmail(true, '#', true, 'Entre em Contato')
}

criarBanner()
carregarFormEmail()
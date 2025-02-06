class ElementosHtml {
    navbar(pagina) {

        let nav  = ``;
        
        if(pagina === 'index'){
            nav = `
        <nav>
                <a href="index.html" class="logo">
                    <img src="assets/img/logo-lp-fardamentos.jpg" alt="">
                    <p>LP<br><span>Fardamentos</span></p>   
                </a>

                <ul class="ul-paginas">
                    <li class="li-paginas hidden">
                        <a href="index.html">Home</a>
                    </li>

                    <li class="li-paginas">
                        <a href="assets/paginas/produtos.html">Produtos</a>
                    </li>

                    <li class="li-paginas hidden hidden2">
                        <a href="assets/paginas/sobreNos.html">Sobre Nós</a>
                    </li>

                    <li class="li-paginas hidden hidden2">
                        <a href="assets/paginas/contato.html">Contato</a>
                    </li>
                </ul>

                <div class="menu-hamburguer">...</div>
            </nav>

            <div class="menu-navbar">
                <a href="index.html" class="logo-area">
                    <img src="#" alt="">
                    <p>LP - Fardamentos e Atoalhados</p>
                </a>

                <ul class="menu-navbar-paginas">
                    <li>
                        <a href="index.html">Home</a>
                    </li>

                    <li>
                        <a href="assets/paginas/produtos.html">Produtos e Serviços</a>
                    </li>

                    <li>
                        <a href="assets/paginas/sobreNos.html">Sobre Nos</a>
                    </li>

                    <li>
                        <a href="assets/paginas/contato.html">Entre em Contato</a>
                    </li>

                    <li>
                        <a href="assets/paginas/informacoes.html">Mais Informações</a>
                    </li>
                </ul>
            </div>
        `
        }else{
            nav = `
        <nav>
                <a href="../../index.html" class="logo">
                    <img src="../img/logo-lp-fardamentos.jpg" alt="">
                    <p>LP<br><span>Fardamentos</span></p>   
                </a>

                <ul class="ul-paginas">
                    <li class="li-paginas hidden">
                        <a href="../../index.html">Home</a>
                    </li>

                    <li class="li-paginas">
                        <a href="../paginas/produtos.html">Produtos</a>
                    </li>

                    <li class="li-paginas hidden hidden2">
                        <a href="../paginas/sobreNos.html">Sobre Nós</a>
                    </li>

                    <li class="li-paginas hidden hidden2">
                        <a href="../paginas/contato.html">Contato</a>
                    </li>
                </ul>

                <div class="menu-hamburguer">...</div>
            </nav>

            <div class="menu-navbar">
                <a href="../../index.html class="logo-area">
                    <img src="#" alt="">
                    <p>LP - Fardamentos e Atoalhados</p>
                </a>

                <ul class="menu-navbar-paginas">
                    <li>
                        <a href="../../index.html">Home</a>
                    </li>

                    <li>
                        <a href="../paginas/produtos.html">Produtos e Serviços</a>
                    </li>

                    <li>
                        <a href="../paginas/sobreNos.html">Sobre Nos</a>
                    </li>

                    <li>
                        <a href="../paginas/contato.html">Entre em Contato</a>
                    </li>

                    <li>
                        <a href="../paginas/informacoes.html">Mais Informações</a>
                    </li>
                </ul>
            </div>
        `
        }

        return nav
    }

    menuHamburguer(){
        let btn = document.querySelector('.menu-hamburguer');
        let menu = document.querySelector('.menu-navbar')
        btn.addEventListener('click', ()=>{
            menu.classList.toggle('ativo')
        })
    }

    banner(pagina, titulo) {
        let camada = document.createElement('div');
        camada.setAttribute('class', 'camada-preta');
        let conteudo = document.createElement('div')
        conteudo.setAttribute('class', 'h1-banner');
        let h1 = document.createElement('h1');
        h1.textContent = titulo
        conteudo.appendChild(h1)

        if (pagina === 'index') {
            const btn = document.createElement('a')
            btn.setAttribute('href', '#')
            btn.textContent = 'Entre em Contato'
            conteudo.appendChild(btn)
        }

        camada.appendChild(conteudo)

        return camada
    }

    enviarEmail(img, contImg, titulo, contTitulo) {
        let form = ``
        let classe = 'sImagem'

        if (titulo === true) {
            form += `<div><h3>${contTitulo}</h3></div>`            
        }

        if (img === true) {
            // colorcar o link da iamgem correto de acordo com o diret´orio da pagina
            form += `<img src="${contImg}" alt="">`
            classe = 'cImagem'            
        }

        form += `
            <form class="${classe}">
                <label for="nome-entre-contato-email">Nome / Empresa</label>
                <input type="text" name="nome-entre-contato-email" required>

                <label for="email-entre-contato-email">Email</label>
                <input type="text" name="email-entre-contato-email" required>

                <label for="assunto-entre-contato-email">Assunto</label>
                <input type="text" name="assunto-entre-contato-email" required>

                <label for="mensagem-entre-contato-email">Mensagem</label>
                <textarea name="mensagem-entre-contato-email" required></textarea>

                <button>Enviar</button>
            </form>
        `;        
        return form
    }

    redesSociais(titulo, contTitulo) {

        let conteudo = ``;

        if (titulo === true) {
            conteudo = `<h2>${contTitulo}</h2>`
        }

        conteudo += `
        <address class="email-redes-sociais">lpfardamentosuniformes<span>@gmail.com</span></address>
            <address>+351 960 106 373</address>
            <address class="contato-redes-sociais">
                    <a href="#">
                        <ion-icon name="logo-whatsapp"></ion-icon>
                    </a>

                    <a href="#">
                        <ion-icon name="call-outline"></ion-icon>
                    </a>

                    <a href="#">
                        <ion-icon name="logo-instagram"></ion-icon>
                    </a>

                    <a href="#">
                        <ion-icon name="logo-facebook"></ion-icon>
                    </a>
            </address>
        `

        return conteudo
    }

    rodape(pagina) {

        let rodape = ``;

        if(pagina === 'index'){
            rodape = `
        <h2>LP- Fardamentos e Atoalhados</h2>

            <div class="div-ul">
            <ul class="ul-paginas">
                <li><a href="index.html">Home</a></li>
                <li><a href="assets/paginas/sobreNos.html">Sobre Nós</a></li>
                <li><a href="assets/paginas/produtos.html">Serviços</a></li>
                <li><a href="assets/paginas/contato.html">Contato</a></li>
            </ul>

            <ul class="ul-termos-politicas">
                <li><a href="#">Termos de Uso</a></li>
                <li><a href="#">Politicas de Privacidade</a></li>
            </ul>
        </div>

            <div class="direitos-autorais">
                <small>
                <a href="#">Diretos das imagens pertencentes aos seus respectivos donos</a>
                </small> |
                <small><a href="https://karlakirchhoff.netlify.app/" target="_blank">Site desenvolvido por: Karla Kirchhoff</a></small>
            </div>
        `
        }else{
            rodape = `
        <h2>LP- Fardamentos e Atoalhados</h2>

            <div class="div-ul">
            <ul class="ul-paginas">
                <li><a href="../../index.html">Home</a></li>
                <li><a href="../paginas/sobreNos.html">Sobre Nós</a></li>
                <li><a href="../paginas/produtos.html">Serviços</a></li>
                <li><a href="../paginas/contato.html">Contato</a></li>
            </ul>

            <ul class="ul-termos-politicas">
                <li><a href="#">Termos de Uso</a></li>
                <li><a href="#">Politicas de Privacidade</a></li>
            </ul>
        </div>

            <div class="direitos-autorais">
                <small>
                <a href="#">Diretos das imagens pertencentes aos seus respectivos donos</a>
                </small> |
                <small><a href="https://karlakirchhoff.netlify.app/" target="_blank">Site desenvolvido por: Karla Kirchhoff</a></small>
            </div>
        `
        }

        return rodape
    }
}

export { ElementosHtml };
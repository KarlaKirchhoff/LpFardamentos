class ElementosHtml {
    navbar(){
        const nav = `
        <nav>
                <a href="index.html" class="logo">
                    <img src="#" alt="">
                </a>

                <ul class="ul-paginas">
                    <li class="li-paginas">
                        <a href="index.html">Home</a>
                    </li>

                    <li class="li-paginas">
                        <a href="assets/paginas/produtos.html">Produtos</a>
                    </li>

                    <li class="li-paginas">
                        <a href="assets/paginas/sobreNos.html">Sobre N´os</a>
                    </li>

                    <li class="li-paginas">
                        <a href="assets/paginas/contato.html">Contato</a>
                    </li>
                </ul>

                <div class="menu-hamburguer">...</div>
            </nav>

            <div class="menu-navbar">
                <div class="logo-area">
                    <img src="#" alt="">
                    <p>LP - Fardamentos e Atoalhados</p>

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
            </div>
        `
        return nav
    }

    banner(conteudo){
        let camada = document.createElement('div');
        camada.setAttribute('class', 'camada-preta');
        let conteudo = document.createElement('div');
        conteudo.setAttribute('class', 'h1-banner');
        conteudo.innerHTML = conteudo;

        camada.appendChild(conteudo);
        return camada;
    }

    enviarEmail(img, tipoPag, titulo, contTitulo){
        let form = ``

        if(titulo === true){
            conteudo += `<h3>${contTitulo}</h3>`
        }

        if(img === true){
            if(tipoPag === 'index'){ 
                // colorcar o link da iamgem correto de acordo com o diret´orio da pagina
                form += `<img src="#" alt="">`
            }
            else{
                form += `<img src="#" alt="">`
            }
        }

        form += `
            <form>
                <label for="nome-entre-contato-email">Nome / Empresa</label>
                <input type="text" name="nome-entre-contato-email" required>

                <label for="email-entre-contato-email">Email</label>
                <input type="text" name="email-entre-contato-email" required>

                <label for="assunto-entre-contato-email">Assunto</label>
                <input type="text" name="assunto-entre-contato-email" required>

                <label for="mensagem-entre-contato-email">Mensagem</label>
                <textarea name="mensagem-entre-contato-email" required>
            </form>
        `
        return form
    }

    redesSociais(titulo, contTitulo){

        let conteudo = ``;

        if(titulo === true){
            conteudo = `<h3>${contTitulo}</h3>`
        }

        conteudo += `
        <address>lpfardamentosuniformes@gmail.com</address>
            <address>44 44444-4444</address>
            <address>
                <ul>
                    <li>
                        <a href="#"></a>
                    </li>

                    <li>
                        <a href="#"></a>
                    </li>

                    <li>
                        <a href="#"></a>
                    </li>

                    <li>
                        <a href="#"></a>
                    </li>

                </ul>
            </address>
        `

        return conteudo
    }

    rodape(){

    }
}

export { ElementosHtml };
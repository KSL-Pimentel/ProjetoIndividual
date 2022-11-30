const imgs = document.getElementById("id_energia");

const img = document.querySelectorAll("#id_energia img");

let idx = 0;

function carrossel() {
    idx++;

    if (idx > img.length - 1) {
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 220}px)`
}

setInterval(carrossel, 1800);

function escolherPadrao() {
    div_regras.innerHTML = `<h2>Sobre o Jogo</h2>

    <h3>Formato Padrão</h3>

    <p>Seus cards, seu deck, sua vitória! Construa o melhor deck com cards das últimas coleções, depois enfrente seus oponentes e seja vitorioso.</p>

    <p>O Padrão é um formato dinâmico, onde você constrói decks e joga com cards de coleções recentes do Magic. A jogabilidade evolui o tempo todo, e estratégias fresquinhas fazem do Padrão um dos jeitos mais populares e divertidos de jogar Magic.</p>

    <div class="basico-jogo">
         <div class="basico-jogo-single">
             <h4>Tamanho do Deck</h4>

             <i class="fa-solid fa-window-restore"></i>

             <p>60+</p>
         </div>

         <div class="basico-jogo-single">
             <h4>Número de Jogadores</h4>

             <i class="fa-solid fa-users"></i>

             <p>2</p>
         </div>

         <div class="basico-jogo-single">
             <h4>Tempo de Jogo</h4>

             <i class="fa-solid fa-stopwatch"></i>

             <p>20 min</p>
         </div>
    </div>`
}

function escolherCommander() {
    div_regras.innerHTML = `<h2>Sobre o Jogo</h2>

    <h3>Formato Commander</h3>

    <p>Você tem o que é preciso para ser o último de pé? Escolha uma criatura lendária e prepare-se para encarar vários oponentes de uma só vez!</p>

    <p>A base do formato Commander é escolher seu herói e construir um deck em torno dele. Nesse formato informal multijogador, você escolhe uma criatura lendária para servir como comandante e constrói o resto do deck em torno da identidade de cor dela e de habilidades únicas. Os jogadores só podem usar um exemplar de cada card em seu deck, com exceção dos terrenos básicos, mas podem usar cards de toda a história de Magic.</p>

    <div class="basico-jogo">
         <div class="basico-jogo-single">
             <h4>Tamanho do Deck</h4>

             <i class="fa-solid fa-window-restore"></i>

             <p>100</p>
         </div>

         <div class="basico-jogo-single">
             <h4>Número de Jogadores</h4>

             <i class="fa-solid fa-users"></i>

             <p>3 - 5</p>
         </div>

         <div class="basico-jogo-single">
             <h4>Tempo de Jogo</h4>

             <i class="fa-solid fa-stopwatch"></i>

             <p>120 min</p>
         </div>
    </div>`
}

function escolherBooster() {
    div_regras.innerHTML = `<h2>Sobre o Jogo</h2>

    <h3>Formato Booster Draft</h3>

    <p>Faça sua estratégia abrindo boosters na hora! Construa decks únicos e batalhe com os cards que você encontrar em cada booster.</p>

    <p>Como fazer o draft: Primeiro, os jogadores formam um semicírculo ao redor da mesa. Cada jogador abre um booster e escolhe um card, sem mostrá-lo aos outros jogadores.</p>

    <p>Cada jogador passa os cards restantes para a esquerda e continua escolhendo entre os cards que recebeu do jogador à sua direita. Isso continua até que todos os cards tenham sido distribuídos (draftados). Então, cada jogador abre um segundo booster, mas desta vez, passa para a direita. Depois que todos os cards forem escolhidos, você faz o mesmo com o terceiro booster, passando para a esquerda novamente. No fim, cada jogador terá cerca de 45 cards (além dos terrenos básicos), que poderá usar para construir um deck de 40 cards.</p>

    <div class="basico-jogo">
         <div class="basico-jogo-single">
             <h4>Tamanho do Deck</h4>

             <i class="fa-solid fa-window-restore"></i>

             <p>40+</p>
         </div>

         <div class="basico-jogo-single">
             <h4>Número de Jogadores</h4>

             <i class="fa-solid fa-users"></i>

             <p>2 - 8</p>
         </div>

         <div class="basico-jogo-single">
             <h4>Tempo de Jogo</h4>

             <i class="fa-solid fa-stopwatch"></i>

             <p>120 min</p>
         </div>
    </div>`
}

function mudarBranco() {
    div_manaContent.innerHTML = `<p><b  style="color: orange">BRANCO</b></p>

    <p>A cor do equilíbrio, lei, ordem e proteção, não necessariamente uma cor “do bem”, como estamos acostumados a pensar no nosso imaginário coletivo. Um mago que usa a cor branca preza a igualdade e estão sempre prontos para curar as criaturas no campo de batalha. <br><br> As criaturas mais comuns no branco são Soldados, Cavaleiros e Anjos. As magias mais clássicas são aquelas que fazem o jogo entrar em equilíbrio, para que os jogadores tenham o mesmo número de terrenos e criaturas no campo de batalha, por exemplo. É comum nesta cor as mágicas que destroiem artefatos, encantamentos e fazem o jogador ganhar vida.</p>`
}

function mudarAzul() {
    div_manaContent.innerHTML = `<p><b  style="color: blue">AZUL</b></p>

    <p>A cor da sabedoria, o intelecto, mas acima de tudo, a busca pela perfeição. O mago desta cor está sempre pronto para resolver um mistério e gostam de fazer o que for possível para tornar o mundo perfeito, através da solução de todos os problemas. Quem joga com esta cor reconhece ser uma pessoa metódica e manipuladdora. <br><br> Por conta dessas características, você verá que as cartas azuis são aquelas que compram cartas do grimório com mais facilidade e em volume maior, justamente indo em busca do conhecimento necessário. Também é a cor que tem as mágicas de negação, que anulam outras mágicas. Entre as criaturas, são comuns as Fadas, Dragonetes e Magos.</p>`
}

function mudarPreto() {
    div_manaContent.innerHTML = `<p><b  style="color: purple">PRETO</b></p>

    <p>Os magos que usam a cor preta tendem a não medir esforços para atingir os seus objetivos. Por isso, muitas cartas pretas conseguem algum valor, seja comprando carta ou tirando vida, a partir de sacrifícios. <br><br> A cor preta está associada a ambição, e suas magias e criaturas refletem isso. São comuns entre as criaturas pretas os grupos dos Vampiros, Zumbis e Demônios.</p>`
}

function mudarVermelho() {
    div_manaContent.innerHTML = `<p><b  style="color: red">VERMELHO</b></p>

    <p>A cor vermelha é movida pelo caos e destruição sem consequência, porém, os magos desta cor também são apaixonados, voláteis e impulsivos. Do mesmo modo, essa é a cor onde é mais comum encontrar cards que destroem terrenos. <br><br> Entre os grupos de criaturas mais comuns no vermelho estão Goblins, Anões e Gigantes e, apesar de existir ótimos Dragões em todas as cores, os vermelhos são sempre os melhores.</p>`
}

function mudarVerde() {
    div_manaContent.innerHTML = `<p><b  style="color: green">VERDE</b></p>

    <p>A cor verde valoriza a ordem natural das coisas, o crescimento e a força bruta. A cor verde estão as maiores criaturas do jogo (não necessariamente as mais poderosas) e também as magias para fazer elas crescerem ainda mais. <br><br> São comuns nesta cor a presença de Dinossauros, Elfos e animais selvagens, como Elefante, Ursos, Lobos e Rinocerontes.</p>`
}
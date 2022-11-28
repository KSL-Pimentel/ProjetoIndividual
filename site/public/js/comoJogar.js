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

<<<<<<< HEAD
=======
function aprenderPKM() {
    section_regras.innerHTML = `<div class="container">
    <div class="regras-titulo">
        <h1>POKEMON</h1>
    </div>

    <div id="div_regras" class="regras-basico">
        <h2>Sobre o Jogo</h2>

        <h3>Formato Padrão</h3>
    
        <p>Você é um Treinador de Pokémon! A sua missão é viajar pelo mundo batalhando contra outros Treinadores com seus Pokémon, criaturas que adoram batalhar e que possuem poderes incríveis!</p>
    
        <div class="basico-jogo">
             <div class="basico-jogo-single">
                 <h4>Tamanho do Deck</h4>
    
                 <i class="fa-solid fa-window-restore"></i>
    
                 <p>60</p>
             </div>
    
             <div class="basico-jogo-single">
                 <h4>Número de Jogadores</h4>
    
                 <i class="fa-solid fa-users"></i>
    
                 <p>2</p>
             </div>
    
             <div class="basico-jogo-single">
                 <h4>Tempo de Jogo</h4>
    
                 <i class="fa-solid fa-stopwatch"></i>
    
                 <p>30 min</p>
             </div>
        </div>
    </div>

    <div class="regras-gerais">
        <h2>REGRAS</h2>

        <p>Estas regras dirão tudo o que você precisa saber para jogar o Pokémon
            Estampas Ilustradas. Seu baralho representa seus Pokémon, bem como
            Itens e aliados que ajudam você em suas aventuras</p>

        <h3>Como vencer uma partida</h3>

        <p>Há 3 formas de vencer uma partida:</p>

        <ul>
            <li>Pegando todas as suas cartas de Prêmio.</li>
            <li>Nocauteando todos os Pokémons em jogo do seu oponente.</li>
            <li>Se o seu oponente não tiver nenhuma carta no próprio baralho no início da vez dele(a) jogar.</li>
        </ul>

        <h3>Tipos de cartas</h3>

        <p><b>Cartas de Pokémon</b></p>

        <p>As cartas mais importantes são as de Pokémon! </p>
        
        <p> A maioria dessas cartas é composta de Pokémon Básicos, Pokémon Estágio 1 ou Pokémon Estágio 2. As cartas de Pokémon Estágio 1 e Estágio 2 também são chamadas de cartas de Evolução. Olhe no canto superior esquerdo de cada carta para ver o Estágio do Pokémon e também o do qual ele evolui, caso haja algum.</p>

        <div class="carta-pkm">
            <img src="./assets/cards/carta-pkm-basico.png" alt="">

            <i class="fa-solid fa-right-long"></i>

            <img src="./assets/cards/carta-pkm-est1.png" alt="">

            <i class="fa-solid fa-right-long"></i>

            <img src="./assets/cards/carta-pkm-est2.png" alt="">
        </div>

        <p><b>Cartas de Energia</b></p>

        <p>Na maioria das vezes, um pokemon não pode atacar sem cartas de Energia. O símbolo do custo do ataque deve coincidir com o da carta de Energia, mas qualque tipo pode ser usado quando se trata de uma Energia incolor.</p>

        <div class="carrossel">
            <div class="carta-energia" id="id_energia">
                <img src="./assets/cards/energiaPlanta.jpg" alt="">
                
                <img src="./assets/cards/energiaFogo.jpg" alt="">
                
                <img src="./assets/cards/energiaAgua.jpg" alt="">
            
                <img src="./assets/cards/energiaRaio.jpg" alt="">
                
                <img src="./assets/cards/energiaPsiquica.jpg" alt="">
                
                <img src="./assets/cards/energiaLuta.jpg" alt="">
            
                <img src="./assets/cards/energiaEscuridao.jpg" alt="">
                
                <img src="./assets/cards/energiaMetal.jpg" alt="">
                
                <img src="./assets/cards/energiaFada.jpg" alt="">
            </div>
        </div>

        <p><b>Cartas de Treinador</b></p>

        <p>As cartas de Treinador representam os Itens, os Apoiadores e os Estádios que um treinador pode utilizar em batalha. O subtipo de Treinador pode ser visto no canto superior direito de cada carta, e quaisquer regras especiais para esse subtipo podem ser vistas na parte inferior da carta.</p>

        <div class="carta-pkm">
            <img src="./assets/cards/item-pkm.png" alt="">

            <img src="./assets/cards/supporter-pkm.png" alt="">

            <img src="./assets/cards/stadium-pkm.png" alt="">
        </div>

        <h3>Como iniciar uma partida</h3>

        <ol>
            <li>Jogue 1 moeda. O vencedor decide quem inicia a partida.</li>
            <li>Embaralhe todas as suas cartas e compre as 7 primerias.</li>
            <li>Verifique se você tem algum Pokémon Básico na sua mão.</li>
            <li>Coloque 1 dos seus Pokémon Básicos virado para baixo como seu Pokémon Ativo.</li>
            <li>Coloque até 5 Pokémon Básicos virados para baixo no seu Banco.</li>
            <li>Separe as 6 primeiras cartas do seu baralho viradas para baixo como as suas cartas de Prêmio.</li>
            <li>Os dois jogadores desviram os seus Pokémon Ativos e no Banco e começam a jogar!</li>
        </ol>

        <div class="playmatch">
            <img src="./assets/imgs/playmatch-pkm.png" alt="playmatch">
        </div>

        <div class="dica">
            <img src="./assets/icons/carvalho.png" alt="dica">

            <p>Caso começe sem nenhum Pokémon Básico em sua mão, mostre sua mão para o seu oponente, em seguida embaralhe as suas cartas de volta em seu baralho. Depois compre 7 cartas. Caso ainda não tiver pego um Pokémon Básico, repita o precesso. <br> Toda fez que embaralhar sua mão de volta em seu baralho, seu oponente compra 1 carta.</p>
        </div>

        <h3>Ações da vez de jogar</h3>

        <p><b>Compre 1 carta</b></p>

        <p>No começo de cada turno, compre 1 carta. Se não houver mais nenhuma carta em seu baralho, a partida terminará e seu oponente vencerá.</p>

        <p><b>Execute qualquer uma destas ações em qualquer ordem:</b></p>

        <p><b>A - </b>Coloque as castas de Pokémon Básicos da sua mão no seu Banco (quantas desejar).</p>

        <p><b>B - </b>Evolua os Pokémon (quantos desejar).</p>

        <div class="dica">
            <img src="./assets/icons/carvalho.png" alt="dica">

            <p>Nenhum jogador pode evoluir um Pokémon na mesma rodada em que ele entrou no campo. Você pode evoluir seu Pokémon ativo ou os do banco.</p>
        </div>

        <p><b>C - </b>Ligue 1 carta de Energia a 1 de seus Pokémon (uma vez por rodada).</p>

        <p><b>D - </b>Jogue cartas de Treinador.</p>

        <p><b>E - </b>Recue o seu Pokémon Ativo (uma vez por rodada).</p>

        <p><b>F - </b>Use as Habilidades (quantas desejar).</p>

        <p><b>Ataque e encerre sua vez de jogar</b></p>

        <p>Quanto estiver pronto para atacar, certifique-se de ter feito tudo o que queria ter feito no passo anterior. Após atacar, a sua vez de jogar acabará e você não poderá voltar atrás.</p>

        <div class="dica">
            <img src="./assets/icons/carvalho.png" alt="dica">

            <p>Na rodada inicial da partida, o jogador inicial pula a fase de batalha. Depois de executar todas as suas ações, seu turno acaba. Depois disso, ambos os jogadores atacam normalmente.</p>
        </div>

        <p><b>A - </b>VERIFIQUE a Energia ligada ao seu Pokémon Ativo e a quantidade de Energias ligadas a ele.</p>

        <p><b>B - </b>VERIFIQUE a Fraqueza e a Resistência do Pokémon Ativo do seu oponente.</p>

        <p><b>C - </b>Aplique o dano do ataque no Pokémon Ativo do seu oponente.</p>

        <p><b>D - </b>Sua vez de jogar acabou.</p>

        <h3>Entre as vezes de jogar</h3>

        <p>Antes da partida continuar para o próximo jogador, cuide das Condições Especiais nesta ordem:</p>

        <div class="condicoes">
            <p>1) Envenenado</p>
            
            <p>2) Queimado</p>
            
            <p>3) Adormecido</p>

            <p>4) Paralisado</p>
        </div>

        <h3>Condições Especiais</h3>

        <p>Alguns ataques deixam o Pokémon Ativo Adormecido, Confuso, Envenenado, Paralisado ou Queimado. Elas só podem atingir o Pokémon Ativo, já que quando um Pokémon vai para o banco, todas as suas Condições Especiais são removidas. Evoluir o /Pokémon também remove as Condições Especiais.</p>

        <div class="box-condicoes">
            <p><b>Adormecido</b> <br> Gire o Pokémon no sentido anti-horário para mostrar que ele está Adormecido. <br> Se um Pokémon estiver adormecido ele não podera atacar nem recuar. <br> Jogue 1 moeda entre as vezes de jogar. Se cair cara, o Pokémon adormecido acordará. Se cair coroa, o Pokémon permanecerá Adormecido.</p>

            <img class="adormecido" src="./assets/cards/pokemonCard.png" alt="carta adormecida">
        </div>

        <div class="box-condicoes">
            <p><b>Confuso</b> <br> Para indicar que o Pokémon está Confuso, gire-o de ponta-cabeça. <br> Se um Pokémon estiver Confuso você deverá jogar 1 moeda antes de atacar. Se cair cara, atacara normalmente. Se cair coroa, o ataque não acontecerá e você tomara 30 de dano.</p>

            <img class="confuso" src="./assets/cards/pokemonCard.png" alt="carta confusa">
        </div>

        <div class="box-condicoes">
            <p><b>Paralisado</b> <br> Para indicar que o Pokémon está Paralisado, gire-o no sentido horário. <br> Se um Pokémon estiver Paralisado ele não pode atcar ou recuar. Remova a Condição Especial no inicio do seu próximo turno.</p>

            <img class="paralisado" src="./assets/cards/pokemonCard.png" alt="carta paralisada">
        </div>

        <div class="box-condicoes">
            <p><b>Envenenado</b> <br> Um Pokémon Envenenado recebe 10 de dano entre as vezes de jogar. <br> Quando um Pokémon for envenenado, coloque um marcador de Veneno nele. Marcadores de Veneno não acumulam.</p>

            <img class="marcador" src="./assets/icons/envenenado.png" alt="icone envenenado">
        </div>

        <div class="box-condicoes">
            <p><b>Queimado</b> <br> Um Pokémon Queimado recebe 20 dano entre as vezes de jogar, porém esta condição pode ser curada sozinha ao jogar uma moeda e obter cara, porém, se obter coroa, o Pokémon continuará Queimado. <br> Quando um Pokémon for Queimado, coloque um marcador de Queimado nele. Marcadores de Queimado não acumulam.</p>

            <img class="marcador" src="./assets/icons/queimado.png" alt="icone envenenado">
        </div>
    </div>
</div>`
}

function aprenderMTG() {
    section_regras.innerHTML = ``
}

>>>>>>> 2e217ac96a85df2d80717ea2670138e28def4719
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
<<<<<<< HEAD
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
=======
>>>>>>> 2e217ac96a85df2d80717ea2670138e28def4719
}
let inventario = []
let vida = 10
let checkpoint = true

function historia(){
    while(checkpoint = true){
        let pergunta = prompt("Seu país está em conflito, muitas mortes já ocorreram a cidades próximas de você, mas aparace uma oportunidade de fugir para outro país. Você vai?\n 1: Sim\n 2: Não")
        if(pergunta == "1"){
            historia2()
            checkpoint = false
        }
        else{
            alert("Se passou uns dias, invadiram seu bairro e mataram todos presentes")
            alert("Você morreu")
            alert("Voltando para o checkpoint")
            checkpoint = true
        }
    }
}   

function historia2(){
    alert("Você chega na Alemanha e vai pra uma casa alugada em Bernlin")
    alert("Chegando lá você se acomoda e arruma suas coisas pra fica lá por um bom tempo")
    alert("No dia seguinte você decide ir na biblioteca que fica a uma quadra da sua casa")
    alert("Lá tu conhece um cara que também teve de fugir de sua terra natal")
    alert("E então vocês viram amigos")
    alert("Você descobre que ele pratica kick boxing")
    alert("Consequentemente ele te convida pra assistir uma luta dele na noite do dia seguinte")
    alert("Chega a hora de ir na luta de seu amigo")
    alert("Lá você o observa lutar e fica admirado com o estilo da luta")
    alert("Depois da luta você comenta com ele que sentiu interesse no kick boxing")
    alert("E ele decide te dar aulas totalmente de graça com uma condição, vocês teriam que morar juntos.")
    let pergunta2 = Number(prompt("Você aceita?\n 1: Sim\n 2: Não"))
    if(pergunta2 == 1){
        moraramigo()
    }else{
     vidasemgraca()
    }
}

function moraramigo(){
    alert("Você aceita e ele se muda pra sua casa no dia seguinte")
    alert("Lá ele começa a te treinar na sala de estar mesmo, já que a casa não tem muito espaço")
    alert("Depois de uns meses seu amigo se classifica pras olimpiadas")
    alert("Você segue treinando pois ainda não está preparado para algo tão grande")
    alert("Uma semana antes das olimpiadas, seu amigo te da a ideia de sair pra comer alguma coisa")
    let pergunta3 = Number(prompt("Você aceita?\n 1: Sim\n 2: Não"))
    if(pergunta3 == 1){
        sairpracomer()
    }
    else{
        naosair()
    }
}

function sairpracomer(){
    alert("Vocês decidem ir em um bar apenas pra comer, ja que seu amigo não pode beber por causa das olimpiadas")
    alert("Vocêm comem conversam bastante e dão boas risadas")
    alert("Na saída dois caras bêbados param você e seu amigo e começam a provocar e cutucar vocês")
    alert("Em certo momento eles chamam vocês de casal de bichonas")
    alert("Seu amigo se irrita muito e devolve na mesma moeda, os caras ficam bravos e partem pra cima dele.")
    let pergunta4 = Number(prompt("O que você faz?\n 1: Ajuda ele\n 2: Chama a policia"))
    if(pergunta4 == 1){
        hospital()
    }
}
function hospital(){
    alert("Você ajuda ele, mas um dos caras puxa uma arma e da dois tiros nas costas do seu amigo que cai no chão")
    alert("Um pessoal que tava ali perto ouviu os disparos e correram pra ajudar")
    alert("Os criminosos fugiram")
    alert("Você mesmo em choque chama a ambulância que felizmente chega a tempo de socorrer seu amigo")
    alert("No dia seguinte você vai ao hospital e só há você lá")
    alert("Você acha estranho e pergunta sobre a família dele")
    alert("Ele diz que sua família morreu em sua terra natal durante um ataque terrorista")
    alert("E que ele queria muito o ouro nas olimpiadas para homenagia-los")
    alert("Porém agora com o ocorrido ele nunca mais poderá andar")
    alert("E consequentemente, não conseguirá o ouro")
    alert("Você fica emocionado com tudo que ele te contou e promete para ele que conseguirá o ouro por ele")
    alert("Volta pra casa e no dia seguinte, sem ninguém para te treinar, decide ir a um centro de treino")
    alert("No centro de treinamento, você conhece uma linda moça chamada Bruna que também pratica kick boxing")
    alert("Vocês começam a conversar e ela diz que faz o esporte apenas para ter algum tipo de defesa pessoal")
    alert("Ela diz que seu sonho é se mudar para o interior e viver numa casinha simples cheia de plantas e flores")
    alert("Vocês se apaixonam um pelo outro e começam a sair juntos pra retaurantes, cinemas etc")
    alert("Nunca na sua vida você se sentiu tão bem em uma relação")
    alert("Você conta sobre seu amigo e ela te conforta, e isso faz você gostar ainda mais dela")
    alert("Mas um dia ela consegue dinheiro pra realizar o sonho dela de ir morar no interior e ela te convida para ir com ela.")
    alert("Mas isso quer dizer que você terá que abandonar o sonho das olimpiadas")
    let pergunta5 = Number(prompt("Você vai?\n 1: Sim\n 2: Não"))
    if(pergunta5 == 2){
        naoirjuntodela()
    }
    else{
        irjunto()
    }
}
function naoirjuntodela(){
    alert("Você acaba de se despedir do amor da sua vida, ela vai morar no interior e você continua na cidade grande se preparando para as olimpiadas")
    alert("Você não se sente capaz de ganhar as olimpiadas e vai no hospital para conversar com seu amigo")
    alert("Ele fala que pra você ganhar precisarás de foco e determinação, e fala que você tinha que ganhar por ele, honrar seu nome")
    alert("Você determinado a orgulhar seu mestre e amigo, começa a dar 100% de si nos treinos")
    alert("O dia das olimpiadas chega, e você vai no lugar do seu amigo")
    alert("Na primeira luta você perde e desanima, achando que não é capaz de vencer e levar o ouro pra casa")
    alert("Durante o tempo de espera pra sua próxima luta você sonha com seu amigo dizendo pra você não desistir de ganhar")
    alert("Na próxima luta você ganha de lavada como se fosse imbátivel")
    alert("Faltam duas lutas")
    alert("Seu amigo te manda mensagem dizendo que recebeu alta do hospital, e diz também que vai te assistir pela tv nas suas próximas lutas")
    alert("Você fica feliz com a notícia e dorme para no outro dia lutar com seu terceiro oponente")
    alert("Mais uma vez, ganha sem dificuldades")
    alert("Tudo está colaborando para você ganhar esse ouro e você continua focado")
    alert("Passam-se dois dias e chega a hora da luta final, que vai decidir se você é um ouro ou um prata")
    alert("Você fica nervoso e começa a cometer erros no meio da luta")
    alert("Seu oponente te da um cruzado de esquerda no rosto, com uma força que você jamais sentiu na vida")
    alert("Você cai no chão quase inconsciente e quando o juíz está prestes a dar a vitória para o outro competidor")
    alert("Você se levanta com o resto de suas forças, seu oponente te subestimou por estar quase nocauteado")
    alert("Você ganha a luta com um jab de direita no queixo dele")
    alert("Consequentemente, ganha o ouro e deixa seu mestre e melhor amigo orgulhoso")
    alert("Parabéns, você ganhou!!!")
    
    inventario.push("Medalha de ouro")
    alert("Seu inventario: ")
    for (const item of inventario) {
        alert(item)
    }
}
function irjunto(){
    alert("Você decide ir junto com ela e quebra sua promessa")
    alert("Você envergonhado com o que fez, não consegue dizer isso pessoalmente pro seu amigo")
    alert("E então, parte rumo ao interior da alemanha com sua amada")
    alert("Seu amigo fica magoado, mas você sabe que ele entenderá")
    alert("Vocês compram a casa que ela sonhava e começam a viver no interior")
    alert("Cada dia que passa você fica mais apaixonado nela")
    alert("E depois de meses ficando, você corre atrás de uma aliança")
    alert("Você chega na loja e é atendido por um senhorzinho que já imaginava o que você queria")
    alert("Ele diz que viu em seus olhos sua paixão por alguém")
    alert("Ee te mostra uma aliança cara, porém bela")
    alert("Cheia de diamantes ela é, você sabe que a Bruna gostará")
    let pergunta6 = Number(prompt("Você compra?\n 1: Sim\n 2: Não"))
    if(pergunta6 == 1){
        alert("Você comprou a aliança")
        inventario.push("aliança")
        pedido()
    }
    else{
     resolveuircomcalma()
    }
}
function pedido(){
    alert("Você chega em casa depois de comprar a aliança")
    alert("Seu inventario: ")
    for (const item of inventario) {
        alert(item)
    }
    alert("Ao cair da noite na hora da janta, você a pede em namoro")
    alert("Ela aceita sem pensar duas vezes")
    alert("Final alternativo concluido. Parabéns!!!")
    inventario.pop()
}
function resolveuircomcalma(){
    alert("Você decide não comprar a aliança pois acha que está muito cedo")
    alert("Vocês ficam só ficando por um longo tempo, e quem acaba pedindo em namoro é ela")
    alert("Final alternativo concluido.")
}

function vidasemgraca(){
    alert("Você não aceita a proposta e alguns dias depois arruma um emprego em escritório")
    alert("Você nunca tomou iniciativa no kick boxing e vive uma vida normal")
    alert("Final sem graça. Meh")
}
function naosair(){
    alert("Você fala pra deixar pra outro dia")
    alert("Se passa uma semana e seu amigo vai pras olimpiadas")
    alert("Você continua treinando pra na próxima poder participar")
    alert("Você assiste seu amigo da sua casa e vê ele ganhar a medalha de ouro que ele tanto desejava")
    alert("Vocês ficam muito felizes e decidem comemorar com algumas bebidas e jogos")
    alert("Final Feliz. Todo mundo ficou bem!! Boa sorte quando for sua vez!!")
}
function morteamigo(){
    alert("Enquanto você está ligando para a policia, um dos caras puxa uma arma")
    alert("Um deles segura seu amigo e o outro dispara 4 vezes consecutivas contra o peito dele")
    alert("Seu amigo morre quase intantaneamente, você fica em choque e a policia chega")
    alert("Os dois criminosos são presos")
    alert("No dia seguinte você vai no enterro de seu amigo, e lá só tem você e um outro amigo dele")
    alert("Conversando com esse amigo, você descobre que se amigo não tinha ninguém, pois ele perdeu sua familia num ataque terrorista")
    alert("Você promete honrar a memória de seu amigo e pega seu lugar nas olimpiadas")
    alert("Mas para fazer isso você precisa ir num centro de treinamento")
    let pergunta7 = Number(prompt("Você vai?\n 1: Não\n 2: Sim"))
    if(pergunta7 == 2){
        conheceramor()
    }
    else{
        
    }
}
function conheceramor(){
    alert("No centro de treinamento, você conhece uma linda moça chamada Bruna que também pratica kick boxing")
    alert("Vocês começam a conversar e ela diz que faz o esporte apenas para ter algum tipo de defesa pessoal")
    alert("Ela diz que seu sonho é se mudar para o interior e viver numa casinha simples cheia de plantas e flores")
    alert("Vocês se apaixonam um pelo outro e começam a sair juntos pra retaurantes, cinemas etc")
    alert("Nunca na sua vida você se sentiu tão bem em uma relação")
    alert("Você conta sobre seu amigo e ela te conforta, e isso faz você gostar ainda mais dela")
    alert("Mas um dia ela consegue dinheiro pra realizar o sonho dela de ir morar no interior e ela te convida para ir com ela.")
    alert("Mas isso quer dizer que você terá que abandonar o sonho das olimpiadas")
    let pergunta8 = Number(prompt("Você vai?\n 1: Sim\n 2: Não"))
    if(pergunta8 == 1){
        irjunto()
    }
    else{
        olimpiadas()
    }
}
function olimpiadas(){
    alert("Você acaba de se despidir do amor da sua vida, ela vai morar no interior e você continua na cidade grande se preparando para as olimpiadas")
    alert("Você não se sente capaz de ganhar as olimpiadas e vai no tumulo de seu amigo desabafar sobre o que sente")
    alert("Você determinado a honrar seu mestre e amigo, começa a dar 100% de si nos treinos")
    alert("O dia das olimpiadas chega, e você vai no lugar do seu falecido amigo")
    alert("Na primeira luta você perde e desanima, achando que não é capaz de vencer e levar o ouro pra casa")
    alert("Durante o tempo de espera pra sua próxima luta você sonha com seu amigo dizendo pra você não desistir de ganhar")
    alert("Na próxima luta você ganha de lavada como se fosse imbátivel")
    alert("Faltam duas lutas")
    alert("Chega o dia da próxima luta e mais uma vez, ganha sem dificuldades")
    alert("Tudo está colaborando para você ganhar esse ouro e você continua focado")
    alert("Passam-se dois dias e chega a hora da luta final, que vai decidir se você é um ouro ou um prata")
    alert("Você fica nervoso e começa a cometer erros no meio da luta")
    alert("Seu oponente te da um cruzado de esquerda no rosto, com uma força que você jamais sentiu na vida")
    alert("Você cai no chão quase inconsciente e quando o juíz está prestes a dar a vitória para o outro competidor")
    alert("Você se levanta com o resto de suas forças, seu oponente te subestimou por estar quase nocauteado")
    alert("Ele começa a te dar brechas que te dão a oportunidade de virar o jogo")
    alert("Você começa a golpea-lo e ele começa a se irritar")
    alert("Ele começa a cometer mais erros fúteis quando você ve a oportunidade perfeita")
    alert("E então você ganha a luta com um jab de direita no queixo dele")
    alert("Consequentemente, ganha o ouro e sabe que certamente seu amigo ficaria orgulhoso")
    alert("Parabéns, você ganhou!!!")
    
    inventario.push("Medalha de ouro")

    alert("Seu inventario: ")
    for (const item of inventario) {
        alert(item)
    }
}
function finalsemgraca(){
    alert("Você não vai pro centro e alguns dias depois arruma um emprego em escritório")
    alert("Você nunca mais treinou kick boxing e vive uma vida normal")
    alert("Final sem graça. Meh")
}
historia()

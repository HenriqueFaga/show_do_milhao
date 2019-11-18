function mouse_click(resposta){
    resp = window.document.getElementById(resposta.id)
    console.log(resp.getAttribute('value'))
    if (confirm("Voce tem certeza disso?")){
        if (resp.getAttribute('value') == 'true'){
            resp.style = 'background-color:#00e600;'
            resposta = document.createElement('INPUT')
            resposta.type = 'HIDDEN'
            resposta.name = 'resposta'
            resposta.value = 'true'
            document.getElementById('quadro_principal').style = "display: none;"
            charme = document.getElementById('charme_acertou')
            charme.style = "display: block;"
            charme.style = "background-color: #66ff99;"
            charme = document.getElementById('charme_certo_ou_errado')
            charme.innerHTML = 'ACERTOU'
            document.getElementById('proxima_etapa').style = "display: block;"
        }
        else{
            resp.style = 'background-color:#ff3333;'
            resposta = document.createElement('INPUT')
            resposta.type = 'HIDDEN'
            resposta.name = 'resposta'
            resposta.value = 'false'
            document.getElementById('quadro_principal').style = "display: none;"
            charme = document.getElementById('charme_acertou')
            charme.style = "display: block;"
            charme.style = "background-color: red;"
            charme = document.getElementById('charme_certo_ou_errado')
            charme.innerHTML = 'ERROU! <br> Click para Voltar no Menu'
            document.getElementById('charme_resposta').innerHTML = 'Resposta Correta: ' + resposta_correta()
            document.getElementById('errou_voltar').style = "display: block;"
        }
        // setTimeout(submit_form, 3000);
        form = document.getElementById('proxima')
        form.appendChild(resposta)
    }
}

function resposta_correta(){
    valor_1 = document.getElementById('resp_1').getAttribute('value')
    valor_2 = document.getElementById('resp_2').getAttribute('value')
    valor_3 = document.getElementById('resp_3').getAttribute('value')
    valor_4 = document.getElementById('resp_4').getAttribute('value')
    // Verifica resposta correta
    if (valor_1 == 'true'){
        certa = document.getElementById('resp_1').innerHTML
    }
    else if (valor_2 == 'true'){
        certa = document.getElementById('resp_2').innerHTML
    }
    else if (valor_3 == 'true'){
        certa = document.getElementById('resp_3').innerHTML
    }
    else{
        certa = document.getElementById('resp_4').innerHTML
    }
    return certa
}

function submit_form(){
    form = document.getElementById('proxima')
    form.submit()
}

function voltar_menu(){
    window.location = 'menu'
}

var ajuda = true
function mouse_click_ajuda(id_ajuda){
    resp = window.document.getElementById(id_ajuda)
    console.log(resp.getAttribute('value'))
    //  Verificando de a pessoa já usou ajuda essa jogada
    if(ajuda == true){
        if (resp.getAttribute('value') == '0'){
            //  Verificando se o cara tem dinheiro pra pedir cartas
            dinheiro = document.getElementById('moedas').getAttribute('value')
            if(parseInt(dinheiro) >= 100){
                document.getElementById('escolhe_carta').style = 'display: block;'
                document.getElementById('porcento_plateia').style = 'display: none;'
                document.getElementById('resposta_universitario').style = 'display: none;'
                dinheiro = dinheiro - 100
                document.getElementById('dinheiro_visivel').innerHTML = dinheiro
                ajuda = false
            }
            else{
                alert('Desculpe, você não tem moedas o suficiente!')
            }
        }
        if (resp.getAttribute('value') == '1'){
            //  Verificando se o cara tem dinheiro pra pedir cartas
            dinheiro = document.getElementById('moedas').getAttribute('value')
            if(parseInt(dinheiro) >= 50){
                document.getElementById('porcento_plateia').style = 'display: block;'
                document.getElementById('escolhe_carta').style = 'display: none;'
                document.getElementById('resposta_universitario').style = 'display: none;'
                dinheiro = dinheiro - 50
                document.getElementById('dinheiro_visivel').innerHTML = dinheiro
                ajuda = false
                analise_plateia()
            }
            else{
                alert('Desculpe, você não tem moedas o suficiente!')
            }
        }
        if (resp.getAttribute('value') == '2'){
            //  Verificando se o cara tem dinheiro pra pedir cartas
            dinheiro = document.getElementById('moedas').getAttribute('value')
            if(parseInt(dinheiro) >= 50){
                document.getElementById('resposta_universitario').style = 'display: block;'
                document.getElementById('escolhe_carta').style = 'display: none;'
                document.getElementById('porcento_plateia').style = 'display: none;'
                dinheiro = dinheiro - 50
                document.getElementById('dinheiro_visivel').innerHTML = dinheiro
                ajuda = false
                analise_universitarios()
            }
            else{
                alert('Desculpe, você não tem moedas o suficiente!')
            }
        }
        if (resp.getAttribute('value') == '3'){
            //  Verificando se o cara tem dinheiro pra pedir cartas
            dinheiro = document.getElementById('moedas').getAttribute('value')
            if(parseInt(dinheiro) >= 50){
                if(confirm('Tem certeza que quer Pular?')){
                    document.getElementById('resposta_universitario').style = 'display: none;'
                    document.getElementById('escolhe_carta').style = 'display: none;'
                    document.getElementById('porcento_plateia').style = 'display: none;'
                    dinheiro = dinheiro - 50
                    document.getElementById('dinheiro_visivel').innerHTML = dinheiro
                    ajuda = false
                    form = document.getElementById('proxima')
                    form.submit()
                }
                else{
                    document.getElementById('resposta_universitario').style = 'display: none;'
                    document.getElementById('escolhe_carta').style = 'display: none;'
                    document.getElementById('porcento_plateia').style = 'display: none;'
                }
            }
            else{
                alert('Desculpe, você não tem moedas o suficiente!')
            }
        }
    }
    else{
        alert('Você só pode usar uma ajuda por rodada!')
    }
}
function analise_universitarios(){
    dificuldade = document.getElementById('dificuldade').value
    valor_1 = document.getElementById('resp_1').getAttribute('value')
    valor_2 = document.getElementById('resp_2').getAttribute('value')
    valor_3 = document.getElementById('resp_3').getAttribute('value')
    valor_4 = document.getElementById('resp_4').getAttribute('value')
    // Verifica resposta correta
    if (valor_1 == 'true'){
        certa = document.getElementById('resp_1')
        errada = document.getElementById('resp_2')
        errada_2 = document.getElementById('resp_3')
    }
    else if (valor_2 == 'true'){
        certa = document.getElementById('resp_2')
        errada = document.getElementById('resp_1')
        errada_2 = document.getElementById('resp_3')
    }
    else if (valor_3 == 'true'){
        certa = document.getElementById('resp_3')
        errada = document.getElementById('resp_1')
        errada_2 = document.getElementById('resp_4')
    }
    else{
        certa = document.getElementById('resp_4')
        errada = document.getElementById('resp_2')
        errada_2 = document.getElementById('resp_1')
    }

    if (dificuldade == '1'){
        // Nada acontece, todos acertam
        resp_1 = document.getElementById('resp_1').innerHTML
        document.getElementById('uni_resp_1').innerHTML = certa.innerHTML
        resp_2 = document.getElementById('resp_2').innerHTML
        document.getElementById('uni_resp_2').innerHTML = certa.innerHTML
        resp_3 = document.getElementById('resp_3').innerHTML
        document.getElementById('uni_resp_3').innerHTML = certa.innerHTML
    }
    else if (dificuldade == '2'){
        aleatorio_1 = Math.floor(Math.random() * 4)
        // Um erra
        if(aleatorio_1 == 1){
            resp_1 = document.getElementById('resp_1').innerHTML
            document.getElementById('uni_resp_1').innerHTML = errada.innerHTML
            resp_2 = document.getElementById('resp_2').innerHTML
            document.getElementById('uni_resp_2').innerHTML = certa.innerHTML
            resp_3 = document.getElementById('resp_3').innerHTML
            document.getElementById('uni_resp_3').innerHTML = certa.innerHTML
        }
        if(aleatorio_1 == 2){
            resp_1 = document.getElementById('resp_1').innerHTML
            document.getElementById('uni_resp_1').innerHTML = certa.innerHTML
            resp_2 = document.getElementById('resp_2').innerHTML
            document.getElementById('uni_resp_2').innerHTML = errada.innerHTML
            resp_3 = document.getElementById('resp_3').innerHTML
            document.getElementById('uni_resp_3').innerHTML = certa.innerHTML
        }
        else{
            resp_1 = document.getElementById('resp_1').innerHTML
            document.getElementById('uni_resp_1').innerHTML = certa.innerHTML
            resp_2 = document.getElementById('resp_2').innerHTML
            document.getElementById('uni_resp_2').innerHTML = certa.innerHTML
            resp_3 = document.getElementById('resp_3').innerHTML
            document.getElementById('uni_resp_3').innerHTML = errada.innerHTML
        }
    }
    else if (dificuldade == '3'){
        // Dois erram
        aleatorio_1 = Math.floor(Math.random() * 4)
        if(aleatorio_1 == 1){
            resp_1 = document.getElementById('resp_1').innerHTML
            document.getElementById('uni_resp_1').innerHTML = certa.innerHTML
            resp_2 = document.getElementById('resp_2').innerHTML
            document.getElementById('uni_resp_2').innerHTML = errada_2.innerHTML
            resp_3 = document.getElementById('resp_3').innerHTML
            document.getElementById('uni_resp_3').innerHTML = errada.innerHTML
        }
        else if(aleatorio_1 == 2){
            resp_1 = document.getElementById('resp_1').innerHTML
            document.getElementById('uni_resp_1').innerHTML = errada.innerHTML
            resp_2 = document.getElementById('resp_2').innerHTML
            document.getElementById('uni_resp_2').innerHTML = certa.innerHTML
            resp_3 = document.getElementById('resp_3').innerHTML
            document.getElementById('uni_resp_3').innerHTML = errada_2.innerHTML
        }
        else{
            resp_1 = document.getElementById('resp_1').innerHTML
            document.getElementById('uni_resp_1').innerHTML = errada_2.innerHTML
            resp_2 = document.getElementById('resp_2').innerHTML
            document.getElementById('uni_resp_2').innerHTML = errada.innerHTML
            resp_3 = document.getElementById('resp_3').innerHTML
            document.getElementById('uni_resp_3').innerHTML = certa.innerHTML
        }
    }

}
function analise_plateia(){
    dificuldade = document.getElementById('dificuldade').value
    // Facil
    if (dificuldade == "1"){
        garantido = 50
    }
    // Medio
    else if (dificuldade == "2"){
        garantido = 30
    }
    // Dificil
    else{
        garantido = 15
    }

    // Calculo para todos
    prob_1 = garantido + Math.floor(Math.random() * 51)
    dif = 100 - prob_1
    prob_2 = Math.floor(Math.random() * dif) + 1
    dif = 100 - (prob_2 + prob_1)
    if(dif == 0){
        prob_3 = 0
        prob_4 = 0
    }
    else{
        prob_3 = Math.floor(Math.random() * dif) + 1
        prob_4 = 100 - (prob_3 + prob_1 + prob_2)
    }

    resp_1 = document.getElementById('resp_1')
    valor_1 = resp_1.getAttribute('value')
    
    resp_2 = document.getElementById('resp_2')
    valor_2 = resp_2.getAttribute('value')
    
    resp_3 = document.getElementById('resp_3')
    valor_3 = resp_3.getAttribute('value')
    
    resp_4 = document.getElementById('resp_4')
    valor_4 = resp_4.getAttribute('value')

    if (valor_1 == "true"){
        document.getElementById('plateia_resp_1').innerHTML = resp_1.innerHTML + ': ' + prob_1 + '%'
        document.getElementById('plateia_resp_2').innerHTML = resp_2.innerHTML+ ': ' + prob_2 + '%'
        document.getElementById('plateia_resp_3').innerHTML = resp_3.innerHTML + ': ' + prob_3 + '%'
        document.getElementById('plateia_resp_4').innerHTML = resp_4.innerHTML + ': ' + prob_4 + '%'
    }
    else if (valor_2 == "true"){
        document.getElementById('plateia_resp_1').innerHTML = resp_2.innerHTML + ': ' + prob_1 + '%'
        document.getElementById('plateia_resp_2').innerHTML = resp_1.innerHTML + ': ' + prob_2 + '%'
        document.getElementById('plateia_resp_3').innerHTML = resp_3.innerHTML + ': ' + prob_3 + '%'
        document.getElementById('plateia_resp_4').innerHTML = resp_4.innerHTML + ': ' + prob_4 + '%'
    }
    else if (valor_3 == "true"){
        document.getElementById('plateia_resp_1').innerHTML = resp_3.innerHTML + ': ' + prob_1 + '%'
        document.getElementById('plateia_resp_2').innerHTML = resp_1.innerHTML + ': ' + prob_2 + '%'
        document.getElementById('plateia_resp_3').innerHTML = resp_2.innerHTML + ': ' + prob_3 + '%'
        document.getElementById('plateia_resp_4').innerHTML = resp_4.innerHTML + ': ' + prob_4 + '%'
    }
    else{
        document.getElementById('plateia_resp_1').innerHTML = resp_4.innerHTML + ': ' + prob_1 + '%'
        document.getElementById('plateia_resp_2').innerHTML = resp_1.innerHTML + ': ' + prob_2 + '%'
        document.getElementById('plateia_resp_3').innerHTML = resp_2.innerHTML + ': ' + prob_3 + '%'
        document.getElementById('plateia_resp_4').innerHTML = resp_3.innerHTML + ': ' + prob_4 + '%'
    }
}

var virada = false
function mouse_click_carta(img){
    carta = document.getElementById(img)
    resp = document.getElementsByClassName('resposta')
    aleatorio = Math.floor(Math.random() * 4)
    if (virada != true){
        if (aleatorio == 0){
            carta.src = "imagens/as.png"
            // For para eliminar 1 resposta Falsa
            for (i=0; i<4; i++){
                if (resp[i].getAttribute('value') == 'false'){
                    resp[i].style = 'visibility:hidden;'
                    i = 4
                }
            }
        }
        else if (aleatorio == 1){
            carta.src = "imagens/2.png"
            // For para eliminar 2 respostas Falsas
            var j = 0
            for (i=0; i<4; i++){
                if (resp[i].getAttribute('value') == 'false'){
                    resp[i].style = 'visibility:hidden;'
                    j += 1
                    if (j == 2){
                        i = 4
                    }
                }
            }
        }
        else if (aleatorio == 2){
            carta.src = "imagens/3.png"
            // For para eliminar 3 respostas Falsas
            for (i=0; i<4; i++){
                if (resp[i].getAttribute('value') == 'false'){
                    resp[i].style = 'visibility:hidden;'
                }
            }
        }
        else{
            carta.src = "imagens/rei.png"
        }
    }
    virada = true
}
function funcao_parar(){
    var a = confirm('Deseja realmente parar o jogo?')
    if(a){
        window.location = 'menu'
    }
}

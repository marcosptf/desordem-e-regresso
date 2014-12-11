/*******************************************************************************
 * @author:marcosptf@yahoo.com.br
 * @since:19/09/2013
 * @desc:atribuicao dos elementos html nas propriedades do jogo com YUI();
 ********************************************************************************/

function processaImagemUsada(imagemSupostamenteUsada){
    for(var x in imagemUsadaGame){
        if(imagemUsadaGame[x]===imagemSupostamenteUsada){
            return true;
        }
    }
    return false;
}

function geraImagemRandomica(){
    return (Math.floor((Math.random() * qtdeImg[faseGradeJogador]) + 1));
}

function calculaImagemUsadaNoGamePorFase(){
    var imagemRandomica;
    
    for(var x = 0; x<=qtdeImg[faseGradeJogador];x++){
        imagemRandomica = geraImagemRandomica();printString("img randomica gerada=>"+imagemRandomica);
        if(!processaImagemUsada(imagemRandomica)){ 
            printString("imagem randomica gerada ñ existia =>"+imagemRandomica);
            imgZumbiAtual = imagemRandomica;
            return imagemRandomica;
        }
		printString("img randomica gerada ñ valida =>"+imagemRandomica);
		return 0;
    }
}


function exibeIMGGame() {
    YUI().use("node", function(Y) {
        
		imgGame = calculaImagemUsadaNoGamePorFase();
        pzbImg = ((imgGame>0) ? (imgGame) : (calculaImagemUsadaNoGamePorFase()));
        
        for (var x = 1; x <= qtdeImg[faseGradeJogador]; x++) {
            Y.one("#grade" + faseGradeJogador + "z" + x).setStyle("display", "none");
        }
//      for(var x=1;x<=pQtdeImg;x++){Y.one("#dead"+faseGradeJogador+"z"+x).setStyle("display","none");}
        printString("habilitando zumbi na ==> #grade" + faseGradeJogador + "z" + pzbImg);
        Y.one("#grade" + faseGradeJogador + "z" + pzbImg).setStyle("display", "block");
    });
}

function iniciaJogo() {
    tempDados = window.clearInterval(tempDados);
    tempJogo = self.setInterval(function() {
        mostraZumbiRandom()
//                        },1000);
    }, temporizadorMilisegundos);
}

function mostraZumbiRandom() {
    /*
     esta função deve:
     
     +Finalizado:
     1.saber qual grade o jogador esta agora, sabando-se que, se estiver começando o jogo agora, inicializa-se na grade0 
     2.mostrar o zumbi em um determinado quadrado, e se caso o jogador ñ clicar, deve fazer sumir o mesmo, aparecendo em outro quadrado.
     5.quando o jogador matar o zumbi, deve ser computado pontos para ele.
     7.deve desenvolver funcao inteligente para gerenciar quando acabar uma fase e passar para a fase seguinte;
     3.se caso o jogador ja estiver clicado no zumbi exibido, o mesmo deve entrar no status morto, e não deve ser apagado.
     4.desenvolver funcao para que quando o jogador matar zumbi, apareça imagem de zumbi sujo de sangue e o quadrado desabilitado para jogo.
     
     +Andamento
     6.deve ser desenvolvido função para calculo de tempo para passar cada fase de grade.					
     
     +Pendente
     
     */

    //YUI().use("node",function(YHtml){
    //    YHtml.one("#idFase").setHTML("jsDebugger => Fase=>"+faseGradeJogador+" Temp=>"+temporizadorGame+" QtdePontos=>"+qtdePontosJogador);
    //});					
    printString("jsDebugger => Fase=>" + faseGradeJogador + " Temp=>" + temporizadorGame + " QtdePontos=>" + pontosJogador);
	document.getElementById("idFase").innerHTML = " Fase:" + faseGradeJogador + " Tempo:" + temporizadorGame + "  Pontos:" + pontosJogador;		
    if (
            (faseGradeJogador === 0) && (temporizadorGame === 5) ||
            (faseGradeJogador === 1) && (temporizadorGame === 10) ||
            (faseGradeJogador === 2) && (temporizadorGame === 20) ||
            (faseGradeJogador === 3) && (temporizadorGame === 30) ||
            (faseGradeJogador === 4) && (temporizadorGame === 40) ||
            (faseGradeJogador === 5) && (temporizadorGame === 50)
            ) {
			
		return fimDeFaseJogadorPerdeu();
        //return voltaParaCarrossel();
    }

    if (faseGradeJogador === 0) {
        grade6.setStyle("display", "none");
        grade0.setStyle("display", "block");
        
    } else if (faseGradeJogador === 1) {
        grade6.setStyle("display", "none");
        grade0.setStyle("display", "none");
        grade1.setStyle("display", "block");
        
    } else if (faseGradeJogador === 2) {
        grade6.setStyle("display", "none");
        grade0.setStyle("display", "none");
        grade1.setStyle("display", "none");
        grade2.setStyle("display", "block");
        
    } else if (faseGradeJogador === 3) {
        grade6.setStyle("display", "none");
        grade0.setStyle("display", "none");
        grade1.setStyle("display", "none");
        grade2.setStyle("display", "none");
        grade3.setStyle("display", "block");
        
    } else if (faseGradeJogador === 4) {
        grade6.setStyle("display", "none");
        grade0.setStyle("display", "none");
        grade1.setStyle("display", "none");
        grade2.setStyle("display", "none");
        grade3.setStyle("display", "none");
        grade4.setStyle("display", "block");
        
    } else if (faseGradeJogador === 5) {
        grade6.setStyle("display", "none");
        grade0.setStyle("display", "none");
        grade1.setStyle("display", "none");
        grade2.setStyle("display", "none");
        grade3.setStyle("display", "none");
        grade4.setStyle("display", "none");
        grade5.setStyle("display", "block");
        
    } else if (faseGradeJogador === 6) {
        grade0.setStyle("display", "none");
        grade1.setStyle("display", "none");
        grade2.setStyle("display", "none");
        grade3.setStyle("display", "none");
        grade4.setStyle("display", "none");
        grade5.setStyle("display", "none");
        grade6.setStyle("display", "block");
        for(var x=1;x<180;x++){document.getElementById('espaco6z'+x).style.display = 'none';}
        
    }

    exibeIMGGame();
    temporizadorGame++;

}


function capturaAcaoJogador(idQuadro) {
    printString("idQuadro =>" + idQuadro);
    if (imgZumbiAtual === idQuadro) {
        pontosJogador += 10;
        qtdePontosJogador++;
        imagemUsadaGame.push(idQuadro);
        YUI().use("node", function(Y) {
            //deve retirar a imagem do zumbi e colocar a imagem de alvo acertado;
            Y.one("#grade" + faseGradeJogador + "z" + idQuadro).setStyle("display", "none");//trocar chamada de funcao
            Y.one("#dead" + faseGradeJogador + "z" + idQuadro).setStyle("display", "block");// zombieDead1.jpg
            printString("habilita imagem zombie morto");
        });
    }
    printString("acao apos habilitar zombie morto");
    if (
			(qtdePontosJogador === qtdeImg[faseGradeJogador]) || 
			(qtdePontosJogador === (qtdeImg[faseGradeJogador] - 1)) || 
			(qtdePontosJogador === (qtdeImg[faseGradeJogador] - 2)) || 
			(qtdePontosJogador === (qtdeImg[faseGradeJogador] - 3))) {
			
        msg1 = "jogador finalizou o jogo! debug=>  pontos=>" + pontosJogador + " fase=>" + faseGradeJogador + " tempo=>" + temporizadorGame;
        msg2 = "jogador finalizou a fase! debug=>  pontos=>" + pontosJogador + " fase=>" + faseGradeJogador + " tempo=>" + temporizadorGame+" temposizadorMilisegundos=>"+temporizadorMilisegundos;
        if (
                (faseGradeJogador === 0 && pontosJogador >= 30) ||
                (faseGradeJogador === 1 && pontosJogador >= 100) ||
                (faseGradeJogador === 2 && pontosJogador >= 250) ||
                (faseGradeJogador === 3 && pontosJogador >= 480) ||
                (faseGradeJogador === 4 && pontosJogador >= 760)
                ) {
            fimDeFase(msg2);
        } else if (faseGradeJogador === 5 && pontosJogador >= 2600) {
            fimDeFase(msg1);
        }
    }
    return true;
}

function fimDeFaseJogadorPerdeu(){
	/* 
		#adicionar na function fimDeFase();, opcao para verificar se a constante AMBIENTE="dev",
		mostrar alert com os debugs, mas se for AMBIENTE="prod" exibir a imagem bg5 com a mensagem 
		parecida com a do alert com os pontos, fase e tempo, com um botao para voltar ao inicio.
	*/	
    imagemUsadaGame = new Array();
	divPrincipal.setStyle("backgroundImage", "url('"+BGImagePath+BGImage5+"')");	
	for(var x=1;x<qtdeImg[faseGradeJogador];x++){
		document.getElementById('grade'+faseGradeJogador+'z'+x).style.display = 'none';
		document.getElementById('dead'+faseGradeJogador+'z'+x).style.display = 'none';
	}
	grade0.setStyle("display", "none");
	grade1.setStyle("display", "none");
	grade2.setStyle("display", "none");
	grade3.setStyle("display", "none");
	grade4.setStyle("display", "none");
	grade5.setStyle("display", "none");
	grade6.setStyle("display", "none");
	btnArregarNoJogo.setStyle("display", "none");	
	btnInicioJogo.setStyle("display", "block");	
	subTela2.setStyle("cursor","pointer");
    printString("debug fim de fase=>  pontos=>" + pontosJogador + " fase=>" + faseGradeJogador + " tempo=>" + temporizadorGame+" temposizadorMilisegundos=>"+temporizadorMilisegundos);
	document.getElementById("idFase2").innerHTML = " Fase:" + faseGradeJogador + " Tempo:" + temporizadorGame + "  Pontos:" + pontosJogador;		
	document.getElementById("idFase3").innerHTML = "Voce nao conseguiu matar os zumbis a tempo, ainda nao esta preparado para o fim.";			
	btnArregarNoJogo.setStyle("display", "block");
    window.clearTimeout(tempJogo);
    window.mozCancelAnimationFrame(tempJogo);
	return window.clearInterval(tempJogo);
}

function fimDeFase(msg){
	printString(msg2);
	temporizadorMilisegundos = ((temporizadorMilisegundos > 1000) ? (temporizadorMilisegundos-200) : (temporizadorMilisegundos-300));
	faseGradeJogador++;
	temporizadorGame = 0;
	qtdePontosJogador = 0;
	iniciaJogo();
}

function printString(str){
	if(AMBIENTE=="dev"){
		//alert(str);
		console.debug(str);
	}
}

/*******************************************************************************
 * @author:marcosptf@yahoo.com.br
 * @since:03/02/2015
 * @desc:code review, change to oop static class
 ********************************************************************************/

var gameEngine = {

  btnInicioJogo : "",
  btnTutorialJogo : "",
  btnCreditos : "",
  btnMatarZumbis : "",
  btnMatarPT : "",
  btnMatarTucano : "",
  btnMatarGeral : "",
  btnArregarNoJogo : "",
  telaInicial : "",
  tela1 : "",
  tela2 : "",
  tela3 : "",
  grade0 : "",
  grade1 : "",
  grade2 : "",
  grade3 : "",
  grade4 : "",
  grade5 : "",
  grade6 : "",
  tempDados : "",
  tempJogo : "",
  subTela2 : "",
  imgZumbiAtual : 0,
  qtdePontosJogador : 1,
  pontosJogador : 0,
  temporizadorGame : 0,
  faseGradeJogador : 0,
  zbImg : 1,
  carrosselOrdem : = 1,
  BGImagePath : "file:///root/developer/desordem-e-regresso-master/public_html/img",
  BGImage1 : "/bg/bg1.png",
  BGImage2 : "/bg/bg2.png",
  BGImage3 : "/bg/bg3.png",
  BGImage4 : "/bg/bg4.png",
  BGImage5 : "/bg/bg5.png",
  armaFaca1 : "/faca1.png",
  armaFaca2 : "/faca2.png",
  armaFogo1 : "/arma1.png",
  armaFogo2 : "/arma2.png",
  armaFogo3 : "/arma3.png",
  armaFogo4 : "/arma4.png",
  armaFogo5 : "/arma5.png",
  armaFogo6 : "/arma6.png",
  noArmaFogo1 : "/noArma1.png",
  noArmaFogo2 : "/noArma2.png",
  imagemUsadaGame : new Array(),
  temporizadorMilisegundos : 1400,
  AMBIENTE : "dev" /* {"debug","dev","prod"} */ ,
  
  qtdeImg : new Array(),
  qtdeImg[0] : 4,
  qtdeImg[1] : 8,
  qtdeImg[2] : 16,
  qtdeImg[3] : 24,
  qtdeImg[4] : 32,
  qtdeImg[5] : 180,
  
   processaImagemUsada : function (imagemSupostamenteUsada){
      for(var x in imagemUsadaGame){
	if(imagemUsadaGame[x]===imagemSupostamenteUsada){
	  return true;
        }
      }
      return false;
    },
    
  geraImagemRandomica : function(){
      return (Math.floor((Math.random() * qtdeImg[faseGradeJogador]) + 1));
  },
  
  
  calculaImagemUsadaNoGamePorFase : function(){
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
  },

  exibeIMGGame : function(){
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
  },  
  
  iniciaJogo : function(){
      tempDados = window.clearInterval(tempDados);
      tempJogo = self.setInterval(function() {
	  mostraZumbiRandom()
  //                        },1000);
      }, temporizadorMilisegundos);
  },  


    mostraZumbiRandom : function(){
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
    },

    capturaAcaoJogador : function(idQuadro){
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
  },    

    fimDeFaseJogadorPerdeu : function(){
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
    },

    fimDeFase : function(msg){
	printString(msg2);
	temporizadorMilisegundos = ((temporizadorMilisegundos > 1000) ? (temporizadorMilisegundos-200) : (temporizadorMilisegundos-300));
	faseGradeJogador++;
	temporizadorGame = 0;
	qtdePontosJogador = 0;
	iniciaJogo();
    },    

    printString : function(str){
	if(AMBIENTE=="dev"){
	    console.debug(str);
	}elseif(AMBIENTE=="debug"){
	    alert(str);
	}elseif(AMBIENTE=="prod"){
	    console.log(str);
	}  
    }
    
}



/*******************************************************************************
 * @author:marcosptf@yahoo.com.br
 * @since:19/09/2013
 * @desc:definicoes das propriedades usadas no game
 * Rotinas do carrossel
 ********************************************************************************/

function voltaParaCarrossel() {
    faseGradeJogador = 0;
    temporizadorGame = 0;
    qtdePontosJogador = 0;
    btnMatarZumbis.setStyle("display", "block");
    btnArregarNoJogo.setStyle("display", "none");
    btnInicioJogo2.setStyle("display", "block");
    divPrincipal.setStyle("backgroundImage", "url('" + BGImagePath + BGImage4 + "')");
    subTela2.setStyle("cursor", "default");
    printString("debugExibeCarrossel(0);");
    grade0.setStyle("display", "none");
    printString("debugExibeCarrossel(1);");
    grade1.setStyle("display", "none");
    printString("debugExibeCarrossel(2);");
    grade2.setStyle("display", "none");
    printString("debugExibeCarrossel(3);");
    grade3.setStyle("display", "none");
    printString("debugExibeCarrossel(4);");
    grade4.setStyle("display", "none");
    printString("debugExibeCarrossel(5);");
    grade5.setStyle("display", "none");
    printString("debugExibeCarrossel(6);");
    grade6.setStyle("display", "none");
    printString("debugExibeCarrossel(7);");
    exibeCarrossel();
    printString("debugExibeCarrossel(8);");
//    return;
}

function exibeCarrossel() {
    tempJogo = window.clearInterval(tempJogo);
    telaInicial.setStyle("display", "none");
    tela1.setStyle("display", "block");
    grade6.setStyle("display", "block");

    tempDados = self.setInterval(function() {
        exibeIMGCarrossel(zbImg);
        zbImg++;
    }, 50);
}

function exibeIMGCarrossel(pzbImg) {
    YUI().use("node", function(Y) {
        if (carrosselOrdem === 1) {

            Y.one("#espaco6z" + pzbImg).setStyle("display", "none");
            Y.one("#grade6z" + pzbImg).setStyle("display", "block");

        } else if (carrosselOrdem === 2) {

            pzbImg = 180;

        } else if (carrosselOrdem === 3) {

            /* implementar carrocel circular */
            Y.one("#espaco6z" + carrosselCircular[pzbImg]).setStyle("display", "none");
            Y.one("#grade6z" + carrosselCircular[pzbImg]).setStyle("display", "block");

        } else if (carrosselOrdem === 4) {

            for (var x = 1; x <= 180; x++) {
                Y.one("#espaco6z" + x).setStyle("display", "block");
                Y.one("#grade6z" + x).setStyle("display", "none");
            }
            Y.one("#espaco6z" + pzbImg).setStyle("display", "none");
            Y.one("#grade6z" + pzbImg).setStyle("display", "block");

        } else if (carrosselOrdem === 5) {

            carrosselOrdem = 1;

        }

        if (pzbImg === 180) {
            zbImg = 0;
            carrosselOrdem++;
            for (var x = 1; x <= 180; x++) {
                Y.one("#espaco6z" + x).setStyle("display", "block");
                Y.one("#grade6z" + x).setStyle("display", "none");
            }
        }
    });
}


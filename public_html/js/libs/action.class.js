/*******************************************************************************
 * @author:marcosptf@yahoo.com.br
 * @since:19/09/2013
 * @desc:definicoes das propriedades usadas no game
 ********************************************************************************/
YUI().use("node", function(Y) {

    telaInicial = Y.one("#telaInicial");
    tela1 = Y.one("#tela1");
    tela2 = Y.one("#tela2");
    tela3 = Y.one("#tela3");
    btnInicioJogo = Y.one("#btnInicio");
    btnInicioJogo2 = Y.one("#btnInicioJogo");
    btnMatarZumbis = Y.one("#btnMatarZumbis");
    btnTutorialJogo = Y.one("#btnTutorialJogo");
//    btnCreditos = Y.one("#btnCreditos");
    btnArregarNoJogo = Y.one("#btnArregarNoJogo");
    grade0 = Y.one("#grade0");
    grade1 = Y.one("#grade1");
    grade2 = Y.one("#grade2");
    grade3 = Y.one("#grade3");
    grade4 = Y.one("#grade4");
    grade5 = Y.one("#grade5");
    grade6 = Y.one("#grade6");
    divPrincipal = Y.one("#divPrincipal");
    subTela2 = Y.one("#subTela2");
    btnMatarZumbis.setStyle("background-image", "url('"+BGImagePath+BGImage3+"')");

    btnInicioJogo2.on("click", function(e) {
        location.reload();
    });

    btnInicioJogo.on("click", function(e) {
        divPrincipal.setStyle("backgroundImage", "url('"+BGImagePath+BGImage4+"')");
        exibeCarrossel();
    });

    btnArregarNoJogo.on("click", function(e) {
        location.reload();		
    });

//    btnCreditos.on("click", function(e) {
//        printString("clicou no botao de creditos");
//    });

    btnMatarZumbis.on("click", function(e) {
        btnArregarNoJogo.setStyle("display", "block");
        btnMatarZumbis.setStyle("display", "none");
        btnInicioJogo2.setStyle("display", "none");
        divPrincipal.setStyle("backgroundImage", "url('"+BGImagePath+BGImage1+"')");
        subTela2.setStyle("cursor", "url('"+BGImagePath+armaFaca1+"'),crosshair");
        iniciaJogo();
    });

});

/*******************************************************************************
 * @author:marcosptf@yahoo.com.br
 * @since:19/09/2013
 * @desc:atribuição dos elementos html nas propriedades do jogo com YUI();
 ********************************************************************************/

(function(){
    YUI().use("node", function(YGet) {
        YGet.one("#divPrincipal").setStyle("backgroundImage", "url('"+BGImagePath+BGImage3+"')");
	YGet.one("#divPrincipal").setStyle("background-repeat", "no-repeat");
	YGet.one("#divPrincipal").setStyle("background-attachment", "fixed");
	YGet.one("#divPrincipal").setStyle("height", "500px");
	YGet.one("#divPrincipal").setStyle("width", "600px");
	YGet.one("#divPrincipal").setStyle("top", "25px");		
    });	
})();





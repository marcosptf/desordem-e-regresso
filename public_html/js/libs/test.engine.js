/*******************************************************************************
 * @author:marcosptf@yahoo.com.br
 * @since:03/02/2015
 * @desc:static class to test js code
 ********************************************************************************/

var jstest = {
  
  testdebug : function(msg){
    console.debug(msg);
  },
  
  testdebugbr : function(msg){
    console.debug(msg+"<br/>");
  },
  
  testdebugwt : function(msg){
    document.write(msg+"<br/>");
  },
  
  testalert : function(msg){
    window.alert(msg);
  }
  
}

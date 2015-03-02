/*******************************************************************************
 * @author:marcosptf@yahoo.com.br
 * @since:03/02/2015
 * @desc:first js class to unit test
 ********************************************************************************/


var testClass = {
  
  dados1 : 1,
  dados2 : 2,
  dados3 : 3,
  
  getDados1 : function(){
    return this.dados1;
  },
  
  getDados2 : function(){
    return this.dados2;
  },  
  
  getDados3 : function(){
    return this.dados3;
  },
  
  somaDados : function(){
    return (this.getDados1()+this.getDados2()+this.getDados3());
  }
  
}

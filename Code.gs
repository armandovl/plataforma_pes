var idBaseDatos="1anGeMqQlSveaBCfEW5E_IRq_ZT6Q1gSyc4LOpdm_Cuk";

function doGet(e) {
  
  var libro= SpreadsheetApp.openById(idBaseDatos);
  var hoja= libro.getSheetByName("Sheet3");
  
  
  
  /******************* es importante que estas filas esten separadas por una columna en blanco*/
  
  /*este proceso es para seleccionar la lista que vamos a poner en el select del formulario*/
  var rangoUno= hoja.getRange(1,1, hoja.getRange("a1").getDataRegion().getLastRow(),1).getValues();
  var listaUno=rangoUno.map(function(r){return '<option>' + r[0] + '</option>';}).join('');
  /*este proceso es para seleccionar la lista que vamos a poner en el select del formulario*/
  
  
  
  /*este proceso es para seleccionar la lista que vamos a poner en el select del formulario*/
  var rangoDos= hoja.getRange(1,2, hoja.getRange("b1").getDataRegion().getLastRow(),1).getValues();
  var listaDos=rangoDos.map(function(r){return '<option>' + r[0] + '</option>';}).join('');
  /*este proceso es para seleccionar la lista que vamos a poner en el select del formulario*/
  
  
  /*este proceso es para seleccionar la lista que vamos a poner en el select del formulario*/
  var rangoTres= hoja.getRange(1,3, hoja.getRange("c1").getDataRegion().getLastRow(),1).getValues();
  var listaTres=rangoTres.map(function(r){return '<option>' + r[0] + '</option>';}).join('');
  /*este proceso es para seleccionar la lista que vamos a poner en el select del formulario*/

  var tmp= HtmlService.createTemplateFromFile("index.html");
  tmp.list1=listaUno;
  tmp.list2=listaDos;
  tmp.list3=listaDos;
  tmp.list4=listaUno;


  return tmp.evaluate();
  
 
}



// funcion pegar
function hacerClick(compilado){
  
  //llamar la hoja
  var ss=SpreadsheetApp.openById("1anGeMqQlSveaBCfEW5E_IRq_ZT6Q1gSyc4LOpdm_Cuk");  
  var ws= ss.getSheetByName('Sheet4');
  
  ws.appendRow([compilado.nombreUno,compilado.nombreDos,new Date()]); //aniade una columna /*importante ver como se llaman
  
 
  
}


function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename).getContent();

}



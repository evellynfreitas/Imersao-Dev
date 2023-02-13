function converterTemperaturas(){
  
    var escalaEntrada = document.getElementById("escalaEntrada");
    escalaEntrada = escalaEntrada.options[escalaEntrada.selectedIndex].value;
    
    var escalaResultado = document.getElementById("escalaResultado");
    escalaResultado = escalaResultado.options[escalaResultado.selectedIndex].value;
  
    if(escalaEntrada == "") alert("Escolha uma escala para a entrada");
    else if(escalaResultado == "") alert("Escolha uma escala para o resultado"); 
    else{
      var entrada = parseInt(document.getElementById("entrada").value);
      var resultado;
      
      switch(escalaEntrada){
      
        case "celsius":
          if(escalaResultado == "fahrenheit") resultado = (entrada * 9 / 5) + 32;
          else if(escalaResultado == "kelvin") resultado = 273.15 + entrada;
          else resultado = entrada;
          break;
  
        case "fahrenheit":
          if(escalaResultado == "celsius") resultado = (entrada - 32) * 5 / 9;
          else if(escalaResultado == "kelvin") resultado = ((entrada - 32) * 5 / 9) + 273.15;
          else resultado = entrada;
          break;
    
        case "kelvin":
          if(escalaResultado =="celsius") resultado = entrada - 273.15;
          else if(escalaResultado =="fahrenheit") resultado = ((entrada - 273.15) * 9 / 5) + 32;
          else resultado = entrada;
          break;
      }
      
      document.getElementById("resultado").value = resultado.toFixed(2);
    }
  }
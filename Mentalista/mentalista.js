var qtdTentativas=10;
var numeroSecreto = parseInt(Math.random()*101);


function analisarTentativa(){

  if(qtdTentativas>0){
    
    qtdTentativas--;
    var chute = document.getElementById("inputTentativa").value;
  
    if(chute == numeroSecreto)
      document.getElementById("dica").innerHTML = "Parabéns você acertou!";
    else{
      document.getElementById("tentativas").innerHTML = "Tentativas restantes: " + qtdTentativas;
    
    if(chute > numeroSecreto)
      document.getElementById("dica").innerHTML = "O número secreto é menor que " + chute;
    
    else if(chute < numeroSecreto)
      document.getElementById("dica").innerHTML = "O número secreto é maior que " + chute;
      
    }
  }
  
  if(qtdTentativas == 0 & chute!=numeroSecreto){
    document.getElementById("tentativas").innerHTML = "Acabaram as tentativas!";
    document.getElementById("dica").innerHTML = "O número secreto era " + numeroSecreto;
  
    }

}
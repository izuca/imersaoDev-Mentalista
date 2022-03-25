/*Criação de variaveis*/
let numero = parseInt(Math.random() * 11);
let tentativa = 5;

/*Função chamda ao clicar botão*/
function Chutar(){
  
  
  let chute = document.getElementById("valor").value; //Variável do usuário

  
  /*Estrutura condicional para comparar as variaveis numero e chute*/
  if (tentativa > 0) { 
    
    if(chute >= 0 && chute <= 10){
      
      if (chute > numero) {
        
        document.getElementById("resultado").innerHTML =  "Errado, tente um número menor";
        tentativa--;
        document.getElementById("tentativas").innerHTML =(tentativa+1) + " tentativas restantes";
        
      } else if (chute < numero) {
        
        document.getElementById("resultado").innerHTML ="Errado, tente um número maior";
        tentativa--;
        document.getElementById("tentativas").innerHTML = (tentativa+1) + " tentativas restantes";
      
      } else if (chute == numero) {
        document.getElementById("resultado").innerHTML = "Acertou! O número era:" + numero;
      }
    } else {
      document.getElementById("resultado").innerHTML = "Digite um número de 0 a 10";  
    }
  } else {
    
    document.getElementById("resultado").innerHTML = "Você perdeu, o número era: "+numero;
    document.getElementById("tentativas").innerHTML = tentativa + " tentativas restantes";
  }
}

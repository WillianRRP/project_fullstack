function sorteador(...numeros){
  console.log(numeros);

  const numeroGerado = Math.floor(Math.random() * numeros.length);

  console.log("Numero gerado foi: " + numeros[numeroGerado]);

}

sorteador(1,3,5,7,98)
  
  
// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
// Write password to the #password input


// Add event listener to generate button

var numCond;
var lowCond;
var capCond;
var charCond;
generateBtn.addEventListener("click", writePassword);

function writePassword(){
while(true){
  var length=window.prompt("Ingrese un numero entre 8 y 128");
    if(length>=8&&length<=128){
      console.log("numero valido");
      break;
    }
  };

while(true){
  numCond=window.confirm("Desea que su password contenga números?");
  lowCond=window.confirm("Desea que su password contenga letras minúsculas?");
  capCond=window.confirm("Desea que su password contenga letras mayúsculas?");
  charCond=window.confirm("Desea que su password contenga caracteres especiales?")

    //Numeros no, low no, cap no, random no
    if(numCond===true||lowCond===true||capCond===true||charCond===true){
      break;
    }
    else{
      window.alert("ERROR: Seleccione al menos un criterio");
    }
  };

  //Arrays con los posibles valores del password
  function randomNumber(){
    var numbers=["0","1","2","3","4","5","6","7","8","9"];
    var num=Math.round(Math.random() * 9);
    return(numbers[num]);
  };

  function randomLowLetter(){
    var lowLetters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];
    var lowLet=Math.round(Math.random() * 26);
    return(lowLetters[lowLet]);
  };

  function randomCapLetter(){
    var capLetters=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var capLet=Math.round(Math.random() * 26);
    return(capLetters[capLet]);
  };
  function randomCharacter(){
    var specialCharacters=["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<",">","=","?","@","[","]","^","_","{","}","|","~","¿","¡"];
    var char=Math.round(Math.random() * 30);
    return(specialCharacters[char]);
  };
  //______________________________________________________________________________________

  //logica para generar los passwords segun cada escenario
  var temp;
  var tempor;
  var password="";
  var si;

  //Numeros si, low si, cap si, random si
  if(numCond===true&&lowCond===true&&capCond===true&&charCond===true){
    functions=[
      randomNumber,
      randomLowLetter,
      randomCapLetter,
      randomCharacter
      ];
    for(var i=0; i<length; i++){
      temp=Math.round(Math.random() * 3);
      tempor=functions[temp]();
      password=password+tempor;
    }
    passwordText.textContent=password;
    console.log("Tu password es: " + password);
  }
  //Numeros si, low si, cap si, random no
  if(numCond===true&&lowCond===true&&capCond===true&&charCond===false){
    functions=[
      randomNumber,
      randomLowLetter,
      randomCapLetter
      ];
    for(var i=0; i<length; i++){
      temp=Math.round(Math.random() * 2);
      tempor=functions[temp]();
      password=password+tempor;
    }
    passwordText.textContent=password;
    console.log("Tu password es: " + password);
  }
  //Numeros si, low si, cap no, random no
  if(numCond===true&&lowCond===true&&capCond===false&&charCond===false){
    functions=[
      randomNumber,
      randomLowLetter
      ];
    for(var i=0; i<length; i++){
      temp=Math.round(Math.random() * 1);
      tempor=functions[temp]();
      password=password+tempor;
    }
    passwordText.textContent=password;
    console.log("Tu password es: " + password);
  }
  //Numeros si, low no, cap no, random no
  if(numCond===true&&lowCond===false&&capCond===false&&charCond===false){
    functions=[
      randomNumber
      ];
    for(var i=0; i<length; i++){
      temp=Math.round(Math.random() * 0);
      tempor=functions[temp]();
      password=password+tempor;
    }
    passwordText.textContent=password;
    console.log("Tu password es: " + password);
  }
  //Numeros no, low si, cap si, random si
  if(numCond===false&&lowCond===true&&capCond===true&&charCond===true){
    functions=[
      randomLowLetter,
      randomCapLetter,
      randomCharacter
      ];
    for(var i=0; i<length; i++){
      temp=Math.round(Math.random() * 2);
      tempor=functions[temp]();
      password=password+tempor;
    }
    passwordText.textContent=password;
    console.log("Tu password es: " + password);
  }
  //Numeros no, low no, cap si, random si
  if(numCond===false&&lowCond===false&&capCond===true&&charCond===true){
    functions=[
      randomCapLetter,
      randomCharacter
      ];
    for(var i=0; i<length; i++){
      temp=Math.round(Math.random() * 1);
      tempor=functions[temp]();
      password=password+tempor;
    }
    passwordText.textContent=password;
    console.log("Tu password es: " + password);
  }
  //Numeros no, low no, cap no, random si
  if(numCond===false&&lowCond===false&&capCond===false&&charCond===true){
    functions=[
      randomCharacter
      ];
    for(var i=0; i<length; i++){
      temp=Math.round(Math.random() * 0);
      tempor=functions[temp]();
      password=password+tempor;
    }
    passwordText.textContent=password;
    console.log("Tu password es: " + password);
  }
  //Numeros si, low no, cap si, random si
  if(numCond===true&&lowCond===false&&capCond===true&&charCond===true){
    functions=[
      randomNumber,
      randomCapLetter,
      randomCharacter
      ];
    for(var i=0; i<length; i++){
      temp=Math.round(Math.random() * 2);
      tempor=functions[temp]();
      password=password+tempor;
    }
    passwordText.textContent=password;
    console.log("Tu password es: " + password);
  }
  //Numeros si, low si, cap no, random si
  if(numCond===true&&lowCond===true&&capCond===false&&charCond===true){
    functions=[
      randomNumber,
      randomLowLetter,
      randomCharacter
      ];
    for(var i=0; i<length; i++){
      temp=Math.round(Math.random() * 2);
      tempor=functions[temp]();
      password=password+tempor;
    }
    passwordText.textContent=password;
    console.log("Tu password es: " + password);
  }
  //Numeros si, low no, cap si, random no
  if(numCond===true&&lowCond===false&&capCond===true&&charCond===false){
    functions=[
      randomNumber,
      randomCapLetter
      ];
    for(var i=0; i<length; i++){
      temp=Math.round(Math.random() * 1);
      tempor=functions[temp]();
      password=password+tempor;
    }
    passwordText.textContent=password;
    console.log("Tu password es: " + password);
  }
  //Numeros no, low si, cap no, random si
  if(numCond===false&&lowCond===true&&capCond===false&&charCond===true){
    functions=[
      randomLowLetter,
      randomCharacter
      ];
    for(var i=0; i<length; i++){
      temp=Math.round(Math.random() * 1);
      tempor=functions[temp]();
      password=password+tempor;
    }
    passwordText.textContent=password;
    console.log("Tu password es: " + password);
  }
  //Numeros si, low no, cap no, random si
  if(numCond===true&&lowCond===false&&capCond===false&&charCond===true){
    functions=[
      randomNumber,
      randomCharacter
      ];
    for(var i=0; i<length; i++){
      temp=Math.round(Math.random() * 1);
      tempor=functions[temp]();
      password=password+tempor;
    }
    passwordText.textContent=password;
    console.log("Tu password es: " + password);
  }
  //Numeros no, low no, cap si, random no
  if(numCond===false&&lowCond===false&&capCond===true&&charCond===false){
    functions=[
      randomCapLetter
      ];
    for(var i=0; i<length; i++){
      temp=Math.round(Math.random() * 0);
      tempor=functions[temp]();
      password=password+tempor;
    }
    passwordText.textContent=password;
    console.log("Tu password es: " + password);
  }
  //Numeros no, low si, cap no, random no
  if(numCond===false&&lowCond===true&&capCond===false&&charCond===false){
    functions=[
      randomLowLetter
      ];
    for(var i=0; i<length; i++){
      temp=Math.round(Math.random() * 0);
      tempor=functions[temp]();
      password=password+tempor;
    }
    passwordText.textContent=password;
    console.log("Tu password es: " + password);
  }
};
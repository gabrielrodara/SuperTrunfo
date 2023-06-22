var cartas = [
  {nome: "Bulbassauro",
   atributos: {
    Ataque: 7,
    Defesa: 8,
    Magia: 6
   }},
   {nome: "Darth Vader",
   atributos: {
    Ataque: 9,
    Defesa: 8,
    Magia: 2
   }},
   {nome: "Shiryu de dragão",
   atributos: {
    Ataque: 5,
    Defesa: 9,
    Magia: 10
   }}
]

var cartaMaquina
var cartaJogador

function sortearCarta() {
  var numeroCartaJogador = parseInt(Math.random()*3)
  var numeroCartaMaquina = parseInt(Math.random()*3)

  while (numeroCartaJogador == numeroCartaMaquina) {
    numeroCartaJogador = parseInt(Math.random()*3)
  }

  cartaMaquina = cartas[numeroCartaMaquina]
  cartaJogador = cartas[numeroCartaJogador]
  console.log(cartaJogador)
  
  document.getElementById("btnSortear").disabled = true
  document.getElementById("btnJogar").disabled = false
  exibirOpcoes()
}

function exibirOpcoes(){
  var opcoes = document.getElementById("opcoes")
  var opcoesTexto = ""
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto += "<input type= 'radio' name='atributo' value='" + atributo + "'>" + atributo
  }
  opcoes.innerHTML = opcoesTexto
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo")
  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value
    }
    
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado()
  var elementoResultado = document.getElementById("resultado")

  if (atributoSelecionado == null) {
    alert("Selecione o seu atributo!")
  } else if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
    elementoResultado.innerHTML = "Você venceu!"
  } else if (cartaMaquina.atributos[atributoSelecionado] > cartaJogador.atributos[atributoSelecionado]) {
    elementoResultado.innerHTML = "Você perdeu!"
  } else {
    elementoResultado.innerHTML = "Empatou!"
  }

}
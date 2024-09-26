// Obter a div com id root
const divRoot = document.getElementById("root")

// Imprimir a div no console
console.log(divRoot)

// criar variáveis e atribuir valores
const valor1 = 10;
const valor2 = 20;

// Criar variável (resultado) um elemento de título nivel 1
const resultado = document.createElement("h1");

// Atribuir o valor da soma dos dois valores (cons valor1 e valor2), para o texto título (h1)
resultado.textContent = (valor1 + valor2);

// Apresentar variável resultado em tela
divRoot.appendChild(resultado);

// Criar uma nova div
const divValores = document.createElement("div");

// Informar o id (valores) para a div
divValores.setAttribute("id", "valores");

// Inserir a div secundária (valores) dentro da div princial (root)
divRoot.appendChild(divValores);

// Criar um elemento título 2 para mostar e atribuir a variável
const h2Valor1 = document.createElement("h2");

// Atribuir o conteúdo da variável (valor1) na variável (h2Valor1) com elemento de titulo
h2Valor1.textContent = valor1;

// Adicionar o título 2 na div com a variável (h2Valor1)
divValores.appendChild(h2Valor1);
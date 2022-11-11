// 1. Crie uma classe Carro com as seguintes propriedades:
// ● Nome - qual a equipe do carro Ferrari, Mercedes, McLaren, etc;
// ● Potência - número de cavalos de potência do carro;
// ● Velocidade Máxima - qual a maior velocidade que o carro pode alcançar;
// ● Aceleração - o tempo em segundos que o carro leva para ir de 0 a 100 km/h
// 2. Adicione na classe carro um método que recebe como parâmetro uma distância em
// metros e calcula o tempo em segundos para percorrer essa distância. Use a
// seguinte fórmula para o cálculo: resultado = distância / (Velocidade Máxima /
// Aceleração). A função deve retornar esse resultado.
// 3. Crie alguns objetos da classe Carro e adicione-os em um array
// 4. Crie uma classe Corrida com as seguintes propriedades:
// ● Nome - nome do local da corrida;
// ● Tipo - uma corrida pode ser Fórmula 1, Stock Car, Rally, etc;
// ● Distância - o total em metros da corrida;
// ● Vencedor - qual a equipe que ganhou a corrida;
// 5. Adicione na classe Corrida um método que verifica qual foi o carro que completou a
// corrida em menor tempo, para isso utilize o método criado na classe carro. Salve o
// nome da equipe que fez o menor tempo na propriedade “Vencedor”.
// 6. Adicione na classe Corrida um método que exibe na tela quem é o vencedor da
// corrida.
// 7. Crie um objeto da classe Corrida e chame seus métodos.

let vencedor
let menor = 10000

class Carro {
    Nome
    Potencia
    VelocidadeMaxima
    Aceleracao

    calcularTempo(Distancia) {
        let resultado = Distancia / (this.VelocidadeMaxima / this.Aceleracao)
        return resultado
    }
}

class Corrida {
    Nome
    Tipo
    Distancia
    Vencedor

    escolherVencedor() {
        carros.forEach(x => {
            let resultado = x.calcularTempo(this.Distancia)
            if (resultado < menor) {
                vencedor = x.Nome
                menor = resultado
            }
        })
        return vencedor
    }
}

let carros = []

// CARROS

carros[0] = new Carro()
carros[0].Nome = "Ferrari"
carros[0].Potencia = 200
carros[0].VelocidadeMaxima = 300
carros[0].Aceleracao = 10

carros[1] = new Carro()
carros[1].Nome = "RedBull"
carros[1].Potencia = 300
carros[1].VelocidadeMaxima = 340
carros[1].Aceleracao = 12

carros[2] = new Carro()
carros[2].Nome = "Mercedes"
carros[2].Potencia = 250
carros[2].VelocidadeMaxima = 320
carros[2].Aceleracao = 8

carros[3] = new Carro()
carros[3].Nome = "McLaren"
carros[3].Potencia = 280
carros[3].VelocidadeMaxima = 350
carros[3].Aceleracao = 15

// CORRIDA

let corrida = new Corrida

corrida.Tipo = "F1"
corrida.Nome = "Monâco"
corrida.Distancia = parseInt(prompt("Qual a distância da corrida? "))
corrida.Vencedor = corrida.escolherVencedor()
console.log("A equipe vencedora foi " + corrida.Vencedor)
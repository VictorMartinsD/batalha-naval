# 🚢 M1 - Batalha Naval (Battleship)

## 🔗 Deploy do Projeto
Confira a aplicação em execução através do link abaixo:
👉 [Batalha Naval](https://victormartinsd.github.io/m1-batalha-naval-template-VictorMartinsD/)

## 📸 Preview
<p align="center">
  <img src="https://github.com/user-attachments/assets/9fa9b42a-b2a0-423f-b33d-c298a175f85e" alt="Screenshot da tela de testes do projeto Batalha Naval" width="600">
</p>

## ✨ Sobre o Projeto
Este projeto consiste na implementação da **lógica central** do clássico jogo de Batalha Naval (Battleship). Foi desenvolvido como um exercício prático focado na manipulação de **arrays bidimensionais (matrizes)** em JavaScript.

O objetivo principal é que as funções atendam corretamente aos critérios dos testes unitários fornecidos no arquivo `testes.js`, garantindo que a alocação de navios, o processamento de palpites e a verificação da condição de vitória funcionem perfeitamente.

## 🛠️ Funcionalidades e Foco Técnico
A lógica do jogo reside inteiramente no arquivo `script.js`, implementando as seguintes funções:

1.  **`allocateShips(shipPositions, initialBoard)`**: Posiciona os navios (`"S"`) no tabuleiro com base nas coordenadas fornecidas.
2.  **`checkGuesses(guesses, mountedBoard)`**: Processa os palpites do jogador. Se acertar um navio, a posição é marcada como acerto (`"X"`).
3.  **`checkWinCondition(guessedBoard)`**: Retorna `true` se todos os navios tiverem sido atingidos.

## 📁 Estrutura de Arquivos
* `index.html`: Interface com botões para rodar os testes.
* `style.css`: Estilização básica da página de testes.
* `testes/testes.js`: Contém a bateria completa de testes unitários.
* `script.js`: **Arquivo principal** onde as funções de lógica foram implementadas.

## ⚙️ Como Rodar Localmente
1. **Clone o Repositório:** `git clone https://github.com/VictorMartinsD/m1-batalha-naval-template-VictorMartinsD.git`
2. **Abra o `index.html`:** Abra o arquivo no seu navegador para executar os testes.

---

# 🚢 M1 - Battleship (English Version)

## 🔗 Project Deploy
Check out the application in action at the link below:
👉 [Battleship Game](https://victormartinsd.github.io/m1-batalha-naval-template-VictorMartinsD/)

## ✨ About the Project
This project consists of implementing the **core logic** of the classic Battleship game. It was developed as a practical exercise focused on manipulating **two-dimensional arrays (matrices)** in JavaScript.

The main goal is for the functions to correctly meet the criteria of the unit tests provided in the `testes.js` file, ensuring that ship allocation, guess processing, and victory condition verification work perfectly.

## 🛠️ Features and Technical Focus
The game logic resides entirely in the `script.js` file, implementing the following functions:

1.  **`allocateShips(shipPositions, initialBoard)`**: Positions ships (`"S"`) on the board based on the provided coordinates.
2.  **`checkGuesses(guesses, mountedBoard)`**: Processes player guesses. If a ship is hit, the position is marked as a hit (`"X"`).
3.  **`checkWinCondition(guessedBoard)`**: Returns `true` if all ships have been hit.

## 📁 File Structure
* `index.html`: Interface with buttons to run tests.
* `style.css`: Basic page styling.
* `testes/testes.js`: Contains the full battery of unit tests.
* `script.js`: **Main file** where game logic functions were implemented.

## ⚙️ How to Run Locally
1. **Clone the Repository:** `git clone https://github.com/VictorMartinsD/m1-batalha-naval-template-VictorMartinsD.git`
2. **Open `index.html`:** Simply open the file in your browser to run the tests.

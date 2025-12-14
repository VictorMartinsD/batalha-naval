# 🚢 M1 - Batalha Naval (Battleship)

## 📸 Preview

<p align="center">
  <img src="https://github.com/user-attachments/assets/9fa9b42a-b2a0-423f-b33d-c298a175f85e" alt="Screenshot da tela de testes do projeto Batalha Naval" width="600">
</p>

## ✨ Sobre o Projeto

Este projeto consiste na implementação da **lógica central** do clássico jogo de Batalha Naval (Battleship). Foi desenvolvido como um exercício prático focado na manipulação de **arrays bidimensionais (matrizes)** em JavaScript.

O objetivo principal é que as funções atendam corretamente aos critérios dos testes unitários fornecidos no arquivo `testes.js`, garantindo que a alocação de navios, o processamento de palpites e a verificação da condição de vitória funcionem perfeitamente.

## 🛠️ Funcionalidades e Foco Técnico

A lógica do jogo reside inteiramente no arquivo `script.js`, implementando as seguintes funções:

1.  **`allocateShips(shipPositions, initialBoard)`**
    * **Propósito:** Posiciona os navios (`"S"`) no tabuleiro (`initialBoard`) com base nas coordenadas fornecidas em `shipPositions`.

2.  **`checkGuesses(guesses, mountedBoard)`**
    * **Propósito:** Processa os palpites (`guesses`) do jogador. Se um palpite acertar um navio (`"S"`), a posição é marcada como acerto (`"X"`).

3.  **`checkWinCondition(guessedBoard)`**
    * **Propósito:** Determina se o jogador venceu. Retorna `true` se **todos** os navios tiverem sido atingidos (ou seja, se não houver mais nenhuma marcação `"S"` no tabuleiro).

## 📁 Estrutura de Arquivos

* `index.html`: Interface com os botões para rodar os testes e exibir os resultados (usa Bootstrap).
* `style.css`: Estilização básica da página de testes.
* `testes/testes.js`: Contém a bateria completa de testes unitários para validar as três funções principais.
* `script.js`: **Arquivo principal** onde as funções de lógica do jogo foram implementadas.

## ⚙️ Como Rodar Localmente

1.  **Clone o Repositório:**
    ```bash
    git clone [https://github.com/VictorMartinsD/m1-batalha-naval-template-VictorMartinsD.git](https://github.com/VictorMartinsD/m1-batalha-naval-template-VictorMartinsD.git)
    ```
2.  **Acesse a Pasta:**
    ```bash
    cd m1-batalha-naval-template-VictorMartinsD
    ```
3.  **Abra o `index.html`:** Simplesmente abra o arquivo `index.html` no seu navegador.
4.  **Execute os Testes:** Clique nos botões **"Rodar Testes"** de cada seção para verificar o status das suas implementações.

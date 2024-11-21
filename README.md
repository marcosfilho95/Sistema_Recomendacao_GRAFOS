# Sistema de Recomendação de Jogos de Tabuleiro 🎲

Este é um projeto que implementa um **sistema de recomendação** para jogos de tabuleiro, utilizando um **grafo interativo** para exibir os jogos recomendados com base em categorias compartilhadas. O sistema foi desenvolvido em **JavaScript** e usa a biblioteca **Cytoscape.js** para renderização do grafo.

---

## 📋 Funcionalidades

1. **Seleção de jogos**:
   - O usuário seleciona um jogo inicial a partir de uma lista.
2. **Geração de recomendações**:
   - O sistema recomenda até 3 jogos com base nas **categorias em comum** com o jogo selecionado.
3. **Visualização interativa**:
   - Um grafo é gerado, exibindo o jogo selecionado como o nó principal, com suas recomendações como nós conectados por arestas.
   - Cada aresta mostra o **peso da relação** (número de categorias em comum) e as categorias compartilhadas.
4. **Sub-recomendações**:
   - Para cada jogo recomendado, o sistema também sugere novos jogos relacionados.

---

## ⚙️ Tecnologias Utilizadas

- **HTML5**: Estrutura da página.
- **CSS3**: Estilização, com efeitos visuais para ícones e título.
- **JavaScript**: Lógica principal para manipulação de dados e geração de grafo.
- **Cytoscape.js**: Biblioteca para renderização e layout do grafo.

---

## 🚀 Como Usar

1. **Clonar o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/sistema-recomendacao-jogos.git
   cd sistema-recomendacao-jogos
   
2. **Abrir o arquivo `index.html`**:
   - O sistema não requer um servidor, basta abrir o arquivo no navegador.

3. **Selecionar um jogo**:
   - Escolha um jogo no menu suspenso.

4. **Gerar recomendações**:
   - Clique no botão **"Gerar Recomendações"**.
   - O grafo será exibido com os jogos recomendados.

---

## 📊 Funcionamento do Algoritmo

### **Base de dados**:
- O projeto utiliza uma lista fixa de jogos de tabuleiro com suas respectivas categorias.

### **Recomendações**:
- Quando um jogo é selecionado, o sistema busca outros jogos que compartilhem categorias.
- Cada jogo recomendado é classificado com base no número de categorias em comum (**peso da relação**).

### **Grafo**:
- **Nó verde**: Jogo selecionado.
- **Nós azuis**: Recomendações de 1º nível.
- **Nós vermelhos**: Sub-recomendações de 2º nível.
- **Texto no vértice**: Nome do jogo seguido por suas categorias.
- As arestas exibem as categorias compartilhadas e o peso da relação.

---

## 🎨 Visual do Projeto

### **Estrutura do Grafo**:
- **Nó verde**: Representa o jogo inicial escolhido.
- **Nós azuis**: Mostram os jogos recomendados diretamente relacionados ao jogo selecionado.
- **Nós vermelhos**: Indicam os jogos recomendados de nível secundário.
- **Texto no vértice**: Contém o nome do jogo e suas categorias.

### **Interface**:
- Fundo com tema inspirado em jogos de tabuleiro.
- Menu suspenso para seleção do jogo inicial.
- Botão para gerar recomendações.
- Gráfico centralizado e interativo para visualização das conexões.

---

## 📚 Exemplos

### **Exemplo 1: Selecionando *Catan***

- **Nó principal**: *Catan (Strategy, Family, Economic)*.
- **Recomendados**:
  - *Carcassonne (Strategy, Family, Tile Placement)*.
  - *Pandemic (Cooperative, Strategy, Family)*.

---

### **Exemplo 2: Selecionando *Pandemic***

- **Nó principal**: *Pandemic (Cooperative, Strategy, Family)*.
- **Recomendados**:
  - *Catan (Strategy, Family, Economic)*.
  - *Spirit Island (Cooperative, Strategy, Fantasy)*.

### **Exemplo 3: Selecionando *Terraforming Mars***

- **Nó principal**: *Terraforming Mars (Strategy, Economic, Science Fiction)*.
- **Recomendados**:
  - *Brass: Birmingham (Strategy, Economic, Industrial)*.
  - *Eclipse (Sci-Fi, Strategy, Economic)*.

---

## 👨‍💻 Desenvolvido Por

Este projeto foi desenvolvido por [marcosfilho95]. Inspirado no universo dos jogos de tabuleiro nos conceitos de GRAFOS aprendidos na UNIFOR.


const games = [
  {"name": "Gloomhaven", "categories": ["Adventure", "Cooperative", "Fantasy"]},
  {"name": "Catan", "categories": ["Strategy", "Family", "Economic"]},
  {"name": "Ticket to Ride", "categories": ["Strategy", "Family"]},
  {"name": "Pandemic", "categories": ["Cooperative", "Strategy", "Family"]},
  {"name": "7 Wonders", "categories": ["Strategy", "Card Game"]},
  {"name": "Terraforming Mars", "categories": ["Strategy", "Economic", "Science Fiction"]},
  {"name": "Wingspan", "categories": ["Strategy", "Nature", "Family"]},
  {"name": "Brass: Birmingham", "categories": ["Strategy", "Economic", "Industrial"]},
  {"name": "Ark Nova", "categories": ["Strategy", "Nature", "Economic"]},
  {"name": "Azul", "categories": ["Family", "Abstract", "Tile Placement"]},
  {"name": "Carcassonne", "categories": ["Strategy", "Tile Placement", "Family"]},
  {"name": "Dixit", "categories": ["Family", "Storytelling", "Party"]},
  {"name": "Scythe", "categories": ["Strategy", "Economic", "Area Control"]},
  {"name": "Root", "categories": ["Strategy", "Area Control", "Asymmetric"]},
  {"name": "Dominion", "categories": ["Card Game", "Deck Building"]},
  {"name": "Everdell", "categories": ["Strategy", "Fantasy", "Card Game"]},
  {"name": "Spirit Island", "categories": ["Cooperative", "Strategy", "Fantasy"]},
  {"name": "Clank!", "categories": ["Adventure", "Deck Building", "Fantasy"]},
  {"name": "The Crew", "categories": ["Cooperative", "Card Game", "Space"]},
  {"name": "Tapestry", "categories": ["Strategy", "Civilization", "Economic"]},
  {"name": "Patchwork", "categories": ["Abstract", "Family", "Tile Placement"]},
  {"name": "Agricola", "categories": ["Strategy", "Farming", "Economic"]},
  {"name": "Through the Ages", "categories": ["Strategy", "Civilization", "Economic"]},
  {"name": "Great Western Trail", "categories": ["Strategy", "Economic", "Western"]},
  {"name": "Twilight Struggle", "categories": ["Strategy", "War", "Political"]},
  {"name": "Puerto Rico", "categories": ["Strategy", "Economic", "Colonial"]},
  {"name": "Blood Rage", "categories": ["Strategy", "Fantasy", "Area Control"]},
  {"name": "Viticulture", "categories": ["Strategy", "Economic", "Farming"]},
  {"name": "Santorini", "categories": ["Abstract", "Strategy", "Family"]},
  {"name": "Kingdomino", "categories": ["Family", "Tile Placement", "Strategy"]},
  {"name": "Splendor", "categories": ["Strategy", "Card Game", "Economic"]},
  {"name": "Love Letter", "categories": ["Card Game", "Deduction", "Party"]},
  {"name": "Decrypto", "categories": ["Party", "Deduction", "Communication"]},
  {"name": "Codenames", "categories": ["Party", "Word Game", "Deduction"]},
  {"name": "Hive", "categories": ["Abstract", "Strategy"]},
  {"name": "Betrayal at House on the Hill", "categories": ["Horror", "Adventure", "Cooperative"]},
  {"name": "Sheriff of Nottingham", "categories": ["Bluffing", "Party", "Strategy"]},
  {"name": "Risk", "categories": ["War", "Strategy", "Classic"]},
  {"name": "Monopoly", "categories": ["Economic", "Family", "Classic"]},
  {"name": "Clue", "categories": ["Deduction", "Family", "Classic"]},
  {"name": "Chess", "categories": ["Abstract", "Classic", "Strategy"]},
  {"name": "Checkers", "categories": ["Abstract", "Classic"]},
  {"name": "Go", "categories": ["Abstract", "Strategy", "Classic"]},
  {"name": "Backgammon", "categories": ["Classic", "Abstract", "Strategy"]},
  {"name": "Pictionary", "categories": ["Party", "Drawing", "Family"]},
  {"name": "Tikal", "categories": ["Strategy", "Exploration", "Economic"]},
  {"name": "Camel Up", "categories": ["Family", "Betting", "Racing"]},
  {"name": "Codebreaker", "categories": ["Deduction", "Classic"]},
  {"name": "Small World", "categories": ["Fantasy", "Strategy", "Area Control"]},
  {"name": "The Resistance", "categories": ["Bluffing", "Deduction", "Party"]},
  {"name": "Nemesis", "categories": ["Horror", "Sci-Fi", "Adventure"]},
  {"name": "Everdell", "categories": ["Strategy", "Fantasy", "Card Game"]},
  {"name": "Concordia", "categories": ["Strategy", "Economic", "Resource Management"]},
  {"name": "Pax Pamir", "categories": ["Strategy", "Political", "Economic"]},
  {"name": "War of the Ring", "categories": ["Fantasy", "War", "Strategy"]},
  {"name": "Arkham Horror", "categories": ["Horror", "Cooperative", "Fantasy"]},
  {"name": "Descent", "categories": ["Fantasy", "Adventure", "Dungeon Crawler"]},
  {"name": "Eclipse", "categories": ["Sci-Fi", "Strategy", "Economic"]},
  {"name": "Galaxy Trucker", "categories": ["Sci-Fi", "Strategy", "Adventure"]},
  {"name": "Star Realms", "categories": ["Deck Building", "Sci-Fi", "Card Game"]},
  {"name": "Castles of Burgundy", "categories": ["Strategy", "Economic", "Tile Placement"]},
  {"name": "Lords of Waterdeep", "categories": ["Strategy", "Fantasy", "Worker Placement"]}
];

// Função para popular o seletor de jogos
function populateGameSelect() {
  const gameSelect = document.getElementById('gameSelect');
  games.forEach(game => {
    const option = document.createElement('option');
    option.value = game.name;
    option.textContent = game.name;
    gameSelect.appendChild(option);
  });
}

/* Função para calcular a recomendação com base nas categorias */
function getRecommendations(selectedGame) {
  const game = games.find(game => game.name === selectedGame);
  const recommendedGames = [];

  games.forEach(otherGame => {
    if (otherGame.name !== selectedGame) {
      const commonCategories = game.categories.filter(category => 
        otherGame.categories.includes(category)
      );
      if (commonCategories.length > 0) {
        recommendedGames.push({ 
          game: otherGame.name, 
          commonCategories: commonCategories, 
          weight: commonCategories.length
        });
      }
    }
  });

  // Ordena as recomendações por peso (número de categorias em comum)
  return recommendedGames.sort((a, b) => b.weight - a.weight).slice(0, 3);
}

/* Função para gerar a árvore de recomendações */
function generateGraph(selectedGame) {
  const recommendations = getRecommendations(selectedGame);
  const nodes = [{
    data: {
      id: selectedGame,
      label: `${selectedGame} (${games.find(game => game.name === selectedGame).categories.join(', ')})`, // Nome do jogo + categorias
      color: 'green'
    }
  }];
  const edges = [];

  // Adiciona nós e arestas para o primeiro nível de recomendações
  recommendations.forEach((recommendation) => {
    const commonCategoriesText = recommendation.commonCategories.join(', ');
    const weightText = `Peso: ${recommendation.weight} - Categorias: ${commonCategoriesText}`;
    nodes.push({
      data: {
        id: recommendation.game,
        label: `${recommendation.game} (${recommendation.commonCategories.join(', ')})`, // Nome do jogo + categorias
        color: 'blue'
      }
    });
    edges.push({
      data: {
        source: selectedGame,
        target: recommendation.game,
        label: weightText
      }
    });

    // Para cada recomendação, gera novas recomendações a partir do nó
    const subRecommendations = getRecommendations(recommendation.game);
    subRecommendations.forEach((subRecommendation) => {
      nodes.push({
        data: {
          id: subRecommendation.game,
          label: `${subRecommendation.game} (${subRecommendation.commonCategories.join(', ')})`, // Nome do jogo + categorias
          color: 'red' // Nós filhos serão vermelhos
        }
      });
      edges.push({
        data: {
          source: recommendation.game,
          target: subRecommendation.game,
          label: `Peso: ${subRecommendation.weight} - Categorias: ${subRecommendation.commonCategories.join(', ')}`
        }
      });
    });
  });

  // Configuração do Cytoscape.js
  const cy = cytoscape({
    container: document.getElementById('cy'),
    elements: [...nodes, ...edges],
    style: [
      {
        selector: 'node',
        style: {
          'background-color': 'data(color)',
          'label': 'data(label)',
          'width': 20,
          'height': 20,
          'font-size': 10,
          'text-valign': 'center',
          'text-halign': 'center',
          'color': '#000', // Cor preta para o texto
          'font-weight': 'bold'
        }
      },
      {
        selector: 'edge',
        style: {
          'width': 2,
          'line-color': '#ccc',
          'label': 'data(label)',
          'font-size': 8
        }
      }
    ],
    layout: {
      name: 'circle',
      padding: 10
    }
  });
}

// Evento para gerar recomendações ao clicar no botão
document.getElementById('generateRecommendation').addEventListener('click', () => {
  const selectedGame = document.getElementById('gameSelect').value;
  if (selectedGame) {
    generateGraph(selectedGame);
  } else {
    alert('Por favor, selecione um jogo.');
  }
});

// Preenche o seletor de jogos ao carregar a página
window.onload = function() {
  populateGameSelect();
};

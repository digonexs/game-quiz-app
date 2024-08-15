# Quiz Interativo

Este é um projeto de Quiz Interativo desenvolvido com HTML, CSS e JavaScript. O quiz é composto por perguntas de múltipla escolha, com um sistema de temporizador para cada pergunta e um painel de pontuação ao final.

## Funcionalidades

- **Perguntas de Múltipla Escolha**: O quiz apresenta perguntas de múltipla escolha armazenadas em um array de objetos.
- **Temporizador**: Cada pergunta possui um temporizador de 10 segundos. Se o tempo acabar antes de selecionar uma resposta, o quiz automaticamente revela a resposta correta.
- **Painel de Pontuação**: Ao final do quiz, é exibido um painel com o total de respostas corretas e o número total de perguntas.
- **Responsividade**: O design do quiz é totalmente responsivo, adaptando-se perfeitamente a diferentes tamanhos de tela.

## Estrutura do Projeto

O projeto é composto pelos seguintes arquivos:

- `index.html`: Estrutura básica do quiz.
- `styles.css`: Estilos para o design e responsividade do quiz.
- `script.js`: Lógica para o funcionamento do quiz, incluindo navegação, temporizador e cálculo da pontuação.

## Como Executar o Projeto

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/digonexs/game-quiz-app
   ```

2. **Navegue até o diretório do projeto**:

   ```bash
   cd game-quiz-app
   ```

3. **Abra o arquivo `index.html` em seu navegador**:

   - No terminal, você pode usar:

   ```bash
   open index.html
   ```

   - Ou simplesmente clique duas vezes no arquivo `index.html` na pasta do projeto.

## Personalização

- Para adicionar mais perguntas, edite o array `questions` no arquivo `script.js`. Cada pergunta deve ser um objeto com as propriedades `question`, `options` (um array com as opções), e `answer` (o índice da resposta correta).
- O tempo para responder a cada pergunta pode ser ajustado modificando a variável `timeLeft` na função `resetTimer` dentro de `script.js`.

## Contribuições

Contribuições são bem-vindas! Se você deseja melhorar este projeto ou adicionar novas funcionalidades, sinta-se à vontade para abrir um pull request.

## Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

---

Feito com ❤️ por [Rodrigo](https://www.linkedin.com/in/rodrigocavalcantedebarros/).

# 🧩 Pokédex - Projeto em ReactJS com Vite

## 📌 Descrição

Este projeto é uma Pokédex desenvolvida com **ReactJS** e iniciada com **Vite**. A aplicação consome dados da [PokeAPI](https://pokeapi.co/) para exibir uma lista de Pokémons com informações detalhadas. É uma solução proposta como desafio para praticar conceitos de React avançado, como roteamento, componentização e integração com API externa.

## 🚀 Funcionalidades

- Exibição de 10 Pokémons por vez com botão para carregar mais;
- Página de detalhes de cada Pokémon contendo:
  - Imagem oficial;
  - Nome;
  - Lista de movimentos;
  - Habilidades com nome e descrição;
  - Tipos do Pokémon;
- Navegação por rotas;
- Consumo dinâmico da API pública **PokeAPI**;
- Interface responsiva.

## 🖼️ Screenshots

### 📄 Página Inicial (Home)
![Home](./screenshots/home.png)

### 🔍 Página de Detalhes do Pokémon
![Detalhes](./screenshots/detalhes.png)

> As imagens acima devem ser adicionadas manualmente à pasta `screenshots` no seu projeto. Certifique-se de capturar as telas e salvar os arquivos como `home.png` e `detalhes.png`.

## 🛠️ Tecnologias e Ferramentas Utilizadas

- **ReactJS**: biblioteca principal para construção da interface.
- **Vite**: por sua velocidade, simplicidade na configuração e performance durante o desenvolvimento.
- **React Router DOM**: para o controle de rotas (Home e Detalhes).
- **Axios**: utilizado para realizar as requisições HTTP à API.
- **CSS Modules**: para estilização dos componentes com escopo local.
- **PokeAPI**: API pública e gratuita utilizada para obtenção dos dados dos Pokémons.

Essas ferramentas foram escolhidas por oferecerem uma base moderna, escalável e de fácil manutenção, além de serem amplamente utilizadas em projetos reais de front-end.

## 🧠 Decisões de Planejamento e Justificativas

- **Vite em vez de CRA**: optou-se por usar o Vite para aproveitar sua velocidade superior no desenvolvimento e build.
- **Componentização clara**: separação entre componentes visuais e páginas (ex: `PokemonCard`, `PokemonDetails`, `Home`, etc.) para melhorar a legibilidade e reutilização.
- **Consumo eficiente da API**: a aplicação faz requisições com base em paginação e evita chamadas desnecessárias para não exceder o limite da API.
- **Uso de rotas dinâmicas**: adotado o React Router DOM para permitir acesso direto a páginas de detalhes via URL (`/pokemon/:name`).
- **Estilização com CSS Modules**: para evitar conflitos de escopo e garantir estilo modularizado.

## 🖥️ Como rodar o projeto localmente

### ✅ Pré-requisitos

- Ter o **Node.js** instalado (versão 18 ou superior recomendada)
- Ter o **npm** ou **yarn**

### ▶️ Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/WellissonLima/quest-react-avancado.git

# 2. Acesse o diretório do projeto
cd quest-react-avancado

# 3. Instale as dependências
npm install

# 4. Execute o projeto
npm run dev

# Acesse no navegador: http://localhost:5173
```

---

## 🤝 Contato

Desenvolvido por **Wellisson Lima**  
🔗 [LinkedIn](https://www.linkedin.com/in/wellissonboanergesbarroslima/)  
📫 [wellissonboanerges@gmail.com](mailto:wellissonboanerges@gmail.com)

---
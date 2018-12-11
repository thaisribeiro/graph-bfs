# graph-bfs - Breadth First Search Digraph

Graph BFS é um algoritmo em node.js que realiza a pesquisa por largura em grafos direcionados e imprime a ordem dos nós(vértices) que foram visitados.

Para saber sobre [Teoria dos grafos](https://pt.wikipedia.org/wiki/Teoria_dos_grafos) 
Como funciona o algoritmo de [BFS - Breadth First Search](https://hackernoon.com/breadth-first-search-in-javascript-e655cd824fa4)

Sinta-se a vontade para baixar ou clonar o código fonte:
https://github.com/thaisribeiro/graph-bfs

# Install

```bash
git clone https://github.com/thaisribeiro/graph-bfs.git
npm install ou  npm i
npm run dev
```
# Usage
### Routes
BFS por ordem de visita em grafo.js iniciando do nó 0
```cURL
curl -X GET \
  http://localhost:8081/graph \
  -H 'cache-control: no-cache' \
  -H 'postman-token: ae328bbf-a350-75fb-56a3-3a94c18a0e18'
```
BFS por ordem de visita em grafo.js informando de qual nó deve iniciar
```cURL
curl -X GET \
  http://localhost:8081/graph/{{id}} \
  -H 'cache-control: no-cache' \
  -H 'postman-token: 0689581c-5398-29eb-cc61-13861ca8984d'
```

## Scripts
Execução de testes de um arquivo file: 
```bash
npm run test:report --py-api:file=FILENAME
```
ou
```bash
npm run tests:report 
```

Para criarmos uma API REST, iremos utilizar 4 verbos do protocolo HTTP para acessar nossas funcionalidades do CRUD do mongoose. Quais são eles?

GET - busca entidaees - find
POST - cria uma entidade - insert/save
PUT - altera entidades - update
DELETE - deleta entidades - remove

Como vamos utilizar um verbo para cada ação, podemos ter uma mesmo rota para mais de uma verbo, vamos ver nesse exemplo:

> GET /api/beers

Irá me listar todas as cervejas

> POST /api/beers

Irá criar uma cerveja nova


import express from 'express';

const app = express();

app.use(express.json());

// rota: endereço completo da requisição
// recurso: qual entidade estamos accesando do sistema

// metodos http:
// get: buscar uma o mais informações do back-end
// post: criar novas informações do back-end
// put: atualizar informações do back-end
// delete: remover informações do back-end

// Request Param: parâmetros que vem na propia rota que identificam um recurso 
// Query Param: Parametros que vem na propria rota geralmente opcionais para filtros, paginação
// Request Body: Parametros para criação/atualização de informações

const users = [
  'Diego',
  'Cleiton',
  'Robson',
  'Daniel'
];

app.get('/users', (request, response) => {
  console.log('Listagem de usuarios');

  return response.json(users);
});

app.get('/users/:id', (request, response) => {
  const id = Number(request.params.id);
  const user = users[id];
  return response.json(user);
});

app.post('/users', (request, response) => {
  const user = {
    name: 'Diego',
    email: 'diego@rocketseat.com.br'
  };
  return response.json(user);
})

app.listen(3333);
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

// Defina as rotas do seu servidor
app.get('/', (req, res) => {
  res.send('Olá, mundo!');
});

// Rota para servir o arquivo grafico.html
app.get('/grafico', (req, res) => {
  res.sendFile(path.join(__dirname, 'grafico.html'));
});
// Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

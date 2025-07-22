const express = require('express');
const app = express();
app.use(express.json());

app.post('/webhook', (req, res) => {
  console.log('Webhook recebido:', req.body);
  res.status(200).send('Recebido com sucesso!');
});

app.get('/', (req, res) => {
  res.send('Servidor Webhook RGS ativo.');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
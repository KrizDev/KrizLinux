const express = require('express');
const app = express();

// Pobierz port z process.env.PORT lub domyślnie 3000 (lokalnie)
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/save-ip', (req, res) => {
  const ip = req.body.ip;
  console.log('Otrzymane IP:', ip);

  res.send({ status: 'OK' });
});

app.listen(port, () => {
  console.log(`Serwer działa na porcie ${port}`);
});

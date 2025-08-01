const express = require('express');
const cors = require('cors');
const app = express();

const port = process.env.PORT || 3000;

app.use(cors());        // <- dodaj obsługę CORS
app.use(express.json());

app.post('/save-ip', (req, res) => {
  const ip = req.body.ip;
  console.log('Otrzymane IP:', ip);

  res.send({ status: 'OK' });
});

app.listen(port, () => {
  console.log(`Serwer działa na porcie ${port}`);
});

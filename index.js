const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log('\n' + '='.repeat(70));
  console.log('📥 INCOMING REQUEST');
  console.log('='.repeat(70));
  console.log(`Method: ${req.method}`);
  console.log(`URL: ${req.protocol}://${req.get('host')}${req.originalUrl}`);
  console.log(`Headers:`, req.headers);

  if (req.body && Object.keys(req.body).length > 0) {
    console.log(`Body:`, req.body);
  }

  console.log('='.repeat(70));
  next();
});

app.all('*', (req, res) => {
  res.status(200).send('OK');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

import express from 'express';

const app = express();

app.listen(5000, () =>
  console.log(`Serving on Port ${5000}`),
);

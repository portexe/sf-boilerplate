import express from 'express';

const app = express();

app.listen(5001, () =>
  console.log(`Serving on Port ${5001}`),
);

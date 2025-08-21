require('dotenv').config()
import "reflect-metadata"
import express from 'express';
import { AppDataSource } from '@/data-source';
import router from "@/routes";
import { handleError } from "@middlewares/handleError";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', router);
app.use(handleError)

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err);
  });


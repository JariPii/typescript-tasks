import 'reflect-metadata';

import express, { Express, Request, Response } from 'express';

import { addRoutes } from './src/config/routes.config';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

const app: Express = express();
dotenv.config();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.use(express.json());

addRoutes(app);

async function bootstrap() {
  if (!process.env.DATABASE_URL) {
    throw new Error('Cannot read environment variables');
    process.exit(1);
  }
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      dbName: process.env.DATABASE_NAME,
    });
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`[server]: Server is running at http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

bootstrap();

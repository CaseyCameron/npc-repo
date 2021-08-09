import cors from 'cors';
import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';
import npcController from './controllers/npcs.js';

//import './models/index.js';

const app = express();
app.use(cors());

app.use(express.json());

app.use('/api/v1/npcs', npcController);
app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;

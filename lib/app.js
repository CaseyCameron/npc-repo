import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';
import npcController from './controllers/npc.js';

import './models/index.js';

const app = express();

app.use(express.json());

app.use('/api/v1/npc', npcController);
app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;

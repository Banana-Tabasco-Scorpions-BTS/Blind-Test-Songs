import express, { Express } from 'express';
import cors from 'cors';

import exampleEndpoint from './routes/example';

const setupServer : Function = () => {
    const app: Express = express();

    app.use(cors())
    app.use(express.json());
    app.use('/example', exampleEndpoint);

    return app;
}

export default setupServer;
import express, { Express } from 'express';
import cors from 'cors';

import exampleEndpoint from './routes/example';
import guess from './routes/guess';
import play from './routes/play';

const setupServer : Function = () => {
    const app: Express = express();

    app.use(cors())
    app.use(express.json());
    app.use('/example', exampleEndpoint);
    app.use('/guess', guess)
    app.use('/play', play)

    return app;
}

export default setupServer;
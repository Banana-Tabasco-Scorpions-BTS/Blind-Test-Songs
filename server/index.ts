import { Express } from 'express';
import setupServer from './server';
// import 'dotenv/config';
import * as dotenv from 'dotenv';
dotenv.config({path: '../.env'});



const PORT = process.env.PORT || 3000;

let server : Express = setupServer();

(async () => {
    try {
        server.listen(PORT, () => {
            console.log(`[server]: Server is running at http://localhost:${PORT}`);
        });
    }
    catch (err) {
        console.error(`server failed to start: ${err}`)
    }
})();


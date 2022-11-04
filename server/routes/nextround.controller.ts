import express, { Request, Response } from 'express';

const nextRoundModel = require('./guess.model');
const globalModel = require('./global.model');

const router = express.Router();

const { getCurrentGame } = globalModel

const { getNextRoundTrackURL } = nextRoundModel

router.get('/', async (req: Request, res: Response) => {


    return res.send("oopsies")

});

export default router;
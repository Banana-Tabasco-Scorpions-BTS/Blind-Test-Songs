import express, { Request, Response } from 'express';

const globalModel = require('./global.model');
const resultsModel = require('./result.model');

const {
    getCurrentGame
} = globalModel

const {
    getResult,
    getPreviousResult
} = resultsModel

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {

    const clientGameID = req.body.gameID;
    const currentGame = await getCurrentGame(clientGameID)
    const gameResult = await getResult(clientGameID)
    console.log(gameResult)

    const previousResults = await getPreviousResult(currentGame.user_id, gameResult.id)
    console.log(previousResults)

    return res
    .status(200)
    .send({
        "gameID": clientGameID,
        "score": gameResult.score,
        "previousScore": previousResults.score
    });
});

export default router;
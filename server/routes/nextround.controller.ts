import express, { Request, Response } from 'express';

const nextRoundModel = require('./guess.model');
const globalModel = require('./global.model');

const router = express.Router();

const { getCurrentGame, getTrackWithGameID } = globalModel

const { getNextRoundTrackURL } = nextRoundModel

router.get('/', async (req: Request, res: Response) => {
    const clientGameID = req.body.gameID;

    const currentGame = await getCurrentGame(clientGameID)

    if (currentGame.round < currentGame["max_round"]) {
        const nextTrack = await getTrackWithGameID(clientGameID)
        const nextTrackURL = nextTrack.url
    console.log(nextTrack)
        return res
        .status(200)
        .send({ "gameID": clientGameID, "songURL": nextTrackURL })
    } else {
        return res
        .status(200)
        .send({ "gameID": clientGameID, "gameEnd": true})
    }

});

export default router;
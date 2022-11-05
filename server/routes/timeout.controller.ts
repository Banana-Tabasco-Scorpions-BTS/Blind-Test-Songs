import express, { Request, Response } from 'express';

const globalModel = require('./global.model');

const router = express.Router();

const { 
    getTrackWithGameID,
    getCurrentGame,
    incrementRound
} = globalModel

router.post('/', async (req: Request, res: Response) => {

    const clientGameID = req.body.gameID;
    const currentTrack = await getTrackWithGameID(clientGameID)

    const currentGame = await getCurrentGame(clientGameID);

    if (currentGame.round < currentGame["max_round"]) {
        await incrementRound(currentGame.id, currentGame.round);
    }

    return res.send({
        "gameID": clientGameID,
        "roundSuccess": false,
        "result": {
            "song": currentTrack.song,
            "artist": currentTrack.artist,
            "album": currentTrack.album
        }
    })
})

export default router;
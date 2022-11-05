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
    if (req.body.gameID == undefined) {
        return res.status(400).send({
            error: "Expected a request body containing: { gameID: '<your_game_id_num>' }"
        })
    };

    const currentGame = await getCurrentGame(clientGameID);
    if (!currentGame) {
        return res.status(404).send({ error: 'Game not found. We searched real hard... promise.' })
    };

    const currentTrack = await getTrackWithGameID(clientGameID)

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
import express, { Request, Response } from 'express';

const newGame = require('./newgame.model');
const { 
    sanitiseUserID,
    getUserID, 
    getRandomTracksID,
    createGameInstance,
    getTrackURL,
    insertResultRow
    } = newGame

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    // replace reqName with username input from request
    const reqName = 'rEi'
    const userID = await getUserID(sanitiseUserID(reqName))
    
    const timestamp = Date.now();
    const randomTrackID = await getRandomTracksID(5);
    const randomTrackIDJSON = JSON.stringify(randomTrackID);

    const gameID = String(await createGameInstance(userID, randomTrackIDJSON, 1, 5, timestamp));
    const songInitialRound = await getTrackURL(randomTrackID[0]);

    await insertResultRow(gameID, userID, 0, 5)
    
    res.status(200).send({ gameID: gameID, songURL: songInitialRound });
})

export default router;
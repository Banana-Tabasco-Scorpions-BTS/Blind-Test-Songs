import express, { Request, Response } from 'express';

const newGame = require('./newgame.model');
const { 
    sanitiseUserID,
    getUserID, 
    getTracksID, 
    // getGameID,
    createGameInstance } = newGame

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    // When user submits their username, fetch username from database
    const userID = await getUserID(sanitiseUserID('rEi'))
    const timestamp = Date.now();

    const randomTrackID = await getTracksID(5);

    
    // const gameID = await createGameInstance(userID, 1, 5, timestamp)

    // const test = await getGameID(timestamp)

    // console.log(gameID)
    // console.log(test)
    
    // res.status(200).send(String(gameID));
    res.send('hello')
})

export default router;
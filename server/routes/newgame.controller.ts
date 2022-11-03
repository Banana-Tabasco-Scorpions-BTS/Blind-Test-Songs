import express, { Request, Response } from 'express';

const newGame = require('./newgame.model');

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    // When user clicks on "start game", it should make a knex request for 5 random items from 'playlist' table.
    
    const tracks = await newGame.getTracks(5)
    
    console.log(tracks)


    res.send(tracks);
})

export default router;
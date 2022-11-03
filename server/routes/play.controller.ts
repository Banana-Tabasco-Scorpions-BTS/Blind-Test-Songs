import express, { Request, Response } from 'express';

const playModel = require('./play.model');

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    // When user clicks on "start game", it should make a knex request for 5 random items from 'playlist' table.
    
    const tracks = await playModel.queryTracks(5)
    
    console.log(tracks)

    // Those 5 random items from 'playlist' 

    res.send(tracks);
})

export default router;
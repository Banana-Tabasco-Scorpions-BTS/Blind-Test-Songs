import express, { Request, Response } from 'express';
import { Knex } from 'knex';
import * as knex from '../db/knex';

const router = express.Router();

interface Track {
    id: number;
    song: string;
    artist: string;
    album: string;
    url: string;
  }

router.get('/', (req: Request, res: Response) => {
    // When user clicks on "start game", it should make a knex request for 5 random items from 'playlist' table.
    
    const queryTracks = (limit = 10) => {
        return knex.select()
            .from<Track>('playlist_data')
            .limit(limit)

    }
    
    console.log(queryTracks(10))



    // Those 5 random items from 'playlist' 

    res.send('Hello from the Server!');
})

export default router;
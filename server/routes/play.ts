import express, { Request, Response } from 'express';
import { Knex } from 'knex';
import db from '../db/knex';
// This is the instance of a connection to the database.
// let db : Knex = knex();
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
        return db.select()
            .from<Track>('playlist_data')
            .limit(limit)

    }
    
    console.log(queryTracks(10))



    // Those 5 random items from 'playlist' 

    res.send('Hello from the Server!');
})

export default router;
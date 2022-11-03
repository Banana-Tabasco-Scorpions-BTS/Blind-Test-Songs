// import { query } from 'express';
// import knex, { Knex } from 'knex';
import db from '../db/knex';

interface Track {
    id: number;
    song: string;
    artist: string;
    album: string;
    url: string;
  }

module.exports = {
    queryTracks(limit = 10) {
        return db
            .select()
            .from<Track>('playlist_data')
            .orderByRaw('Random()')
            .limit(limit)
    },
}

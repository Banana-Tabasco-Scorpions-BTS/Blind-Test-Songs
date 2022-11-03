import db from '../db/knex';

interface Track {
    id: number;
    song: string;
    artist: string;
    album: string;
    url: string;
  }

module.exports = {
    getTracks(limit = 5) {
        return db
            .select()
            .from<Track>('playlist_data')
            .orderByRaw('Random()')
            .limit(limit)
    },

    getGameID() {
        return 
    }
}
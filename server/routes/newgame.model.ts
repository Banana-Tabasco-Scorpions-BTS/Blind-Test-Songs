import db from '../db/knex';

interface Track {
    id: number;
    song: string;
    artist: string;
    album: string;
    url: string;
  }

module.exports = {

    sanitiseUserID(userID : string) {
        const lowercaseID = userID.toLocaleLowerCase();
        const firstLetter = lowercaseID.charAt(0).toUpperCase();
        const remainingLetters = lowercaseID.slice(1);

        return firstLetter + remainingLetters        
    },

    async getUserID(userID : string) : Promise<string> {
        const objUserID = await db
            .select('id')
            .from('users')
            .where({username: userID})
            .first()
        return objUserID.id
    },

    getTracksID(limit = 5) {
        return db
            .select('id')
            .from<Track>('playlist_data')
            .orderByRaw('Random()')
            .limit(limit)
            .then(arrTrackID => arrTrackID.map(objTrackID => objTrackID.id))
    },

    async createGameInstance(user : string, chosen_songs : Array, round : number, maxRound: number, timestamp : number) : Promise<string> {
        return await db('games')
            .insert({
                user_id: user,
                round: round,
                max_round: maxRound,
                game_start: timestamp,
            })
            .returning('id')
            .then(gameID => gameID[0]['id']);
    },

    // async getGameID(timestamp : number) {
    //     const gameID = await db
    //         .select('id')
    //         .from('games')
    //         .where({game_start: timestamp})
    //         .first()
    //     return gameID.id
    // }
}
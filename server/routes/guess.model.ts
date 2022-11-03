// import { query } from 'express';
// import knex, { Knex } from 'knex';
import db from '../db/knex';

module.exports = {

    async getSpecificSong(id : number) {
        return await db('playlist_data')
            .select('song')
            .where({id : id})
            .first()
            .then(objSong => objSong.song)
    },

    sanitiseInput(string : string) {
        return string.toLowerCase();
    },
    
    sanitiseAnswer(string : string) {
        const regexDash = new RegExp(" - ");
        if (regexDash.test(string)) {
            string = string.split(" - ")[0]
        }
        
        const regexParen = /\(([^)]+)\)/;
        
        if (regexParen.test(string)) {
            const arr = string.split(regexParen)
            const stringWithParen = arr[0] + arr[1]
            const stringWithoutParen = arr[0]
            return [string.toLowerCase(), stringWithoutParen.toLowerCase().trim(), stringWithParen.toLowerCase()];
        }
        // console.log(matches)
        
        return [string.toLowerCase()];
    },
}

import db from '../db/knex';

module.exports = {

    async getSpecificSong(id : number) {
        return await db('playlist_data')
            .select('song')
            .where({id : id})
            .first()
            .then(objSong => objSong.song)
    },

    sanitiseInput(input : string) {
        return input.toLowerCase();
    },
    
    sanitiseAnswer(answer : string) {
        const regexDash = new RegExp(" - ");
        if (regexDash.test(answer)) {
            answer = answer.split(" - ")[0]
        }
        
        const regexParen = /\(([^)]+)\)/;
        
        if (regexParen.test(answer)) {
            const arr = answer.split(regexParen)
            const answerWithParen = arr[0] + arr[1]
            const answerWithoutParen = arr[0]
            return [answer.toLowerCase(), answerWithoutParen.toLowerCase().trim(), answerWithParen.toLowerCase()];
        }
        
        return [answer.toLowerCase()];
    },
}

import db from '../db/knex';

module.exports = {

    getCurrentGame(gameID : number) {
        return db('games')
            .select()
            .where({id: gameID})
            .first()
    }

}
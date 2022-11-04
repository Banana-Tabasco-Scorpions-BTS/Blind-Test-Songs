import express, { Request, Response } from 'express';

const guessModel = require('./guess.model');
const globalModel = require('./global.model');

const router = express.Router();

const { getCurrentGame } = globalModel

const {
    getSpecificSong,
    sanitiseInput,
    sanitiseAnswer
} = guessModel

router.post('/', async (req: Request, res: Response) => {
    const clientGameID = req.body.gameID;
    const clientGuess = req.body.guess

    const currentGame = await getCurrentGame(clientGameID);
    const currentRound = currentGame.round;
    const songList = currentGame["chosen_songs"];
    const currentRoundTrackID = songList[currentRound];

    const answer = await getSpecificSong(currentRoundTrackID)
    
    const answerSanitised = sanitiseAnswer(answer)
    const guessSanitised = sanitiseInput(clientGuess)
  
    console.log("guess: " + clientGuess)
    console.log("possible answers: " + answerSanitised)

    for (let i = 0; i < answerSanitised.length; i ++) {
        if (answerSanitised[i] === guessSanitised) {
            console.log("it's a match!")
            return res.send({"gameID": clientGameID, "result": true})
        }
    } 

    return res.send({"gameID": clientGameID, "result": false});

})

export default router;
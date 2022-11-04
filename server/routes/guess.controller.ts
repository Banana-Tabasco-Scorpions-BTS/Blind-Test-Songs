import express, { Request, Response } from 'express';

const guessModel = require('./guess.model');
const globalModel = require('./global.model');

const router = express.Router();

const { 
    getCurrentGame,
    getTrack,
    getTrackWithGameID,
    incrementRound,
    incrementScore
} = globalModel

const {
    sanitiseInput,
    sanitiseAnswer
} = guessModel

router.post('/', async (req: Request, res: Response) => {
    const clientGameID = req.body.gameID;
    const clientGuess = req.body.guess

    const currentGame = await getCurrentGame(clientGameID);
    const songList = currentGame["chosen_songs"];
    const currentRoundTrackID = songList[currentGame.round-1];
    
    console.log(currentGame.round)
    const currentTrack = await getTrack(currentRoundTrackID)
    const answer = currentTrack.song
 
    const answerSanitised = sanitiseAnswer(answer)
    const guessSanitised = sanitiseInput(clientGuess)
       
    console.log("guess: " + clientGuess)
    console.log("possible answers: " + answerSanitised)

    for (let i = 0; i < answerSanitised.length; i ++) {
        if (answerSanitised[i] === guessSanitised) {
            await incrementScore(currentGame.id)
            if (currentGame.round < currentGame["max_round"]) {
                await incrementRound(currentGame.id, currentGame.round);
            }
            
            console.log("it's a match!")
            return res.send({
                "gameID": clientGameID,
                "guessMatch": true,
                "roundSuccess": true,
                "result": {
                    "song": currentTrack.song,
                    "artist": currentTrack.artist,
                    "album": currentTrack.album
                },
                "currentScore": 1,
            })
        }
    } 

    return res.send({"gameID": clientGameID, "guessMatch": false});

})

export default router;
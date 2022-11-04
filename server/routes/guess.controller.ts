import express, { Request, Response } from 'express';

const guessModel = require('./guess.model');

const router = express.Router();

const { getSpecificSong, sanitiseInput, sanitiseAnswer } = guessModel

router.post('/', async (req: Request, res: Response) => {
    const clientGameID = req.body.gameID;
    const clientGuess = req.body.guess

    console.log("guess: " + clientGuess)
    // const dummyInput = "all night long";
    const dummyAnswer = await getSpecificSong(51)
    
    const dummyAnswerSanitised = sanitiseAnswer(dummyAnswer)
    const dummyInputSanitised = sanitiseInput(clientGuess)
    console.log("possible answers: " + dummyAnswerSanitised)

    // console.log(dummyAnswerSanitised)

    for (let i = 0; i < dummyAnswerSanitised.length; i ++) {
        if (dummyAnswerSanitised[i] === dummyInputSanitised) {
            console.log("it's a match!")
            return res.send({"gameID": clientGameID, "result": true})
        }
    } 
    return res.send({"gameID": clientGameID, "result": false});

})

export default router;
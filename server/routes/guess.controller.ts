import express, { Request, Response } from 'express';

const guessModel = require('./guess.model');

const router = express.Router();

const { getSpecificSong, sanitiseInput, sanitiseAnswer } = guessModel

router.get('/', async (req: Request, res: Response) => {
    
    const dummyInput = "yes";
    const dummyAnswer = await getSpecificSong(51)
    console.log(dummyAnswer)

    const dummyAnswerSanitised = sanitiseAnswer(dummyAnswer)
    const dummyInputSanitised = sanitiseInput(dummyAnswer)

    console.log(dummyAnswerSanitised)
    res.send('try again');
})

export default router;
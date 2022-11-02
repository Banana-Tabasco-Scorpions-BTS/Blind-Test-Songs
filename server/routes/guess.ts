import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    // req expected to be a string submitted by user.

    // 01 Sanitise the data

    // 02 

    res.send('Hello from the Server!');
})

export default router;
# Blind-Test-Songs
MVP of a musical quiz full-stack web application.

## Presentation Slides
https://docs.google.com/presentation/d/1HuZnRT1BALtizwdAFGZxOfTA7oE5G9QwyFVqnyASfVo/edit?usp=sharing

## Notes
For the client, the latest code lives on [this repository](https://github.com/Banana-Tabasco-Scorpions-BTS/React_Vanilla).

For the server, the latest code lives on [this repository](https://github.com/Banana-Tabasco-Scorpions-BTS/Blind-Test-Songs).

We suggest a full cleanup of the project into only 2 repos (1 client and 1 server) before starting to dig into the code itself. All our branches can also be either parked to the side or deleted.

## Generating a Spotify API token
the server .env file contains a Spotify API key, which you can generate from the [Spotify Dev website](https://developer.spotify.com/console/get-playlist-tracks/). This key expires after one hour, so for now what we have done is generate a new one each time we want to build the server (which includes resetting our database).
Make sure that your render .env file contains a valid token too! Otherwise your deployment will fail.


## Installation

Don't forget to run this first command to install dependencies:
```
npm run i
```
And this one to build and run your server (the server runs on transpiled code):
```
npm run dev
```

## Game Mechanics

Refer to the state machine: 
https://stately.ai/registry/editor/0fc6596a-1da6-449f-9402-743c2c2d2b3c?machineId=b88a13f7-bbaa-4b0e-b43f-85122c6c5b4a

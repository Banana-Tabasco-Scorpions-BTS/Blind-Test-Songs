# Blind-Test-Songs
MVP of a musical quiz full-stack web application.

## Bugs
- Server: Where there are multiple artists attributed on a song, the current database only saves one.
- Client: Score tally client-side sometimes double/triple increments.
- Client: Timer currently freezes everytime the player inputs a guess, making the total guess length longer than 25 seconds.

## Roadmap: Features
- Server: Have a self-refreshing API Token.
- Server: Allow players to guess artists and albums as valid guesses.
- Client: Allow players to log-in through spotify and choose their own playlists to play on. This feature is by far the hardest and would require a redesign of the database architecture and how songs are delivered to the player.
- Client: Add a mute/volume control button during the game
- Client: Re-implement Typescript.


## Presentation Slides
https://docs.google.com/presentation/d/1HuZnRT1BALtizwdAFGZxOfTA7oE5G9QwyFVqnyASfVo/edit?usp=sharing

## Notes
For the client, the latest code lives on [this repository](https://github.com/Banana-Tabasco-Scorpions-BTS/Blind-Test-Songs-Client).

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

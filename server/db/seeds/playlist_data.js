const axios = require('axios');
require('dotenv').config({path: '.../.env'});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const https = require('https');

exports.seed = async function(knex) {
  
  await knex('playlist_data').del()
  
  let config = {
    url: `/v1/playlists/37i9dQZF1DXb57FjYWz00c/tracks`,
    baseURL: 'https://api.spotify.com',
    method: 'get',
    headers: {
      'User-agent': 'PostmanRuntime/7.29.2',
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${process.env.TOKEN_SPOTIFY}`
    }
  }
  const playlistData = await axios(config)
  
  // console.log(playlistData.data.items)

  for(let i = 0; i < playlistData.data.items.length; i++) {
    let individualTrack = playlistData.data.items[i].track;
    let songName = individualTrack.name;
    let artistName = individualTrack.artists[0].name;
    let albumName = individualTrack.album.name;
    let url = individualTrack['preview_url'];
    
    await knex('playlist_data').insert([
      {song: songName, artist: artistName, album: albumName, url: url},
    ]);

  }


  // const playlistDataParsed = await playlistData.json();
  // console.log(playlistDataParsed)
  //     .then(pokemonData => pokemonData.data.results.map(item => item.url))
  //     .then(pokemonUrl => Promise.all(pokemonUrl.map(url => axios.get(url))))
  //     .then(completeResponse => completeResponse.map(pokemonWithAttr => pokemonWithAttr.data).filter(pokemon => pokemon.weight < weight ))
  // };

  //   const playlistAllData = await fetch("https://api.spotify.com/v1/playlists/37i9dQZF1DXb57FjYWz00c/tracks", {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json',
  //       'Authorization': 'Bearer BQCmW9gk99P9SxDTZOgB10dQoAq3sjXpAs1kQ2pXUfYDZt5J1GfInOO4QMmDIEJXhW9QdKTCTUlC3wVIhmeLAU-gW6HMpEnFdIXT7-Elrybg7EjUNUAZeWPiMRtqJYbCKZJvXtU74zP24Wf2aMKxiQ7kSTSCPv2GUuG2CD7ak51uBug'
  //     }});
  //   const playlistAllDataParsed = await playlistAllData.json();
  //   console.log(playlistAllDataParsed);

  // } catch (error) {
  //   console.error(error);
  // };


  // Deletes ALL existing entries
};

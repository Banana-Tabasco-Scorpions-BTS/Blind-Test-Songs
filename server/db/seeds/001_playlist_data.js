const axios = require('axios');
require('dotenv').config({path: '.../.env'});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const https = require('https');

exports.seed = async function(knex) {
  
  await knex('playlist_data').del()
  

  const playlistData = {
    "href" : "https://api.spotify.com/v1/playlists/6jINLuTHIxuB9ZPej8Yz6K/tracks?offset=0&limit=100",
    "items" : [ {
      "added_at" : "2022-11-07T06:00:37Z",
      "added_by" : {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/user/nh57fdzsg74o7u621ewihg2bc"
        },
        "href" : "https://api.spotify.com/v1/users/nh57fdzsg74o7u621ewihg2bc",
        "id" : "nh57fdzsg74o7u621ewihg2bc",
        "type" : "user",
        "uri" : "spotify:user:nh57fdzsg74o7u621ewihg2bc"
      },
      "is_local" : false,
      "primary_color" : null,
      "track" : {
        "album" : {
          "album_type" : "single",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/1KIo4b95g1KHA2AQz7fwa2"
            },
            "href" : "https://api.spotify.com/v1/artists/1KIo4b95g1KHA2AQz7fwa2",
            "id" : "1KIo4b95g1KHA2AQz7fwa2",
            "name" : "Deladap",
            "type" : "artist",
            "uri" : "spotify:artist:1KIo4b95g1KHA2AQz7fwa2"
          }, {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/5GImm0oU5MkW7OHkb91jwu"
            },
            "href" : "https://api.spotify.com/v1/artists/5GImm0oU5MkW7OHkb91jwu",
            "id" : "5GImm0oU5MkW7OHkb91jwu",
            "name" : "Wolfgang Lohr",
            "type" : "artist",
            "uri" : "spotify:artist:5GImm0oU5MkW7OHkb91jwu"
          } ],
          "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VE", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/1IqEauUVodVfkZDadKJ4mg"
          },
          "href" : "https://api.spotify.com/v1/albums/1IqEauUVodVfkZDadKJ4mg",
          "id" : "1IqEauUVodVfkZDadKJ4mg",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b273534cf3b3983cfeb316ab87b6",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e02534cf3b3983cfeb316ab87b6",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d00004851534cf3b3983cfeb316ab87b6",
            "width" : 64
          } ],
          "name" : "Something Serious",
          "release_date" : "2022-07-15",
          "release_date_precision" : "day",
          "total_tracks" : 2,
          "type" : "album",
          "uri" : "spotify:album:1IqEauUVodVfkZDadKJ4mg"
        },
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/1KIo4b95g1KHA2AQz7fwa2"
          },
          "href" : "https://api.spotify.com/v1/artists/1KIo4b95g1KHA2AQz7fwa2",
          "id" : "1KIo4b95g1KHA2AQz7fwa2",
          "name" : "Deladap",
          "type" : "artist",
          "uri" : "spotify:artist:1KIo4b95g1KHA2AQz7fwa2"
        }, {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/5GImm0oU5MkW7OHkb91jwu"
          },
          "href" : "https://api.spotify.com/v1/artists/5GImm0oU5MkW7OHkb91jwu",
          "id" : "5GImm0oU5MkW7OHkb91jwu",
          "name" : "Wolfgang Lohr",
          "type" : "artist",
          "uri" : "spotify:artist:5GImm0oU5MkW7OHkb91jwu"
        }, {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/5QcpYyN9rZK1f6X7Z1JBid"
          },
          "href" : "https://api.spotify.com/v1/artists/5QcpYyN9rZK1f6X7Z1JBid",
          "id" : "5QcpYyN9rZK1f6X7Z1JBid",
          "name" : "Reinwald Kranner",
          "type" : "artist",
          "uri" : "spotify:artist:5QcpYyN9rZK1f6X7Z1JBid"
        }, {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/68TSKE26i8EDiY2UkCiRhE"
          },
          "href" : "https://api.spotify.com/v1/artists/68TSKE26i8EDiY2UkCiRhE",
          "id" : "68TSKE26i8EDiY2UkCiRhE",
          "name" : "Melinda Stoika",
          "type" : "artist",
          "uri" : "spotify:artist:68TSKE26i8EDiY2UkCiRhE"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VE", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW" ],
        "disc_number" : 1,
        "duration_ms" : 190938,
        "episode" : false,
        "explicit" : false,
        "external_ids" : {
          "isrc" : "ATZ572200020"
        },
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/6MZ4epg1RvpQCsMq0f5R1t"
        },
        "href" : "https://api.spotify.com/v1/tracks/6MZ4epg1RvpQCsMq0f5R1t",
        "id" : "6MZ4epg1RvpQCsMq0f5R1t",
        "is_local" : false,
        "name" : "Something Serious",
        "popularity" : 39,
        "preview_url" : "https://p.scdn.co/mp3-preview/a702b13ed14537ed9f3b094d7d71dc052a6595e4?cid=774b29d4f13844c495f206cafdad9c86",
        "track" : true,
        "track_number" : 1,
        "type" : "track",
        "uri" : "spotify:track:6MZ4epg1RvpQCsMq0f5R1t"
      },
      "video_thumbnail" : {
        "url" : null
      }
    }, {
      "added_at" : "2022-11-07T06:00:40Z",
      "added_by" : {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/user/nh57fdzsg74o7u621ewihg2bc"
        },
        "href" : "https://api.spotify.com/v1/users/nh57fdzsg74o7u621ewihg2bc",
        "id" : "nh57fdzsg74o7u621ewihg2bc",
        "type" : "user",
        "uri" : "spotify:user:nh57fdzsg74o7u621ewihg2bc"
      },
      "is_local" : false,
      "primary_color" : null,
      "track" : {
        "album" : {
          "album_type" : "single",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/3MUnAJMKx97SfTZYNB2iXY"
            },
            "href" : "https://api.spotify.com/v1/artists/3MUnAJMKx97SfTZYNB2iXY",
            "id" : "3MUnAJMKx97SfTZYNB2iXY",
            "name" : "The Electric Swing Circus",
            "type" : "artist",
            "uri" : "spotify:artist:3MUnAJMKx97SfTZYNB2iXY"
          } ],
          "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VE", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/546Yu1nefHSycXD93meodm"
          },
          "href" : "https://api.spotify.com/v1/albums/546Yu1nefHSycXD93meodm",
          "id" : "546Yu1nefHSycXD93meodm",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b273f7dc2b09e0ca07d50de2c392",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e02f7dc2b09e0ca07d50de2c392",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d00004851f7dc2b09e0ca07d50de2c392",
            "width" : 64
          } ],
          "name" : "Remixed Vol.2",
          "release_date" : "2021-04-06",
          "release_date_precision" : "day",
          "total_tracks" : 6,
          "type" : "album",
          "uri" : "spotify:album:546Yu1nefHSycXD93meodm"
        },
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/3MUnAJMKx97SfTZYNB2iXY"
          },
          "href" : "https://api.spotify.com/v1/artists/3MUnAJMKx97SfTZYNB2iXY",
          "id" : "3MUnAJMKx97SfTZYNB2iXY",
          "name" : "The Electric Swing Circus",
          "type" : "artist",
          "uri" : "spotify:artist:3MUnAJMKx97SfTZYNB2iXY"
        }, {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/5GImm0oU5MkW7OHkb91jwu"
          },
          "href" : "https://api.spotify.com/v1/artists/5GImm0oU5MkW7OHkb91jwu",
          "id" : "5GImm0oU5MkW7OHkb91jwu",
          "name" : "Wolfgang Lohr",
          "type" : "artist",
          "uri" : "spotify:artist:5GImm0oU5MkW7OHkb91jwu"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VE", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW" ],
        "disc_number" : 1,
        "duration_ms" : 315483,
        "episode" : false,
        "explicit" : false,
        "external_ids" : {
          "isrc" : "GB8KE2158710"
        },
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/4XMhYWy4WojL9YUMfnZBOm"
        },
        "href" : "https://api.spotify.com/v1/tracks/4XMhYWy4WojL9YUMfnZBOm",
        "id" : "4XMhYWy4WojL9YUMfnZBOm",
        "is_local" : false,
        "name" : "Invisible Man - Wolfgang Lohr Remix",
        "popularity" : 38,
        "preview_url" : "https://p.scdn.co/mp3-preview/5be207e4b52f3ca1050e4025c237b37f7935a749?cid=774b29d4f13844c495f206cafdad9c86",
        "track" : true,
        "track_number" : 3,
        "type" : "track",
        "uri" : "spotify:track:4XMhYWy4WojL9YUMfnZBOm"
      },
      "video_thumbnail" : {
        "url" : null
      }
    }, {
      "added_at" : "2022-11-07T06:00:47Z",
      "added_by" : {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/user/nh57fdzsg74o7u621ewihg2bc"
        },
        "href" : "https://api.spotify.com/v1/users/nh57fdzsg74o7u621ewihg2bc",
        "id" : "nh57fdzsg74o7u621ewihg2bc",
        "type" : "user",
        "uri" : "spotify:user:nh57fdzsg74o7u621ewihg2bc"
      },
      "is_local" : false,
      "primary_color" : null,
      "track" : {
        "album" : {
          "album_type" : "single",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/6vSMEdD0kY3g9AaqUGeMMv"
            },
            "href" : "https://api.spotify.com/v1/artists/6vSMEdD0kY3g9AaqUGeMMv",
            "id" : "6vSMEdD0kY3g9AaqUGeMMv",
            "name" : "Balduin",
            "type" : "artist",
            "uri" : "spotify:artist:6vSMEdD0kY3g9AaqUGeMMv"
          }, {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/5GImm0oU5MkW7OHkb91jwu"
            },
            "href" : "https://api.spotify.com/v1/artists/5GImm0oU5MkW7OHkb91jwu",
            "id" : "5GImm0oU5MkW7OHkb91jwu",
            "name" : "Wolfgang Lohr",
            "type" : "artist",
            "uri" : "spotify:artist:5GImm0oU5MkW7OHkb91jwu"
          } ],
          "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VE", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/0Ecc5qXRqwi4vmFcfH8pIb"
          },
          "href" : "https://api.spotify.com/v1/albums/0Ecc5qXRqwi4vmFcfH8pIb",
          "id" : "0Ecc5qXRqwi4vmFcfH8pIb",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b27352b9e0f6b4402ca315c606d2",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e0252b9e0f6b4402ca315c606d2",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d0000485152b9e0f6b4402ca315c606d2",
            "width" : 64
          } ],
          "name" : "Dizzy",
          "release_date" : "2017-02-03",
          "release_date_precision" : "day",
          "total_tracks" : 6,
          "type" : "album",
          "uri" : "spotify:album:0Ecc5qXRqwi4vmFcfH8pIb"
        },
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/6vSMEdD0kY3g9AaqUGeMMv"
          },
          "href" : "https://api.spotify.com/v1/artists/6vSMEdD0kY3g9AaqUGeMMv",
          "id" : "6vSMEdD0kY3g9AaqUGeMMv",
          "name" : "Balduin",
          "type" : "artist",
          "uri" : "spotify:artist:6vSMEdD0kY3g9AaqUGeMMv"
        }, {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/5GImm0oU5MkW7OHkb91jwu"
          },
          "href" : "https://api.spotify.com/v1/artists/5GImm0oU5MkW7OHkb91jwu",
          "id" : "5GImm0oU5MkW7OHkb91jwu",
          "name" : "Wolfgang Lohr",
          "type" : "artist",
          "uri" : "spotify:artist:5GImm0oU5MkW7OHkb91jwu"
        }, {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/7BljoID3up8yhSHHNKhSBy"
          },
          "href" : "https://api.spotify.com/v1/artists/7BljoID3up8yhSHHNKhSBy",
          "id" : "7BljoID3up8yhSHHNKhSBy",
          "name" : "Alanna Lyes",
          "type" : "artist",
          "uri" : "spotify:artist:7BljoID3up8yhSHHNKhSBy"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VE", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW" ],
        "disc_number" : 1,
        "duration_ms" : 173888,
        "episode" : false,
        "explicit" : true,
        "external_ids" : {
          "isrc" : "FR10S1711872"
        },
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/2PN0FcvL9PECkRvXFtandp"
        },
        "href" : "https://api.spotify.com/v1/tracks/2PN0FcvL9PECkRvXFtandp",
        "id" : "2PN0FcvL9PECkRvXFtandp",
        "is_local" : false,
        "name" : "Dizzy - Radio Edit",
        "popularity" : 43,
        "preview_url" : "https://p.scdn.co/mp3-preview/d2d1923ddc1708d0b209098b90ca5ad83d239b56?cid=774b29d4f13844c495f206cafdad9c86",
        "track" : true,
        "track_number" : 1,
        "type" : "track",
        "uri" : "spotify:track:2PN0FcvL9PECkRvXFtandp"
      },
      "video_thumbnail" : {
        "url" : null
      }
    }, {
      "added_at" : "2022-11-07T06:00:55Z",
      "added_by" : {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/user/nh57fdzsg74o7u621ewihg2bc"
        },
        "href" : "https://api.spotify.com/v1/users/nh57fdzsg74o7u621ewihg2bc",
        "id" : "nh57fdzsg74o7u621ewihg2bc",
        "type" : "user",
        "uri" : "spotify:user:nh57fdzsg74o7u621ewihg2bc"
      },
      "is_local" : false,
      "primary_color" : null,
      "track" : {
        "album" : {
          "album_type" : "single",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/6vSMEdD0kY3g9AaqUGeMMv"
            },
            "href" : "https://api.spotify.com/v1/artists/6vSMEdD0kY3g9AaqUGeMMv",
            "id" : "6vSMEdD0kY3g9AaqUGeMMv",
            "name" : "Balduin",
            "type" : "artist",
            "uri" : "spotify:artist:6vSMEdD0kY3g9AaqUGeMMv"
          }, {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/5GImm0oU5MkW7OHkb91jwu"
            },
            "href" : "https://api.spotify.com/v1/artists/5GImm0oU5MkW7OHkb91jwu",
            "id" : "5GImm0oU5MkW7OHkb91jwu",
            "name" : "Wolfgang Lohr",
            "type" : "artist",
            "uri" : "spotify:artist:5GImm0oU5MkW7OHkb91jwu"
          } ],
          "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VE", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/3IgvrAHqlsyWFNJ2DPKpUE"
          },
          "href" : "https://api.spotify.com/v1/albums/3IgvrAHqlsyWFNJ2DPKpUE",
          "id" : "3IgvrAHqlsyWFNJ2DPKpUE",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b273edd9c82e079f01f30aa17751",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e02edd9c82e079f01f30aa17751",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d00004851edd9c82e079f01f30aa17751",
            "width" : 64
          } ],
          "name" : "New Ground",
          "release_date" : "2021-10-29",
          "release_date_precision" : "day",
          "total_tracks" : 2,
          "type" : "album",
          "uri" : "spotify:album:3IgvrAHqlsyWFNJ2DPKpUE"
        },
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/6vSMEdD0kY3g9AaqUGeMMv"
          },
          "href" : "https://api.spotify.com/v1/artists/6vSMEdD0kY3g9AaqUGeMMv",
          "id" : "6vSMEdD0kY3g9AaqUGeMMv",
          "name" : "Balduin",
          "type" : "artist",
          "uri" : "spotify:artist:6vSMEdD0kY3g9AaqUGeMMv"
        }, {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/5GImm0oU5MkW7OHkb91jwu"
          },
          "href" : "https://api.spotify.com/v1/artists/5GImm0oU5MkW7OHkb91jwu",
          "id" : "5GImm0oU5MkW7OHkb91jwu",
          "name" : "Wolfgang Lohr",
          "type" : "artist",
          "uri" : "spotify:artist:5GImm0oU5MkW7OHkb91jwu"
        }, {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/5fO3cjaQXn3DpDsxlJbmQJ"
          },
          "href" : "https://api.spotify.com/v1/artists/5fO3cjaQXn3DpDsxlJbmQJ",
          "id" : "5fO3cjaQXn3DpDsxlJbmQJ",
          "name" : "J Fitz",
          "type" : "artist",
          "uri" : "spotify:artist:5fO3cjaQXn3DpDsxlJbmQJ"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VE", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW" ],
        "disc_number" : 1,
        "duration_ms" : 187838,
        "episode" : false,
        "explicit" : false,
        "external_ids" : {
          "isrc" : "CH6542187137"
        },
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/6BsAJNoNjKEkFqfvHsztIc"
        },
        "href" : "https://api.spotify.com/v1/tracks/6BsAJNoNjKEkFqfvHsztIc",
        "id" : "6BsAJNoNjKEkFqfvHsztIc",
        "is_local" : false,
        "name" : "New Ground",
        "popularity" : 34,
        "preview_url" : "https://p.scdn.co/mp3-preview/d57242ee1dcf70fdd7d0710d30ce3fcc4da3f859?cid=774b29d4f13844c495f206cafdad9c86",
        "track" : true,
        "track_number" : 1,
        "type" : "track",
        "uri" : "spotify:track:6BsAJNoNjKEkFqfvHsztIc"
      },
      "video_thumbnail" : {
        "url" : null
      }
    } ],
    "limit" : 100,
    "next" : null,
    "offset" : 0,
    "previous" : null,
    "total" : 4
  }
  
  for(let i = 0; i < playlistData.items; i++) {
    let individualTrack = playlistData.items[i].track;
    let songName = individualTrack.name;
    let artistName = individualTrack.artists
      .map((curr) => curr.name)
      .join(", ");
    let albumName = individualTrack.album.name;
    let url = individualTrack['preview_url'];
    
    await knex('playlist_data').insert([
      {song: songName, artist: artistName, album: albumName, url: url},
    ]);

  }
};

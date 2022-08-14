const fetch = require('cross-fetch');

const fetchHome = async () => {
    const response = await fetch(`https://open.spotify.com/oembed?url=spotify:track:0DtTOjr4jvXnb6ERDnAzXb`)
    let data = await response.json()

    // console.log(data)
    console.log(data)
};

fetchHome()

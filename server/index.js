const express = require("express");
const path = require('path');
const PORT = process.env.PORT || 3001;
const fetch = require('cross-fetch');
const app = express();
const sleep = require('util').promisify(setTimeout)


















// Connecting to rapid api
const url = 'https://spotify-scraper.p.rapidapi.com/v1';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '0db212381dmsh9b3666a218774e7p1b6b40jsn55e0bfd10f92',
    'X-RapidAPI-Host': 'spotify-scraper.p.rapidapi.com'
  }
};


app.use(express.static(path.resolve(__dirname, '../client copy/build')));

app.get("/api/home", (req, res) => {
  const fetchHome = async () => {
    const response = await fetch(`${url}/home?region=IN`,
      options)
    let data = await response.json()

    // console.log(data)
    res.send(data)
  }
  fetchHome()

});

function random_rgba() {
  var o = Math.round, r = Math.random, s = 255;
  return 'rgb(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ')';
}

app.get("/api/playlist/:id", (req, res) => {
  const playListId = req.params.id
  

  
  const mainfunction = async () => {
    const response = await fetch(`${url}/playlist/metadata?playlistId=${playListId}`, options)
    let metaData = await response.json(); 
    // todo: make different accs of rapid api and put it as options,options2 to speed up the app and to prevent 1 sec sleep

      await sleep(900)

      let response2 =  await fetch(`${url}/playlist/contents?playlistId=${playListId}`, options)
      let playlistContent = await response2.json(); 
   


    


    // Merge two objects with comma and place it in another json
    var playListData = [];
    for (let i = 0; i < playlistContent.contents.items.length; i++) {
      let myjson2 = {
        "index": i+1,
        "songName": playlistContent.contents.items[i].name,
        "id": playlistContent.contents.items[i].id,
        "songArtist": metaData.owner.name,
        "trackTime": playlistContent.contents.items[i].durationText
      };
    
        const response = await fetch(`https://open.spotify.com/oembed?url=spotify:track:${playlistContent.contents.items[i].id}`)
        let data = await response.json(); 
        const pair ={songimg:data.thumbnail_url};
        myjson2 ={...myjson2,...pair}
   
    
      // console.log(data)
      playListData.push(myjson2);
    }
    // console.log(playListData)
    let color = random_rgba();
    let myJson = {
      type: metaData.type,
      title: metaData.name,
      link: metaData.id,
      imgUrl:
        metaData.images[0][0].url,
      hoverColor: color,
      artist: metaData.owner.name,
      playlistBg: color,
      playlistItems: playListData
    }
    // console.log(JSON.stringify(myJson))
    
    res.send(myJson)
  }

  mainfunction()


});
app.get("/api/audio", (req, res) => {
  const namethis = async () => {


  }
  namethis()

});
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client copy/build', 'index.html'));
});





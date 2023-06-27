const constPartUrl = "https://www.youtube.com/watch?v="
const SongsManager = function(){
    let _songs = {};
    const _addSong = (key,url) =>  _songs[key]=url.replace(constPartUrl,"")
    const _getSong = (key) => constPartUrl + _songs[key]
    return {
        addSong: _addSong,
        getSong: _getSong

    }
}

const songsManager = SongsManager()

songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

console.log(songsManager.getSong("sax")) // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
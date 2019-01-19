require("dotenv").config();

var spotify = new Spotify(keys.spotify);

var Song = function (artist, songName, preview, album) {
    this.artist = artist;
    this.songName = songName;
    this.preview = preview;
    this.album = album;
}


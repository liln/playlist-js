// Track object
function Track( title, artist ) {
  this.title = title;
  this.artist = artist;
}

Track.prototype.toString = function () {
  return "Track: " + this.title + " - " + this.artist;
};

// Music Playlist Module
var musicPlaylist = (function () {

  // private
  var tracks = [];

  getTrack = function( num ) {
    return tracks[num];
  };

  // return object exposed to the public
  return {

    playlistName: "My Playlist",

    addTrack: function( track ) {
      tracks.push(track);
    },

    getTrackCount: function() {
      return tracks.length;
    },

    getRandomTrack: function() {
      return getTrack(Math.floor(Math.random() * tracks.length)).toString();
    },

    getAllTracks: function() {
      var tracklisting = "";
      for (var i=0;i<tracks.length;i++) {
        tracklisting += getTrack(i).toString() + "\n";
      }
      return tracklisting;
    }
  };

}) ();

// Usage:
musicPlaylist.addTrack(new Track("Fur Elise","Beethoven"));
musicPlaylist.addTrack(new Track("Radioactive","Imagine Dragons"));
musicPlaylist.addTrack(new Track("Creep","Radiohead"));

console.log("Number of Tracks: ")
console.log(musicPlaylist.getTrackCount());

console.log("Random Track: ")
console.log(musicPlaylist.getRandomTrack());

console.log("All Tracks: ")
console.log(musicPlaylist.getAllTracks());

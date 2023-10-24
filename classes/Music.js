const Media = require("./Media.js");

class Music extends Media {
  constructor(artist, length) {
    this.artist = artist;
    this.length = length;
  }
  static shortestAlbum() {
    return;
  }
  summary() {
    return `Title: ${this.title}, Artist: ${this.artist}, Year: ${this.year}, Genre: ${this.genre}, Length: ${this.length}`;
  }
}

// don't change below
module.exports = Music;

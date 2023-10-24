const media = require("./Media.js");

class Movie extends Media {
  constructor(director, duration, rating) {
    this.director = director;
    this.duration = duration;
    this.rating = rating;
  }
  static longestMovie() {
    return Movie.length;
  }
  summary() {
    return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}, Genre: ${this.genre}, Duration: ${this.duration}, Rating: ${this.rating}`;
  }
}

// don't change below
module.exports = Movie;

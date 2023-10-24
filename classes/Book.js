const media = require("./Media.js");

class Book extends Media {
  constructor(author, numPages, rating) {
    this.author = author;
    this.numPages = numPages;
    this.rating = rating;
  }
  static highestRating() {
    return Math.max();
  }
  summary() {
    return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Page Count: ${this.numPages}, Genre: ${this.genre}, Rating: ${this.rating}`;
  }
}

// don't change below
module.exports = Book;

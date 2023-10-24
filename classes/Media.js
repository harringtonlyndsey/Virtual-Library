class Media {
  constructor(title, year, genre, totalMediaCount) {
    this.title = title;
    this.year = year;
    this.genre = genre;
    this.totalMediaCount = totalMediaCount;
  }
  summary() {
    return `Title: ${this.title}, Year: ${this.year}, Genre: ${this.genre}`;
  }
}

module.exports = Media;

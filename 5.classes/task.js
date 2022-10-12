class PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state = 100, type = null) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = state;
    this.type = type;
  }

  fix() {
    this.state *= 1.5;
  }

  set state(number) {
    if (number < 0) {
      this._state = 0;
    } else if (number > 100) {
      this._state = 100;
    } else {
      this._state = number;
    }
  }

  get state() {
    return this._state;
  }
}
class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state = 100, type = null) {
    super(name, releaseDate, pagesCount, state = 100, type = null);
    this.type = "magazine";
  }
}
class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount, state = 100, type = null) {
    super(name, releaseDate, pagesCount, state = 100, type = null);
    this.author = author;
    this.type = "book";
  }
}
class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state = 100, type = null) {
    super(author, name, releaseDate, pagesCount, state = 100, type = null);
    this.type = "novel";
    this.author = author;
  }
}
class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state = 100, type = null) {
    super(author, name, releaseDate, pagesCount, state = 100, type = null);
    this.author = author;
    this.type = "fantastic";
  }
}
class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state = 100, type = null) {
    super(author, name, releaseDate, pagesCount, state = 100, type = null);
    this.type = "detective";
    this.author = author;
  }
}
class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    let findBook = this.books.find(book => book[type] === value);
    if (typeof findBook === 'object') {
      return findBook;
    } else {
      return null;
    }
  }

  giveBookByName(bookName) {
    let giveBookName = this.books.find(book => book.name === bookName);
    if (typeof giveBookName === 'object') {
      let index = this.books.indexOf(giveBookName);
      this.books.splice(index, 1);
      return giveBookName;
    } else {
      return null;
    }
  }
}








// printItem = new Book('А. Сапковский', 'Меч Предназначения', 1992, 384);
// console.log(printItem)










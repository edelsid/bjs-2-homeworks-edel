class PrintEditionItem {
   constructor (name, releaseDate, pagesCount, type = null) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
   }
   
   fix(){
      this.state = this.state * 1.5;
   }

   set state(bookState) {
      if (bookState < 0) {
         this.newState = 0;
      } else if (bookState > 100) {
         this.newState = 100;
      } else {
         this.newState = bookState;
      }
   }
   
   get state() {
      return this.newState;
   }  
}

class Magazine extends PrintEditionItem {
   constructor (name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.state = 100;
      this.type = 'magazine';
   }   
}

class Book extends PrintEditionItem {
   constructor (author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.state = 100;
      this.type = 'book';
      this.author = author;
   }   
}

class NovelBook extends Book {
   constructor (author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.state = 100;
      this.type = 'novel';
   }   
}

class FantasticBook extends Book {
   constructor (author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.state = 100;
      this.type = 'fantastic';
   }   
}

class DetectiveBook extends Book {
   constructor (author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.state = 100;
      this.type = 'detective';
   }   
}

class Library {
   constructor (name, books) {
      this.name = name;
      this.books = [];
   }

   addBook(book) {
      if (book.state > 30) {
         this.books.push(book);
      }
   }

   findBookBy (type, value) {
      let output = null;
      for (let i = 0; i < this.books.length; i++) {
         if (this.books[i][type] === value) {
            output = this.books[i]
         }
      }
      return output;
   }   

   giveBookByName (bookName) {
      let output = null;
      for (let i = 0; i < this.books.length; i++) {
         if (this.books[i].name === bookName) {
            output = this.books[i];
            this.books.splice(i, 1);
         }
      }
      return output;
   }
}

class Student {
   constructor (name) {
      this.name = name;
      this.marks = {};
   }

   addMark (newMark, subject) {
      if (newMark < 2 || newMark > 5) {
         return;
      }
      if (subject in this.marks === true) {
         this.marks[subject].push(newMark);
      } else {
         this.marks[subject] = [];
         this.marks[subject].push(newMark);
      }
      
   }

   getAverageBySubject (subject) {
      let output = 0;
      if (subject in this.marks === true) {
         let sum = this.marks[subject].reduce((a, b) => a + b, 0);
         let sumAvg = sum / this.marks[subject].length;
         output = Number(sumAvg.toFixed(2));
      }
      return output;      
   }

   getAverage () {
      let subjectList = Object.keys(this.marks);
      let output = 0;
      let sumMark = 0;
      for (let i = 0; i < subjectList.length; i++) {
         sumMark = sumMark + this.getAverageBySubject(subjectList[i]);
      }
      output = Number((sumMark / subjectList.length).toFixed(2));
      return output;
   }
}






function Student (name, gender, age) {
   this.name = name;
   this.gender = gender;
   this.age = age;
   this.marks = []; 
}

let studA = new Student ('Audrey', 'female', '20');

Student.prototype.setSubject = function (subjectName) {
   this.subject = subjectName;
}

studA.setSubject ("Algebra");

Student.prototype.addMarks = function (...marksToAdd) {
   if (this.hasOwnProperty('marks') === false) {
      return;
   } else {
      this.marks.push(...marksToAdd);
   }
}

studA.addMarks (2, 3, 5, 5, 4);

Student.prototype.getAverage = function () {
   if (this.hasOwnProperty('marks') === false || this.marks.length === 0) {
      console.log ('false');
      return 0;
      
   } else {
      let sumMark = 0;
      for (let i = 0; i < this.marks.length; i++) {
         sumMark = sumMark + this.marks[i];
      }
      let avgMark = sumMark / this.marks.length;
      return avgMark;
   }  
}

studA.getAverage();

Student.prototype.exclude = function (reason) {
   this.excluded = reason;
   delete this.subject;
   delete this.marks;
}

studA.exclude('bad grades');

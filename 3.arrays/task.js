function compareArrays(arr1, arr2) {
   if (arr1.length !== arr2.length) {
         return false;
      } 
      
   return arr1.every((number, index) => number === arr2[index]);// решение
   }


function getUsersNamesInAgeRange(users, gender) {
   let genderedArray = users.filter(user => user.gender === gender);
   let mappedArray = genderedArray.map(user => user.age);
   return mappedArray.reduce((acc, age) => acc + age  / mappedArray.length, 0);
   console.log (mappedArray.reduce((acc, age) => acc + age  / mappedArray.length, 0));
}
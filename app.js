// Same keys and values ES2015
function createInstructor(firstName, lastName){
    return {
      firstName,
      lastName
    }
}

// Computed Property Names ES2015
let favoriteNumber = 42

const instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!"
}



// Object Methods
// var instructor = {
//     firstName: "Colt",
//     sayHi: function(){
//       return "Hi!";
//     },
//     sayBye: function(){
//       return this.firstName + " says bye!";
//     }
//   }

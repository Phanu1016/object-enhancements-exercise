// Same keys and values
function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
}

// Computed Property Names
var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"

// Object Methods
var instructor = {
    firstName: "Colt",
    sayHi: function(){
      return "Hi!";
    },
    sayBye: function(){
      return this.firstName + " says bye!";
    }
  }

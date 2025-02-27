/*
Write a class called Group (since Set is already taken). Like Set, it has add, delete, and has methods. Its constructor creates an empty group, add adds a value to the group (but only if it isn’t already a member), delete removes its argument from the group (if it was a member), and has returns a Boolean value indicating whether its argument is a member of the group.


Use the === operator, or something equivalent such as indexOf, to determine whether two values are the same.


Give the class a static from method that takes an iterable object as argument and creates a group that contains all the values produced by iterating over it.
*/


class Group {
  constructor (a) {
    this.a = a;
  }
  static from(a) {
    return new Group(a);
  }
   has(a1) {
   for (let x of this.a) {
    if (x === a1) {
      return true;
    }
   }
    return false;
  }
  add(a2) {
    for (let x of this.a) {
      if(x === a2){
        console.log(x)
        return this.a;
      }
    }
    this.a.push(a2);
    return this.a;
  }
  delete(a3) {
    this.a = this.a.filter((x) => x !== a3)
  }


  }




// Tests:
let group = Group.from([10, 20]);
console.log(group.has(10));
// // → true
console.log(group.has(30));
// // → false
group.add(10);

group.delete(10);
console.log(group.has(10));
// → false

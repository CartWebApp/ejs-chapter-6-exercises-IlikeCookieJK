/* 
Make the Group class from the previous exercise iterable. Refer to the section about the iterator interface earlier in the chapter if you aren’t clear on the exact form of the interface anymore.

If you used an array to represent the group’s members, don’t just return the iterator created by calling the Symbol.iterator method on the array. That would work, but it defeats the purpose of this exercise.

It is okay if your iterator behaves strangely when the group is modified during iteration.
*/

// Your code here (and the code from the previous exercise)

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
[Symbol.iterator](){
    let a = this.a;
    let i = 0;
  return {
    next() {
      if (i == a.length) {
        console.log(i)
        return {done: true}
      }
      else {
        i++;
        return {value: a[i-1], done: false}
      }
    }
  }
  }
  }
  



// Tests

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
  }
  // → a
  // → b
  // → c

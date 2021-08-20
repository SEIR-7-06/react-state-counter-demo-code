// Classes are used to create many objects of the same type.

// The class's contructor is called when we create a brand new cat
// 'this' refers to the object instance that gets created. For example 'this' refers to the object for Wiskers


class Cat {
  constructor(catName) {
    this.catName = catName;
    this.likesToBePet = false;
  }

  sayHi() {
    console.log(`Hi my name is ${this.catName}`);
  }
}

const wiskers = new Cat('Wiskers');
wiskers.sayHi();

/*
{
  catName: 'Wiskers',
  likesToBePet: false,
  sayHi: function() {
    console.log(`Hi my name is ${this.catName}`);
  }
}
*/
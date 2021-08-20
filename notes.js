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

/*
REACT STATE NOTES
- We will use Class components whenever we need state for our componet

- Any time we update state the component's render will be called

- React is declarative - We simply declare what we want to see on the page, and React takes care of all of the details.

CREATING A REACT CLASS COMPONENT
- Create a class that extends the React.Component class.
- Our Component class must have a render method that returns JSX.
*/
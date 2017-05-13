'use strict';

/* Sample IIFE */
(function(){

  // Pre ES6 Class inheritance through prototype chaining
  function Animal(voice) {
    this.voice = voice || "Grunt";
  }

  Object.defineProperty(Animal.prototype, "speak", {
    get : function () {
      alert(this.voice);
    }
  });

  function Cat(name, color) {
    Animal.call(this,"Meeoow!");
    this.name = name;
    this.color = color;
  }

  Cat.prototype = Object.create(Animal.prototype);
  Cat.prototype.constructor = Cat;
  var fluffy = new Cat("Fluffy", "White & Orange");

  fluffy.speak;

  alert(fluffy.constructor.toString());
  alert("Fluffy is Cat " + (fluffy instanceof Cat));
  alert("Fluffy is Animal " + (fluffy instanceof Animal));

  // Post ES6 Class inheritance using class and extends syntax

  class Animal6 {
    constructor(voice) {
      this.voice = voice || "Grunt";
    }

    speak () {
      alert(this.voice);
    }
  }

  class Cat6 extends Animal6{
    constructor(name, color){
      super("Meeooww! - 6");
      this.name = name;
      this.color = color;
    }
  }

  var fluffy6 = new Cat6("Fluffy6", "Off White & Orange!");
  fluffy6.speak();
  alert(fluffy6.constructor);
})();

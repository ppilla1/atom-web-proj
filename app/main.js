'use strict';

/* Sample IIFE */
(function(){

  function Cat(name, color) {
    this.name = name;
    this.color = color;
  }

  alert(JSON.stringify(Cat.prototype));

  var cat = new Cat("Fluffy", "White & Orange");

  alert("Cat.prototype = cat.__proto__ : " + (Cat.prototype === cat.__proto__));

  Cat.prototype.age = 3;

  alert(JSON.stringify(Cat.prototype));
  alert(JSON.stringify(cat.__proto__));
})();

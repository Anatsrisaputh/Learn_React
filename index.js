let animal = {
  eats: true,
  walk() {
    alert("Animal walk");
  }
};

let rabbit = {
  jumps: true,
  __proto__: animal
};

let longEar = {
  earLength: 10,
  __proto__: rabbit
};

// walk เอามาจาก prototype chain
longEar.walk(); // Animal walk
console.log(longEar.jumps); // true (จาก rabbit)


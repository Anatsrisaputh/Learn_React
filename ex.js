let animal = { name: 'animal'};
let animal2 = { name: 'animal2'};
function Rabbit(){ this.name = 'rabbit' };
Rabbit.prototype = animal;
let rabbit1 = new Rabbit();
Rabbit.prototype = animal2;
let rabbit2 = new Rabbit();
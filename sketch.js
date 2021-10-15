//Objeto literal con JSON//
let animal = {
  subgroup: "Mammal",
  species: "Dog",
  breed: "Schnauzer",
  nick: "Tomás",
  showName: function () {
    console.log(this.nick + " the " + this.breed);
  },
  showAnimal: function () {
    fill(0);
    ellipse(100, 100, 50, 50);
  }
}

//Objeto mediante función//
function Doggy(x, y, breed, name){
  this.x=x;
  this.y=y;
  this.breed=breed;
  this.name=name;
  this.showNick = function (){
    console.log("the " + this.breed + " " + this.name);
  }
  this.printPet = function (){
    fill(255);
    ellipse(this.x, this.y, 50, 50);
  }
}

//Objeto mediante clase//
let perrito;

//Objeto mediante función//
let orejitas;

function setup() {
  createCanvas(400, 400);
  //Objeto literal con JSON//
  animal.showName();
  console.log(animal);

  //Objeto mediante clase//
  perrito = new Dog(200,200, "Schnauzer", "Tomás");
  perrito.showName();
  console.log(perrito);

  //Objeto mediante función//
  orejitas = new Doggy(300, 100, "Schnauzer", "Tomás");
  orejitas.showNick();
  console.log(orejitas);

}

function draw() {
  background(220);
  //Objeto literal con JSON//
  animal.showAnimal();

  //Objeto mediante clase//
  perrito.showPet();

  //Objetos mediante función//
  orejitas.printPet();
}

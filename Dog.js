class Dog{
    constructor(x, y, breed, name){
        this.x=x;
        this.y=y;
        this.breed=breed;
        this.name=name;
    }
    showName(){
        console.log(this.name + " it's a " + this.breed);
    }
    showPet(){
        fill(170);
        ellipse(this.x, this.y , 50, 50);
    }

}
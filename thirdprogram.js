//this keyword gets the value of the object that invokes the function where thsis is used.
var person={
    firstName:"Tejashree",
    lastName:"Parit",
    fullName:function()
    {
        console.log(this.firstName+" "+this.lastName);
        console.log(person.firstName+" "+person.lastName);

    } 

}
person.fullName();
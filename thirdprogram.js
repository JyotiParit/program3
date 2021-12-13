//this keyword gets the value of the object that invokes the function where thsis is used.
var person={
    firstName:"Tejashree",
    lastName:"Parit",
    age:"08",
    gender:"Female",
    fullName:function()
    {
        console.log(this.firstName+" "+this.lastName);
        console.log(person.firstName+" "+person.lastName);
        console.log(this.age+"");
        console.log(this.gender+""); 
    } 

}
person.fullName();
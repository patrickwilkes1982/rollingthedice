//Function constuctor
/*
var john = {
	name: 'John',
	yearOfBirth: 1982,
	job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
}

var john = new Person('John', 1982, 'teacher');
var patrick = new Person('Patrick', 1982, 'designer');
var mark = new Person('Mark', 1984, 'retired');

Person.prototype.calculateAge = 
function(){
	console.log(2016 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';


john.calculateAge();
patrick.calculateAge();
mark.calculateAge();
console.log(mark.lastName);
*/

// Object create

/*var personProto = {
	calculateAge: function()	{
		console.log(2016 - yearOfBirth);
	}
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';
*/

//Primitives vs Objects

var a = 23;
var b =  a;

a = 46;

console.log(a);
console.log(b);



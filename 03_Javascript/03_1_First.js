// ** Javascipt is a programming language.
// ** Javascipt is a Dynamically type language(We can store anything in any variable name)
// ** Variables names are case sensitive
// ** only a letter, underscore(_) or $ should be 1st character
// ** Only a letter, digits, underscore(_) and $ is allowed(not even spaces).
// ** Reserved names cannot be a variable name.

// alert("Pooja"); // to show the popup..(It runs directly in our browser) / In inspect-in console

// 1. console.log => Used for printing anything
console.log("Pooja");
console.log(1+2);
age="Pooj";
price=99.9;
console.log(price);

x=null; // pata hai ki isme khali/null value hai(absence of object)
y=undefined;// nhi pata isme kya hai
console.log(x);
console.log(y);

fullname="Pooja Kumari"
FULLNAME="Shraddha"

console.log(fullname);
console.log(FULLNAME);


// Use fixed keyword before varaible name

// 1. var=> variable can be re-declared and updated. A global scope variable.
// 2. let=> Variable cannot be re-declared but can be updated [Initialization not compulsory]
// 3. const=> Variable cannot be re-declared or updated. A block scope variable.[Must initialize the variable]


/*
Prefer let => Redeclaration of variable not allowed.
*/



// Non primitive dataype: Arrays, functions, objects(key:value pairs)

// Object is a collection of diff variable
const student={
    fullName: "Pooja Kumari",
    age: 20,
    cgpa: 8.2,
    isPass: true
}

console.log(student);
console.log(student["fullName"]);
console.log(student.fullName);




// ** Prompt is used for taking the input and can store in vaiable

let name=prompt("Hello");
console.log(name);
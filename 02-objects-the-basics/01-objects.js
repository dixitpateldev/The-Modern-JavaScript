// Topic: Objects — the basics
// Source: https://javascript.info/object
// ────────────────────────────────────────────────────────────────────────────

/*Object is a collection of key-value pairs.
It is a data structure that can store multiple values in a single variable.
Object is defined by const keyword because we don't want to reassign the object but we can change the values of the keys in the object.
The keys are used to access the values in the object.*/

const student = {
    fullName : "Dixit Patel",
    age : 33,
    cgpa : 9.5,
    isPass : true
};

const product = {
    productName : "Parker",
    rating : 4,
    offer : 5,
    isDeal : true,
    price : 270,
};

const profile = {
    fullName : "dixitpatel",
    isFollow : true,
    posts : 195,
    followers : 569000,
    following : 4,
    designation : "Full-stack developer"
};

console.log(profile); //For printing the whole object
console.log(profile.fullName); //For printing the value of a specific key in the object

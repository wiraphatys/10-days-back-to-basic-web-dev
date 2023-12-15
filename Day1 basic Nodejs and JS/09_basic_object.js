// declare object
let user = {
    name: "banky",
    age: 20,
    position: "student",
    status: true
};

// print object
console.log(user);

// access value by field
console.log(user.name);

for (let key in user) {
    console.log(key,":",user[key]);
}
// singleton literal sai ni bnta hai always from constructor
// Object.create is constructor nd made singleton

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Zayd",
    "full name": "Zayd Farman",
    [mySym]: "mykey1",
    age: 18,
    location: "Swat",
    email: "zayd@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//  console.log(JsUser.email)
//  console.log(JsUser["email"])
//  console.log(JsUser["full name"]);
//  console.log(typeof JsUser.mySym);
// console.log(JsUser[mySym])

JsUser.email = "zayd@chatgpt.com"
 //Object.freeze(JsUser)
JsUser.email = "zayd@microsoft.com"
 //console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
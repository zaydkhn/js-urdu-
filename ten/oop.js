const user = {
     username: 'zayd',
     logInCount: 5,
     signedIn: true,

     getUserDetails: function(){
        //console.log(`username: ${this.username}`)
        console.log(this);
        
     }
}


console.log(user.username);
//console.log(user.getUserDetails())
//console.log(this);

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task completed')
        resolve();
        
    })
}).then(function (){
    console.log("Promise consumed")
    
})

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.logInCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this
}

const userOne = new User('zayd', 21, true);
const userTwo =  new User('yusafzai', 33, false)
 console.log(userOne)
 console.log(userTwo)
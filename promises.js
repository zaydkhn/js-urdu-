const promiseOne = new Promise(function(resolve, reject) {
    //do an async task
    //do calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
        
    },1000)
})

promiseOne.then(function(){
    console.log('Promise comsumed');
    
})

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('Async tsk 2');
//         resolve()
        
//     },1000)
// }).then(function(){
//     console.log('Async 2 resolved');
    
// })

const threepromise = new Promise (function(resolve, reject){
    setTimeout(function(){
       
        resolve({username: 'chai', email: 'chai@ex.com'})
        
    },1000)
})

threepromise.then(function(user){
   
    console.log(user);
    
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({hehe: 'lala', haha: 'lili'})
    }, 1000)
}).then(function(wow){
    console.log(wow)
})


//const promiseFour = new Promise(function(resolve, reject){
//    setTimeout(function(){
//        let error = true;
//        if (!error) {
//             resolve({username:'khar', pass: '123' })
//         } else {
//             reject('ERROR420: Something went wrong')
//         }
//     },2000)
// })

//promiseFour.then((user) => {
//    console.log(user);
//    return user.username
    
//}).then((username) => {
//    console.log(username);
    
//}).catch(function(error){
//    console.log(error);
    
//}).finally(() => console.log('The promise is either resolved or rejected')
//)

new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if (error) {
            resolve({username: "ghen", pass: 'zds'})
        } else {
            reject('ERROR: No ghen found')
        }
    },3000)

}).then((user) => {
    console.log(user)
    return user.username;
    
}).then(function(username){
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally(function(){
    console.log('The promise is either rejected or resolved');
    
});

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')


//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
    
})
.catch((error) => console.log(error)
)
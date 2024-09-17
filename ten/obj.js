const dis = Object.getOwnPropertyDescriptor(Math, 'PI')

console.log(dis);


const chai = {
    name: 'ginger chai',
    price: 350,
    isAvailiable: true,

    orderChai: function(){
        console.log('chai nhi bni');
        
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, 'isAvailiable'));

Object.defineProperty(chai, 'isAvailiable', {
    //writable: false,
    enumerable: true
})

console.log(Object.getOwnPropertyDescriptor(chai, 'isAvailiable'));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
    console.log(`${key} ; ${value}`);
    }
}



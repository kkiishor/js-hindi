//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "kishor"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "mangaji",
            lastname: "patil"
            
        }
    }
}

//console.log(regularUser.fullname.userfullname.lastname); 

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "c",
    4: "d"
}

//const obj3 = {obj1, obj2}
//const obj4 = Object.assign(obj1, obj2)
const obj4 = {...obj1, ...obj2}
console.log(obj4);
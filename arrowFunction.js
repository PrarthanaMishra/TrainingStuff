//lexical scope:syntatic constructs that surround this
//dynamic scoping:function scope that calls it
//difference between arrow function and normal function
//1.arrow function hass bound this.
//2. cannot use arrow function as constructor(cannot use new function)
//3.It doesn't support specific variable called "argument"
//syntacticvariants I already know


// let jane={
//     name:"jane",
//     sayHello:function(friends){
//     //     //arrow function takes lexical scoping
//     //    friends.forEach((current)=>{
//     //     console.log(this.name+current);
//     //    // console.log(this);
//     //    });
//     console.log("+++++++"+this.name);
//     let that=this;
//     //callback function's subrountine this  takes window object, it's this function points to window object, to bind it with current object we can
//     //use bind function
//         friends.forEach(function(current){
//             console.log("=========="+that.name);
//          console.log(that.name+current.name);
//         }.bind(that));
//     }    
// }
// let ob=[
//     {
//         name:"Prarthana",
//         age:20
//     },
//     {
//         name:"Riya",
//         age:30
//     }
// ]
// jane.sayHello(ob);


//this problem in arrow function

let foo={};
foo.method=function(name,cb){
    this[name]=cb;
}

foo.method("bar",function(){
console.log("test");
});

foo.bar();





















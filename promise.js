//promise example

add()
  .then(add=>sub(add))
  .then(sub=>mul(sub))
  .then(mul=>div(mul))
  .then(()=>{
      console.log("last then");
  });

  //add definition
function add(){
      return new Promise((res,rej)=>{
          res("add");
      });
  }

function sub(add){
    console.log(add);//problem was of return statement if we return with curly braces chain breaks down and value of 
                      //add becomes undefined
     return add;
       
}
function mul(sub){
    console.log(sub);
    return sub;
}
function div(mul){
    console.log(mul);
    return mul;
    
}
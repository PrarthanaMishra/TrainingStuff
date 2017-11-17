//secondAssignment

// getStudentsList()
// .then(studentsList=>filterStudentsByName(studentsList, 'piya'))
// .then(filteredStudentsList=>formatStudentsList(filteredStudentsList));


// //function definition

// function getStudentsList(){
//     return new Promise((res,rej)=>{
//         res(
//         [
//             {
//                 name:"riya",
//                 age:21,
//                 gender: '',
//                 percentage: ''
//             },
//             {
//                 name:"piya",
//                 age:25
//             },
//             {
//                 name:"Saloni",
//                 age:45
//             },
//             {
//                 name:"Kiya",
//                 age:34
//             }
//         ]
//     )
//     });
// }

function filterStudentsByName(studentsList,name){
   //console.log(studentsList);
    return studentsList.filter(current=>{
        if(current.name===name){
            return current;
        }
    })
}
//minimized form
let filterStudentsByNames=(studentsList,name)=>{
    studentsList.filter(current=>{
        if(current.name===name) return current;
    });
}


// function formatStudentsList(filteredStudentsList){
//     console.dir(filteredStudentsList)
    
// }



//comment5s
//for each
 // let arr=[];
    // studentsList.forEach(current=>{
    //     if(current.name==='piya'){
    //         arr.push(current);
    //     }
    // });


//console.log("+++++++++++++++++");
//console.log(studentsList);
//map
// return studentsList.map(current=>{
//     if(current.name==="piya"){
//      return current;
//     }
// });

//reduce

// const sum=studentsList.reduce((sum,current)=>{
    //     return sum+current.age;
    //    },0);
    //    console.log(sum);

const studentDetails = [{
    name:"ram",
    age:21,
    gender: 'M',
    percentage: 95
},
{
    name:"piya",
    age:25,
    gender:'F',
    percentage:75
},
{
    name:"rakshya",
    age:45,
    gender:'M',
    percentage:65
},
{
    name:"Kiya",
    age:34,
    gender:'F',
    percentage:55
}];


 let setStatus= function(studentDetails) {
    const _studentDetails = studentDetails.map(current => {
        if(current.percentage>85) {
            current.status = "Excellent";
        }
        else if(current.percentage>70 && current.percentage<85) {
            current.status = "Good";
        }
        else if(current.percentage>60 && current.percentage<70) {
            current.status = "Ok";
        }
        else  current.status="Not applicable";
        return current;
    });
    return _studentDetails;
}

const getMaleCandidate=function(studentDetails){
   let newStudentDetails= studentDetails.filter(current=>{
        if(current.gender=='M'){
            return current;
        }
    });
    console.log(newStudentDetails);
}


const getTwoProperties=studentDetails.reduce((accumulator, {name, age, gender}) => {
    if(gender === 'M') {
        accumulator.push({
            name,
            age,
            gender
        });
    }
    return accumulator; 
},[]);


console.log(getTwoProperties);

// const subset = ['name', 'age'].studentDetails.reduce((a, name) => (a[name] = studentDetails[name], a), {});
// console.log(subset);

// getStatus(studentDetails);
// getMaleCandidate(studentDetails);
// // mjconsole.log(studentDetails);











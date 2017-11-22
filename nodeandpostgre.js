const http = require('http');
const DB = require('./database')();
const Student = require('./student')(DB);
Student.getStudentsList()
    .then(studentsList => {
        console.log(studentsList);
    })
    .catch(err => {
        console.log(err);
    });


    
// let student=require('./student.js');

// const server=http.createServer(function(request,response)
// {
//     response.writeHead
//     (200,{"Content-Type" : "text/plain"});
//     response.end("Hello World\n");
    
// });
// server.listen(3000,function(){
//     console.log("server is listening");
// });

































// pg.connect('postgres://tester:test_password@localhost/test',(err, client, done)=> {
// 	if(err) {
// 		return console.error('Could not fetch client from pool', err);
// 	}
// 	client.query('SELECT student.std_id,first_name,last_name,gender,contact_no from student , student_contact where student.std_id=student_contact.std_id', (err, result)=> { 
// 		done();
	
// 		if(err) {
// 			return console.error('Query error', err);
//         }
//         result.rows.forEach(element=>{
//             objj.push(new final_result(element.std_id,element.first_name,element.last_name,element.gender,element.contact_no));
//            // console.dir(objj);
//           });    
//     });	
// });

    // let objj=[];
    // let final_result=function resultConstructor(std_id,first_name,last_name,gender,contact){
    //       this.std_id=std_id;
    //       this.first_name=first_name;
    //       this.last_name=last_name;
    //       this.gender=gender;
    //       if (!Array.isArray(this.contact)) {
    //         this.contact = [];
    //     }  
    //      this.contact=contact;
    //     console.dir(this);
    //     return this;
    // }


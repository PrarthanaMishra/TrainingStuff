const _ = require('lodash');
module.exports = (DB) => {
    return {
        getStudentsList
    };

    function getStudentsList() {    
        return DB
            .then((connection) => _getList(connection))
            .then(studentsList => _formatStudentsList(studentsList));
    }
    function _getList(connection) {
        const query = `SELECT student.std_id,first_name,last_name,gender,contact_no 
            from student, student_contact 
            where student.std_id = student_contact.std_id`;
        
        return new Promise((resolve, reject) => {
            connection.query(query, (err, result) => err ? reject(err) : resolve(result.rows));
        });
    }
    function _formatStudentsList(studentsList) {
        return _.reduce(studentsList, (arr, value) => {
            const index = _.findIndex(arr, ({std_id}) => std_id === value.studentId);
            if(index === -1) {
                console.log(_.assignIn(_getStudentObject(value), {contacts: [_getStudentContactObject(value)]}));
                arr.push(_.assignIn(_getStudentObject(value), {contacts: [_getStudentContactObject(value)]}));
            } else {
                arr[index].contacts.push(_getStudentContactObject(value));
            }
            return arr;
        }, []);
    }
    function _getStudentObject(value) {
        return {
            studentId: value.std_id,
            firstName: value.first_name,
            lastName: value.last_name
        };
    }
    function _getStudentContactObject(value) {
        return {
            contactNumber: value.contact_no
        };
    }
};






// db.dbConnection()
// .query('SELECT student.std_id,first_name,last_name,gender,contact_no from student , student_contact where student.std_id=student_contact.std_id', (err, result)=> 
// {
//  if(err){
//     return console.error('Query error', err);
//  }
//  result.rows.forEach(element=>{
//                 objj.push(new final_result(element.std_id,element.first_name,element.last_name,element.gender,element.contact_no));
//                 console.dir(objj);
//               });  
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

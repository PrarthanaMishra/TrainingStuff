function student(name,age,id){
    this.name=name;
    this.age=age;
    this.id=id;
    };
    
    getStudentDetails()
        .then(studentDetails => formatStudentDetails(studentDetails))
      .then(formattedStudentDetails => {
          console.log(formattedStudentDetails);
      });
      
      //function definition
      function formatStudentDetails({name, age, gender}){
            return {
            name,
          gender
      }
    }
      
      function getStudentDetails() {
            return new Promise((resolve,reject) => {
                resolve({
                name: 'Demo',
            age: 15,
            gender: 'Male'
            });
          });
        }
    
    
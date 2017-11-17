
const pg = require('pg');

module.exports = function dbConnection(){
	return new Promise((resolve, reject) => {
		pg.connect('postgres://tester:test_password@localhost/test',(err, client, done)=> {
			if(err) {
				reject(err);
			} else {
				resolve(client);
			}
		});
	});
};


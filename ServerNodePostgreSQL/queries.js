var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};
var pgp = require('pg-promise')(options);
var connectionString = 'postgres://postgres:root@localhost:5433/postgres';
var db = pgp(connectionString);

console.log(JSON.stringify(db.connect))

// add query functions
var getAllElements = (req, res, next) => {

	db.any('SELECT * FROM public."Table_Leads_Ref" LIMIT 15000')
		.then(function (data) {
			res.status(200)
			.json({
				status: 'success',
				data: data,
				message: 'Retrieved ALL elements'
			});
		})
		.catch(function (err) {
			return next(err);
	});
}
// var getSingleElement = (req, res, next)=>{

// 	db.one('select Id from public."Table_Leads_Ref"')
// 		.then(function (data) {
// 			res.status(200)
// 			.json({
// 				status: 'success',
// 				data: data,
// 				message: 'Retrieved ONE element'
// 			});
// 		})
// 		.catch(function (err) {
// 			return next(err);
// 	});
// }
// var createElement = (req, res, next) =>{
// 	db.one('select id from public."Table_Leads_Ref"')
// 		.then(function (data) {
// 			res.status(200)
// 			.json({
// 				status: 'success',
// 				data: data,
// 				message: 'Retrieved ONE element'
// 			});
// 		})
// 		.catch(function (err) {
// 			return next(err);
// 	});
// }
module.exports = {
	getAllElements: getAllElements,
	// getSingle: getSingleElement,
};
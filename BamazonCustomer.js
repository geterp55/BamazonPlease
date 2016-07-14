var mysql = require('mysql');
var inquirer = require('inquirer');
// var konsoleTable = require('konsole.table');
var table = require('easy-table');

var connection = mysql.createConnection({
	host: '127.0.0.1',
	port: 3306,
	user: 'root',
	password: "",
	database: 'Bamazon'
})

connection.connect(function(err) {
	if (err) throw err;
	console.log("connected as id " + connection.threadId);
	// Use this to test initial connection
	// console.log("hey..is this thing on?");
})

//---------------------------------------------------------
//This works shows whole database but in a string of objects
connection.query('SELECT * FROM products', function(err, showDatabase) {
	if (err) throw err;
	//This works as a test prints out table in JSON format
	// console.log(showDatabase);
	
	//This works shows whole database in a table format
	console.log(table.print(showDatabase));	
})
 



//---------------------------------------------------------


// connection.query('SHOW COLUMNS FROM products', function(err, rows, fields) {
// 	if (err) throw err;
// 	console.log(rows[0].Field);	
// })

// connection.query('SHOW COLUMNS FROM products', function(err, rows, fields) {
// 	if (err) throw err;
// 	console.log(rows.fields);	
// })



	// console.log(rows[1].Field);
	// console.log(rows[2].Feild);
	// console.log(rows[3].Field);
	// console.log(rows[4].Field);

//The database all products with (itemid,description, price) should appear
//prompt: "What would you like to purchase?"
//user should only be able to type in a the 6 digit sku 
//prompt: "How many would you lik to purchase?"


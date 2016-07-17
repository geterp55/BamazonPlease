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

	productSelect();
		


})
// connection.end();
 // clear.table();
//---------------------------------------------------------
//prompt: "What would you like to purchase?"
var productSelect = function() {
	inquirer.prompt([{
		name:'id',
		type: 'input',
		message: 'Type the six digit Item Number of the product you want to buy?'
	},{
		name: 'quantity',
		type: 'input',
		message: 'How many would you like to buy?'
	},{
		name: 'confirm',
		type: 'input',
		message: 'Confirm your choices Y or N?'
	

	}]).then(function(order) {
        var query = 'SELECT FROM Products WHERE ?'
        connection.query(query, {itemID: order.input}, function(err, res) {


            // for (var i = 0; i < res.length; i++) {
                var basket = (JSON.stringify(order,null, 2));
                console.log(basket);    

        
                        	var anotherSelection = function(){
        						inquirer.prompt([{
        							name: 'another',
									type: 'input',
									message: 'Would you like to purchase another product? Select Y or N?'			
        						}]).then(function(again){
        							var again = productSelect();
        								if(anotherSelection === "y"){
        								again();
        							}
        						});
        					}
        					anotherSelection();
        		



        		var cart = function(stack){
					for (var i = 0; i < stack.length;i++){
						var sum = basket;	
					}
					 
				} 
        					



        });
	


	});
}


connection.end();



//user should only be able to type in a the 6 digit sku 
//prompt: "How many would you lik to purchase?"

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




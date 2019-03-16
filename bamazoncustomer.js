var inquirer = require("inquirer");
var mysql = require("mysql")
var Table = require('cli-table');

var connection = mysql.createConnection

    ({

	    host: 'localhost',
        port: 3306, 
        user: "root",
	    password: "ScorpioSQL",
        database: "bamazon"
    
    });

function startbamazon() 

    {
        connection.query('SELECT * FROM products', function(err, res) 
        
        {

            var table = new Table

            ({
                head: ['ID', 'Name', 'Department', 'Price', 'Stock']
            });

    console.log("Items Available for Sale:");

    var tabledata = res;

    for (var i = 0; i < res.length; i++) {

        table.push(
            
        [
            res[i].itemid , 

            res[i].productname, 

            res[i].departmentname, 

            res[i].price, 

            res[i].stockquantity
        ]
        

        );
    }


        console.log(table.toString());

        inquirer.prompt([
            
        {

            name: "custId",
            type: "input",
            message: "Enter the ID of the item you would like to buy.",

            validate: function(value) {

                if (isNaN(value) == false) 

                {
                    return true;
                } 
                
                else 
                
                {
                    return false;
                }
            }
        }, 
        
        {
            name: "custQ",
            type: "input",
            message: "How many of this item would you like to buy?",

            validate: function(value) {
            
                if (isNaN(value) == false) 
                
                {
                    return true;
                } 
                
                else 

                {
                    return false;
                }
            }
        }]).then(function(answer) {

            var cId = answer.custId
            
            var cQuantity = answer.custQ
            
            if (cQuantity < tabledata[cId - 1].stockquantity) 
            
            { 
                var newQ = parseInt(tabledata[cId - 1].stockquantity) - parseInt(cQuantity);

                connection.query("UPDATE products SET ? WHERE ?", 
                
            [
                    {

                    stockquantity : newQ

                    }, 

                
                {
                    itemid: cId

                }
            
            ], 
                
                
                function(err, res) {

                    if(err) throw err; 

                });

                console.log("Thank you for your business! Is there anything else you would like?");

                startbamazon();

                return;

            } else 
            
            {
                console.log("We're sorry, we don't have enought in stock at this time. Sending you back to original item list...");

                startbamazon();
            };

        }
    )

})};

startbamazon();
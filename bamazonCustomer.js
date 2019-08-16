var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "bamazon_DB"
});

connection.connect(function (err) {
    if (err) throw err;
    start();
});


function start() {
    console.log("ITEMS FOR SALE.....\n")
    connection.query("SELECT * FROM products", function (err, results) {
        if (err) throw err;
        // Log all products in a table format
        console.table(results);

        inquirer.prompt([
            {
                type: "list",
                message: "Would you like to purchase one of these products?",
                choices: ["yes", "no"],
                name: "purchase_question"
            }
        ]).then(function (answer) {
            if (answer.purchase_question === "yes") {
                purchaseProduct();
            } else {
                console.log("Hope to see you again soon!");
                connection.end();
            }
        })
    })
}

function purchaseProduct() {
    inquirer.prompt([
        {
            type: "number",
            message: "Please enter the [item_id] of the product you would like to purchase:",
            name: "purchase_id"
        },
        {
            type: "number",
            message: "Please specify the [stock_quantity] you would like to puchase:",
            name: "purchase_quantity"
        }
    ]).then(function (answer) {
        connection.query("SELECT * FROM products", function (err, results) {
            if (err) throw err;

            var chosenItem;

            for (i = 0; i < results.length; i++) {
                if (results[i].item_id === answer.purchase_id) {
                    chosenItem = results[i]
                }
            }

            if (chosenItem.stock_quantity >= parseInt(answer.purchase_quantity)) {
                connection.query(
                    "UPDATE products SET ? WHERE ?",
                    [
                        {
                            stock_quantity: (chosenItem.stock_quantity - parseInt(answer.purchase_quantity))
                        },
                        {
                            item_id: chosenItem.item_id
                        }
                    ],
                    function (err, res) {
                        if (err) throw err;
                        console.log(res.affectedRows + " products updated!\n");
                    },
                    console.log("\nYour total for today's purchase is $" + (chosenItem.price * parseInt(answer.purchase_quantity)).toFixed(2) + ".\nHope to see you again soon!\n")
                );
                start();
            } else {
                console.log("\nInsufficient quantity!\n");
                console.log("================================================================================");
                start();
            }
        });
    })
}
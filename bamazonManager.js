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
    inquirer.prompt([
        {
            type: "list",
            message: "Please select from the list of menu options below",
            choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"],
            name: "optionMenu"
        }
    ]).then(function (answer) {
        switch (answer.optionMenu) {
            case ("View Products for Sale"):
                viewProducts();
                break;
            case ("View Low Inventory"):
                lowInventory();
                break;
            case ("Add to Inventory"):
                addInventory();
                break;
            case ("Add New Product"):
                addProduct();
        }
    })
}

function lowInventory() {
    connection.query("SELECT * FROM products", function (err, results) {
        if (err) throw err;

        var chosenItem;

        for (i = 0; i < results.length; i++) {
            if (results[i].stock_quantity < 50) {
                chosenItem = results[i]
            }
        }
        console.log(chosenItem.product_name + " has " + chosenItem.stock_quantity + " left in stock!\n")
        start();
    })
}

function addInventory() {
    inquirer.prompt([
        {
            type: "number",
            message: "Please enter the [item_id] of the product you would like to add inventory to:",
            name: "inventory_id"
        },
        {
            type: "number",
            message: "How much of this item needs to be added?",
            name: "inventory_quantity"
        }
    ]).then(function (answer) {
        connection.query("SELECT * FROM products", function (err, results) {
            if (err) throw err;

            var chosenItem;

            for (i = 0; i < results.length; i++) {
                if (results[i].item_id === answer.inventory_id) {
                    chosenItem = results[i]
                }
            }
            connection.query(
                "UPDATE products SET ? WHERE ?",
                [
                    {
                        stock_quantity: (chosenItem.stock_quantity - parseInt(answer.inventory_quantity))
                    },
                    {
                        item_id: chosenItem.item_id
                    }
                ],
                function (err, res) {
                    if (err) throw err;
                    console.log(res.affectedRows + " products updated!\n");
                },
                console.log("\nThe new total inventory for " + chosenItem.product_name + " is " + chosenItem.stock_quantity + ".\n")
            );
            start();
        })
    })
}

function addProduct() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the product you would like to add to the inventory list?",
            name: "item_add"
        },
        {
            type: "input",
            message: "What is department is this item under?",
            name: "item_dept"
        },
        {
            type: "input",
            message: "What is the price for this item?",
            name: "item_price"
        },
        {
            type: "number",
            message: "What is the inventory quantity for this item?",
            name: "item_quantity"
        }
    ]).then(function (answer) {
        console.log("Inserting a new product...\n");
        connection.query(
            "INSERT INTO products SET ?",
            {
                product_name: answer.item_add,
                department_name: answer.item_dept,
                price: answer.item_price,
                stock_quantity: answer.item_quantity
            },
            function (err, res) {
                if (err) throw err;
                console.log(res.affectedRows + " product inserted!\n");
            }
        );
        start();
    })
}

function viewProducts() {
    console.log("INVENTORY LIST.....\n")
    connection.query("SELECT * FROM products", function (err, results) {
        if (err) throw err;
        // Log all products in a table format
        console.table(results + "\n");
    })
    start();
}
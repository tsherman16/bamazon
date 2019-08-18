# bamazon

## **What the application does**

This application has two JS files, one for the customer and one for the manager. The entire application is an amazon-like application to sell and post item's for sale. The customer portal allows the customer to purchase items they see. The manager portal allows the admin to update the items, prices, dept, and stock quantity.

--------------------------------------------------------------------------------------------------------------------------------------

## **How to run the application**

The customer portal allows the user to see's what item's are in stock. To access this application, the user needs to get into the terminal and write "node bamazonCustomer.js" into the command line. For each of the items the user can also see how many are in stock, the department name, and the price of the individual items. Once the user can see this info the user is prompted if they would like to purchase one of the items. If no, they are exited from the application, but if yes they proceed with the buying process, asking them what they want and how many. After they have inputted this information they are then told how much the total cost is and then brought to the beginning of the application seeing the updated item list and asking if they are wanting to purchase an item.

The manager portal is more for the back end to update the items, prices, dept, and stock quantity. To access this application, the user needs to get into the terminal and write "node bamazonManager.js" into the command line. Once into this portal the user has five options: View Products for Sale, View Low Inventory, Add to Inventory, Add New Product, and Exit. View Products for Sale allows the user to view a table of all of the porducts. View Low Inventory allows the user to see all of the products that have inventory less than a quantity of 50. Add to Inventory allows the user to add inventory to an existing product. Add New Product allows the user to enter a new item for sale. Exit allows the user to exit the program.

# *node bamazonCustomer.js*

--------------------------------------------------------------------------------------------------------------------------------------

![app-opening](/images/openingcustomer.png)

This is the initial view once you open this application. In the photo you can see that the items are viewable in the table. Below the table the user is able to proceed forward once the user answers the question of whether or not they would like to purchase something from the items listed.




![opening-no](/images/opening-nocustomer.png)

In this photo you can see that the user chose the answer no. Once they answered they were given a message then exited the application



![opening-yes](/images/opening-yes-customer.png)

The user has chosen the answer yes to purchase an item. The user is then asked which item they would like to purchase and to identify the item by the "item_id". After they have chosen the item, the user is asked how many they would like to purchase.



![yes-sufficient_quantity](/images/yes-sufficentquantity-customer.png)

The user chose a quantity that is available per the column "stock_quantity". The user is then given a message with the total for today's purchase. Once that is complete, they are sent back to the beginning of the application, to see if they would like to purchase another item or not. The table displayed also shows the updated stock quantity for the item just purchased.



![yes-insufficient_quantity](/images/yes-insufficientquantity-customer.png)

The user has chosen a quantity not available per the column "stock_quantity". The user is given the message that there is not enough in stock and sent back to the beginning of the application.

--------------------------------------------------------------------------------------------------------------------------------------

## **Built with**

**Node Packages:**
   * [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)

   * [Axios](https://www.npmjs.com/package/axios)

--------------------------------------------------------------------------------------------------------------------------------------

## **Github Links**

* [Github-pages](https://tsherman16.github.io/liri-node-app/)

* [Github-repository](https://github.com/tsherman16/liri-node-app)

--------------------------------------------------------------------------------------------------------------------------------------

## **Author**

*Tim Sherman*
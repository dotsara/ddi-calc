"use strict";

// GOAL
//
// users can click menu items for the cost of an order at Dick's Drive-In

// when an item is clicked, the total (with tax) should update on the screen
// there should be a "current order" list showing clicked item quantities & cost

// starting out very very basic

var menuArray = [
  {"name":"deluxe", "cost": 3.10},
  {"name":"special", "cost": 2.00},
  {"name":"cheeseburger", "cost": 1.75},
  {"name":"hamburger", "cost": 1.40},
  {"name":"fries", "cost": 1.75},
  {"name":"shakes", "cost": 2.50},
  {"name":"milk", "cost": 1.25},
  {"name":"small soda", "cost": 1.40},
  {"name":"medium soda", "cost": 1.70},
  {"name":"large soda", "cost": 1.90},
  {"name":"rootbeer float", "cost": 2.50},
  {"name":"coffee", "cost": 1.25},
  {"name":"hot chocolate", "cost": 1.25},
  {"name":"ice cream sundae", "cost": 2.30},
  {"name":"kid cone", "cost": 1.30},
  {"name":"single cone", "cost": 1.90},
  {"name":"double cone", "cost": 2.80},
  {"name":"onions", "cost": 0.05},
  {"name":"ketchup", "cost": 0.05},
  {"name":"tartar sauce", "cost": 0.05},
];
var localTax = 0.096;

// how much would it cost to order 1 of every item on the menu?
// (without tax)
var totalUpAllItems = function(itemsArray) {
  var totalOfItems = 0;
  for (var index = 0; index < itemsArray.length; index++) {
    totalOfItems = totalOfItems + Number(itemsArray[index]);
  };

  return totalOfItems.toFixed(2);
};

// It feels like this one's a bit fussier than it needs to be.
var totalWithTax = function(currentTotal) {
  return (Number(currentTotal) + (currentTotal * localTax)).toFixed(2);
};

$(document).ready(function() {
  console.log("hiyee, document's ready");
  console.log("menu items! ", allItemsNames);
  console.log("menu item costs! ", allItemsCost);
  console.log("what would it cost to order 1 of each item? (without tax)");
  console.log(totalUpAllItems(allItemsCost));
  console.log("and with tax?");
  // not gonna lie that is a little bit ugly. (: 
  console.log(totalWithTax(totalUpAllItems(allItemsCost)));
});

// HELPER METHODS

/*
  arrays of the menu item names and costs, which can then be used later
  as needed.
*/
var allItemsNames = menuArray.map(function(menuName) {
  return menuName.name;
});

var allItemsCost = menuArray.map(function(menuCost) {
  return menuCost.cost.toFixed(2);
});



// stuff I'm keeping around but folding up so it's out of the way


var menu = {
  "deluxe" : 3.10,
  "special" : 2.00,
  "cheeseburger" : 1.75,
  "hamburger" : 1.40,
  "fries" : 1.75,
  "shakes" : 2.50,
  "milk" : 1.25,
  "smallsoda" : 1.40,
  "mediumsoda" : 1.70,
  "largesoda" : 1.90,
  "rootbeerfloat" : 2.50,
  "coffee" : 1.25,
  "hotchocolate" : 1.25,
  "icecreamsundae": 2.30,
  "kidcone" : 1.30,
  "singlecone" : 1.90,
  "doublecone" : 2.80,
  "onions" : 0.05,
  "ketchup" : 0.05,
  "tartarsauce" : 0.05
};

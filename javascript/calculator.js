"use strict";

/* 
  Gooooooal! 
  - users can click menu items for the cost of an order at Dick's
    Drive-In

  When an item is clicked, an order total (cost) should be displayed
  and updated as users click more items. Additionally, there should be
  a list of items updated _as_ users click, e.g. cheeseburger, fries,
  shakes, ketchup…
*/

var menuArray = [
  {"name":"deluxe", "cost": 3.10},
  {"name":"special", "cost": 2.00},
  {"name":"cheeseburger", "cost": 1.75},
  {"name":"regular hamburger", "cost": 1.40},
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

// span tags where I'll be updating information as users click items
var $orderTotalSpan = $('.order-total');
var $orderTotalNumber = $('.order-total').text();
var $orderItems = $('.order-items');

$(document).ready(function() {
  console.log("Hi! We're ready to take your order. (: ");
  // when a user clicks a menu item, its cost is added to the total and
  // its name is added to the "your order" list
  $( ".menu" ).on( "click", "a", function() {
    var value = $(this).data('name');

    for (var index = 0; index < menuArray.length; index++) {
      if (menuArray[index].name === value) {
        $orderTotalNumber = Number($orderTotalNumber + menuArray[index].cost);
        $orderTotalSpan.text($orderTotalNumber.toFixed(2));
        
        // Adding a comma only when the list is > 1 item
        if ($orderItems[0].childNodes.length === 0) {
          $($orderItems).append(menuArray[index].name).val();
        } else {
          $($orderItems).append(", " + menuArray[index].name).val();
        };

        console.log("You added a " + menuArray[index].name + " to your order.");
        // yes "a onions" sounds silly, but I can live with. FOR NOW.

        // dropping out of the if because if it's true: we're done!
        break;
      };
    };

  });

  $(".clear-order").on("click", "button", function(event){
    event.preventDefault;
    location.reload();
  });

});

// HELPER METHODS

/* 
  arrays of menu item names and costs, to be used as needed
*/

var allItemsNames = menuArray.map(function(menuName) {
  return menuName.name;
});

var allItemsCost = menuArray.map(function(menuCost) {
  return menuCost.cost.toFixed(2);
});
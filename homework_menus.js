// START HERE

// 1. Add method addIngredient(), which will take a string and add/push it onto the ingredients array

function menuItem(name, refId, description, calories, price) {
  this.name = name,
  this.refId = refId,
  this.description = description,
  this.calories = calories,
  this.price = price,
  this.ingredients = [],
  this.numIngredients = function() {
    return this.ingredients.length;
  };
  this.addIngredient = function(newIngredient){
    this.ingredients.push(newIngredient);
 };
 this.vegan = false
}

// 2. Your best friend hired a new Head Chef who wants to make an adjustment to the menu.
// Add a flag which indicates if the menu item is vegan or not.


// 3. Create a breakfast menu.  This will be an array.  Add at least 3 breakfast dishes to this menu.  Make sure
// each menu item has all properties populated and at least 2 ingredients added.  You do NOT have to populate ingredients
// when you initialize each menu item.
let breakfastMenu = [];

let eggs = new menuItem('Scrumble eggs', 'ID001', 'A breakfast staple served with home fries', 400, 8);
let frenchToast = new menuItem('Frech Toast', "ID002", "Served with a side of berries and locat syrups", 800, 12);
let parfait = new menuItem('Yogurt Parfait', 'ID003', 'Healthy pick me up', 350, 7);

breakfastMenu.push(eggs, frenchToast, parfait);

eggs.addIngredient('eggs');
eggs.addIngredient('butter');

frenchToast.addIngredient('bread');
frenchToast.addIngredient('syrup');

parfait.addIngredient('greek yogurt');
parfait.addIngredient('mix berries');


// To confirm things look good:
// a. Print the number of items on your breakfast menu.
// b. Print the names of each of your breakfast menu items.


console.log("-------------\n");
console.log("3a. Number of Breakfast Menu Items");
console.log(breakfastMenu.length);


console.log("-------------\n");
console.log("3b. Breakfast Menu Item Names");

for(let i=0; i<breakfastMenu.length; i++){
  console.log(breakfastMenu[i].name);
}

// 4. Create a lunch menu. This will be an array.  Add at least 3 lunch dishes to this menu.
let lunchMenu = [];

let salad = new menuItem('Greek salad', 'ID004', 'Healthy mediterrenean delight', 500, 14);
let burger = new menuItem('Turkey burger','ID005', 'Delicious burger', 700, 14);
let soup = new menuItem('Spinach cream', 'ID006', "Green delight", 350, 8);

lunchMenu.push(salad, burger, soup);

salad.addIngredient('kale');
salad.addIngredient('olives');

burger.addIngredient('turkey patty');
burger.addIngredient('mayo');

soup.addIngredient('spinach');
soup.addIngredient('cream');


console.log("-------------\n");
console.log("4a. Number of Lunch Menu Items");
console.log(lunchMenu.length);

console.log("-------------\n");
console.log("4b. Lunch Menu Item Names");
for(let i=0; i<lunchMenu.length; i++){
  console.log(lunchMenu[i].name);
}

// 5. Create a dinner menu. This will be an array.  Add at least 3 dinner dishes to this menu.
let dinnerMenu = [];

let pasta = new menuItem('Pasta Carbonara', 'ID007', 'Classic italian dish', 900, 20);
let steak = new menuItem('Steak and fries', 'ID008', 'Prime sirloin', 100, 30);
let sushi = new menuItem('Sushi platter', 'ID009', 'Assorment of Makis', 700, 25);

dinnerMenu.push(pasta, steak, sushi);

pasta.addIngredient('penne');
pasta.addIngredient('cream');

steak.addIngredient('sirloin');
steak.addIngredient('potatoes');

sushi.addIngredient('salmon');
sushi.addIngredient('rice');


console.log("-------------\n");
console.log("5a. Number of Dinner Menu Items");
console.log(dinnerMenu.length);

console.log("-------------\n");
console.log("5b. Dinner Menu Item Names");
for(let i=0; i<dinnerMenu.length; i++){
  console.log(dinnerMenu[i].name);
}


// 6. The Head Chef wants to confirm the total number of ingredients per menu (don't worry about duplicates).
// Print the total number of ingredients per menu.
breakfastMenu.forEach()





console.log("-------------\n");
console.log("6. Number of Breakfast Menu Ingredients");




console.log("6. Number of Lunch Menu Ingredients");
console.log("6. Number of Dinner Menu Ingredients");


// 7. The General Manager thinks the breakfast menu prices are too low.  First, print the sum of all breakfast menu prices.
// Second, increase every breakfast menu price by 25%.  Third, print the sum again now that the prices have changed.

console.log("-------------\n");
console.log("7. BEFORE: Sum Breakfast Menu Prices");

console.log("7. AFTER: Sum Breakfast Menu Prices");


// 8. Your best friend left the printed menu at home.  Please print out the name, reference ID, and price of each menu item.
console.log("-------------\n");
console.log("8. Breakfast Menu At a Glance");

console.log("-------------\n");
console.log("8. Lunch Menu At a Glance");

console.log("-------------\n");
console.log("8. Dinner Menu At a Glance");


// 9. The General Manager fears the recent 15%-increase for all breakfast menu items has made the average breakfast unaffordable.
// Print the average cost for the breakfast menu.
console.log("-------------\n");
console.log("9. Average Cost for Breakfast");


// 10. The General Manager loves how QUICKLY you produced the average cost for breakfast.  Go ahead and get the averages for lunch and dinner.
console.log("-------------\n");
console.log("10. Average Cost for Lunch");

console.log("-------------\n");
console.log("10. Average Cost for Dinner");


// 11.  The Head Chef wants to know if you added the vegan flag.  For each menu, print the number of vegan and non-vegan items.
console.log("-------------\n");
console.log("11. Number of Vegan Breakfast Items");
console.log("11. Number of Non-Vegan Breakfast Items");

console.log("11. Number of Vegan Lunch Items");
console.log("11. Number of Non-Vegan Lunch Items");

console.log("11. Number of Vegan Dinner Items");
console.log("11. Number of Non-Vegan Dinner Items");

// 12. Your best friend and the Head Chef have a bet to determine which menu has the most calories.  They want you to write code to calculate this and
// print the value.  If the calorie count is the same for two or more menus, print that.
console.log("-------------\n");
console.log("12. Menu with Most Calories");

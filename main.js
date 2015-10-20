// Use the attached file items.js and add it to a new project
// Make sure to call items.js before your main file
// Using the items variable, use array.map(), array.reduce(), array.forEach, and array.filter() to help you through the following questions.
// The answers should be logged out to your console using console.log()
// Make sure the output matches the answers below each question.
// Please comment your code as you walk through your though process.
// Show me how to calculate the average price of all items. Please console.log the average.
//
// The average price is $23.63
// function Average (items)



function sum(total, item) {
  return total + item.price;
}

var avg = items.reduce(sum, 0) / items.length;
console.log(avg);

// Show me how to get an array of items that cost between $14.00 and $18.00 USD
//
// "Items that cost between $14.00 USD and $18.00 USD:"
// [
// {
//   title: "1970s Coors Banquet Glass Beer Pitcher",
//   ...
// },
// {
//   title: "The Three Broomsticks Customizable Beer Stein Mug, Harry Potter Inspired, hogsmeade village, harry potter gift, three broomsticks mug",
//   ...
// },
// {
//   title: "Hand Painted Colorful Feather Glass",
//   ...
// }
// ]

  var priceRange = items.filter(function(item) {
    return (item.price > 14.00 && item.price < 18.00)
  }).map(function(item){
    return item.title;
  });

  console.log(priceRange);


  // Show me how find the item with a "GBP" currency code and print its name and price. Please console.log the one you find.
  //
  // 1970s Schlitz Malt Liquor Glass Beer Pitcher costs £18


var printGBP = items.filter(function(item) {
  return (item.currency_code === "GBP");
})
  printGBP.forEach(function (yolo) {
    console.log(yolo.title + " costs " + yolo.price)
  } )

// console.log(printGBP)
  // function currencyGBP(item, exchangerate) {
  //   return (item.price * .65;)
  // }
  //
  // var printGBP = items[price].reduce


// Show me how to find which items are made of eight or more materials.
// Please console.log the ones you find.

var wood = items.filter(function(item) {
  return(item.materials.indexOf('wood') != -1)
})

  wood.forEach(function(item) {
    console.log(item.title + ' is made of wood.')
  })

var masMaterials = items.filter(function(item) {
    return (item.materials.length >= 8)
  });
  masMaterials.forEach(function (solo) {
    console.log(solo.title + solo.materials)
  } )
    // console.log(masMaterials)
  // .map(function(item){
  //   return item.title;
  // });
//  6. Show me how to calculate how many items were made by their sellers
//
// 18 were made by their sellers

var numSellalsomake = items.filter(function(item) {
  return item.who_made === "i_did";
});
  console.log(numSellalsomake.length + " items were made by their sellers")

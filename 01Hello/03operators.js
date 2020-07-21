var sellingPrice = 100;
var listingPrice = 2000;
var discountPrice = ((listingPrice - sellingPrice)/listingPrice)*100;
console.log("Discount percentage is " + discountPrice); 
displayDiscountPrice = Math.round(discountPrice);
console.log("Display discounted price is " + displayDiscountPrice + "% off");

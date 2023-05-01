/*Holiday Shopping

You are trying to buy gifts for your two siblings for the next holiday season. 
To ensure you stay within budget, you are calculating 
sales tax and total cost before arriving at the cashier. 
Given a budget and the prices of the two gifts, write at least two functions 
that return a boolean if you are within or over budget.

For this exercise, assume that the sales tax rate is 8 percent.

Prior to writing any code, make sure we understand the problem entirely, pseudocoding along the way.

Input - Budget	Input - Gift Prices	Expected Return
50	20, 25	True
100	50, 46	False
500	230, 230	True
200	140, 50	False
 */ 

const budget = 50;
const price1 = 20;
const price2 = 25;

const sumOfGifts = (gift1, gift2) => gift1 + gift2;

const giftTotal = sumOfGifts(price1 + price2);

const addTax = (giftTotal) => giftTotal + (giftTotal * 0.08);

const giftWithTax = addTax(giftTotal);

const holidayShopping = (budget, giftWithTax) => budget > giftWithTax;

holidayShopping(budget, giftWithTax);
console.log(holidayShopping(budget, giftWithTax));



/*const budget = 50;
const price1 = 20;
const price2 = 25;

const sumOfGifts = (gift1, gift2) => gift1 + gift2;

const giftTotal = sumOfGifts(price1, price2);

const addTax = (giftTotal) => giftTotal + (giftTotal * 0.08);

const giftsWithTax = addTax(giftTotal);

const holidayShopping = (budget, giftsWithTax) => budget > giftsWithTax;

holidayShopping(budget, giftsWithTax);
console.log(holidayShopping(budget, giftsWithTax));*/
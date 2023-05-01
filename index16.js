const disCoupon = 10;
const subDiscount = 0.75;

//Timmy's prescription costs//

const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

function timmyPrices(pricePerRefill, refills) {
    if (timmy.subscription === true && timmy.coupon === true) {
        return (pricePerRefill * refills * subDiscount) - disCoupon;
    } else if (timmy.subscription === true && timmy.coupon === false) {
        return pricePerRefill * refills * subDiscount;
    } else if (timmy.subscription === false && timmy.coupon === true ){
        return (pricePerRefill * refills) - disCoupon;
    } else {
        return pricePerRefill * refills
    }
}

const timmyTotal = timmyPrices(timmy.pricePerRefill, timmy.refills);

console.log("Your grand total is " + timmyTotal + ".");


//Sarah's prescription costs//


const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

function sarahPrices(pricePerRefill, refills) {
    if (sarah.subscription === true && sarah.coupon === true) {
        return (pricePerRefill * refills * subDiscount) - disCoupon;
    } else if (sarah.subscription === true && sarah.coupon === false) {
        return pricePerRefill * refills * subDiscount;
    } else if (sarah.subscription === false && sarah.coupon === true ){
        return (pricePerRefill * refills) - disCoupon;
    } else {
        return pricePerRefill * refills
    }
}

const sarahTotal = sarahPrices(sarah.pricePerRefill, sarah.refills);

console.log("Your grand total is " + sarahTotal + ".");

//Rocky's subscription costs//

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}

function rockyPrices(pricePerRefill, refills) {
    if (rocky.subscription === true && rocky.coupon === true) {
        return (pricePerRefill * refills * subDiscount) - disCoupon;
    } else if (rocky.subscription === true && rocky.coupon === false) {
        return pricePerRefill * refills * subDiscount;
    } else if (rocky.subscription === false && rocky.coupon === true ){
        return (pricePerRefill * refills) - disCoupon;
    } else {
        return pricePerRefill * refills
    }
}

const rockyTotal = rockyPrices(rocky.pricePerRefill, rocky.refills);

console.log("Your grand total is " + rockyTotal + ".");

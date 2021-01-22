//https://github.com/rijwanul/js-assignment

//Kilometer to Meter Converter Function STARTS here
function kilometerToMeter (kilometerInput){
    //If provides negative value
    if (kilometerInput < 0){
        return "Invalid value. Distance cannot be negative."
    }

    var meterOutput = kilometerInput * 1000;
    return meterOutput;
}
//Kilometer to Meter Converter Function ENDS here


//Budget Calculator function STARTS from here
function budgetCalculator (watchQuantity, phoneQuantity, laptopQuantity){
    //If provided negative value
    if (watchQuantity < 0 || phoneQuantity < 0 || laptopQuantity < 0){
        return "Invalid value. Product quantity cannot be negative."
    }
    
    //Listing the price of the products.
    var watchPrice = 50;
    var phonePrice = 100;
    var laptopPrice = 500;

    //Counting the total budget
    var totalBudget = (watchQuantity*watchPrice) + (phoneQuantity*phonePrice) + (laptopQuantity*laptopPrice);
    return totalBudget;
}
//Budget Calculator function ENDS here


//HotelCost Calculator function STARTS here. 
function hotelCost(daysInHotel) {
    //If provided negative value
    if (daysInHotel < 0){
        return "Invalid value. Number of Days cannot be negative";
    }
    
    //If value is 0
    if (daysInHotel == 0){
        return "There is no need to pay if you do not stay even for a day."
    }

    //Listing the renting amounts.
    var first10Days = 100;
    var second10Days = 80;
    var restOfTheDays = 50;

    //Calculation total bill if stayed for 10days or less.
    if (daysInHotel <= 10){
        var totalBill = first10Days * daysInHotel;
    }
    //Calculating total bill if stayed for 11 to 20days.
    else if (daysInHotel <= 20){
        var totalBill = first10Days*10 + second10Days*(daysInHotel-10);
    } 
    //Calculating total bill if stayed more than 20days.
    else {
        var totalBill = first10Days*10 + second10Days*10 + restOfTheDays*(daysInHotel-20);
    }
    //Returning the result.
    return totalBill;
}
//HotelCost Calculator function ENDS here.


//Finding the longer name of a friend using megaFriend function.
function megaFriend(friendsName){
    //If provides an empty array.
    if (friendsName.length <= 0){
        return "The array is empty.";
    }
    //If provides only one data.
    if (friendsName.length == 1){
        return friendsName[0];
    }
    //If provides valid data
    var biggestName = friendsName[0];
    var biggestLength = friendsName[0].length;
    for (var i=0; i < friendsName.length; i++){
        var currentLength = friendsName[i].length;
        if (currentLength > biggestLength){
           biggestLength = currentLength;
           biggestName = friendsName[i];
       }
    }
    return biggestName;
}
//Mega Friend function ENDS here.

//Test Output Results
// Kilometer to Meter
console.log("5 Kilometer to Meter: ", kilometerToMeter(5));
console.log("-5 Kilometer to Meter: ", kilometerToMeter(-5));
//Budget Calculator
console.log("Budget Calculator with Inputs of 3, 2 and 5: ", budgetCalculator(3, 2, 5));
console.log("Budget Calculator with Inputs of 3, -2 and 5: ", budgetCalculator(3, -2, 5));
//Hotel Cost
console.log("Counting Hotel Cost for 7days: ", hotelCost(7));
console.log("Counting Hotel Cost for 15days: ", hotelCost(15));
console.log("Counting Hotel Cost for 32days: ", hotelCost(32));
console.log("Counting Hotel Cost for -1days: ", hotelCost(-1));
console.log("Counting Hotel Cost for 0days: ", hotelCost(0));
//Mega Friend
console.log("Finding the biggest name from Morshed, Mahamudul and Rijwanul Hoque: ", megaFriend(["Morshed", "Mahamudul", "Rijwanul Hoque"]));
console.log("Finding the biggest name from an empty array: ", megaFriend([]));
console.log("Finding the biggest name from an array which contains only one value: ", megaFriend(["Morshed"]));
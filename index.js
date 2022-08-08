// // Code your solution in this file!

// const returnFirstTwoDrivers = function(array) {
//     return array.slice(0,2);
// };

// const returnLastTwoDrivers = function(array) {
//     return array.slice(array.length - 2);
// }

// const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// const createFareMultiplier = function (num) {
//     return function (fare) {
//         return fare * num;
//     }
// }


// const price = createFareMultiplier(2);
// function fareDoubler (fare) {
//     return price(fare);
// }

// const price2 = createFareMultiplier(3);
// function fareTripler (fare) {
//     return price2(fare);
// };

// function selectDifferentDrivers(arrayOfDrivers, ourFunc) {
//     if (ourFunc === returnFirstTwoDrivers) {
//         return returnFirstTwoDrivers(arrayOfDrivers);
//     } else if (ourFunc === returnLastTwoDrivers) {
//         return returnLastTwoDrivers(arrayOfDrivers);
//     }
// }




const returnFirstTwoDrivers = function(array) {
    return array.slice(0,2);
}

const returnLastTwoDrivers = function(array) {
    return array.slice(array.length - 2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(fare) {
    return function(num) {
        return num * fare
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(array, func) {
    if (func === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(array)
    } 

    if (func === returnLastTwoDrivers) {
        return returnLastTwoDrivers(array)
    }
}


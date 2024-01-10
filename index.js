const arrayOfDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  }

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(2, 4);
  }

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num1) {
    return function FareMultiplier(Fare) {return Fare * num1 }
  }

function fareDoubler(num1) {
    return num1 * 2;
  }

function fareTripler(num1) {
    return num1 * 3;
  }

function selectDifferentDrivers(arrayOfDrivers, func) {
    if (func === returnFirstTwoDrivers) {
      return arrayOfDrivers.slice(0, 2);
    } else if (func === returnLastTwoDrivers) {
      return arrayOfDrivers.slice(-2);
    }
  }

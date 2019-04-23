// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue);
};

function driverNamesWithRevenueOver(drivers, revenue) {
  newArray = drivers.filter(driver => driver.revenue > revenue);
  return newArray.map(driver => driver.name);
};

function exactMatch(drivers, obj){
  return drivers.filter(driver =>
    driver[Object.keys(obj)[0]] === obj[Object.keys(obj)[0]]);
}

function exactMatchToList(drivers,obj) {
  let myArray = drivers.filter(driver =>
    driver[Object.keys(obj)[0]] === obj[Object.keys(obj)[0]]);
    return myArray.map(driver => driver.name)
}

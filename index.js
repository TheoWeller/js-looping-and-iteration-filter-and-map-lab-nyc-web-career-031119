// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue);
};

function driverNamesWithRevenueOver(drivers, revenue) {
  newArray = drivers.filter(driver => driver.revenue > revenue);
  return newArray.map(driver => driver.name);
};

function exactMatch(drivers, object) {
  return drivers.filter(driver => Object.values(driver)[0] === object)
}

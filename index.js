let driver = {};

// Write your solution in this file!
let updateDriverWithKeyAndValue = (driver, key, value) => {
  return Object.assign({}, driver, { [key]: value });
}

let destructivelyUpdateDriverWithKeyAndValue = (driver, key, value) => {
  driver[key] = value;
  return driver
}

let deleteFromDriverByKey = (driver, key) => {
  let newObj = Object.assign({}, driver)
  delete newObj[key]
  return newObj
}

let destructivelyDeleteFromDriverByKey = (driver, key) => {
  delete driver[key]
  return driver
}

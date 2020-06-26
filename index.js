// Write your solution in this file!
let driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
    const newDriver = Object.assign({}, driver, {[key]: value});
    return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign(driver, {[key]: value});
}

function deleteFromDriverByKey(driver, key) {
    const cloneDriver = Object.assign({}, driver);
    delete cloneDriver[key];
    return cloneDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;
}
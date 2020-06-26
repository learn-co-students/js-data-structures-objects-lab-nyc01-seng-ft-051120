// Write your solution in this file!

let driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign({}, driver, {[key]:value})
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign(driver, {[key]:value})
    // or:   driver[key] = value;
        // return driver;
}


function deleteFromDriverByKey(driver, key) {
    // or: let newDriver = {...driver}
    let newDriver = Object.assign({}, driver);
    delete newDriver[key];
    return newDriver;
}


function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;
}

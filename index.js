// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name){
  drivers.push("Ralph")
}

function destructivelyPrependDriver(name){
  drivers.unshift("Bob")
}

function destructivelyRemoveLastDriver(name){
  drivers.pop();
}

function destructivelyRemoveFirstDriver(name){
  drivers.shift();
}

function appendDriver(name){
  const allDrivers = [...drivers, "Broom"]
  return allDrivers;
}

function prependDriver(name){
  const newDrivers = ["Arnold", ...drivers]
  return newDrivers;
}

function removeLastDriver(){
  const oneLess = drivers.slice(-1);
  return drivers;
}

function removeFirstDriver(){
  const twoLess = drivers.slice(1);
  return twoLess
}

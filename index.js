function receivesAFunction(callback) {
     callback();
}

function returnsANamedFunction() { 
    return function Name() {
        console.log("");
      };
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log("");
      };
}
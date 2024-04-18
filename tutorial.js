function calculatePrice(price, discount) {
    return price - (discount || 0);
}
var priceAfterDiscount = calculatePrice(100, 20);
function sum(message) {
    var numbers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numbers[_i - 1] = arguments[_i];
    }
    console.log('numbers', numbers);
    var doubled = numbers.map(function (num) { return num * 2; });
    console.log(doubled);
    var total = numbers.reduce(function (previous, current) {
        return previous + current;
    }, 0);
    return "".concat(message).concat(total);
}
var result = sum('The total is :', 1, 2, 3, 4, 5);
console.log(result);

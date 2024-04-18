// void คือ function ที่ไม่ส่งคืนค่าอะไรเลย
function logMessage(message) {
    console.log(message);
}
function processInput(input) {
    if (typeof input === 'number') {
        console.log(input * 2);
    }
    else {
        console.log(input.toLowerCase());
    }
}
processInput(10);
processInput('Hello');
function createEmployee(_a) {
    var id = _a.id;
    return { id: id, isActive: id % 2 === 0 };
}
var first = createEmployee({ id: 1 });
var second = createEmployee({ id: 2 });
console.log(first, second);

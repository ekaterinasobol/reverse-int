module.exports = function reverse (n) {
    let new_number = Math.abs(n).toString();
    return new_number.split("").reverse().join("");
}

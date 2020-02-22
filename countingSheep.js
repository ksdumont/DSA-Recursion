
function countSheep(num) {
    if (num === 0) {
        return 'All sheep jumped over the fence'
    } else {
        return `${num}: Another sheep jumps over the fence ` +
        countSheep(num - 1);
    }
}
console.log(countSheep(10))
function kangaroo(x1, v1, x2, v2) {
    if(x1 > x2 && v1 < v2 || x1 < x2 && v1 > v2) return 'YES'; 
    else return 'NO';
}

console.log(kangaroo(0, 2, 5, 3))
console.log(kangaroo(0, 3, 4, 2))
console.log(kangaroo(0, 3, 4, 2))
console.log(kangaroo(21, 6, 47, 3))
console.log(kangaroo(2, 1, 1, 2))


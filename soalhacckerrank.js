// function diagonalDifference(arr) {
//     var kirkanan = 0
//     var kanankir = 0

//     var lengthArr = arr.length
//     var sum = 0

//     for (var b = 0; b < arr.length; b++) {
//         kirkanan += arr[b][b]
//         kanankir += arr[b][lengthArr - 1 - b]
//     }

//     sum = kirkanan - kanankir
//     return sum

// }

// var arr = [
//     [11, 2, 4],
//     [4, 5, 6],
//     [10, 8, -12]
// ]

// console.log(diagonalDifference(arr));

//-------------------------------------

// Complete the plusMinus function below.
// function plusMinus(arr) {

//     var plus = 0
//     var minus = 0
//     var zero = 0
//     var arrlenght = arr.length

//     for (let index = 0; index < arr.length; index++) {
//         if (arr[index] > 0) {
//             plus++
//         } else if (arr[index] < 0) {
//             minus++
//         } else if (arr[index] == 0) {
//             zero++
//         }
//     }

//     var divPlus = plus / arrlenght
//     var divMinus = minus / arrlenght
//     var divZero = zero / arrlenght

//     console.log(divPlus.toFixed(arrlenght));
//     console.log(divMinus.toFixed(arrlenght));
//     console.log(divZero.toFixed(arrlenght));
// }

// var arr = [-4, 3, -9, 0, 4, 1, ]

// plusMinus(arr)

//----------------------------------------

// Complete the staircase function below.
// function staircase(n) {

//     var z = ''
//     var strip = 0
//     var i = 0
//     for (i = 0; i < n; i++) {
//         for (strip = 1; strip < n - i; strip++) {
//             z += '-'
//         }
//         for (let pagar = 0; pagar <= i; pagar++) {
//             z += '#'
//         }
//         z += '\n'
//     }

//     console.log(z);

// }

// staircase(6)

//--------------------------
// function miniMaxSum(arr) {

//     var min = 0
//     var max = 0
//     var minmin = Math.min.apply(null, arr)
//     var maxmax = Math.max.apply(null, arr)
//     if (minmin != maxmax) {
//         for (let index = 0; index < arr.length; index++) {
//             if (arr[index] != minmin) {
//                 max += arr[index]
//             }
//             if (arr[index] != maxmax) {
//                 min += arr[index]
//             }
//         }
//     } else {

//         for (let index = 1; index < arr.length; index++) {
//             max += arr[index]
//             min += arr[index]
//         }
//     }
//     console.log(`${min} ${max}`);
// }

// var arr = [5, 5, 5, 5, 5]

// miniMaxSum(arr)

// // Complete the birthdayCakeCandles function below.
// function birthdayCakeCandles(ar) {

//     var sumSame = 0
//     var maxmax = Math.max.apply(null, ar)

//     for (let index = 0; index < ar.length; index++) {
//         if (ar[index] == maxmax) {
//             sumSame++
//         }
//     }
//     console.log(typeof (sumSame));
//     console.log(sumSame);

// }

// var ar = [3, 2, 1, 3, 2, 2]
// var ar = [3, 2, 1, 3]

// birthdayCakeCandles(ar)


// function bonAppetit(bill, k, b) {

//     var diambil = bill[k]
//     var totalArray = 0
//     var pengurangB = b
//     var totalPengurang = 0
//     for (let index = 0; index < bill.length; index++) {
//         if (bill[index] != diambil) {
//             totalArray += bill[index]
//         }
//     }
//     var bagi = totalArray / 2
//     if (bagi == pengurangB) {
//         console.log("Bon Appetit");
//     } else {
//         totalPengurang = pengurangB - bagi
//         console.log(totalPengurang);
//     }

// }

// var bill = [3, 10, 2, 9]
// bonAppetit(bill, 1, 7)
// console.log(bonAppetit(bill, 1, 12));
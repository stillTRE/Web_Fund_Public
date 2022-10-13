// var count = 9;
// var countElement = document.querySelector(".count-1")

// function neilLikes() {
//     count++;
//     // console.log(count)
//     countElement.innerText = count + 'likes';
// }


// function neilLikes() {
//     var count = 9;
//     var countElement = document.querySelector(".count-1")

//         count++;
//         countElement.innerText = count + 'likes';
// }

// function nicholeLikes() {
//     var count = 12;
//     var countElement = document.querySelector(".count-2")

//     count++;
//     countElement.innerText = count + 'likes';
// }

// function jimLikes() {
//     var count = 9;
//     var countElement = document.querySelector(".count-3")

//     count++;
//     countElement.innerText = count + 'likes';
// }

// var num = 9;
// var numElement = document.querySelector(".num")

// function neilLikes() {
//     num++;
//     numElement.innerText = num + 'likes';

// }

// var num_2 = 12;
// var num_2Element = document.querySelector(".num_2")

// function nicholeLikes() {
//     num_2++;
//     num_2Element.innerText = num_2 + 'likes';
// }

// var num_3 = 9;
// var num_3Element = document.querySelector(".num_3")

// function jimLikes() {
//     num_3++;
//     num_3Element.innerText = num_3 + 'likes';
// }

var array = [9,12,9];
var arrayElement = document.querySelectorAll(".num");
console.log(arrayElement);

function add1(idx) {
    // console.log(idx);
    array[idx]++;
    arrayElement[idx].innerText = array[idx] + 'likes';
}
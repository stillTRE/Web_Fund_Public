function remove(element) {
   element.remove()
}


var array = [3,5,8];
var arrayElement = document.querySelectorAll(".num");
// console.log(arrayElement);

function add1(idx) {
    // console.log(idx);
    array[idx]++;
    arrayElement[idx].innerText = array[idx] + ' petting(s)';
}

function alertMessage() {
    var x = document.getElementById("select").value;
    var x.value = "This page is loading"
    alert(x.value);
}
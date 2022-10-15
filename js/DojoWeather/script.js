function alertMessage() {
    alert("Loading weather report...");
}



function accepted() {
    var cookies = document.querySelector('.cookies');
    cookies.remove();
}


var array = document.querySelectorAll(".temp1");
// console.log(arrayHighElement);

// var arrayLow = document.querySelectorAll(".low");
// // console.log(arrayLowElement);

function changeUnit() {
    for(var idx = 0; idx < array.length; idx++) {
        if(document.getElementById("CorF").value == 'fahrenheit'){
        array[idx].innerText = Math.round(array[idx].innerText * 9/5 + 32) ;
        }
        else(location.reload());
    }
}
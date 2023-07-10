const hamburger = document.querySelector(".hamburger");
const navul = document.querySelector(".navul");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navul.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navul.classList.remove("active");

}))

var cdDate1 = new Date("Dec 31, 2033 15:37:25").getTime();
var x = setInterval(function () {

    var curr = new Date().getTime(), d = cdDate1 - curr;
    var th=1000,st=60;
    var h = Math.floor((d%(th*st*st*24))/(th*st*st));
    var m = Math.floor((d%(th*st*st))/(th*st));
    var s = Math.floor((d%(th*st))/th);

    document.getElementById("time1").innerHTML = h+"h "+m+"m "+s+"s ";

    if (d < 0) {
        clearInterval(x);
        document.getElementById("time1").innerHTML = "Expired";
        document.getElementById("time1").style.color = "red";
    }
}, 1000);
var cdDate2 = new Date("Dec 31, 2023 15:37:25").getTime();
var x = setInterval(function () {

    var curr = new Date().getTime(), d = cdDate2 - curr;
    var th=1000,st=60;
    var h = Math.floor((d%(th*st*st*24))/(th*st*st));
    var m = Math.floor((d%(th*st*st))/(th*st));
    var s = Math.floor((d%(th*st))/th);

    document.getElementById("time2").innerHTML = h+"h "+m+"m "+s+"s ";

    if (d < 0) {
        clearInterval(x);
        document.getElementById("time2").innerHTML = "Expired";
        document.getElementById("time2").style.color = "red";
    }
}, 1000);
var cdDate3 = new Date("Dec 31, 2023 15:37:25").getTime();
var x = setInterval(function () {

    var curr = new Date().getTime(), d = cdDate3 - curr;
    var th=1000,st=60;
    var h = Math.floor((d%(th*st*st*24))/(th*st*st));
    var m = Math.floor((d%(th*st*st))/(th*st));
    var s = Math.floor((d%(th*st))/th);

    document.getElementById("time3").innerHTML = h+"h "+m+"m "+s+"s ";

    if (d < 0) {
        clearInterval(x);
        document.getElementById("time3").innerHTML = "Expired";
        document.getElementById("time3").style.color = "red";
    }
}, 1000);
var cdDate4 = new Date("Dec 31, 2023 15:37:25").getTime();
var x = setInterval(function () {

    var curr = new Date().getTime(), d = cdDate4 - curr;
    var th=1000,st=60;
    var h = Math.floor((d%(th*st*st*24))/(th*st*st));
    var m = Math.floor((d%(th*st*st))/(th*st));
    var s = Math.floor((d%(th*st))/th);

    document.getElementById("time4").innerHTML = h+"h "+m+"m "+s+"s ";

    if (d < 0) {
        clearInterval(x);
        document.getElementById("time4").innerHTML = "Expired";
        document.getElementById("time4").style.color = "red";
    }
}, 1000);
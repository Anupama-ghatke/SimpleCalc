/*Remainder Calculator*/
function reset2() {
    document.getElementById("out1").innerHTML = "";
    document.getElementById("out2").innerHTML = "";
    document.getElementById("out3").innerHTML = "";
    document.getElementById("in1").value = "";
    document.getElementById("in2").value = "";
}

function remainder(){
    var d1 = parseFloat(document.getElementById("in1").value);
    var d2 = parseFloat(document.getElementById("in2").value);
    document.getElementById("out1").innerHTML = d1 % d2;
    document.getElementById("out2").innerHTML = parseInt(d1/d2);
    document.getElementById("out3").innerHTML = d1/d2;

}
/*length conversion*/
function reset1() {
    document.getElementById("out").innerHTML = "0000";
    document.getElementById("out").style.color = "#cfcbcb";
    document.getElementById("in").value = "";
    document.getElementById("from").value = "S";
    document.getElementById("to").value = "S";
}
function length() {

    var tem = parseFloat(document.getElementById("in").value);
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;
    var result = parseFloat(0);

    if (from === "M" && to === "M") {
        result = tem;
    } else if (from === "M" && to === "F") {
        result = tem * 3.281;
    } else if (from === "M" && to === "I") {
        result = tem * 39.37;
    } else if (from === "F" && to === "M") {
        result = tem / 3.281;
    } else if (from === "F" && to === "F") {
        result = tem;
    } else if (from === "F" && to === "I") {
        result = tem * 12;
    } else if (from === "I" && to === "M") {
        result = tem / 39.37;
    } else if (from === "I" && to === "F") {
        result = tem / 12;
    } else if (from === "I" && to === "I") {
        result = tem;
    }
    document.getElementById("out").innerHTML = result;
    document.getElementById("out").style.color = "Black";
}

/*temprature conversion*/
function reset() {
    document.getElementById("out1").innerHTML = "Fahrenheit";
    document.getElementById("out1").style.color = "#cfcbcb";
    document.getElementById("out2").innerHTML = "Kelvin";
    document.getElementById("out2").style.color = "#cfcbcb";
    document.getElementById("in").value = "";
}
function celsius() {
    var c = parseFloat(document.getElementById("in").value);
    document.getElementById("out1").innerHTML = (c * 1.8) + 32;
    document.getElementById("out2").innerHTML = (c + 273.15);
    document.getElementById("out1").style.color = "Black";
    document.getElementById("out2").style.color = "Black";
}
function kelvin() {
    var k = parseFloat(document.getElementById("in").value);
    document.getElementById("out1").innerHTML = (k - 273.15);
    document.getElementById("out2").innerHTML = ((k - 273.15) * 9 / 5) + 32;
    document.getElementById("out1").style.color = "Black";
    document.getElementById("out2").style.color = "Black";
}
function fahrenheit() {
    var f = parseFloat(document.getElementById("in").value);
    document.getElementById("out1").innerHTML = (f - 32) / 1.8;
    document.getElementById("out2").innerHTML = ((f - 32) / 1.8) + 273.15;
    document.getElementById("out1").style.color = "Black";
    document.getElementById("out2").style.color = "Black";
}
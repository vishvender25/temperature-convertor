var tempInF = 0;
var tempInC = 0;


document.getElementById("convert1").addEventListener("click" , function(){
    tempInC = document.getElementById("temp-in-C").value;  
    var ans = ((9/5)*tempInC + 32).toFixed(2);
    document.getElementById("result1").innerHTML = ans + " F";
})

document.getElementById("convert2").addEventListener("click" , function(){
    tempInF = document.getElementById("temp-in-F").value;
    var ans = ((tempInF-32)*(5/9)).toFixed(2);
    document.getElementById("result2").innerHTML = ans + "C";  
})

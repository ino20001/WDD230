var d = new Date(document.lastModified);
var m = d.getMonth() + 1;
var date = d.getDate();
var y = d.getFullYear();
var h = d.getHours();
var min = d.getMinutes();
var s = d.getSeconds();
window.onload = function what(){
    document.getElementById('latestDate').innerHTML = `Last Update: ${m}/${date}/${y} ${h}:${min}:${s}`;
    };
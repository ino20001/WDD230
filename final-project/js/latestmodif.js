let d = new Date(document.lastModified);
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let m = months[d.getMonth()];
let date = d.getDate();
let y = d.getFullYear();
let h = d.getHours();
let min = d.getMinutes();
let s = d.getSeconds();


window.onload = function what(){
document.getElementById("latestDate").innerHTML = `Last Update: ${m}/${date}/${y} ${h}:${min}:${s}`;
document.getElementById("today").innerHTML = `${m} ${date}`;
document.getElementById("tomorrow").innerHTML = `${m} ${date + 1}`;
document.getElementById("day2").innerHTML = `${m} ${date + 2}`;
document.getElementById("day3").innerHTML = `${m} ${date + 3}`;
}
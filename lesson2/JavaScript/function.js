let d = new Date(document.lastModified);
let m = d.getMonth() + 1;
let date = d.getDate();
let y = d.getFullYear();
let h = d.getHours();
let min = d.getMinutes();
let s = d.getSeconds();
window.onload = function what(){
    document.getElementById('latestDate').innerHTML = `Last Update: ${m}/${date}/${y} ${h}:${min}:${s}`;
    };


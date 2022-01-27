let d = new Date(document.lastModified);
let m = d.getMonth() + 1;
let date = d.getDate();
let y = d.getFullYear();
let h = d.getHours();
let min = d.getMinutes();
let s = d.getSeconds();

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now);
window.onload = function what(){
    document.getElementById("today").innerHTML = `<em>${fulldate}</em>`;
    document.getElementById('latestDate').innerHTML = `Last Update: ${m}/${date}/${y} ${h}:${min}:${s}`;
    };

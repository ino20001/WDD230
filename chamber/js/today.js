
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
window.onload = function what(){
document.getElementById("today").innerHTML = `<em>${fulldate}</em>`;
}
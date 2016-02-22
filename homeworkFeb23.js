
var numberRides

function rentCalc(){
numberRides = document.getElementById('rides').value;

if (numberRides > 12) {
	alert("Buy a monthly pass, why don't ya??")

} if (numberRides < 13) {
	alert("Just pay per ride!")
	}
}
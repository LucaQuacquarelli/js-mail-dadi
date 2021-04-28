var userNumber = (Math.floor(Math.random()* 6)+ 1);
console.log(userNumber);
document.getElementById("user").innerHTML = userNumber;

var cpuNumber = (Math.floor(Math.random()* 6)+ 1);
console.log(cpuNumber);
document.getElementById("cpu").innerHTML = cpuNumber;

if (userNumber > cpuNumber) {
    document.getElementById("status").innerHTML = "Hai Vinto!!!";
} else if (userNumber < cpuNumber) {
    document.getElementById("status").innerHTML = "Hai Perso!!!";
} else {
    document.getElementById("status").innerHTML = "Pareggio!!!";
}
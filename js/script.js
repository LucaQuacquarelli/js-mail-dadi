var invited = ["1@mail", "2@mail", "3@mail", "4@mail", "5@mail", "6@mail"];

var email = prompt("Inserisci la tua Email");

var check = false;

for (var i = 0; i < invited.length; i++){
    if (email == invited[i]) {
        check = true;
    } 
}

if (check == false) {
    console.log("NON!! Sei stato invitato");
    document.getElementById("list").innerHTML = "NON!! Sei stato invitato";
} else {
    console.log("Sei stato invitato");
    document.getElementById("list").innerHTML = "Sei stato invitato";
}
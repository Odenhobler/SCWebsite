//Variablen
let tournamentState = 33; //Magic number hier soll einfach ungleich 0/1/2/3/4, aber auch ein Integer sein, ist also wurst
let tournamentMode;
let numberOfSpielfeld;
let listOfPlayers;

//Funktionen definieren
function syncTournamentState(newState, newMode, newSpielfeld) {    //Bei state=4 nur Abfrage, data ist dann state, modus, spielfeld
    jQuery.getJSON("/tournamentstate", {tournamentState: newState, tournamentMode: newMode, numberOfSpielfeld: newSpielfeld},
        function(data) {
            tournamentState = data.tournamentState;
            tournamentMode = data.tournamentMode;
            numberOfSpielfeld = data.numberOfSpielfeld;
        });
}

function switchDivs() {
    if (tournamentState == 0) {
        document.getElementById("sectionlobby").style.display = "none";
        document.getElementById("sectionmatches").style.display = "none";
        document.getElementById("sectiontree").style.display = "none";
        document.getElementById("sectionreset").style.display = "none";
    }
    if (tournamentState == 1) {
        document.getElementById("sectionlobby").style.display = "block";
        document.getElementById("sectionmatches").style.display = "none";
        document.getElementById("sectiontree").style.display = "none";
        document.getElementById("sectionreset").style.display = "none";
    }
    if (tournamentState == 2) {
        document.getElementById("sectionlobby").style.display = "none";
        document.getElementById("sectionmatches").style.display = "block";
        document.getElementById("sectiontree").style.display = "none";
        document.getElementById("sectionreset").style.display = "none";
    }
}

function addPlayer(){
    syncTournamentState (4, 0, 0);
    let newPlayer = {name, chars: []};
    newPlayer.name =  prompt("Name des Spielers?");
    for (let i = 0; i < numberOfSpielfeld; i++){
        char = parseInt(prompt("Charakter " + (i+1) + "?"), 10);
        newPlayer.chars.push(char);
    }
    jQuery.getJSON("/listofplayers",{newPlayer},
        function(data){
            listOfPlayers = data.listOfPlayers;
            document.getElementById("enlp").innerHTML = listOfPlayers;
        });
}

//Browserseite initialisieren
document.addEventListener('DOMContentLoaded', syncTournamentState(4, 0, 0), false);
document.addEventListener('DOMContentLoaded', switchDivs(), false);
//Spielerliste in Lobby schreiben --> addPlayer leer schicken --> Aber fügt er dann einen leeren hinzu?

//Header
function showDivLobby() {
    document.getElementById("sectionlobby").style.display = "block";
    document.getElementById("sectionmatches").style.display = "none";
    document.getElementById("sectiontree").style.display = "none";
    document.getElementById("sectionreset").style.display = "none";
}

function showDivMatches() {
    document.getElementById("sectionlobby").style.display = "none";
    document.getElementById("sectionmatches").style.display = "block";
    document.getElementById("sectiontree").style.display = "none";
    document.getElementById("sectionreset").style.display = "none";
}

function showDivTree() {
    document.getElementById("sectionlobby").style.display = "none";
    document.getElementById("sectionmatches").style.display = "none";
    document.getElementById("sectiontree").style.display = "block";
    document.getElementById("sectionreset").style.display = "none";
}

function showDivReset() {
    if (prompt("Passwort") == "docboker") {
        document.getElementById("sectionlobby").style.display = "none";
        document.getElementById("sectionmatches").style.display = "none";
        document.getElementById("sectiontree").style.display = "none";
        document.getElementById("sectionreset").style.display = "block";
    } else {
        alert("Passwort falsch");
    }

}

document.getElementById("btnlobby").addEventListener('click',showDivLobby,false);
document.getElementById("btnmatches").addEventListener('click',showDivMatches,false);
document.getElementById("btntree").addEventListener('click',showDivTree,false);
document.getElementById("btnreset").addEventListener('click',showDivReset,false);

//Reset-Seite
function setToZero() {
    syncTournamentState(0, 0, 0);
    switchDivs();
}

function setToOne() {
    modus = parseInt(prompt("Welcher Modus? 0=Single, 1=Double, 2=Triple, 3=Liga, 4=Liga+Playoffs"), 10);
    spielfelds = parseInt(prompt("Wieviele Spielfelder?"), 10);
    syncTournamentState (1, modus, spielfelds);
    switchDivs();
}

function setToTwo() {
    syncTournamentState(2, 0, 0);
    switchDivs();
}

function kickPlayer() {
    player = prompt("Wen?");
    jQuery.getJSON("/kickplayer", {player},
            
    )
}

//Testbutton
function testAlert() {
    jQuery.getJSON("/testbutton", {}, 
    function (data){
        testAlert = data.testAlert;
        alert(testAlert);
    });
}

document.getElementById("btntest").addEventListener('click',testAlert,false);

//Set Youtube-Link muss noch eingefügt werden

document.getElementById("buttonsetto0").addEventListener('click',setToZero,false);
document.getElementById("buttonsetto1").addEventListener('click',setToOne,false);
document.getElementById("buttonsetto2").addEventListener('click',setToTwo,false);
document.getElementById("buttonkickplayer").addEventListener('click',kickPlayer,false);

//Lobby 

//Button Neuer Spieler
document.getElementById("btnaddpl").addEventListener('click',addPlayer,false);

//      VARIABLEN
let tournamentState = 33; //Magic number hier soll einfach ungleich 0/1/2/3/4, aber auch ein Integer sein, ist also wurst
let tournamentMode;
let numberOfSpielfeld;
let listOfPlayers;
let listOfChars;

//      BROWSERSEITE INITIALISIEREN

function switchDivs() {
    if (tournamentState == 0) {
        document.getElementById("sectionlobby").style.display = "none";
        document.getElementById("btnaddp").style.display = "none";
        document.getElementById("sectionmatches").style.display = "none";
        document.getElementById("sectiontree").style.display = "none";
        document.getElementById("sectionreset").style.display = "none";
    }
    if (tournamentState == 1) {
        document.getElementById("sectionlobby").style.display = "block";
        document.getElementById("btnaddp").style.display = "block";
        document.getElementById("sectionmatches").style.display = "none";
        document.getElementById("sectiontree").style.display = "none";
        document.getElementById("sectionreset").style.display = "none";
    }
    if (tournamentState == 2) {
        document.getElementById("sectionlobby").style.display = "none";
        document.getElementById("btnaddp").style.display = "none";
        document.getElementById("sectionmatches").style.display = "block";
        document.getElementById("sectiontree").style.display = "none";
        document.getElementById("sectionreset").style.display = "none";
    }
}

function makeTableHTML(parray, carray) {
    var result = "<table border=1>";
    for(var i=0; i<parray.length; i++) {
        result += "<tr>";
        // result += "<td>" + myArray[0].length + "</td>";
        result += "<td>"+parray[i]+"</td>";
        for(var j=0; j<numberOfSpielfeld; j++){
            result += "<td>"+carray[i][j]+"</td>";
        }
        result += "</tr>";
    }
    result += "</table>";

    return result;
}

function playerListToLobby(){
    document.getElementById("rt").innerHTML = makeTableHTML(listOfPlayers, listOfChars);
    // document.getElementById("rt").innerHTML = listOfPlayers;
    // for (let i = 0; i < listOfPlayers.length; i++) {
        // alert(i)
    //     let row = newTable.insertRow(-1);
    //     let nameCell = row.insertCell(-1);
    //     nameCell.appendChild(document.createTextNode("hi"));
    // //     for (let j = 0; j < numberOfSpielfeld.length; j++) {
    //         let charCell = row.insertCell(-1);
    //         charCell.appendChild(document.createTextNode(listOfChars[i][j]));
    //         }
    // }
    // let currentDiv = document.getElementById("placementdummy"); 
    // document.body.insertBefore(newTable, currentDiv);
    // document.getElementById("placementdummy").innerHTML = listOfPlayers; //Testing only
    // document.getElementById("rt").innerHTML = listOfChars; //Testing only
    
    //alte Liste muss dann noch gelöscht werden 
}

function godFunction(newState, newMode, newSpielfeld) {    //Bei state=4 nur Abfrage, data ist dann state, modus, spielfeld
    jQuery.getJSON("/tournamentstate", {tournamentState: newState, tournamentMode: newMode, numberOfSpielfeld: newSpielfeld},
        function(data) {
            tournamentState = data.tournamentState;
            tournamentMode = data.tournamentMode;
            numberOfSpielfeld = data.numberOfSpielfeld;
            listOfPlayers = data.listOfPlayers;
            listOfChars = data.listOfChars;
            playerListToLobby();
            //switchDivs();
            if (tournamentState == 2) {
                auto_refresh();
            }
            setTimeout(godFunction, 4999);
        });
}

document.addEventListener('DOMContentLoaded', godFunction(4, 0, 0), false);
//document.addEventListener('DOMContentLoaded', switchDivs(), false);            //commented away as it triggered before callback was returned


//      HEADER


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
    if (prompt("Passwort") == "d") {
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


//      LOBBY

function addPlayer(){
    godFunction (4, 0, 0);
    let newPlayer;
    let newChars = [];
    newPlayer =  prompt("Name des Spielers?");
    for (let i = 0; i < numberOfSpielfeld; i++){
        char = parseInt(prompt("Charakter " + (i+1) + "?"), 10);
        newChars.push(char);
    }
    $.ajax({
      type: "POST",
      contentType: "application/json;charset=utf-8",
      url: "/listofplayers",
      traditional: "true",
      data: JSON.stringify({name: newPlayer, chars: newChars}),
      dataType: "json",
      success: function(data) {
        listOfPlayers = data.listOfPlayers;
        listOfChars = data.listOfChars;
        playerListToLobby(); }
      });
}


//Button Neuer Spieler
document.getElementById("btnaddp").addEventListener('click',addPlayer,false);

//      MATCHES

//Refresh function (gets included in god function)
function auto_refresh() {
    $.ajax({
        url: "/listofmatches",
        success: function(data) {
          listOfMatches = data.listOfMatches
          printListOfMatches(); 
        }
        });
    };

//write matches to match section
function printListOfMatches() {
    document.getElementById("livelist").innerHTML = listOfMatches;
}

//      RESET


function setToZero() {
    godFunction(0, 0, 0);
    switchDivs();
}

function setToOne() {
    modus = parseInt(prompt("Welcher Modus? 0=Single, 1=Double, 2=Triple, 3=Liga, 4=Liga+Playoffs"), 10);
    spielfelds = parseInt(prompt("Wieviele Spielfelder?"), 10);
    godFunction (1, modus, spielfelds);
    switchDivs();
}

function setToTwo() {
    godFunction(2, 0, 0);
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
        alert(tournamentState);
    });
}

document.getElementById("btntest").addEventListener('click',testAlert,false);

//Set Youtube-Link muss noch eingefügt werden

document.getElementById("buttonsetto0").addEventListener('click',setToZero,false);
document.getElementById("buttonsetto1").addEventListener('click',setToOne,false);
document.getElementById("buttonsetto2").addEventListener('click',setToTwo,false);
document.getElementById("buttonkickplayer").addEventListener('click',kickPlayer,false);
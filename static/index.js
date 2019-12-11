//      VARIABLEN
let tournamentState = 33; //Magic number hier soll einfach ungleich 0/1/2/3/4, aber auch ein Integer sein, ist also wurst
let tournamentMode;
let numberOfSpielfeld;
let listOfPlayers;
let listOfChars;

//      BROWSERSEITE INITIALISIEREN

function switchDivs() {
    if (tournamentState == 0) {
        //document.getElementById("sectionlobby").style.display = "none";
        document.getElementById("btnaddp").style.display = "none";
        //document.getElementById("sectionmatches").style.display = "none";
        //document.getElementById("sectiontree").style.display = "none";
        //document.getElementById("sectionreset").style.display = "none";
    }
    if (tournamentState == 1) {
        //document.getElementById("sectionlobby").style.display = "block";
        document.getElementById("btnaddp").style.display = "block";
        //document.getElementById("sectionmatches").style.display = "none";
        //document.getElementById("sectiontree").style.display = "none";
        //document.getElementById("sectionreset").style.display = "none";
    }
    if (tournamentState == 2) {
        //document.getElementById("sectionlobby").style.display = "none";
        //document.getElementById("btnaddp").style.display = "none";
        //document.getElementById("sectionmatches").style.display = "block";
        //document.getElementById("sectiontree").style.display = "none";
        //document.getElementById("sectionreset").style.display = "none";
    }
}

function makeTableHTML(parray, carray) {
    var result = '<table class="rostertable">';
    for(var i=0; i<parray.length; i++) {
        result += "<tr>";
        // result += "<td>" + myArray[0].length + "</td>";
        result += '<td class="rostertablecellplayer">'+parray[i]+'</td>';
        for(var j=0; j<numberOfSpielfeld; j++){
            //result += "<td>"+carray[i][j]+"</td>";        working solution; shows ints
            if (carray[i][j] == 0) {
                iconFighter = '<img class="icon" src="../static/icons/sc6_2b-icon.jpg" alt="2B"><br>2B'
            } 
            if (carray[i][j] == 1) {
                iconFighter = '<img class="icon" src="../static/icons/sc6_amy-icon.jpg" alt="amy"><br>Amy'
            } 
            if (carray[i][j] == 2) {
                iconFighter = '<img class="icon" src="../static/icons/sc6_astaroth-icon.jpg" alt="astaroth"><br>Astaroth'
            } 
            if (carray[i][j] == 3) {
                iconFighter = '<img class="icon" src="../static/icons/sc6_azwell-icon.jpg" alt="azwell"><br>Azwell'
            } 
            if (carray[i][j] == 4) {
                iconFighter = '<img class="icon" src="../static/icons/sc6_cassandra-icon.jpg" alt="cassandra"><br>Cassandra'
            } 
            if (carray[i][j] == 5) {
                iconFighter = '<img class="icon" src="../static/icons/sc6_cervantes-icon.jpg" alt="cervantes"><br>Cervantes'
            } 
            if (carray[i][j] == 6) {
                iconFighter = '<img class="icon" src="../static/icons/sc6_geralt-icon.jpg" alt="geralt"><br>Geralt'
            } 
            if (carray[i][j] == 7) {
                iconFighter = '<img class="icon" src="../static/icons/sc6_grau-icon.jpg" alt="groh"><br>Groh'
            } 
            if (carray[i][j] == 8) {
                iconFighter = '<img class="icon" src="../static/icons/sc6_hilde-icon.jpg" alt="hilde"><br>Hilde'
            } 
            if (carray[i][j] == 9) {
                iconFighter = '<img class="icon" src="../static/icons/sc6_ivy-icon.jpg" alt="ivy"><br>Ivy'
            } 
            if (carray[i][j] == 10) {
                iconFighter = '<img class="icon" src="../static/icons/sc6_kilik-icon.jpg" alt="kilik"><br>Kilik'
            } 
            if (carray[i][j] == 11) {
                iconFighter = '<img class="icon" src="../static/icons/sc6_maxi-icon.jpg" alt="maxi"><br>Maxi'
            } 
            if (carray[i][j] == 12) {
                iconFighter = '<img class="icon" src="../static/icons/sc6_mina-icon.jpg" alt="seongmina"><br>Seong-Mina'
            } 
            if (carray[i][j] == 13) {
                iconFighter = '<img class="icon" src="../static/icons/sc6_mitsurugi-icon.jpg" alt="mitsurugi"><br>Mitsurugi'
            } 
            if (carray[i][j] == 14) {
                iconFighter = '<img class="icon" src="../static/icons/sc6_nightmare-icon.jpg" alt="nightmare"><br>Nightmare'
            } 
            if (carray[i][j] == 15) {
                iconFighter = '<img class="icon" src="../static/icons/sc6_raphael-icon.jpg" alt="raphael"><br>Raphael'
            } 
            if (carray[i][j] == 16) {
                iconFighter = '<img class="icon" src="../static/icons/sc6_siegfried-icon.jpg" alt="siegfried"><br>Siggi'
            } 
            if (carray[i][j] == 17) {
                iconFighter = '<img class="icon" src="../static/icons/sc6_sophitia-icon.jpg" alt="sophitia"><br>Sophitia'
            } 
            if (carray[i][j] == 18) {
                iconFighter = '<img class="icon" src="../static/icons/sc6_taki-icon.jpg" alt="taki"><br>Taki'
            } 
            if (carray[i][j] == 19) {
                iconFighter = '<img class="icon" src="../static/icons/sc6_talim-icon.jpg" alt="talim"><br>Talim'
            } 
            if (carray[i][j] == 20) {
                iconFighter = '<img class="icon" src="../static/icons/sc6_tira-icon.jpg" alt="tira"><br>Tira'
            } 
            if (carray[i][j] == 21) {
                iconFighter = '<img class="icon" src="../static/icons/sc6_voldo-icon.jpg" alt="voldo"><br>Voldo'
            } 
            if (carray[i][j] == 22) {
                iconFighter = '<img class="icon" src="../static/icons/sc6_xianghua-icon.jpg" alt="xianghua"><br>Xianghua'
            } 
            if (carray[i][j] == 23) {
                iconFighter = '<img class="icon" src="../static/icons/sc6_yoshimitsu-icon.jpg" alt="yoshimitsu"><br>Yoshimitsu'
            } 
            if (carray[i][j] == 24) {
                iconFighter = '<img class="icon" src="../static/icons/sc6_zasalamel-icon.jpg" alt="zasalamel"><br>Zasalamel'
            } 
            result += '<td class="rostertablecellfighter">'+iconFighter+'</td>';
        }
        result += "</tr>";
    }
    result += "</table>";

    return result;
}

function playerListToLobby(){
    document.getElementById("rt").innerHTML = makeTableHTML(listOfPlayers, listOfChars);
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
            switchDivs();
            if (tournamentState == 2) {
                refreshListOfMatches();
            }
            //setTimeout(godFunction, 4999);            //uncommented as it fucked up the whole thing
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
    godFunction(4, 0, 0);
}

function showDivMatches() {
    document.getElementById("sectionlobby").style.display = "none";
    document.getElementById("sectionmatches").style.display = "block";
    document.getElementById("sectiontree").style.display = "none";
    document.getElementById("sectionreset").style.display = "none";
    godFunction(4, 0, 0);
}

function showDivTree() {
    document.getElementById("sectionlobby").style.display = "none";
    document.getElementById("sectionmatches").style.display = "none";
    document.getElementById("sectiontree").style.display = "block";
    document.getElementById("sectionreset").style.display = "none";
    godFunction(4, 0, 0);
}

function showDivReset() {
    if (prompt("Passwort") == "d") {
        document.getElementById("sectionlobby").style.display = "none";
        document.getElementById("sectionmatches").style.display = "none";
        document.getElementById("sectiontree").style.display = "none";
        document.getElementById("sectionreset").style.display = "block";
        godFunction(4, 0, 0);
    } else {
        alert("Passwort falsch");
    }

}

document.getElementById("btnlobby").addEventListener('click',showDivLobby,false);
document.getElementById("btnmatches").addEventListener('click',showDivMatches,false);
document.getElementById("btntree").addEventListener('click',showDivTree,false);
document.getElementById("btnreset").addEventListener('click',showDivReset,false);

//Twitch frame
let options = {
    width: 220,
    height: 180,
    channel: "odenhobler"
  };
  let player = new Twitch.Player("twitchframe", options);
  player.setVolume(0.5);


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
function refreshListOfMatches() {
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
    jQuery.getJSON("/kickplayer", {name:player},
            
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
//      VARIABLEN

let tournamentState; //Magic number hier soll einfach ungleich 0/1/2/3/4, aber auch ein Integer sein, ist also wurst
let tournamentMode;
let numberOfSpielfeld;
let listOfPlayers;
let listOfChars;

//      BROWSERSEITE INITIALISIEREN

function godFunction(newState, newMode, newSpielfeld) {    //Bei state=4 nur Abfrage, data ist dann state, modus, spielfeld
    jQuery.getJSON("/tournamentstate", {tournamentState: newState, tournamentMode: newMode, numberOfSpielfeld: newSpielfeld},
        function(data) {
            tournamentState = data.tournamentState;
            tournamentMode = data.tournamentMode;
            numberOfSpielfeld = data.numberOfSpielfeld;
            listOfPlayers = data.listOfPlayers;
            listOfChars = data.listOfChars;
            randomSeed = data.randomSeed;
            randomField = data.randomField;
            playerListToLobby();
        });
}

document.addEventListener('DOMContentLoaded', godFunction(4, 0, 0), false);

function resetLobby() {
    //reset lobby
}

//Twitch frame
let options = {
    width: 220,
    height: 180,
    channel: "odenhobler"
  };
  let player = new Twitch.Player("twitchframe", options);
  player.setVolume(0.5);


//      LOBBY

//OLD INT INPUT FORM, (HOPEFULLY) OBSOLETE

/*function addPlayer(){
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
        randomSeed = data.randomSeed;
        randomField = data.randomField;
        playerListToLobby(); }
      });
}*/

//new input form
$('#btnaddp').click(function(){
    document.getElementById("inputfield").style.display = "block"; 
});

$('#submitname').click(function(){
    let newPlayer = ($("#inputname").val());
    let charone;
    let chartwo;
    let newChars = [];

    //transformation dragondrop to integer for Char 1
    if (($("#charone").val()) == "2B") {
        charone = 0;
    }
    if (($("#charone").val()) == "Amy") {
        charone = 1;
    }
    if (($("#charone").val()) == "Astaroth") {
        charone = 2;
    }
    if (($("#charone").val()) == "Azwell") {
        charone = 3;
    }
    if (($("#charone").val()) == "Cassandra") {
        charone = 4;
    }
    if (($("#charone").val()) == "Cervantes") {
        charone = 5;
    }
    if (($("#charone").val()) == "Geralt") {
        charone = 6;
    }
    if (($("#charone").val()) == "Groh") {
        charone = 7;
    }
    if (($("#charone").val()) == "Hilde") {
        charone = 8;
    }
    if (($("#charone").val()) == "Ivy") {
        charone = 9;
    }
    if (($("#charone").val()) == "Kilik") {
        charone = 10;
    }
    if (($("#charone").val()) == "Maxi") {
        charone = 11;
    }
    if (($("#charone").val()) == "Seong-Mina") {
        charone = 12;
    }
    if (($("#charone").val()) == "Mitsurugi") {
        charone = 13;
    }
    if (($("#charone").val()) == "Nightmare") {
        charone = 14;
    }
    if (($("#charone").val()) == "Raphael") {
        charone = 15;
    }
    if (($("#charone").val()) == "Siggi") {
        charone = 16;
    }
    if (($("#charone").val()) == "Sophitia") {
        charone = 17;
    }
    if (($("#charone").val()) == "Taki") {
        charone = 18;
    }
    if (($("#charone").val()) == "Talim") {
        charone = 19;
    }
    if (($("#charone").val()) == "Tira") {
        charone = 20;
    }
    if (($("#charone").val()) == "Voldo") {
        charone = 21;
    }
    if (($("#charone").val()) == "Xianghua") {
        charone = 22;
    }
    if (($("#charone").val()) == "Yoshimitsu") {
        charone = 23;
    }
    if (($("#charone").val()) == "Zasalamel") {
        charone = 24;
    }
    //same for Char 2
    if (($("#chartwo").val()) == "2B") {
        chartwo = 0;
    }
    if (($("#chartwo").val()) == "Amy") {
        chartwo = 1;
    }
    if (($("#chartwo").val()) == "Astaroth") {
        chartwo = 2;
    }
    if (($("#chartwo").val()) == "Azwell") {
        chartwo = 3;
    }
    if (($("#chartwo").val()) == "Cassandra") {
        chartwo = 4;
    }
    if (($("#chartwo").val()) == "Cervantes") {
        chartwo = 5;
    }
    if (($("#chartwo").val()) == "Geralt") {
        chartwo = 6;
    }
    if (($("#chartwo").val()) == "Groh") {
        chartwo = 7;
    }
    if (($("#chartwo").val()) == "Hilde") {
        chartwo = 8;
    }
    if (($("#chartwo").val()) == "Ivy") {
        chartwo = 9;
    }
    if (($("#chartwo").val()) == "Kilik") {
        chartwo = 10;
    }
    if (($("#chartwo").val()) == "Maxi") {
        chartwo = 11;
    }
    if (($("#chartwo").val()) == "Seong-Mina") {
        chartwo = 12;
    }
    if (($("#chartwo").val()) == "Mitsurugi") {
        chartwo = 13;
    }
    if (($("#chartwo").val()) == "Nightmare") {
        chartwo = 14;
    }
    if (($("#chartwo").val()) == "Raphael") {
        chartwo = 15;
    }
    if (($("#chartwo").val()) == "Siggi") {
        chartwo = 16;
    }
    if (($("#chartwo").val()) == "Sophitia") {
        chartwo = 17;
    }
    if (($("#chartwo").val()) == "Taki") {
        chartwo = 18;
    }
    if (($("#chartwo").val()) == "Talim") {
        chartwo = 19;
    }
    if (($("#chartwo").val()) == "Tira") {
        chartwo = 20;
    }
    if (($("#chartwo").val()) == "Voldo") {
        chartwo = 21;
    }
    if (($("#chartwo").val()) == "Xianghua") {
        chartwo = 22;
    }
    if (($("#chartwo").val()) == "Yoshimitsu") {
        chartwo = 23;
    }
    if (($("#chartwo").val()) == "Zasalamel") {
        chartwo = 24;
    };
    //document.getElementById("inputfield").style.display = "none";
    newChars.push(charone);
    newChars.push(chartwo);
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
        randomSeed = data.randomSeed;
        randomField = data.randomField;
        playerListToLobby(); }
      });
});


function makeTableHTML(parray, carray, rseed, rfield) {
    var result = '<table class="rostertable">';
    for(var i=0; i<parray.length; i++) {
        result += '<tr>';
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
        result += '<td class="cellrandomseed">Seed:<br>'+rfield[i*2]+' | '+rfield[i*2+1]+'<br>'+rseed[i*2]+' | '+rseed[i*2+1]+'</td></tr>';
    }
    result += '</table>';

    return result;
}

function playerListToLobby(){
    document.getElementById("rt").innerHTML = makeTableHTML(listOfPlayers, listOfChars, randomSeed, randomField);
}



//      BUTTONS 
//document.getElementById("btnaddp").addEventListener('click',showInputField(),false);
//document.getElementById("btnrefresh").addEventListener('click', godFunction(4, 0, 0), false); // doesn't work for whatever reason
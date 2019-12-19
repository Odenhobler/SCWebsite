from flask import Flask, render_template, jsonify, request
# from .apptest import anotherbutton
from trees import *
app = Flask (__name__, static_url_path='/static')

import random

state = 0 #0 before initialization, 1 after, 2 for running tournament
mode = 1
#Possible tournament modes: 0 Single Elimination; 1 Double; 2 Triple; 3 League; 4 League + Play-Offs
cpp = 2    #Characters per player. 1 in League modes, 1-3 in Elimination modes
            # NEEDS TO BE FIXED TO 2 FOR 2019/12/20

class lop:  #list of players
    def __init__(self):
        self.names = []
        self.chars = []
        self.rseed = []
        self.rfield = []
    def info(self, i):
        if i is None:
            print("names: " + str(self.names) + ", chars: " + str(self.chars))
        else:
            print("index: " + str(i), "name: " + str(self.names[i]) + ", char: " + str(self.chars[i]))
    
    def append_a_b(self):
        randomnumber = random.randrange(0,100,1)
        if randomnumber >= 50:
            self.rfield.append("A")
            self.rfield.append("B")
        else:
            self.rfield.append("B")
            self.rfield.append("A")
listOfPlayers = lop()

@app.route('/')
def index():
    return render_template("index.html")

# Tournament state set/info function
# To be called with argument tournamentState=0, 1, 2 or else to set state accordingly or to ask for current state.
@app.route('/tournamentstate')
def get_state():
    global state, mode, cpp, listOfPlayers
    ask = request.args.get('tournamentState', type=int)
    if(ask==0):
        #To set state 0, no further input is required. Everything is set to default values.
        mode = 1
        cpp = 1
        listOfPlayers.names = []
        listOfPlayers.chars = []
        state = 0
        return jsonify(
            tournamentState=state,
            tournamentMode=mode,
            numberOfSpielfeld=cpp
        )
    elif(ask==1):
        #To set state 1, tournament mode and number of Spielfelder are required as input. Internal variables are set accordingly.
        mode = request.args.get('tournamentMode', type=int)
        cpp = request.args.get('numberOfSpielfeld', type=int)
        listOfPlayers.names = []
        listOfPlayers.chars = []
        state = 1
        return jsonify(
            tournamentState=state,
            tournamentMode=mode,
            numberOfSpielfeld=cpp
        )
    elif(ask==2):
        #To set state 2, no further input is required.
        #This is where the create_tree() functions or similar will be called.
        state = 2
        return jsonify(
            tournamentState=state,
            tournamentMode=mode,
            numberOfSpielfeld=cpp
        )
    else:
        return jsonify(
            tournamentState=state,
            tournamentMode=mode,
            numberOfSpielfeld=cpp,
            listOfPlayers=listOfPlayers.names,
            listOfChars=listOfPlayers.chars,
            randomSeed=listOfPlayers.rseed,
            randomField=listOfPlayers.rfield
        )
# Reset lobby
def reset_lobby():
    global listOfPlayers
    del listOfPlayers
    listOfPlayers = lop()

# Add player
@app.route('/listofplayers', methods=['POST'])
def add_player():
    global listOfPlayers
    # if request.method == 'POST':  #POST is the only method anyway
    inp = request.get_json()
    #Check if player name exists; reject entry if it does
    if inp['name'] in listOfPlayers.names:
        print("Name schon vergeben: " + inp['name'])
        return jsonify(alert = "Name " + inp['name'] + " ist schon vergeben!"), 451
    #Check if number of characters is correct; add player and chars to list
    if len(inp['chars']) == cpp:
        listOfPlayers.names.append(inp['name'])
        listOfPlayers.chars.append(inp['chars'])
        listOfPlayers.rseed.append(random.randrange(0,100,1))
        listOfPlayers.rseed.append(random.randrange(0,100,1))
        listOfPlayers.append_a_b()
    else:
        print ("Falsche Anzahl an Charakteren. Eingegeben " + str(len(inp['chars'])) + ", erwartet " + str(cpp) )
        return jsonify(alert = "Falsche Anzahl an Charakteren. Eingegeben " + str(len(inp['chars'])) + ", erwartet " + str(cpp) )
    # else: return jsonify(alert = "Need POST method"), 400
    if inp['name'] == 'totalreset':
        print('hier müsste nun eigentlich ein reset stattfinden')
        reset_lobby()
    print ([listOfPlayers.names,listOfPlayers.chars,listOfPlayers.rseed,listOfPlayers.rfield])
    return jsonify(
        # listOfPlayers=[listOfPlayers.names,listOfPlayers.chars]
        listOfPlayers=listOfPlayers.names,
        listOfChars=listOfPlayers.chars,
        randomSeed=listOfPlayers.rseed,
        randomField=listOfPlayers.rfield
    ), 200

@app.route('/kickplayer')
def kik_player():
    global listOfPlayers
    plname=request.args.get('name', type=str)
    pos = listOfPlayers.names.index(plname)
    del listOfPlayers.names[pos]
    del listOfPlayers.chars[pos]
    return jsonify(listOfPlayers=listOfPlayers)

# Frontend/backend testalert
@app.route('/testbutton')
def test_button():
    # return(jsonify(testAlert=anotherbutton(5)))
    return jsonify(
        testAlert="mess"
    )
    
@app.route('/listofmatches')
def dummytree():
    return jsonify(listOfMatches = ["Match 1", "Match 2", "Muuuuria"])
    # return jsonify(listOfMatches = dummymatches(7))

    # return '', 200

if __name__ == '__main__':
	app.run(host='0.0.0.0')
from flask import Flask, render_template, jsonify, request
# from .apptest import anotherbutton
app = Flask (__name__, static_url_path='/static')

state = 0 #0 before initialization, 1 after, 2 for running tournament
mode = 1
#Possible tournament modes: 0 Single Elimination; 1 Double; 2 Triple; 3 League; 4 League + Play-Offs
cpp = 2    #Characters per player. 1 in League modes, 1-3 in Elimination modes

class lop:  #list of players
    names = []
    chars = [42]
    def info(self, i):
        if i is None:
            print("names: " + str(self.names) + ", chars: " + str(self.chars))
        else:
            print("index: " + str(i), "name: " + str(self.names[i]) + ", char: " + str(self.chars[i]))
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
            listOfChars=listOfPlayers.chars
        )

# Add player
@app.route('/listofplayers', methods=['GET', 'POST'])
def add_player():
    global listOfPlayers
    # plname=request.args.get('name', type=str)
    # print("Hi. My name is " + plname)
    #TODO Warn if player name already exists
    if request.method == 'POST':
        CONTENT = request.get_json()
        print (CONTENT)
        '''
            Aktuelle Situation: CONTENT wird korrekt übermittelt (vgl. Konsole, während Flask läuft). Wie kann ich dieses JSON-Objekt in ein Python-Objekt umwandeln, das verarbeitet und wieder an Javascript zurückgesendet werden kann (vgl. return)?
        '''
    # return '', 200
	# listOfPlayers.names = CONTENT.name  #Append
    # listOfPlayers.chars = CONTENT.chars #Append
    # print(is_json(chars))
    # chars=request.args.get('chars', type=str)   #int[], dim=cpp. Maybe add a check if the dimension is correct.
    # print("Hi. My character is ")
    # print(chars[0])
    # if len(plname) > 0: #Function can also be called without arguments to simply return the current list of players
    #     listOfPlayers.names.append(plname)
    #     # listOfPlayers.chars.append(chars)
    #     listOfPlayers.chars=chars1
    return jsonify(
    #     listOfPlayers=CONTENT.name,
    #     listOfChars=CONTENT.chars
        # listOfPlayers=listOfPlayers.names,
        listOfPlayers="PLAYER1",
        # listOfChars=listOfPlayers.chars
        listOfChars="CHAR1"
    ), 223
#    if request.method == 'POST':
# 	   names = request.get_json()
# 		   for name in names:
# 			print name			
# 	return '', 200

@app.route('/kickplayer')
def kik_player():
    global listOfPlayers
    plname=request.args.get('name', type=str)
    pos = listOfPlayers.names.index(plname)
    del listOfPlayers.names[pos]
    del listOfPlayers.chars[pos]
    return jsonify(listOfPlayers=listOfPlayers)

# Kurzer Test von Samuel
@app.route('/testbutton')
def test_button():
    # return(jsonify(testAlert=anotherbutton(5)))
    return jsonify(
        testAlert="mess"
    )
    

if __name__ == '__main__':
	app.run (host='0.0.0.0')

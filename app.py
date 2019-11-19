from flask import Flask, render_template, jsonify, request
app = Flask (__name__, static_url_path='/static')

state = 0 #0 before initialization, 1 after, 2 for running tournament
mode = 1
#Possible tournament modes: 0 Single Elimination; 1 Double; 2 Triple; 3 League; 4 League + Play-Offs
cpp = 2    #Characters per player. 1 in League modes, 1-3 in Elimination modes
plist = []
clist = []

@app.route('/')
def index():
    return render_template("index.html")

# Tournament state set/info function
# To be called with argument tournamentState=0, 1, 2 or else to set state accordingly or to ask for current state.
@app.route('/tournamentstate')
def get_state():
    ask = request.args.get('tournamentState', type=int)
    if(ask==0):
        #To set state 0, no further input is required. Everything is set to default values.
        mode = 1
        cpp = 1
        plist = []
        clist = []
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
        plist = []
        clist = []
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
            numberOfSpielfeld=cpp
        )

# Add player
@app.route('/listofplayers')
def add_player():
    plname=request.args.get('name', type=str)
    #TODO Warn if player name already exists
    chars=request.args.get('chars', type=int)   #int[], dim=cpp. Maybe add a check if the dimension is correct.
    if len(plname) > 0: #Function can also be called without arguments to simply return the current list of players
        plist.append(plname)
        clist.append(chars)  #This should ultimately be a 2-dimensional array.
    return jsonify(listOfPlayers=[plist, clist]) #Put into one object

@app.route('/kickplayer')
def kik_player():
    plname=request.args.get('name', type=str)
    pos = plist.index(plname)
    del plist[pos]
    del clist[pos]
    return jsonify(listOfPlayers=plist, listOfCharacters=clist)

# Create draw. Probably obsolete because this is case 2 in /tournamentState
@app.route('/begintournament')
def create_draw():
    state = True
    return jsonify(
        tournamentstate=state
    )

# Kurzer Test von Samuel
@app.route('/testbutton')
def test_button():
    return jsonify(
        testAlert="mess"
    )
    

if __name__ == '__main__':
	app.run (host='0.0.0.0')


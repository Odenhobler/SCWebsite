#Local test for tournament draws
state = 0
matches = []
plist = ["A","B","C","D","E","F","G","H", "I"]

class Match:
    def __init__(self, id, rd, p1, p2, par, spar):
        self.id = id
        self.rd = rd
        self.p1 = p1    #Player 1
        self.p2 = p2    #Player 2
        self.parent = par  #Parent = Next match for winner
        self.sparent = spar #Step-parent = Next match for loser
        self.win = -1
        self.lose = -1
        self.res = [0,0]
    # child1 = Match()
    # child2 = Match()
    def score(self, sp1, sp2):
        self.res = [sp1,sp2]
        if sp1>sp2:
            self.win = self.p1
            self.lose = self.p2
        elif sp2>sp1:
            self.win = self.p2
            self.lose = self.p1
    def info(self):
        print (self.id, self.rd, self.p1, self.p2, self.parent, self.sparent, self.win, self.lose, self.res)

def singletree():
    # if state!=1: print some kind of error message
    #Create final match
    matches.append(Match(1,1,0,1,-1,-1))
    #Create further rounds
    while( len(matches)<len(plist)-1 ):
        rdcur = matches[-1].rd+1
        for i in range( (matches[-1].id+1), (2*matches[-1].id+2) ):
            matches.append(Match(i, rdcur, "A", "B", -1, -1))
            # matches[-1].info()
    nMatch = len(matches)
    nRounds = matches[-1].rd
    for i in range(nMatch):
        cur = matches[i]
        cur.id = nMatch-cur.id+1
        cur.rd = nRounds-cur.rd+1
        if i>0:
            cur.parent = int((cur.id+1)/2) + 2**(nRounds-1) -1
        else:
            cur.parent=-1
    matches.reverse()
    # for i in range(nMatch): matches[i].info()
    #At this point, a list of all matches, rounds and links to their parents exists.
    #Next: Add the players
    #TODO Randomize the seeding list
    nByes = 2**matches[-1].rd-len(plist)
    for i in range(nByes): plist.append("bye")
    for i in range(nMatch-2,-2,-1):
        cur = matches[i]
        if(i%2==1):
            cur.p1 = matches[cur.parent].p1
        else:
            cur.p1 = matches[cur.parent].p2
        h = 2**(nRounds-cur.rd+1)-1
        cur.p2 = h-cur.p1
    for i in range(nMatch):
        cur = matches[i]
        if cur.rd==1:
            cur.p1 = plist[cur.p1]
            cur.p2 = plist[cur.p2]
        else:
            cur.p1 = None
            cur.p2 = None

    # matches[1].score(3,0)
    # matches[matches[1].parent].p1 = matches[1].win
    

    state = 2
    return matches[-1].id, matches[-1].rd

def addscore(id, sp1, sp2):
    cur=matches[id-1]
    if cur.id != id: return("ERROR: wrong id")
    cur.score(sp1, sp2)
    if(cur.parent>=0):  #No "else" because otherwise this should be the final match.
        if(matches[cur.parent].p1 is None):
        # if(id%2==1): #NOTE Assuming that every match has one even predecessor (child) and one odd one. This is not necessarily true!
            matches[cur.parent].p1 = cur.win
        else:
            matches[cur.parent].p2 = cur.win
        
print (singletree())
addscore(1, 3, 0)
addscore(2, 3, 0)
addscore(3, 3, 0)
addscore(4, 3, 0)
addscore(5, 3, 0)
addscore(6, 3, 0)
addscore(7, 1, 3)
addscore(8, 3, 0)

addscore(9, 3, 2)
addscore(10, 1, 3)
addscore(11, 1, 0)
addscore(12, 4, 42)

addscore(13, 3, 1)
addscore(14, 1, 3)

addscore(15, 2, 3)
for i in range(15): matches[i].info()

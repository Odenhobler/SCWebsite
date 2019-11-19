'''
Aufgabe des Backends: Generiere Turnierschema

x-beliebiger Anfangszustand: Double Elim, 1 Spielfeld, tournamentState=0 (pre-tournament; 1=running tournament)

Reset-Funktion:
Input von Frontend:
    Turniermodus
        Optionen: Liga, Liga mit Playoffs (HF/F), Double Elim, Triple Elim
        (Optional: Gruppensystem (ggf. mit mehreren Charakteren pro Spieler?))
        Bei Elim: Anzahl der "Spielfelder" (=Anzahl Charaktere pro Spieler)
Output an Frontend:
    tournamentState=0, Anzahl Spielfelder, Modus (also im Grunde Echo des Inputs)
    Alles in Variablen gespeichert
Laufender Input von Frontend:
    newPlayer (Name, Charaktere) -> in listOfPlayers eintragen, listOfPlayers als Output an Frontend
    beginTournament -> Turnierbaum erstellen, tournamentState=1 setzen
'''
// Erstelle einen Panzer
CREATE (:Panzer {Modell: "Leopard 2", Baujahr: 2005, Typ: "Kampfpanzer", Zustand: "Betriebsbereit"});

// Erstelle Besatzungsmitglieder
CREATE (:Besatzungsmitglied {BesatzungsID: "id1", Vorname: "Hans", Nachname: "Müller", Rang: "Leutnant", Funktion: "Kommandant"});
CREATE (:Besatzungsmitglied {BesatzungsID: "id2", Vorname: "Peter", Nachname: "Schmidt", Rang: "Oberfeldwebel", Funktion: "Fahrer"});

// Erstelle Wartungseinträge
CREATE (:Wartung {WartungsID: "w1", Datum: date("2022-01-15"), Beschreibung: "Ölwechsel und Inspektion", Kosten: 1500.50});
CREATE (:Wartung {WartungsID: "w2", Datum: date("2022-06-10"), Beschreibung: "Panzerung überprüft", Kosten: 2200.00});

// Erstelle Waffensysteme
CREATE (:Waffensystem {WaffensystemID: "ws1", Typ: "Kanone", Kaliber: 120.0, Hersteller: "Rheinmetall"});
CREATE (:Waffensystem {WaffensystemID: "ws2", Typ: "Maschinengewehr", Kaliber: 7.62, Hersteller: "FN Herstal"});


// Beziehung zwischen Panzer und Besatzungsmitgliedern
MATCH (p:Panzer {Modell:"Leopard 2"})
MATCH (b:Besatzungsmitglied {BesatzungsID:"id1"})
MATCH (b2:Besatzungsmitglied {BesatzungsID:"id2"})
CREATE (p)-[:HAT_BESATZUNG]->(b),
       (p)-[:HAT_BESATZUNG]->(b2);

// Beziehung zwischen Panzer und Wartungseinträgen
MATCH (p:Panzer {Modell:"Leopard 2"})
MATCH (w:Wartung {WartungsID:"w1"})
MATCH (w2:Wartung {WartungsID:"w2"})
CREATE (p)-[:HAT_WARTUNG]->(w),
       (p)-[:HAT_WARTUNG]->(w2);

// Beziehung zwischen Panzer und Waffensystemen
MATCH (p:Panzer {Modell:"Leopard 2"})
MATCH (ws:Waffensystem {WaffensystemID:"ws1"})
MATCH (ws2:Waffensystem {WaffensystemID:"ws2"})
CREATE (p)-[:HAT_WAFFENSYSTEM]->(ws),
       (p)-[:HAT_WAFFENSYSTEM]->(ws2);


       
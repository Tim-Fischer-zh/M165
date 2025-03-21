// Erstellen von Knoten und Beziehungen in einem großen CREATE-Statement
CREATE 
  // Panzer-Knoten
  (p1:Panzer {Modell:"Leopard 2", Baujahr:2005, Typ:"Kampfpanzer", Zustand:"Betriebsbereit"}),
  (p2:Panzer {Modell:"M1 Abrams", Baujahr:2008, Typ:"Kampfpanzer", Zustand:"In Wartung"}),
  (p3:Panzer {Modell:"Challenger 2", Baujahr:2010, Typ:"Kampfpanzer", Zustand:"Betriebsbereit"}),

  // Besatzungsmitglieder
  (b1:Besatzungsmitglied {BesatzungsID:"b1", Vorname:"Hans", Nachname:"Müller", Rang:"Leutnant", Funktion:"Kommandant"}),
  (b2:Besatzungsmitglied {BesatzungsID:"b2", Vorname:"Peter", Nachname:"Schmidt", Rang:"Oberfeldwebel", Funktion:"Fahrer"}),
  (b3:Besatzungsmitglied {BesatzungsID:"b3", Vorname:"John", Nachname:"Doe", Rang:"Hauptmann", Funktion:"Kommandant"}),
  (b4:Besatzungsmitglied {BesatzungsID:"b4", Vorname:"Jim", Nachname:"Beam", Rang:"Leutnant", Funktion:"Fahrer"}),
  (b5:Besatzungsmitglied {BesatzungsID:"b5", Vorname:"Alex", Nachname:"King", Rang:"Feldwebel", Funktion:"Kommandant"}),
  (b6:Besatzungsmitglied {BesatzungsID:"b6", Vorname:"Maria", Nachname:"Schneider", Rang:"Oberst", Funktion:"Taktiker"}),

  // Wartungsknoten
  (w1:Wartung {WartungsID:"w1", Datum:date("2022-01-15"), Beschreibung:"Ölwechsel und Inspektion", Kosten:1500.50}),
  (w2:Wartung {WartungsID:"w2", Datum:date("2022-06-10"), Beschreibung:"Panzerung überprüft", Kosten:2200.00}),
  (w3:Wartung {WartungsID:"w3", Datum:date("2023-03-05"), Beschreibung:"Turmreparatur", Kosten:1800.75}),
  (w4:Wartung {WartungsID:"w4", Datum:date("2021-12-20"), Beschreibung:"Getriebe überprüft", Kosten:1700.00}),
  (w5:Wartung {WartungsID:"w5", Datum:date("2022-09-15"), Beschreibung:"Software Update", Kosten:800.00}),
  (w6:Wartung {WartungsID:"w6", Datum:date("2023-02-20"), Beschreibung:"Reparatur des Fahrwerks", Kosten:2500.00}),

  // Waffensystem-Knoten
  (ws1:Waffensystem {WaffensystemID:"ws1", Typ:"Kanone", Kaliber:120.0, Hersteller:"Rheinmetall"}),
  (ws2:Waffensystem {WaffensystemID:"ws2", Typ:"Maschinengewehr", Kaliber:7.62, Hersteller:"FN Herstal"}),
  (ws3:Waffensystem {WaffensystemID:"ws3", Typ:"Kanone", Kaliber:105.0, Hersteller:"General Dynamics"}),
  (ws4:Waffensystem {WaffensystemID:"ws4", Typ:"Raketenwerfer", Kaliber:80.0, Hersteller:"MBDA"}),
  (ws5:Waffensystem {WaffensystemID:"ws5", Typ:"Flammenwerfer", Kaliber:0, Hersteller:"Unknown"}),
  (ws6:Waffensystem {WaffensystemID:"ws6", Typ:"Maschinengewehr", Kaliber:7.62, Hersteller:"FN Herstal"}),

  // Beziehungen: Panzer – Besatzungsmitglied
  (p1)-[:HAT_BESATZUNG]->(b1),
  (p1)-[:HAT_BESATZUNG]->(b2),
  (p2)-[:HAT_BESATZUNG]->(b3),
  (p2)-[:HAT_BESATZUNG]->(b4),
  (p3)-[:HAT_BESATZUNG]->(b5),
  (p3)-[:HAT_BESATZUNG]->(b6),

  // Beziehungen: Panzer – Wartung
  (p1)-[:HAT_WARTUNG]->(w1),
  (p1)-[:HAT_WARTUNG]->(w2),
  (p2)-[:HAT_WARTUNG]->(w3),
  (p2)-[:HAT_WARTUNG]->(w5),
  (p3)-[:HAT_WARTUNG]->(w4),
  (p3)-[:HAT_WARTUNG]->(w6),

  // Beziehungen: Panzer – Waffensystem
  (p1)-[:HAT_WAFFENSYSTEM]->(ws1),
  (p1)-[:HAT_WAFFENSYSTEM]->(ws2),
  (p2)-[:HAT_WAFFENSYSTEM]->(ws3),
  (p2)-[:HAT_WAFFENSYSTEM]->(ws5),
  (p3)-[:HAT_WAFFENSYSTEM]->(ws4),
  (p3)-[:HAT_WAFFENSYSTEM]->(ws6);

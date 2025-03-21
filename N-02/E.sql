UNWIND ["Tiger", "Panther", "Abrams"] AS modell
CREATE (:Panzer {Modell: modell, Baujahr: 1995, Typ:"Kampfpanzer", Zustand:"Unbekannt"});

-- UNWIND ["Tiger", "Panther", "Abrams"] AS modell wandelt die Liste in einzelne Zeilen um, wobei jede Zeile den Wert der Variable modell enthält.
-- Für jedes Element der Liste wird ein neuer Panzer-Knoten mit den angegebenen Eigenschaften erstellt.


MATCH (p:Panzer)
RETURN p
ORDER BY p.Modell
SKIP 1
LIMIT 2;

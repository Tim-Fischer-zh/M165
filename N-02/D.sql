MATCH (p:Panzer {Modell:"M1 Abrams"})
SET p.Zustand = "Betriebsbereit"
RETURN p;


MATCH (w:Wartung)
WHERE w.Kosten < 2000
SET w.Kosten = w.Kosten * 1.10
RETURN w;


MATCH (p:Panzer)-[r:HAT_WARTUNG]->(w:Wartung)
WHERE w.Beschreibung CONTAINS "Ölwechsel"
SET r.LetztePruefung = date()
RETURN p, r, w;

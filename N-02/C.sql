// Versuch, einen Panzer ohne DETACH zu löschen – dies wird fehlschlagen, wenn Beziehungen existieren.
MATCH (p:Panzer {Modell:"M1 Abrams"})
DELETE p;

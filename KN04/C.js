// --------------------------
// KN-M-03 Aggregations-Abfragen
// --------------------------


// C) Abfragen auf Unterdokumente / Arrays

// C1: Einfache Abfrage, die nur das eingebettete Array "Besatzung" ausgibt.
print("C1: Ausgabe nur des 'Besatzung'-Arrays (ohne _id)");
db.Panzer.aggregate([
  { $project: { Besatzung: 1, _id: 0 } }
]).forEach(printjson);

// C2: Filterung auf Felder von Unterdokumenten.
// Beispiel: Finde alle Panzer, bei denen in einem Wartungseintrag die Kosten > 2000 betragen.
print("C2: Filter auf Unterdokumente in 'Wartung' (Kosten > 2000)");
db.Panzer.aggregate([
  { $match: { "Wartung.Kosten": { $gt: 2000 } } }
]).forEach(printjson);

// C3: Verwendung von $unwind, um das 'Wartung'-Array zu "verflachen", und anschließende Projektion.
print("C3: $unwind auf 'Wartung' und Projektion von Datum und Kosten");
db.Panzer.aggregate([
  { $unwind: "$Wartung" },
  { $project: { Modell: 1, "Wartung.Datum": 1, "Wartung.Kosten": 1, _id: 0 } }
]).forEach(printjson);

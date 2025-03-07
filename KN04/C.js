// --------------------------
// KN-M-03 Aggregations-Abfragen
// --------------------------

// A) Aggregationen

// A1: Simulation der UND-Verknüpfung, indem zwei $match-Stages hintereinander geschaltet werden.
// Beispiel: Finde alle Panzer, die den Zustand "Betriebsbereit" UND das Modell "Leopard 2" haben.
print("A1: Chained $match (Zustand 'Betriebsbereit' und Modell 'Leopard 2')");
db.Panzer.aggregate([
  { $match: { Zustand: "Betriebsbereit" } },
  { $match: { Modell: "Leopard 2" } }
]).forEach(printjson);

// A2: Aggregations-Pipeline mit $match, $project und $sort.
// Beispiel: Finde alle Panzer, die "Betriebsbereit" sind, zeige Modell, Baujahr und Zustand, und sortiere aufsteigend nach Baujahr.
print("A2: Pipeline mit $match, $project, $sort");
db.Panzer.aggregate([
  { $match: { Zustand: "Betriebsbereit" } },
  { $project: { _id: 1, Modell: 1, Baujahr: 1, Zustand: 1 } },
  { $sort: { Baujahr: 1 } }
]).forEach(printjson);

// A3: Aggregation mit $group und $sum.
// Beispiel: Gruppiere die Panzer nach Zustand und zähle die Anzahl der Panzer in jedem Zustand.
print("A3: Gruppierung mit $group und $sum");
db.Panzer.aggregate([
  { $group: { _id: "$Zustand", count: { $sum: 1 } } }
]).forEach(printjson);


// B) Join-Aggregation ($lookup)
// Hinweis: Für diese Abfragen wird angenommen, dass es eine separate Collection "Besatzung" gibt, 
// in der jedes Dokument ein Feld "PanzerID" enthält, das auf das _id-Feld in "Panzer" verweist.

print("B1: $lookup - Verbinde 'Panzer' mit 'Besatzung'");
db.Panzer.aggregate([
  {
    $lookup: {
      from: "Besatzung",
      localField: "_id",
      foreignField: "PanzerID",
      as: "BesatzungsDetails"
    }
  }
]).forEach(printjson);

print("B2: $lookup mit zusätzlichem Filter und Projektion");
// Beispiel: Führe $lookup aus und filtere anschließend auf Besatzungs-Datensätze, deren Rang 'Leutnant' ist,
// und projiziere nur das Modell und die BesatzungsDetails.
db.Panzer.aggregate([
  {
    $lookup: {
      from: "Besatzung",
      localField: "_id",
      foreignField: "PanzerID",
      as: "BesatzungsDetails"
    }
  },
  { $match: { "BesatzungsDetails.Rang": "Leutnant" } },
  { $project: { Modell: 1, BesatzungsDetails: 1, _id: 1 } }
]).forEach(printjson);


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

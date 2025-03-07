
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


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


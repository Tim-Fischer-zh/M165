// -------------------------
// Abfrage für Collection: Panzer
// - Filter: Zustand "Betriebsbereit"
// - Projektion: _id, Modell, Zustand (gibt _id aus)
// -------------------------
print("Abfrage: Panzer (Betriebsbereit)");
db.Panzer.find(
  { Zustand: "Betriebsbereit" },
  { _id: 1, Modell: 1, Zustand: 1 }
).forEach(printjson);

// -------------------------
// Abfrage für Collection: Besatzung
// - ODER-Verknüpfung: Rang ist "Leutnant" ODER "Feldwebel"
// - Projektion: Vorname, Nachname, Rang (ohne _id)
// -------------------------
print("Abfrage: Besatzung (Rang Leutnant oder Feldwebel)");
db.Besatzung.find(
  { $or: [ { Rang: "Leutnant" }, { Rang: "Feldwebel" } ] },
  { _id: 0, Vorname: 1, Nachname: 1, Rang: 1 }
).forEach(printjson);

// -------------------------
// Abfrage für Collection: Wartung
// - UND-Verknüpfung: Datum >= 2022-01-01 UND Kosten >= 1500
//   (Filterung auf ein DateTime-Feld und einen numerischen Wert)
// -------------------------
print("Abfrage: Wartung (Datum ab 2022-01-01 und Kosten >= 1500)");
db.Wartung.find(
  { $and: [ { Datum: { $gte: new Date("2022-01-01") } }, { Kosten: { $gte: 1500 } } ] }
).forEach(printjson);

// -------------------------
// Abfrage für Collection: Waffensystem
// - Regex: Suche nach Dokumenten, bei denen im Feld Typ der Teilstring "Kano" vorkommt
//   (Beispielsweise um "Kanone" zu finden)
// -------------------------
print("Abfrage: Waffensystem (Typ enthält 'Kano', regex)");
db.Waffensystem.find(
  { Typ: { $regex: "Kano", $options: "i" } }
).forEach(printjson);

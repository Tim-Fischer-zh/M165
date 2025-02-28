// Wechsel in die Datenbank "PanzerDB"
use PanzerDB

// =======================================================
// 1. updateOne() auf Collection "Panzer"
//    -> Filterung mittels _id: Wir holen einen Panzer-Datensatz und ändern dessen Zustand
// =======================================================
var panzerDoc = db.Panzer.findOne();
if (panzerDoc) {
    print("updateOne() in Panzer: Ändere Zustand für Dokument _id: " + panzerDoc._id);
    db.Panzer.updateOne(
      { _id: panzerDoc._id },
      { $set: { Zustand: "In Reparatur" } }
    );
} else {
    print("Keine Dokumente in der Collection 'Panzer' gefunden.");
}

// =======================================================
// 2. updateMany() auf Collection "Besatzung"
//    -> Ohne Verwendung der _id: Wir ändern alle Dokumente, bei denen der Rang entweder "Leutnant" oder "Feldwebel" ist
// =======================================================
print("updateMany() in Besatzung: Setze Status 'Aktiv' für alle Leutnant oder Feldwebel");
db.Besatzung.updateMany(
  { $or: [ { Rang: "Leutnant" }, { Rang: "Feldwebel" } ] },
  { $set: { Status: "Aktiv" } }
);

// =======================================================
// 3. replaceOne() auf Collection "Wartung"
//    -> Ersetze ein gesamtes Dokument: Wir holen einen Wartungs-Datensatz und ersetzen ihn vollständig
// =======================================================
var wartungDoc = db.Wartung.findOne();
if (wartungDoc) {
    print("replaceOne() in Wartung: Ersetze Dokument mit _id: " + wartungDoc._id);
    db.Wartung.replaceOne(
      { _id: wartungDoc._id },
      {
          _id: wartungDoc._id, // Behalte die bestehende _id
          Datum: new Date("2023-05-01"),  // neues Datum
          Beschreibung: "Komplette Überholung", 
          Kosten: 2500.00,
          Notizen: "Dokument wurde ersetzt"
      }
    );
} else {
    print("Keine Dokumente in der Collection 'Wartung' gefunden.");
}

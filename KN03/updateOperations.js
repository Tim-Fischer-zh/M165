// Wechsel in die Datenbank "PanzerDB"
use Panzer

// Update 1: updateOne() in der Collection "Panzer"
// Filter mit _id: Ändere den Zustand eines bestimmten Panzer-Dokuments (z. B. "Leopard 2")
var doc = db.Panzer.findOne({ Modell: "Leopard 2" });
if(doc) {
    print("updateOne: Setze Zustand auf 'In Reparatur' für 'Leopard 2'");
    db.Panzer.updateOne(
        { _id: doc._id },
        { $set: { Zustand: "In Reparatur" } }
    );
} else {
    print("'Leopard 2' nicht gefunden.");
}

// Update 2: updateMany() ohne _id: Ändere den Zustand aller Panzer, die entweder "In Wartung" oder "TestZustand" haben, auf "Überholt"
print("updateMany: Setze Zustand auf 'Überholt' für Panzer mit Zustand 'In Wartung' oder 'TestZustand'");
db.Panzer.updateMany(
    { $or: [ { Zustand: "In Wartung" }, { Zustand: "TestZustand" } ] },
    { $set: { Zustand: "Überholt" } }
);

// Update 3: replaceOne() in der Collection "Panzer"
// Ersetze ein gesamtes Dokument (z. B. für "M1 Abrams") und ändere dabei den Zustand vollständig
var docToReplace = db.Panzer.findOne({ Modell: "M1 Abrams" });
if(docToReplace) {
    print("replaceOne: Ersetze das Dokument für 'M1 Abrams'");
    db.Panzer.replaceOne(
        { _id: docToReplace._id },
        {
            _id: docToReplace._id, // beibehalten
            Modell: "M1 Abrams",
            Baujahr: docToReplace.Baujahr,
            Typ: docToReplace.Typ,
            Zustand: "Neuzustand", // neuer Zustand
            Besatzung: docToReplace.Besatzung,
            Wartung: docToReplace.Wartung,
            Waffensystem: docToReplace.Waffensystem
        }
    );
} else {
    print("'M1 Abrams' nicht gefunden.");
}

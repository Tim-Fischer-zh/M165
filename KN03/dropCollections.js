// Wechsel in die Datenbank "PanzerDB"
use Panzer

// a) Gesamte Collection löschen
print("Lösche die gesamte Collection 'Panzer'...");
db.Panzer.drop();

// Wiederaufbau der Collection mit Testdaten für die partielle Löschung:
db.Panzer.insertMany([
  {
    _id: new ObjectId(),
    Modell: "Test Panzer 1",
    Baujahr: 2000,
    Typ: "Test",
    Zustand: "TestZustand",
    Besatzung: [],
    Wartung: [],
    Waffensystem: []
  },
  {
    _id: new ObjectId(),
    Modell: "Test Panzer 2",
    Baujahr: 2001,
    Typ: "Test",
    Zustand: "TestZustand",
    Besatzung: [],
    Wartung: [],
    Waffensystem: []
  },
  {
    _id: new ObjectId(),
    Modell: "Test Panzer 3",
    Baujahr: 2002,
    Typ: "Test",
    Zustand: "TestZustand",
    Besatzung: [],
    Wartung: [],
    Waffensystem: []
  }
]);

// b) Teilweises Löschen:
// Lösche einen einzelnen Datensatz aus "Panzer" mittels deleteOne() anhand der _id:
var testDoc = db.Panzer.findOne({ Modell: "Test Panzer 1" });
if(testDoc){
    print("Lösche Dokument 'Test Panzer 1' mit _id: " + testDoc._id);
    db.Panzer.deleteOne({ _id: testDoc._id });
} else {
    print("Test Panzer 1 nicht gefunden.");
}

// Lösche mehrere Dokumente mittels deleteMany() mit einer ODER-Verknüpfung (z.B. Modelle "Test Panzer 2" ODER "Test Panzer 3"):
print("Lösche Dokumente 'Test Panzer 2' und 'Test Panzer 3'...");
db.Panzer.deleteMany({ $or: [ { Modell: "Test Panzer 2" }, { Modell: "Test Panzer 3" } ] });

print("Teilweises Löschen abgeschlossen.");

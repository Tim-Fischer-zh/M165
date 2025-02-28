// Wechsel in die Datenbank "PanzerDB". (Ausführen als einzelner Befehl)
use PanzerDB

// -----------------------
// Collection: Panzer
// Verwende insertMany() für mehrere Datensätze
// -----------------------
let panzer1 = new ObjectId();
let panzer2 = new ObjectId();
let panzer3 = new ObjectId();

db.Panzer.insertMany([
  {
    _id: panzer1,
    Modell: "Leopard 2",
    Baujahr: 2005,
    Typ: "Kampfpanzer",
    Zustand: "Betriebsbereit"
  },
  {
    _id: panzer2,
    Modell: "M1 Abrams",
    Baujahr: 2008,
    Typ: "Kampfpanzer",
    Zustand: "In Wartung"
  },
  {
    _id: panzer3,
    Modell: "Challenger 2",
    Baujahr: 2010,
    Typ: "Kampfpanzer",
    Zustand: "Betriebsbereit"
  }
]);

// -----------------------
// Collection: Besatzung
// Verwende insertOne() für einen Datensatz und insertMany() für mehrere weitere
// -----------------------
let besatzung1 = new ObjectId();
let besatzung2 = new ObjectId();
let besatzung3 = new ObjectId();
let besatzung4 = new ObjectId();

db.Besatzung.insertOne({
  _id: besatzung1,
  Vorname: "Hans",
  Nachname: "Müller",
  Rang: "Leutnant",
  Funktion: "Kommandant"
});

db.Besatzung.insertMany([
  {
    _id: besatzung2,
    Vorname: "Peter",
    Nachname: "Schmidt",
    Rang: "Oberfeldwebel",
    Funktion: "Fahrer"
  },
  {
    _id: besatzung3,
    Vorname: "Karl",
    Nachname: "Schneider",
    Rang: "Hauptmann",
    Funktion: "Schütze"
  },
  {
    _id: besatzung4,
    Vorname: "Fritz",
    Nachname: "Weber",
    Rang: "Feldwebel",
    Funktion: "Ladepersonal"
  }
]);

// -----------------------
// Collection: Wartung
// Verwende insertMany() für mehrere Wartungsdatensätze
// -----------------------
let wartung1 = new ObjectId();
let wartung2 = new ObjectId();
let wartung3 = new ObjectId();

db.Wartung.insertMany([
  {
    _id: wartung1,
    Datum: new Date("2022-01-15"),
    Beschreibung: "Ölwechsel und Inspektion",
    Kosten: 1500.50
  },
  {
    _id: wartung2,
    Datum: new Date("2022-06-10"),
    Beschreibung: "Panzerung überprüft",
    Kosten: 2200.00
  },
  {
    _id: wartung3,
    Datum: new Date("2023-03-05"),
    Beschreibung: "Wartung der Turmmechanik",
    Kosten: 1800.75
  }
]);

// -----------------------
// Collection: Waffensystem
// Verwende insertMany() für mehrere Datensätze
// -----------------------
let waffensystem1 = new ObjectId();
let waffensystem2 = new ObjectId();
let waffensystem3 = new ObjectId();

db.Waffensystem.insertMany([
  {
    _id: waffensystem1,
    Typ: "Kanone",
    Kaliber: 120.0,
    Hersteller: "Rheinmetall"
  },
  {
    _id: waffensystem2,
    Typ: "Maschinengewehr",
    Kaliber: 7.62,
    Hersteller: "FN Herstal"
  },
  {
    _id: waffensystem3,
    Typ: "Raketenwerfer",
    Kaliber: 80.0,
    Hersteller: "MBDA"
  }
]);

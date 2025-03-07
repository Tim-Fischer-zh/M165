// Wechsel in die Datenbank "PanzerDB" (wird automatisch erstellt, wenn nicht vorhanden)
use PanzerDB

// Einfügen mehrerer Panzer-Dokumente mit eingebetteten Arrays
db.Panzer.insertMany([
  {
    _id: new ObjectId(),
    Modell: "Leopard 2",
    Baujahr: 2005,
    Typ: "Kampfpanzer",
    Zustand: "Betriebsbereit",
    Besatzung: [
      {
        BesatzungsID: new ObjectId(),
        Vorname: "Hans",
        Nachname: "Müller",
        Rang: "Leutnant",
        Funktion: "Kommandant"
      },
      {
        BesatzungsID: new ObjectId(),
        Vorname: "Peter",
        Nachname: "Schmidt",
        Rang: "Oberfeldwebel",
        Funktion: "Fahrer"
      }
    ],
    Wartung: [
      {
        WartungsID: new ObjectId(),
        Datum: new Date("2022-01-15"),
        Beschreibung: "Ölwechsel und Inspektion",
        Kosten: 1500.50
      },
      {
        WartungsID: new ObjectId(),
        Datum: new Date("2022-06-10"),
        Beschreibung: "Panzerung überprüft",
        Kosten: 2200.00
      }
    ],
    Waffensystem: [
      {
        WaffensystemID: new ObjectId(),
        Typ: "Kanone",
        Kaliber: 120.0,
        Hersteller: "Rheinmetall"
      },
      {
        WaffensystemID: new ObjectId(),
        Typ: "Maschinengewehr",
        Kaliber: 7.62,
        Hersteller: "FN Herstal"
      }
    ]
  },
  {
    _id: new ObjectId(),
    Modell: "M1 Abrams",
    Baujahr: 2008,
    Typ: "Kampfpanzer",
    Zustand: "In Wartung",
    Besatzung: [
      {
        BesatzungsID: new ObjectId(),
        Vorname: "John",
        Nachname: "Doe",
        Rang: "Hauptmann",
        Funktion: "Kommandant"
      },
      {
        BesatzungsID: new ObjectId(),
        Vorname: "Jim",
        Nachname: "Beam",
        Rang: "Leutnant",
        Funktion: "Fahrer"
      }
    ],
    Wartung: [
      {
        WartungsID: new ObjectId(),
        Datum: new Date("2023-03-05"),
        Beschreibung: "Turmreparatur",
        Kosten: 1800.75
      }
    ],
    Waffensystem: [
      {
        WaffensystemID: new ObjectId(),
        Typ: "Kanone",
        Kaliber: 105.0,
        Hersteller: "General Dynamics"
      }
    ]
  },
  {
    _id: new ObjectId(),
    Modell: "Challenger 21",
    Baujahr: 2010,
    Typ: "Kampfpanzer",
    Zustand: "Betriebsbereit",
    Besatzung: [
      {
        BesatzungsID: new ObjectId(),
        Vorname: "Alex",
        Nachname: "King",
        Rang: "Feldwebel",
        Funktion: "Kommandant"
      }
    ],
    Wartung: [
      {
        WartungsID: new ObjectId(),
        Datum: new Date("2021-12-20"),
        Beschreibung: "Getriebe überprüft",
        Kosten: 1700.00
      }
    ],
    Waffensystem: [
      {
        WaffensystemID: new ObjectId(),
        Typ: "Raketenwerfer",
        Kaliber: 80.0,
        Hersteller: "MBDA"
      }
    ]
  }
]);

print("Daten in der Collection 'Panzer' wurden hinzugefügt.");

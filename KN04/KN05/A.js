
use PanzerDB;
db.createUser({
  user: "benutzer1",
  pwd: "password1",  
  roles: [
    { role: "read", db: "Panzer" }
  ]
});
print("Benutzer1 (read) in PanzerDB erstellt");


use admin;
db.createUser({
  user: "benutzer2",
  pwd: "password2",  
  roles: [
    { role: "readWrite", db: "Panzer" }
  ]
});
print("Benutzer2 (readWrite) in admin erstellt, mit Zugriff auf Panzer");

mongodb://benutzer1:password1@98.82.226.165:27017/PanzerDB?authSource=Panzer
mongodb://benutzer2:password2@98.82.226.165:27017/PanzerDB?authSource=admin



db.Panzer.insertOne({
    _id: ObjectId(),
    Modell: "Leopard 2",
    Baujahr: 2005,
    Typ: "Kampfpanzer",
    Zustand: "Betriebsbereit",
    Besatzung: [
        {
            BesatzungsID: ObjectId(),
            Vorname: "Hans",
            Nachname: "Müller",
            Rang: "Leutnant",
            Funktion: "Kommandant"
        },
        {
            BesatzungsID: ObjectId(),
            Vorname: "Peter",
            Nachname: "Schmidt",
            Rang: "Oberfeldwebel",
            Funktion: "Fahrer"
        }
    ],
    Wartung: [
        {
            WartungsID: ObjectId(),
            Datum: ISODate("2022-01-15"),
            Beschreibung: "Ölwechsel und Inspektion",
            Kosten: 1500.50
        },
        {
            WartungsID: ObjectId(),
            Datum: ISODate("2022-06-10"),
            Beschreibung: "Panzerung überprüft",
            Kosten: 2200.00
        }
    ],
    Waffensystem: [
        {
            WaffensystemID: ObjectId(),
            Typ: "Kanone",
            Kaliber: 120.0,
            Hersteller: "Rheinmetall"
        },
        {
            WaffensystemID: ObjectId(),
            Typ: "Maschinengewehr",
            Kaliber: 7.62,
            Hersteller: "FN Herstal"
        }
    ]
});

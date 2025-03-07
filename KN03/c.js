// Wechsel in die Datenbank "PanzerDB"
use Panzer

// Abfrage 1: Finde Panzer mit Zustand "Betriebsbereit" und projiziere _id, Modell, Zustand (mit _id)
print("Abfrage: Panzer mit Zustand 'Betriebsbereit'");
db.Panzer.find(
    { Zustand: "Betriebsbereit" },
    { _id: 1, Modell: 1, Zustand: 1 }
).forEach(printjson);

// Abfrage 2: Filterung auf ein DateTime-Feld: Finde Panzer, bei denen mindestens ein Wartungseintrag nach dem 01.01.2022 liegt
print("Abfrage: Panzer mit Wartungseintrag ab 2022-01-01");
db.Panzer.find(
    { Wartung: { $elemMatch: { Datum: { $gte: new Date("2022-01-01") } } } }
).forEach(printjson);

// Abfrage 3: ODER-Verknüpfung: Finde Panzer, bei denen der Typ entweder "Kampfpanzer" oder "Test" ist
print("Abfrage: Panzer mit Typ 'Kampfpanzer' oder 'Test'");
db.Panzer.find(
    { $or: [ { Typ: "Kampfpanzer" }, { Typ: "Test" } ] }
).forEach(printjson);

// Abfrage 4: UND-Verknüpfung: Finde Panzer, die im Zustand "Betriebsbereit" UND Modell "Leopard 2" haben
print("Abfrage: Panzer, die 'Betriebsbereit' und 'Leopard 2' sind");
db.Panzer.find(
    { $and: [ { Zustand: "Betriebsbereit" }, { Modell: "Leopard 2" } ] }
).forEach(printjson);

// Abfrage 5: Regex: Finde Panzer, bei denen im Feld Modell der Teilstring "Abrams" vorkommt
print("Abfrage: Panzer, bei denen Modell 'Abrams' enthält (Regex)");
db.Panzer.find(
    { Modell: { $regex: "Abrams", $options: "i" } }
).forEach(printjson);

// Abfrage 6: Projektion, die _id nicht ausgibt: Zeige alle Panzer, aber nur Modell und Zustand (ohne _id)
print("Abfrage: Alle Panzer ohne _id");
db.Panzer.find(
    {},
    { _id: 0, Modell: 1, Zustand: 1 }
).forEach(printjson);

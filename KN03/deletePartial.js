
use PanzerDB


var panzerDoc = db.Panzer.findOne();
if (panzerDoc) {
    print("Lösche Panzer-Datensatz mit _id: " + panzerDoc._id);
    db.Panzer.deleteOne({ _id: panzerDoc._id });
} else {
    print("Keine Datensätze in der Collection 'Panzer' gefunden.");
}


var besatzungDocs = db.Besatzung.find().limit(2).toArray();
if (besatzungDocs.length > 0) {
    
    var id1 = besatzungDocs[0]._id;
    var id2 = (besatzungDocs.length > 1 ? besatzungDocs[1]._id : besatzungDocs[0]._id);
    print("Lösche Besatzung-Datensätze mit _id: " + id1 + " oder " + id2);
    db.Besatzung.deleteMany({ $or: [ { _id: id1 }, { _id: id2 } ] });
} else {
    print("Keine Datensätze in der Collection 'Besatzung' gefunden.");
}

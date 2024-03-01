
var request = window.indexedDB.open('meineDatenbank', 1);


request.onerror = function(event) {
    console.error('Fehler beim Öffnen der Datenbank');
};


request.onsuccess = function(event) {
    var db = event.target.result;

    
    var transaction = db.transaction(['benutzereingaben'], 'readwrite');
    var store = transaction.objectStore('benutzereingaben');
    store.add({ text: 'Beispieltext', datum: '2024-02-15' });


    var abfrage = store.getAll();
    abfrage.onsuccess = function(event) {
        var daten = event.target.result;
        console.log('Gespeicherte Daten:', daten);
    };
};


request.onupgradeneeded = function(event) {
    var db = event.target.result;

  
    var objectStore = db.createObjectStore('benutzereingaben', { autoIncrement: true });
};

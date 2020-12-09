var map;
var latitude;
var longitude;

function valmista(){

  haePaikkatiedot();

  if("geolocation" in navigator) {
  console.log("Sijaintieto saatavilla");
  navigator.geolocation.getCurrentPosition(function(position) {
      console.log(position);

      latitude = position.coords.latitude;
      longitude = position.coords.longitude;



    map = L.map('kartta').setView([latitude, longitude], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([latitude, longitude]).addTo(map)
    .bindPopup('Olet tässä')
    .openPopup();

  });
}

}

async function haePaikkatiedot(){
 const response = await fetch("/haevierailut");
 const data = await response.json();
 console.log(data);

 var i;
 for (i = 0; i < data.length; i++) {
    L.marker([data[i].latitude, data[i].longitude]).addTo(map).bindPopup(data[i].paikka + "<br>" + data[i].arvostelu).openPopup();
    // Find a <table> element with id="myTable":
    var table = document.getElementById("paikkataulukko");

    // Create an empty <tr> element and add it to the 1st position of the table:
    var row = table.insertRow(1 + i);

    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    // Add some text to the new cells:
    cell1.innerHTML = data[i].paikka;
    cell2.innerHTML = data[i].arvostelu;
    cell3.innerHTML = data[i].arvostelija;
 }


 L.marker([latitude, longitude]).addTo(map)
 .bindPopup('Olet tässä')
 .openPopup();

}

function tallenna_sijainti() {
  var sijaintilomake = document.getElementById("arvostelulomake");
  sijaintilomake.style.display = "block";

}

function kirjoita_kartalle(){
  var paikka = document.getElementById("paikka").value;
  var arvostelu = document.getElementById("arvostelu").value;
  console.log(paikka);
  console.log(arvostelu);

  L.marker([latitude, longitude]).addTo(map)
  .bindPopup(paikka + "<br>" + arvostelu)
  .openPopup();

}

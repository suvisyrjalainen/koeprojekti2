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

 L.marker([data[0].latitude, data[0].longitude]).addTo(map)
 .bindPopup(data[0].paikka + "<br>" + data[0].arvostelu)
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

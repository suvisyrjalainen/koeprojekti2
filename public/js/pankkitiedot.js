function laheta_pankkitiedot() {
  var nimi = document.getElementById("name").value;
  var pin = document.getElementById("pin").value;

  console.log(nimi);
  console.log(pin);
}


async function haePankkitiedot(){
 const response = await fetch("/salaisetpankkitiedot");
 const data = await response.json();
 console.log(data);
}

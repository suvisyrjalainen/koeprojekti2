function laheta_pankkitiedot() {
  var nimi = document.getElementById("name").value;
  var pin = document.getElementById("pin").value;

  console.log(nimi);
  console.log(pin);

  const data = {nimi, pin};

  const options = {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
       },
       body: JSON.stringify(data)
   };

   fetch('/pankkitietojen_talletus', options).then(function(response) {
      if(response.status == 200){
        console.log("ok");
      }
    }, function(error){
      console.log(error.message);
    });
}


async function haePankkitiedot(){
 const response = await fetch("/salaisetpankkitiedot");
 const data = await response.json();
 console.log(data);
}

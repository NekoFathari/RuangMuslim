const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  const crd = pos.coords;
  console.log("Your current position is:");
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  var lat = crd.latitude;
    var lng = crd.longitude;
    var lokkota = new XMLHttpRequest();
    lokkota.open('GET', "https://api.geoapify.com/v1/geocode/reverse?lat="+ lat +"&lon="+ lng +"&apiKey=ee92cebbdc9c4440bb06de26230880c0");

    lokkota.onreadystatechange = function () {
      if (this.readyState === 4) {
        console.log('Status:', this.status);
        console.log('Headers:', this.getAllResponseHeaders());
        console.log('Body:', this.responseText);
        const logkota = JSON.parse(lokkota.responseText);
        var kota = logkota.features[0].properties.city;
        $kota = logkota.features[0].properties.city;
        console.log(kota);
        document.getElementById("title-kota").innerHTML =  kota + " dan Sekitarnya";

        var request = new XMLHttpRequest();

        request.open('GET', "https://api.myquran.com/v1/sholat/kota/cari/"+ kota + "");

        request.onreadystatechange = function () {  
        if (this.readyState === 4) {
          console.log('Status:', this.status);
          console.log('Headers:', this.getAllResponseHeaders());
          console.log('Body:', this.responseText);
          const user = JSON.parse(request.responseText);
          $id = user.data[0].id
          console.log($id);

          let date = new Date();
          let formattedDate = date.getFullYear() + '/' + 
                     (date.getMonth() + 1).toString().padStart(2, '0');
          console.log(formattedDate);

          let datehighlight = new Date();
          let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
          let datenow = datehighlight.getDate().toString().padStart(2, '0') + ' ' + 
                   months[datehighlight.getMonth()] + ' ' + 
                   datehighlight.getFullYear();
          console.log(datenow); 
          document.getElementById("todaydate").innerHTML = datenow;

          var jadwal = new XMLHttpRequest();
          jadwal.open('GET', "https://api.myquran.com/v1/sholat/jadwal/"+ $id +"/"+ formattedDate +"");
          jadwal.onreadystatechange = function () {
            if (this.readyState === 4){
              console.log('Status:', this.status);
              console.log('Headers:', this.getAllResponseHeaders());
              console.table(this.responseText);
              const jadwalhariini = JSON.parse(jadwal.responseText);
              $hariini = jadwalhariini.data.jadwal;
              console.log($hariini);
              let today = new Date();
              var todayday = today.getDate().toString().padStart(2, '');
              console.log(todayday);
              var highlight = todayday - 1;
              console.log(highlight);
              const jadwalhighlight = $hariini[highlight];
              console.log(jadwalhighlight);
              const subuhhighlight = jadwalhighlight.subuh;
              const dhuhurhighlight = jadwalhighlight.dzuhur;
              const asharhighlight = jadwalhighlight.ashar;
              const maghribhighlight = jadwalhighlight.maghrib;
              const isyahighlight = jadwalhighlight.isya;

              document.getElementById("subuh").innerHTML = "Subuh<br>" + subuhhighlight;
              document.getElementById("dhuhur").innerHTML = "Dhuhur<br>" + dhuhurhighlight;
              document.getElementById("ashar").innerHTML = "Ashar<br>" + asharhighlight;
              document.getElementById("maghrib").innerHTML = "Maghrib<br>" + maghribhighlight;
              document.getElementById("isya").innerHTML = "Isya<br>" + isyahighlight;

              for(var i = 0; i < $hariini.length; i++){
                var tanggal = $hariini[i].tanggal;
                var imsak = $hariini[i].imsak;
                var subuh = $hariini[i].subuh;
                var terbit = $hariini[i].terbit;
                var dhuha = $hariini[i].dhuha;
                var dhuhur = $hariini[i].dzuhur;
                var ashar = $hariini[i].ashar;
                var maghrib = $hariini[i].maghrib;
                var isya = $hariini[i].isya;

                const table = document.querySelector('tbody')
                  table.innerHTML = table.innerHTML + `<tr id=`+ i + `>
                      <td> `+ tanggal  +` </td>
                      <td> `+ imsak  +` </td>
                      <td> `+ subuh  +` </td>
                      <td> `+ terbit  +` </td>
                      <td> `+ dhuha  +`</td>
                      <td> `+ dhuhur  +`</td>
                      <td> `+ ashar  +`</td>
                      <td> `+ maghrib  +`</td>
                      <td> `+ isya  +`</td>
                    </tr>`
                }
              }
              document.getElementById(highlight).style.backgroundColor = "#CAFFE0"

            }
          jadwal.send();

          }
        };
        request.send();

      }
    };
  lokkota.send();
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);


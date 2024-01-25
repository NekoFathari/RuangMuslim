var request = new XMLHttpRequest();

request.open('GET', 'https://equran.id/api/v2/surat');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
    const response = JSON.parse(request.responseText);
    var surah = response.data;
    var jumlahsurah = surah.length;
    document.getElementById("title-surah").innerHTML = jumlahsurah + " Surah";

    for(var i = 0; i < jumlahsurah; i++){
      var nomor = surah[i].nomor;
      var nama = surah[i].namaLatin;
      var jumlahayat = surah[i].jumlahAyat;
      var arti = surah[i].arti;
      var tempat = surah[i].tempatTurun;
      const card = document.querySelector('.rm-card')
      if (tempat == "Mekah"){
        card.innerHTML = card.innerHTML + `
      <div class="rm-mockup-mekkah">
        <div class="navbar-drop">
            <div class="rm-informasi-surat">
                <div class="nomor-surat">
                    <p>` + nomor + `</p>
                </div>
                <div class="penjelasan-surat">
                    <h4>` + nama + `</h4>
                    <p>` + arti + `</p>
                    <p>` + jumlahayat + ` Ayat</p>
                </div>  
            </div>
          </div>
          <div class="element-img-mekkah">
            <img src="assets/img/element-mekkah.png" alt="element-mekkah">
          </div>
        </div>
      </card>`
      } else {
        card.innerHTML = card.innerHTML + `
        <div class="rm-mockup-madinah">
          <div class="navbar-drop">
              <div class="rm-informasi-surat">
                  <div class="nomor-surat">
                      <p>` + nomor + `</p>
                  </div>
                  <div class="penjelasan-surat">
                      <h4>` + nama + `</h4>
                      <p>` + arti + `</p>
                      <p>` + jumlahayat + ` Ayat</p>
                  </div>  
              </div>
            </div>
            <div class="element-img-madinah">
              <img src="assets/img/element-madinah.png" alt="element-madinah">
            </div>
          </div>
          </card>`
      }
    }
  }
};

request.send();
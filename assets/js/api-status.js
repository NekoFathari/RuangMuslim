setInterval(() => {
  second = new XMLHttpRequest();
  second.open('GET', 'https://timeapi.io/api/Time/current/zone?timeZone=Asia/Jakarta');
  second.onreadystatechange = function (){
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
    if (this.readyState === 4) {
      console.log('Status:', this.status);
      console.log('Headers:', this.getAllResponseHeaders());
      console.log('Body:', this.responseText);
      if (this.status === 200) {
        console.log('Status second: OK')
      };
    }
  };
}, 2*1000 );



second = new XMLHttpRequest();
second.open('GET', 'https://timeapi.io/api/Time/current/zone?timeZone=Asia/Jakarta');
second.onreadystatechange = function (){
  console.log('Status:', this.status);
  console.log('Headers:', this.getAllResponseHeaders());
  console.log('Body:', this.responseText);
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
    if (this.status === 200) {
      console.log('Status second: OK')
    }
  }
}
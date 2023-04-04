const urlParams = new URLSearchParams(window.location.search);
const dados = JSON.parse(urlParams.get("dados"));

if (/(android)/i.test(navigator.userAgent)) {
  window.location.href = dados.linkAndroid;
} else if (/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
  window.location.href = dados.linkIOS;
} else {
  console.log("Dispositivo não suportado.");
}

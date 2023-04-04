const btnGerar = document.querySelector("#btn-gerar");
const formLinks = document.querySelector("#form-links");
const qrcode = new QRCode(document.querySelector("#qrcode"));

btnGerar.addEventListener("click", function () {
  const linkAndroid = formLinks.link1.value;
  const linkIOS = formLinks.link2.value;

  const dados = {
    linkAndroid,
    linkIOS
  };

  qrcode.makeCode(
    window.location.href +
      "validacaoDispositivo.html?dados=" +
      JSON.stringify(dados)
  );
});

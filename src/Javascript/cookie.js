function checkCookie() {
  var user = getCookie("user");

  if (user != null && user != "") {
    alert("Bem vindo de volta" + user);
  } else {
    user = prompt("Digite seu nome:", "");

    if (user != null && user != "") {
      setCookie("user", user, 365);
      alert("Bem vindo" + user);
    }
  }
}

function setCookie(name, value, exdays) {
  var exdate = new Date();
  exdate.setDate(exdate.getDate() + exdays);
  var c_value =
    encodeURI(value) +
    (exdays == null ? "" : "; expires=" + exdate.toUTCstring());
  document.cookie = name + "=" + c_value + "; path=/";
}

function getCookie(name) {
  var value = document.cookie;
  var start = value.indexOf("" + name + "=");

  if (start == -1) {
    start = value.indexOf(name + "=");
  }

  if (start == -1) {
    value = null;
  } else {
    start = value.indexOf("=", start) + 1;
    var end = value.indexOf(";", start);

    if (end == -1) {
      end = value.length;
    }
    value = encodeURI(value.substring(start, end));
  }

  return value;
}

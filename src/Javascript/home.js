console.log("teste");

function pureFadeIn(e, o) {
  var i = document.getElementById(e);
  (i.style.opacity = 0),
    (i.style.display = o || "block"),
    (function e() {
      var o = parseFloat(i.style.opacity);
      (o += 0.02) > 1 || ((i.style.opacity = o), requestAnimationFrame(e));
    })();
}

function pureFadeIn(e, o) {
  var i = document.getElementById(e);
  (i.style.opacity = 0),
    (i.style.display = o || "block"),
    (function e() {
      var o = parseFloat(i.style.opacity);
      (o += 0.02) > 1 || ((i.style.opacity = o), requestAnimationFrame(e));
    })();
}

function pureFadeOut(e) {
  var o = document.getElementById(e);
  (o.style.opacity = 1),
    (function e() {
      (o.style.opacity -= 0.02) < 0
        ? (o.style.display = "none")
        : requestAnimationFrame(e);
    })();
}

function cookieConsent() {
  (document.body.innerHTML +=
    '<div class="cookieConsentContainer" id="cookieConsentContainer"><div class="cookieTitle"><a>' +
    purecookieTitle +
    '</a></div><div class="cookieDesc"><p>' +
    purecookieDesc +
    " " +
    purecookieLink +
    '</p></div><div class="cookieButton"><a onClick="purecookieDismiss();">' +
    purecookieButton +
    '</p></div><div class="cookieButtonCancel"><a onClick="purecookieCancel();">' +
    purecookieButtonCancel +
    "</a></div></div>"),
    pureFadeIn("cookieConsentContainer");
}

function purecookieDismiss() {
  Cookies.set("aceitaCookie", "true", { sameSite: "strict" });
  pureFadeOut("cookieConsentContainer");
}

function purecookieCancel() {
  pureFadeOut("cookieConsentContainer");
}

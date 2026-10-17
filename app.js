/* StipendioNetto — shared JS: cookie consent + mobile nav */
(function(){
  // Mobile nav toggle
  var t = document.getElementById('navToggle'), n = document.getElementById('mainNav');
  if (t && n) t.addEventListener('click', function(){ n.classList.toggle('open'); });

  // Cookie consent
  var KEY = 'sn_cookie_consent';
  function show(){ var b = document.getElementById('cookieBanner'); if (b) b.classList.add('show'); }
  try {
    if (!localStorage.getItem(KEY)) show();
  } catch(e){ show(); }
  function set(v){
    try { localStorage.setItem(KEY, v); } catch(e){}
    var b = document.getElementById('cookieBanner'); if (b) b.classList.remove('show');
  }
  var a = document.getElementById('cookieAccept'), d = document.getElementById('cookieDecline');
  if (a) a.addEventListener('click', function(){ set('accepted'); });
  if (d) d.addEventListener('click', function(){ set('declined'); });
})();

// Until Juicefall is on the App Store, the pages say "Coming November 2026". Once Apple's lookup finds the app,
// every [data-app-store] slot becomes the real link: Apple's badge where it says "badge", a text link elsewhere.
// A page that cannot reach Apple keeps the coming-soon text.
(function () {
  var slots = document.querySelectorAll("[data-app-store]");
  if (!slots.length) return;
  var url = "https://apps.apple.com/app/id6823235878";
  var badge = "https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/";

  window.juicefallLookup = function (answer) {
    if (!answer || !answer.resultCount) return;
    var release = answer.results[0].releaseDate;
    var preOrder = release && new Date(release) > new Date();
    slots.forEach(function (slot) {
      var link = document.createElement("a");
      link.href = url;
      if (slot.getAttribute("data-app-store") === "badge" && !preOrder) {
        link.className = "badge";
        link.innerHTML =
          '<img class="on-light" src="' + badge + 'black/en-us" alt="Download on the App Store" width="162" height="54">' +
          '<img class="on-dark" src="' + badge + 'white/en-us" alt="Download on the App Store" width="162" height="54">';
      } else if (slot.getAttribute("data-app-store") === "badge") {
        link.className = "soon";
        link.innerHTML = "<small>Pre-order on the</small><strong>App Store</strong>";
      } else {
        link.textContent = preOrder ? "Pre-order Juicefall on the App Store" : "Juicefall on the App Store";
      }
      slot.replaceWith(link);
    });
  };

  var lookup = document.createElement("script");
  lookup.src = "https://itunes.apple.com/lookup?id=6823235878&callback=juicefallLookup";
  document.head.appendChild(lookup);
})();

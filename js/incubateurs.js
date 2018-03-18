function loadMap(mapId, address) {
    var request = new XMLHttpRequest();
    request.open('GET', "https://api-adresse.data.gouv.fr/search/?q="+address, true);
    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            var result = JSON.parse(request.responseText);
            var map = L.map(mapId).setView(result.features[0].geometry.coordinates.reverse(), 16);
            L.tileLayer('https://tile.jawg.io/sunny/{z}/{x}/{y}.png?api-key=community', {
                attribution: 'Carte &copy; <a href="http://www.jawg.io/">jawgmap</a> / <a href="https://osm.org/copyright">OpenStreetMap</a>, Adresses BAN sous licence ODbL',
                maxZoom: 18
            }).addTo(map);
      }
    };
    request.onerror = function() {};
    request.send();
}

$(function() {
    $('div.map').each(function() {
        loadMap(this.id, $.attr(this,'data-address'));
    });
});

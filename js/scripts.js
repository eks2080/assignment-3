mapboxgl.accessToken = 'pk.eyJ1IjoiZWtzMjA4MCIsImEiOiJjbHVsdWNmbTExNGg0MmtsZHVlOHN2Zzd5In0.wEYw-sKV39S4NkqO8CDQBw';

var mapOptions = {
    container: 'map-container', // container ID
    center: [-73.984603, 40.703371], // starting position [lng, lat]
    zoom: 10, // starting zoom,
}

// instantiate the map
const map = new mapboxgl.Map(mapOptions);


// create a popup to attach to the marker
const popup = new mapboxgl.Popup({
    offset: 24,
    anchor: 'bottom'
}).setText(
    `Emily goes here for ${bookstoredata.specialize}`
);

// create a marker, set the coordinates, add the popup, add it to the map
new mapboxgl.Marker({
    scale: 0.65,
    color: ffa500,
})
    .setLngLat([bookstoredata.longitude, bookstoredata.latitude])
    .setPopup(popup)
    .addTo(map);

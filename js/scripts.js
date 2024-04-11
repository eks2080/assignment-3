//Setting up Mapbox

mapboxgl.accessToken = 'pk.eyJ1IjoiZWtzMjA4MCIsImEiOiJjbHVsdWNmbTExNGg0MmtsZHVlOHN2Zzd5In0.wEYw-sKV39S4NkqO8CDQBw';

var mapOptions = {
    container: 'map-container', // container ID
    style: 'mapbox://styles/mapbox/light-v11', // style URL
    center: [-74.00011310930516, 40.72415607434748], // starting position [lng, lat]
    zoom: 11, // starting zoom,
}

// instantiate the map
const map = new mapboxgl.Map(mapOptions);

// add a navitation control
const nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-right');

// loop over the bookstoredata script to make a marker for each record
bookstoredata.forEach(function (bookstoreRecord) {

    var color

    // use if statements to assign colors based on neighborhood

    if (bookstoreRecord.Location === 'Cobble Hill') {
        color = '#9932CC'
    }
    if (bookstoreRecord.Location === 'Lower East Side') {
        color = '#556B2F'
    }
    if (bookstoreRecord.Location === 'Chinatown') {
        color = '#483D8B'
    }
    if (bookstoreRecord.Location === 'Seaport') {
        color = '#E9967A'
    }
    if (bookstoreRecord.Location === 'Upper West Side') {
        color = '#B8860B'
    }
    if (bookstoreRecord.Location === 'Downtown Brooklyn') {
        color = '#4169E1'
    }

    // create a popup to attach to the marker

    const popup = new mapboxgl.Popup({
        offset: 24,
        anchor: 'bottom'
    }).setHTML(
        `<strong>${bookstoreRecord.Name}</strong> is located in <strong>${bookstoreRecord.Location}</strong>. Emily goes here for <strong>${bookstoreRecord.specialize}</strong>.`
    );

    // create a marker, set the coordinates, add the popup, add it to the map
    new mapboxgl.Marker({
        scale: 0.75,
        color: color,
    })
        .setLngLat([bookstoreRecord.Longitude, bookstoreRecord.Latitude])
        .setPopup(popup)
        .addTo(map);
})
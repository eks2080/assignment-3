//Setting up Mapbox

mapboxgl.accessToken = 'pk.eyJ1IjoiZWtzMjA4MCIsImEiOiJjbHVsdWNmbTExNGg0MmtsZHVlOHN2Zzd5In0.wEYw-sKV39S4NkqO8CDQBw';

var mapOptions = {
    container: 'map-container', // container ID
    center: [-73.984603, 40.703371], // starting position [lng, lat]
    zoom: 10, // starting zoom,
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
        color = '#d67ea6'
    }
    if (bookstoreRecord.Location === 'Lower East Side') {
        color = '#1f8f39'
    }
    if (bookstoreRecord.Location === 'Chinatown') {
        color = '#8f5b1f'
    }
    if (bookstoreRecord.Location === 'Seaport') {
        color = '#8A2BE2'
    }
    if (bookstoreRecord.Location === 'Upper West Side') {
        color = '#6495ED'
    }
    if (bookstoreRecord.Location === 'Downtown Brooklyn') {
        color = '#00008B'
    }

    // create a popup to attach to the marker

    const popup = new mapboxgl.Popup({
        offset: 24,
        anchor: 'bottom'
    }).setText(
        `${bookstoreRecord.Name} is located in ${bookstoreRecord.Location}. Emily goes here for ${bookstoreRecord.specialize}.`
    );
    // const popup = new mapboxgl.Popup({
    //     offset: 24,
    //     anchor: 'bottom'
    // }).setText(
    //     `${bookstoreRecord.name} is located in: ${bookstoreRecord.location} a`
    //         `Emily goes here for ${bookstoreRecord.specialize}`
    // );

    // create a marker, set the coordinates, add the popup, add it to the map
    new mapboxgl.Marker({
        scale: 0.65,
        color: color,
    })
        .setLngLat([bookstoreRecord.Longitude, bookstoreRecord.Latitude])
        .setPopup(popup)
        .addTo(map);
})
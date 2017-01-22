/* global mapboxgl */
/* global fetch */


// load maputnik style and census data

Promise.all([
    fetch('maputnik_style.json'),
    fetch('https://gis.dola.colorado.gov/capi/demog?limit=99999&db=acs1115&table=b25077,b19013&sumlev=50')
    ]).then(function (response) {
    return Promise.all(response.map(d => d.json())).then(data => {
        createMap(data);
    });
}).catch(function (err) {
    console.log(err);
});


function createMap(data) {

    let style = data[0];
    let census_data = data[1];

    var stops = [];

    census_data.data.forEach(function (row) {

        let color = "#edf8fb";

        if (row.b19013001 > 26527) {
            color = "#ccece6";
        }
        if (row.b19013001 > 37201) {
            color = "#99d8c9";
        }
        if (row.b19013001 > 44517) {
            color = "#66c2a4";
        }
        if (row.b19013001 > 52137) {
            color = "#41ae76";
        }
        if (row.b19013001 > 62302) {
            color = "#238b45";
        }
        if (row.b19013001 > 77930) {
            color = "#005824";
        }

        stops.push([row.geonum, color]);
    });


    let median_household_income_style = {
        "property": "geonum",
        "type": "categorical",
        "stops": stops
    };

    style.layers[0].paint['fill-color'] = median_household_income_style;

    var map = new mapboxgl.Map({
        container: 'map',
        style: style,
        zoom: 3,
        center: [-104, 39]
    });

    map.addControl(new mapboxgl.NavigationControl());


}

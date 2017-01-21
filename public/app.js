mapboxgl.accessToken = 'pk.eyJ1IjoibWFwdXRvcGlhIiwiYSI6IjZ6REI2MWsifQ.Apr0jB7q-uSUXWNvJlXGTg';

var simple = {
    "version": 8,
    "name": "Klokantech Basic",
    "metadata": {
        "mapbox:autocomposite": false,
        "mapbox:type": "template",
        "maputnik:renderer": "mbgljs",
        "openmaptiles:version": "3.x",
        "openmaptiles:mapbox:owner": "openmaptiles",
        "openmaptiles:mapbox:source:url": "mapbox://openmaptiles.4qljc88t"
    },
    "center": [
    8.54806714892635,
    47.37180823552663
  ],
    "zoom": 12.241790506353492,
    "bearing": 0,
    "pitch": 0,
    "sources": {
        "county": {
            "type": "vector",
            "tiles": [
        "http://nodejs-server-royhobbstn.c9users.io/county_carto_2015/{z}/{x}/{y}.pbf"
      ],
            "minZoom": 0,
            "maxZoom": 14,
            "maxzoom": 13
        }
    },
    "glyphs": "https://free.tilehosting.com/fonts/{fontstack}/{range}.pbf?key={key}",
    "layers": [
        {
            "id": "county",
            "type": "fill",
            "source": "county",
            "source-layer": "county",
            "minzoom": 0,
            "maxzoom": 13,
            "paint": {
                "fill-opacity": 0.5,
                "fill-color": "rgba(158, 49, 49, 1)",
                "fill-antialias": true
            }
    }
  ],
    "id": "ciwf4zbsv007y2pmt2rspc1dc"
};

var map = new mapboxgl.Map({
    container: 'map',
    style: simple,
    zoom: 3,
    center: [-104, 39]
});

map.addControl(new mapboxgl.NavigationControl());

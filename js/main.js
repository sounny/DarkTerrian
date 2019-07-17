//function to instantiate the Leaflet map
function createMap(){

    var mbAttr = 'Map created by:Sounny Slitine';
    
    var mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZGZpZWxkMjMiLCJhIjoiY2p4NThuaGYxMDB3bDQ4cXd0eWJiOGJoeSJ9.T94xCeDwJ268CmzfMPXdmw';
    
    var mbUrl2 = 'https://api.mapbox.com/styles/v1/sounny/cjy6np5ld1sjg1cme97n3yosk/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic291bm55IiwiYSI6ImNqcGRpaGVhbzAwaWsza24wbnhtMnR6NnQifQ.J3MAaLF0GbWo8hWP2MKtsw';
    
    //variables for the different basemaps
    var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox.light', attribution: mbAttr});
    var dark  = L.tileLayer(mbUrl, {id: 'mapbox.dark',   attribution: mbAttr});
    var outdoors = L.tileLayer(mbUrl, {id: 'mapbox.outdoors',   attribution: mbAttr});
    var darkTerrain = L.tileLayer(mbUrl2, {id: 'sounny.cjy6np5ld1sjg1cme97n3yosk',   attribution: mbAttr});

    
    mapbox://styles/sounny/cjy6np5ld1sjg1cme97n3yosk
    
    //create the map*/
    var map = L.map('map', {
        center: [31.00, -5],//Coordinated to center the map for Midwestern States
        zoom: 6,
        layers:darkTerrain
    });
    
    var baseLayers = {
		"Outdoors": outdoors,
        "Grayscale": grayscale,
		"Darkscale": dark,
        "Dark Terrain": darkTerrain
    };
    
    L.control.layers(baseLayers).addTo(map);
};

$(document).ready(createMap);
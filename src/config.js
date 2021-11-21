const cfg = {
    'tilesUrlPattern': "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    'defaultCenterPos': [50.1148750, 8.6862347],
    'defaultZoom': 15,
    'stopsDataZoomStep': 2,
    'basicURL': "",
    'stopsResourcePath': "Stops/Get"
};

export default (key) => {
    return cfg[key];
}
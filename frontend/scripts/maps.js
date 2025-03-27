window.onload = function () {
  mapboxgl.accessToken =
    "pk.eyJ1IjoiYmV0b2pyMDQiLCJhIjoiY2x3eDM0NHdpMTFnODJpcHpvbG9qeW5tdyJ9.XiysRrVn2IIOVN4UWjxd4A";

  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [-118.2437, 34.0522],
    zoom: 14
  });

  new mapboxgl.Marker().setLngLat([-118.2437, 34.0522]).addTo(map);
};

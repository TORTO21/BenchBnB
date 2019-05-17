
export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
    this.createMarkerFromBench = this.createMarkerFromBench.bind(this)
  }
  
  updateMarkers(benches) {
    // console.log('time to update');
    benches.forEach(bench => {
      if (!Object.keys(this.markers).includes(bench.id)) {
        this.markers[bench.id] = this.createMarkerFromBench(bench)
      }
    })
  }

  createMarkerFromBench(bench) {
    const { id, lat, lng, description } = bench
    return new google.maps.Marker({
      position: { lat, lng },
      map: this.map,
      title: description,
    })
  }
}
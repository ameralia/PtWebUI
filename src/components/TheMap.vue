<template>
<div style="height: 80vh; width: 80vw;">
<l-map
      ref="map"
      :zoom="zoom"
      :center="defaultCenterPos"
      @update:bounds="updateBounds"
      @update:zoom="updateZoom"
      @ready="loadMap"
    >
      <l-tile-layer :url="url" />
      <the-stops :stops="stops" />
			<locate-me @click="locate"/>
    </l-map>
</div>
</template>
<script>
import {
  LMap,
  LTileLayer,
} from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";
import TheStops from "./TheStops.vue";
import {lngToXTile} from "../GisMath";
import {latToYTile} from "../GisMath";
import {getStopsData} from "../provider";
import config from "../config";
import LocateMe from "./LocateMe.vue"

export default {
  components: {
    LMap,
    LTileLayer,
		LocateMe,
    TheStops,
  },
  data() {
    return {
        zoom: config("defaultZoom"),
        stops: [],
        url: config("tilesUrlPattern"),
        defaultCenterPos: config("defaultCenterPos")
    };
  },
  methods: {
    async updateBounds(bBox) {
      const zoomStep = config('stopsDataZoomStep');
      const northEast = bBox._northEast,
        southWest = bBox._southWest,
        evenZoom = Math.floor(this.zoom / zoomStep) * zoomStep;
      const req = {
        z: evenZoom,
        x0: lngToXTile(southWest.lng, evenZoom),
        x1: lngToXTile(northEast.lng, evenZoom),
        y0: latToYTile(northEast.lat, evenZoom),
        y1: latToYTile(southWest.lat, evenZoom),
      };
      this.stops = await getStopsData(req);
    },
    updateZoom(val) {
      this.zoom = val;
    },
    async loadMap() {
      const map = this.$refs.map.leafletObject;
      await this.updateBounds(map.getBounds());
    },
		locate() {
			this.$refs.map.leafletObject.locate({setView: true, maxZoom: 17});
		}
  },
};
</script>

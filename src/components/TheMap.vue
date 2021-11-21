<template>
<div style="height: 80vh; width: 80vw;">
<l-map
      :zoom="zoom"
      :center="defaultCenterPos"
      :bounds="bounds"
      @update:bounds="updateBounds"
      @update:zoom="updateZoom"
    >
      <l-tile-layer :url="url">
      </l-tile-layer>
      <l-control-layers />
      <the-stops :stops="stops" />
    </l-map>
</div>
</template>
<script>
import {
  LMap,
  LTileLayer,
  LControlLayers,
} from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";
import TheStops from "./TheStops.vue";
import {lngToXTile} from "../GisMath";
import {latToYTile} from "../GisMath";
import {getStopsData} from "../provider";
import config from "../config";

export default {
  components: {
    LMap,
    LTileLayer,
    LControlLayers,
    TheStops,
  },
  data() {
    return {
        zoom: config("defaultZoom"),
        bounds: {},
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
  },

};
</script>

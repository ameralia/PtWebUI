<template>
<div style="height: 80vh; width: 80vw;">
<l-map
      v-model="zoom"
      :zoom="zoom"
      :center="[50.1148750, 8.6862347]"
      @move="log('move')"
    >
      <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png">
      </l-tile-layer>
      <l-control-layers />
      <stop-point 
        v-for="point in stopPoints" 
        :key="point.id" 
        :lat = "point.lat" 
        :long = "point.long"
        :name = "point.name"
        ></stop-point>
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
import StopPoint from "./StopPoint.vue";

export default {
  components: {
    LMap,
    LTileLayer,
    LControlLayers,
    StopPoint
  },
  data() {
    return {
        zoom: 13,
        stopPoints: [
            {id: 1, lat: 50.1148750, long: 8.6862347, name: 'Huegelstr'},
            {id: 2, lat: 50.13, long: 8.681, name: 'Galluswarte'},
            {id: 3, lat: 50.109, long: 8.592, name: 'Hauptwache'},
        ]
    };
  },
  methods: {
    changeIcon() {
      this.iconWidth += 2;
      if (this.iconWidth > this.iconHeight) {
        this.iconWidth = Math.floor(this.iconHeight / 2);
      }
    },
  },
};
</script>
